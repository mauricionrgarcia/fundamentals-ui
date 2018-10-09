import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.css']
})
export class CookieComponent implements OnInit {

  constructor(
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cookieService.set('cookie-info', 'teste', null, null, 'localhost');
    // this.cookieService.set('cookie-info2', 'teste', null, null, this.router.);
  }

  get cookie(): string {
    return this.cookieService.get('cookie-info');
  }

}
