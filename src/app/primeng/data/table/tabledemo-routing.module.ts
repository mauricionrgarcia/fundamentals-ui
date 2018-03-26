import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TableSelectionDemoComponent } from './selection/table-selection-demo/table-selection-demo.component';

import { TableComponent } from './table.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: TableSelectionDemoComponent },
      { path: 'selection', component: TableSelectionDemoComponent },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class TableDemoRoutingModule {}
