
import {AVIntelData} from "./alphaIntelData.types";
import {AVCommoditiesData} from "./commoditiesData.types";
import {AVCryptoData} from "./cryptoData.types";
import {AVFundamentalsData} from "./fundamentalsData.types";
import {AVEconIndData} from "./econIndData.types";
import {AVForexData} from "./forexData.types";
import {AVStocksData} from "./stockData.types";

export type AVData = CurrencyExchangeData | AVIntelData | AVCommoditiesData | AVCryptoData | AVFundamentalsData | AVEconIndData | AVForexData | AVStocksData

export interface CurrencyExchangeData { realtimeCurrencyExchangeRate: RealtimeCurrencyExchangeRateData; }

export interface RealtimeCurrencyExchangeRateData {
  the1FromCurrencyCode:  string;
  the2FromCurrencyName:  string;
  the3ToCurrencyCode:    string;
  the4ToCurrencyName:    string;
  the5ExchangeRate:      number;
  the6LastRefreshed:     Date;
  the7TimeZone:          string;
  the8BidPrice:          number;
  the9AskPrice:          number;
}