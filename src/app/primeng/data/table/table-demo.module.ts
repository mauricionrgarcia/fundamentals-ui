import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { DataTableModule } from 'primeng/datatable';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';


import { TableDemoRoutingModule } from './tabledemo-routing.module';
import { TableComponent } from './table.component';
import { TableSelectionDemoComponent } from './selection/table-selection-demo/table-selection-demo.component';
import { PersonService } from './service/person.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DataTableModule,
    ButtonModule,
    MessagesModule,
    MessageModule,
    TableDemoRoutingModule,
  ],
  declarations: [
    TableComponent,
    TableSelectionDemoComponent
  ],
  providers: [
    PersonService
  ]
})
export class TableSampleModule { }
