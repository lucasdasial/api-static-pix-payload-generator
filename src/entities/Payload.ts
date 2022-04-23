export class Payload {
  constructor(
    private _pixKey: string,
    private _description: string,
    private _merchantName: string,
    private _merchantCity: string,
    private _txid: string,
    private _amount: number,
    public ID_PAYLOAD_FORMAT_INDICATOR = "00",
    public ID_MERCHANT_ACCOUNT_INFORMATION = "26",
    public ID_MERCHANT_ACCOUNT_INFORMATION_GUI = "00",
    public ID_MERCHANT_ACCOUNT_INFORMATION_KEY = "01",
    public ID_MERCHANT_ACCOUNT_INFORMATION_DESCRIPTION = "02",
    public ID_MERCHANT_CATEGORY_CODE = "52",
    public ID_TRANSACTION_CURRENCY = "53",
    public ID_TRANSACTION_AMOUNT = "54",
    public ID_COUNTRY_CODE = "58",
    public ID_MERCHANT_NAME = "59",
    public ID_MERCHANT_CITY = "60",
    public ID_ADDITIONAL_DATA_FIELD_TEMPLATE = "62",
    public ID_ADDITIONAL_DATA_FIELD_TEMPLATE_TXID = "05",
    public ID_CRC16 = "63"
  ) {}

  public get pixKey(): string {
    return this._pixKey;
  }

  public get description(): string {
    return this._description;
  }

  public get merchantName(): string {
    return this._merchantName;
  }

  public get merchantCity(): string {
    return this._merchantCity;
  }

  public get texid(): string {
    return this._txid;
  }

  public get amount(): number {
    return this._amount;
  }
}
