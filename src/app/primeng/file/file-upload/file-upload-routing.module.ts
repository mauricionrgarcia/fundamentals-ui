import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FileUploadDemoComponent } from './file-upload-demo/file-upload-demo.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: FileUploadDemoComponent },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class FileUploadDemoRoutingModule {}
