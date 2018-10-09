import { FileStorage } from './../file.domain';
import { Component, OnInit } from '@angular/core';
import { HttpEventType } from '@angular/common/http';

import { FileUploadService } from './file-upload.service';

@Component({
  selector: 'app-file-upload-demo',
  templateUrl: './file-upload-demo.component.html',
  styleUrls: ['./file-upload-demo.component.css']
})
export class FileUploadDemoComponent implements OnInit {

  uploadedFiles: File[] = [];
  uploadFile: File = null;

  storage: FileStorage[] = [];

  constructor(
    private fileUploadService: FileUploadService
  ) { }

  ngOnInit() {
    this.fileUploadService.findAll()
    .subscribe( res => {
      this.storage = res;
    });
  }

  get storageURL() {
    return this.fileUploadService.storageURL;
  }


  onUpload(event) {
    for ( const file of event.files ) {
          this.uploadedFiles.push(file);
          console.log(JSON.stringify(file));
    }
  }

  fileChange(event: any) {
    this.uploadFile = event.target.files[0];
  }

  upload() {
    this.fileUploadService.onFileUpload(this.uploadFile)
      .subscribe( event => {
        if (event.type === HttpEventType.UploadProgress) {
          console.log(`Upload progress: ${ Math.round(event.loaded / event.total * 100)} %`);
        } else if ( event.type === HttpEventType.Response) {
          this.storage.push(...event.body);
        }
      });
  }
}
