import { CookieService } from 'ngx-cookie-service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieComponent } from './cookie/cookie.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CookieComponent],
  exports: [CookieComponent],
//  providers: [CookieService]
})
export class TestsModule { }
