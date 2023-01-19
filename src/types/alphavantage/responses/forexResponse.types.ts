import {CurrencyExchangeResponse} from "./avResponse.types";
import {AVTimeSeriesIntervalEnum} from "../../enums";

export type AVForexLongTermResponse = ForexDailyResponse | ForexWeeklyResponse | ForexMonthlyResponse
export type AVForexIntradayResponse = ForexIntradayResponse1Min | ForexIntradayResponse5Min | ForexIntradayResponse15Min | ForexIntradayResponse30Min | ForexIntradayResponse60Min
export type AVForexResponse = CurrencyExchangeResponse | AVForexIntradayResponse | AVForexLongTermResponse

interface WithForexIntradayMetaData { "Meta Data": ForexIntradayMetaDataResponse; }
export type ForexOHLCResponseObjects = { [key: string]: ForexOHLCResponse };
export interface ForexIntradayResponse1Min extends WithForexIntradayMetaData { "Time Series FX (1min)": ForexOHLCResponseObjects; }
export interface ForexIntradayResponse5Min extends WithForexIntradayMetaData { "Time Series FX (5min)": ForexOHLCResponseObjects; }
export interface ForexIntradayResponse15Min extends WithForexIntradayMetaData { "Time Series FX (15min)": ForexOHLCResponseObjects; }
export interface ForexIntradayResponse30Min extends WithForexIntradayMetaData { "Time Series FX (30min)": ForexOHLCResponseObjects; }
export interface ForexIntradayResponse60Min extends WithForexIntradayMetaData { "Time Series FX (60min)": ForexOHLCResponseObjects; }

export interface ForexIntradayMetaDataResponse {
  "1. Information":    string;
  "2. From Symbol":    string;
  "3. To Symbol":      string;
  "4. Last Refreshed": string;
  "5. Interval":       AVTimeSeriesIntervalEnum;
  "6. Output Size":    string;
  "7. Time Zone":      string;
}

export interface ForexOHLCResponse {
  "1. open":  string;
  "2. high":  string;
  "3. low":   string;
  "4. close": string;
}

export interface ForexDailyResponse {
  "Meta Data":              ForexDailyMetaDataResponse;
  "Time Series FX (Daily)": ForexOHLCResponseObjects;
}

export interface ForexDailyMetaDataResponse {
  "1. Information":    string;
  "2. From Symbol":    string;
  "3. To Symbol":      string;
  "4. Output Size":    string;
  "5. Last Refreshed": string;
  "6. Time Zone":      string;
}

export interface ForexWeeklyResponse {
  "Meta Data":               ForexWeeklyAndMonthlyMetaDataResponse;
  "Time Series FX (Weekly)": ForexOHLCResponseObjects;
}

export interface ForexMonthlyResponse {
  "Meta Data":                ForexWeeklyAndMonthlyMetaDataResponse;
  "Time Series FX (Monthly)": ForexOHLCResponseObjects;
}

export interface ForexWeeklyAndMonthlyMetaDataResponse {
  "1. Information":    string;
  "2. From Symbol":    string;
  "3. To Symbol":      string;
  "4. Last Refreshed": string;
  "5. Time Zone":      string;
}

