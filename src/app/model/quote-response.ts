export class QuoteResponse {

  constructor(
    public total: number,
    // tslint:disable-next-line:variable-name
    public currency_id: string,
    // tslint:disable-next-line:variable-name
    public quotation_id: string
  ) {  }

}
