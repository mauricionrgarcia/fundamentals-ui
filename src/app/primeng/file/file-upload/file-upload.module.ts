import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FileUploadModule} from 'primeng/fileupload';

import { FileUploadDemoRoutingModule } from './file-upload-routing.module';
import { FileUploadDemoComponent } from './file-upload-demo/file-upload-demo.component';

import { FileUploadService } from './file-upload-demo/file-upload.service';

@NgModule({
  imports: [
    CommonModule,

    FileUploadModule,

    FileUploadDemoRoutingModule,
  ],
  declarations: [ FileUploadDemoComponent ],
  providers: [
    FileUploadService
  ]
})
export class FileUploadDemoModule { }
