export class QuoteRequest {

  constructor(
    public age: string,
    // tslint:disable-next-line:variable-name
    public currency_id: string,
    // tslint:disable-next-line:variable-name
    public start_date: string,
    // tslint:disable-next-line:variable-name
    public end_date: string
  ) {  }

}
