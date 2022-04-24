import { v4 } from "uuid";

export class Payload {
  constructor(
    private _pixKey: string,
    private _merchantName: string,
    private _merchantCity: string,
    private _amount: number
  ) {}
  private _txid = v4();
  private ID_PAYLOAD_FORMAT_INDICATOR = "00";
  private ID_MERCHANT_ACCOUNT_INFORMATION = "26";
  private ID_MERCHANT_ACCOUNT_INFORMATION_GUI = "00";
  private ID_MERCHANT_ACCOUNT_INFORMATION_KEY = "01";
  private ID_MERCHANT_ACCOUNT_INFORMATION_DESCRIPTION = "02";
  private ID_MERCHANT_CATEGORY_CODE = "52";
  private ID_TRANSACTION_CURRENCY = "53";
  private ID_TRANSACTION_AMOUNT = "54";
  private ID_COUNTRY_CODE = "58";
  private ID_MERCHANT_NAME = "59";
  private ID_MERCHANT_CITY = "60";
  private ID_ADDITIONAL_DATA_FIELD_TEMPLATE = "62";
  private ID_ADDITIONAL_DATA_FIELD_TEMPLATE_TXID = "05";
  private ID_CRC16 = "63";

  public get pixKey(): string {
    return this._pixKey;
  }

  public get merchantName(): string {
    return this._merchantName;
  }

  public get merchantCity(): string {
    return this._merchantCity;
  }

  // public get texid(): string {
  //   return this._txid;
  // }

  public get amount(): string {
    return this._amount.toFixed(2);
  }

  private getValue(id: string, value: any): string {
    const valString = String(value);
    const size = valString.length;
    // return id + size + value;

    return id + String(size).padStart(2, "0") + value;
  }

  public getMechantAccountInfo(): string {
    const gui = this.getValue(
      this.ID_MERCHANT_ACCOUNT_INFORMATION_GUI,
      "br.gov.bcb.pix"
    );
    const key = this.getValue(
      this.ID_MERCHANT_ACCOUNT_INFORMATION_KEY,
      this.pixKey
    );

    return this.getValue(this.ID_MERCHANT_ACCOUNT_INFORMATION, gui + key);
  }

  public getAdditionalDataFieldTemplate() {
    const txid = this.getValue(
      this.ID_ADDITIONAL_DATA_FIELD_TEMPLATE_TXID,
      this._txid
    );
    return this.getValue(this.ID_ADDITIONAL_DATA_FIELD_TEMPLATE, txid);
  }

  public getPayload() {
    const payload =
      this.getValue(this.ID_PAYLOAD_FORMAT_INDICATOR, "01") +
      this.getMechantAccountInfo() +
      this.getValue(this.ID_MERCHANT_CATEGORY_CODE, "0000") +
      this.getValue(this.ID_TRANSACTION_CURRENCY, "986") +
      this.getValue(this.ID_TRANSACTION_AMOUNT, this._amount) +
      this.getValue(this.ID_COUNTRY_CODE, "BR") +
      this.getValue(this.ID_MERCHANT_NAME, this._merchantName) +
      this.getValue(this.ID_MERCHANT_CITY, this._merchantCity) +
      this.getAdditionalDataFieldTemplate();

    return payload + this.getCRC16(payload);
  }

  private getCRC16(payload: string) {
    function ord(str: any) {
      return str.charCodeAt(0);
    }
    function dechex(number: any) {
      if (number < 0) {
        number = 0xffffffff + number + 1;
      }
      return parseInt(number, 10).toString(16);
    }

    //ADICIONA DADOS GERAIS NO PAYLOAD
    payload = payload + this.ID_CRC16 + "04";

    //DADOS DEFINIDOS PELO BACEN
    let polinomio = 0x1021;
    let resultado = 0xffff;
    let length;

    //CHECKSUM
    if ((length = payload.length) > 0) {
      for (let offset = 0; offset < length; offset++) {
        resultado ^= ord(payload[offset]) << 8;
        for (let bitwise = 0; bitwise < 8; bitwise++) {
          if ((resultado <<= 1) & 0x10000) resultado ^= polinomio;
          resultado &= 0xffff;
        }
      }
    }

    //RETORNA CÓDIGO CRC16 DE 4 CARACTERES
    return this.ID_CRC16 + "04" + dechex(resultado).toUpperCase();
  }
}
