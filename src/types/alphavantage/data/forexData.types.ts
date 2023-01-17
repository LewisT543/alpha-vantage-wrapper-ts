import {CurrencyExchangeData} from "./avData.types";
import {AVTimeSeriesIntervalEnum} from "../../enums";

export type AVForexIntradayData = ForexIntradayData1Min | ForexIntradayData5Min | ForexIntradayData15Min | ForexIntradayData30Min | ForexIntradayData60Min
export type AVForexData = CurrencyExchangeData | AVForexIntradayData | ForexDailyData | ForexWeeklyData | ForexMonthlyData

interface WithForexIntradayMetaData { "Meta Data": ForexIntradayMetaData; }

export interface ForexIntradayData1Min extends WithForexIntradayMetaData { "Time Series FX (1min)": { [key: string]: ForexOHLCData }; }
export interface ForexIntradayData5Min extends WithForexIntradayMetaData { "Time Series FX (5min)": { [key: string]: ForexOHLCData }; }
export interface ForexIntradayData15Min extends WithForexIntradayMetaData { "Time Series FX (15min)": { [key: string]: ForexOHLCData }; }
export interface ForexIntradayData30Min extends WithForexIntradayMetaData { "Time Series FX (30min)": { [key: string]: ForexOHLCData }; }
export interface ForexIntradayData60Min extends WithForexIntradayMetaData { "Time Series FX (60min)": { [key: string]: ForexOHLCData }; }


export interface ForexIntradayMetaData {
  "1. Information":    string;
  "2. From Symbol":    string;
  "3. To Symbol":      string;
  "4. Last Refreshed": Date;
  "5. Interval":       AVTimeSeriesIntervalEnum;
  "6. Output Size":    string;
  "7. Time Zone":      string;
}

export interface ForexOHLCData {
  "1. open":  number;
  "2. high":  number;
  "3. low":   number;
  "4. close": number;
}

export interface ForexDailyData {
  "Meta Data":              ForexDailyMetaData;
  "Time Series FX (Daily)": { [key: string]: ForexOHLCData };
}

export interface ForexDailyMetaData {
  "1. Information":    string;
  "2. From Symbol":    string;
  "3. To Symbol":      string;
  "4. Output Size":    string;
  "5. Last Refreshed": Date;
  "6. Time Zone":      string;
}

export interface ForexWeeklyData {
  "Meta Data":               ForexWeeklyAndMonthlyMetaData;
  "Time Series FX (Weekly)": { [key: string]: ForexOHLCData };
}

export interface ForexMonthlyData {
  "Meta Data":                ForexWeeklyAndMonthlyMetaData;
  "Time Series FX (Monthly)": { [key: string]: ForexOHLCData };
}

export interface ForexWeeklyAndMonthlyMetaData {
  "1. Information":    string;
  "2. From Symbol":    string;
  "3. To Symbol":      string;
  "4. Last Refreshed": Date;
  "5. Time Zone":      string;
}

