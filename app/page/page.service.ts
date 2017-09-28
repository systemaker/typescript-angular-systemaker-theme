import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { PageModel } from './page.model';



@Injectable()
export class PageService {
  constructor(private _http: HttpClient) { }

  get(): Observable<PageModel[]> {
    const url = 'assets/api/pages/mock.json';
    // const url = 'http://localhost/api/users/mock-user-1.json';
    // const params = new HttpParams().set('color', 'red');
    // const headers = new HttpHeaders().set('Authorization', 'my-auth-token');

    // return this._http.get(url, { headers: headers, params : params})
    //        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    return this._http.get(url)
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }
}