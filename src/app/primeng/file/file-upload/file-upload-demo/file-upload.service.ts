import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { HttpClient, HttpEvent } from '@angular/common/http';

import { FileStorage } from './../file.domain';

@Injectable()
export class FileUploadService {

  storageURL = 'http://localhost:8079/file';

  constructor (
    private httpClient: HttpClient
  ) {
  }

  findAll(): Observable<FileStorage[]> {
    return this.httpClient.get<FileStorage[]>(this.storageURL);
  }

  onFileUpload(file: File): Observable<HttpEvent<FileStorage[]>> {

    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.httpClient.post<FileStorage[]>(
      `${this.storageURL}/multiple`, formData, {
        reportProgress: true,
        observe: 'events'
      });
  }

}
