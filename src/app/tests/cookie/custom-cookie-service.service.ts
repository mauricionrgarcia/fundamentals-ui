import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class CustomCookieService extends CookieService {

  private domain = 'localhost';

  constructor ( document: any) {
    super(document);
  }

  /**
     * @param name    Cookie name
     * @param value   Cookie value
     * @param expires Number of days until the cookies expires or an actual `Date`
     * @param path    Cookie path
     * @param domain  Cookie domain
     * @param secure  Secure flag
     */
    set(name: string, value: string, expires?: number | Date, path?: string, domain = this.domain, secure?: boolean) {
      console.log(`Provider ok`);
      super.set(name, value, expires, path, domain, secure);
    }
}
