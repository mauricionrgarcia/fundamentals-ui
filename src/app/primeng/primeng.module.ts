import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadDemoModule } from './file/file-upload/file-upload.module';
import { TableSampleModule } from './data/table/table-demo.module';

import { TableComponent } from './data/table/table.component';

@NgModule({
  imports: [
    CommonModule,
    TableSampleModule,
    FileUploadDemoModule
  ],
  declarations: [],
  exports: []
})
export class PrimengModule { }
