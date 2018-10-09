import { CookieService } from 'ngx-cookie-service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './core/core.module';
import { AppRountingModule } from './app-routing-module';
import { PrimengModule } from './primeng/primeng.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TestsModule } from './tests/tests.module';
import { CustomCookieService } from './tests/cookie/custom-cookie-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CustomCookieService,

    AppRountingModule,
    CoreModule,
    PrimengModule,
    TestsModule
  ],
  providers: [
    {
      provide: CookieService,
      useFactory: (document: any) => {
        return new CustomCookieService(document);
      },
      deps: []
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
