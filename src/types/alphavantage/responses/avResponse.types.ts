import {AVIntelResponse} from "./alphaIntelResponse.types";
import {AVCommoditiesResponse} from "./commoditiesResponse.types";
import {AVCryptoResponse} from "./cryptoResponse.types";
import {AVFundamentalsResponse} from "./fundamentalsResponse.types";
import {AVEconIndResponse} from "./econIndResponse.types";
import {AVForexResponse} from "./forexResponse.types";
import {AVStocksResponse} from "./stockResponse.types";

export type AVResponse = AVIntelResponse | AVCommoditiesResponse | AVCryptoResponse | AVFundamentalsResponse | AVEconIndResponse | AVForexResponse | AVStocksResponse

// Crypto And Forex shared endpoint response
export interface CurrencyExchangeResponse {
  "Realtime Currency Exchange Rate": RealtimeCurrencyExchangeRateData;
}
export interface RealtimeCurrencyExchangeRateData {
  "1. From_Currency Code": string;
  "2. From_Currency Name": string;
  "3. To_Currency Code":   string;
  "4. To_Currency Name":   string;
  "5. Exchange Rate":      string;
  "6. Last Refreshed":     Date;
  "7. Time Zone":          string;
  "8. Bid Price":          string;
  "9. Ask Price":          string;
}