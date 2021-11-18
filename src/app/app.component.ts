import { Component } from '@angular/core';
import {QuoteRequest} from './model/quote-request';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as jp from 'jsonpath';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'battleface-challenge';
  url = 'http://localhost:8080/quotation';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'Bearer my-auth-token'
    })
  };
  total: any;
  currencyUesd: any;
  quotationid: any;
  message: any;
  constructor(private readonly httpClient: HttpClient) {}

  model = new QuoteRequest('28,35', 'EUR', '2021-10-01', '2021-10-30' );
  onSubmit(): void {
  this.httpClient.post(this.url, this.model, this.httpOptions).subscribe(r => {
    this.total = null;
    this.currencyUesd = null;
    this.quotationid = null;
    this.message = null;

    const val = jp.query(r, '$..total');
    if (val.length > 0)
    {
      this.total = (Math.ceil(+val[0])).toFixed(2);
    }
    const currencyID = jp.query(r, '$..currency_id');
    if (currencyID.length > 0) {
      this.currencyUesd = currencyID[0];
    }
    const quotation = jp.query(r, '$..quotation_id');
    if (quotation.length > 0) {
      this.quotationid = quotation;
    }
    const errMessage = jp.query(r, '$..message');
    if (errMessage.length > 0) {
      this.message = errMessage[0];
    }
  });
  }
}
