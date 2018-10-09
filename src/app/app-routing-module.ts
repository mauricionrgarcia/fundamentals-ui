import { CookieComponent } from './tests/cookie/cookie.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: CookieComponent },
  // { path: 'test', component: CookieComponent },
  { path: 'table', loadChildren: './primeng/data/table/table-demo.module#TableSampleModule' },
  { path: 'file', loadChildren: './primeng/file/file-upload/file-upload.module#FileUploadDemoModule' },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRountingModule { }
