import { TableSampleModule } from './data/table/table-demo.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from './data/table/table.component';

@NgModule({
  imports: [
    CommonModule,
    TableSampleModule
  ],
  declarations: [],
  exports: []
})
export class PrimengModule { }
