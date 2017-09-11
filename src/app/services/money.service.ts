import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response, Headers, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class MoneyService {

  constructor(private http: Http) {};

  getMoney(): Observable<any> {
  	let result = this.http.get('https://www.cbr-xml-daily.ru/daily_json.js');
  	return result;
  };


}
