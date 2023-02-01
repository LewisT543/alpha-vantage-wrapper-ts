import {CurrencyExchangeData} from "./avData.types";
import {AVTimeSeriesIntervalEnum} from "../../enums";

export type AVCryptoLongTermData = CryptoDailyData | CryptoWeeklyData | CryptoMonthlyData
export type AVCryptoIntradayData = CryptoIntradayData1Min | CryptoIntradayData5Min | CryptoIntradayData15Min | CryptoIntradayData30Min | CryptoIntradayData60Min
export type AVCryptoData = CurrencyExchangeData | AVCryptoIntradayData | CryptoDailyData | CryptoWeeklyData | CryptoMonthlyData

interface WithCryptoIntradayMetaData { metaData: CryptoIntradayMetaData; }
export type CryptoOHLCVDataObjects = { [key: string]: CryptoOHLCVData };
export interface CryptoIntradayData1Min extends WithCryptoIntradayMetaData { timeSeriesCrypto1min: CryptoOHLCVDataObjects; }
export interface CryptoIntradayData5Min extends WithCryptoIntradayMetaData { timeSeriesCrypto5min: CryptoOHLCVDataObjects; }
export interface CryptoIntradayData15Min extends WithCryptoIntradayMetaData { timeSeriesCrypto15min: CryptoOHLCVDataObjects; }
export interface CryptoIntradayData30Min extends WithCryptoIntradayMetaData { timeSeriesCrypto30min: CryptoOHLCVDataObjects; }
export interface CryptoIntradayData60Min extends WithCryptoIntradayMetaData { timeSeriesCrypto60min: CryptoOHLCVDataObjects; }


export interface CryptoIntradayMetaData {
  the1Information:         string;
  the2DigitalCurrencyCode: string;
  the3DigitalCurrencyName: string;
  the4MarketCode:          string;
  the5MarketName:          string;
  the6LastRefreshed:       Date;
  the7Interval:            AVTimeSeriesIntervalEnum;
  the8OutputSize:          string;
  the9TimeZone:            string;
}

export interface CryptoOHLCVData {
  the1Open:   number;
  the2High:   number;
  the3Low:    number;
  the4Close:  number;
  the5Volume: number;
}

interface WithLongtermMetaData { metaData: CryptoLongtermMetaData; }
export type CryptoDoubleOHLCVDataObjects = { [key: string]: CryptoDoubleOHLCVData };
export interface CryptoDailyData extends WithLongtermMetaData { timeSeriesDigitalCurrencyDaily: CryptoDoubleOHLCVDataObjects; }
export interface CryptoWeeklyData extends WithLongtermMetaData  { timeSeriesDigitalCurrencyWeekly: CryptoDoubleOHLCVDataObjects; }
export interface CryptoMonthlyData extends WithLongtermMetaData { timeSeriesDigitalCurrencyMonthly: CryptoDoubleOHLCVDataObjects; }

export interface CryptoLongtermMetaData {
  the1Information:         string;
  the2DigitalCurrencyCode: string;
  the3DigitalCurrencyName: string;
  the4MarketCode:          string;
  the5MarketName:          string;
  the6LastRefreshed:       Date;
  the7TimeZone:            string;
}

export interface CryptoDoubleOHLCVData {
  the1AOpenCNY:     number;
  the1BOpenUSD:     number;
  the2AHighCNY:     number;
  the2BHighUSD:     number;
  the3ALowCNY:      number;
  the3BLowUSD:      number;
  the4ACloseCNY:    number;
  the4BCloseUSD:    number;
  the5Volume:       number;
  the6MarketCapUSD: number;
}



