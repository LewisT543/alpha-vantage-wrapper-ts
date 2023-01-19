
import {AVIntelData} from "./alphaIntelConverter.types";
import {AVCommoditiesData} from "./commoditiesConverter.types";
import {AVCryptoData} from "./cryptoConverter.types";
import {AVFundamentalsData} from "./fundamentalsConverter.types";
import {AVEconIndData} from "./econIndConverter.types";
import {AVForexData} from "./forexConverter.types";
import {AVStockData} from "./stockConverter.types";

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