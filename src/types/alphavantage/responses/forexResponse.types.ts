import {CurrencyExchangeResponse} from "./avResponse.types";

export type AVForexIntradayResponse = ForexIntradayResponse1Min | ForexIntradayResponse5Min | ForexIntradayResponse15Min | ForexIntradayResponse30Min | ForexIntradayResponse60Min
export type AVForexResponse = CurrencyExchangeResponse | AVForexIntradayResponse | ForexDailyResponse | ForexWeeklyResponse | ForexMonthlyResponse

interface WithForexIntradayMetaData { "Meta Data": ForexIntradayMetaData; }

export interface ForexIntradayResponse1Min extends WithForexIntradayMetaData { "Time Series FX (1min)": { [key: string]: ForexOHLCData }; }
export interface ForexIntradayResponse5Min extends WithForexIntradayMetaData { "Time Series FX (5min)": { [key: string]: ForexOHLCData }; }
export interface ForexIntradayResponse15Min extends WithForexIntradayMetaData { "Time Series FX (15min)": { [key: string]: ForexOHLCData }; }
export interface ForexIntradayResponse30Min extends WithForexIntradayMetaData { "Time Series FX (30min)": { [key: string]: ForexOHLCData }; }
export interface ForexIntradayResponse60Min extends WithForexIntradayMetaData { "Time Series FX (60min)": { [key: string]: ForexOHLCData }; }

export interface ForexIntradayMetaData {
  "1. Information":    string;
  "2. From Symbol":    string;
  "3. To Symbol":      string;
  "4. Last Refreshed": Date;
  "5. Interval":       string;
  "6. Output Size":    string;
  "7. Time Zone":      string;
}

export interface ForexOHLCData {
  "1. open":  string;
  "2. high":  string;
  "3. low":   string;
  "4. close": string;
}

export interface ForexDailyResponse {
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

export interface ForexWeeklyResponse {
  "Meta Data":               ForexWeeklyAndMonthlyMetaData;
  "Time Series FX (Weekly)": { [key: string]: ForexOHLCData };
}

export interface ForexMonthlyResponse {
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

