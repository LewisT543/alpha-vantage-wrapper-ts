
import {AVIntelData} from "./alphaIntelData.types";
import {AVCommoditiesData} from "./commoditiesData.types";
import {AVCryptoData} from "./cryptoData.types";
import {AVFundamentalsData} from "./fundamentalsData.types";
import {AVEconIndData} from "./econIndData.types";
import {AVForexData} from "./forexData.types";
import {AVStockData} from "./stockData.types";

export type AVData = AVIntelData | AVCommoditiesData | AVCryptoData | AVFundamentalsData | AVEconIndData | AVForexData | AVStockData

export interface CurrencyExchangeData { "Realtime Currency Exchange Rate": RealtimeCurrencyExchangeRateData; }

export interface RealtimeCurrencyExchangeRateData {
  "1. From_Currency Code": string;
  "2. From_Currency Name": string;
  "3. To_Currency Code":   string;
  "4. To_Currency Name":   string;
  "5. Exchange Rate":      number;
  "6. Last Refreshed":     Date;
  "7. Time Zone":          string;
  "8. Bid Price":          number;
  "9. Ask Price":          number;
}