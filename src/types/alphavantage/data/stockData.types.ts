import {AVTimeSeriesIntervalEnum} from "../../enums";

export type AVStockIntradayData = StocksIntradayData1Min | StocksIntradayData5Min |
  StocksIntradayData15Min | StocksIntradayData30Min | StocksIntradayData60Min
export type AVStocksLongTermData = StocksDailyData | StocksDailyAdjustedData |
  StocksWeeklyData | StocksWeeklyAdjustedData | StocksMonthlyData | StocksMonthlyAdjustedData
export type AVStockData = AVStockIntradayData | AVStocksLongTermData | GlobalQuoteData | SearchData

export interface WithMetaDataIntraday { "Meta Data": StocksIntradayMetaData; }
export type StocksOHLCVResponseObjects = { [key: string]: StocksOHLCVData };
export type StocksOHLCVDailyAdjResponseObjects = { [key: string]: StocksOHLCVDailyAdjustedData };
export interface StocksIntradayData1Min extends WithMetaDataIntraday { "Time Series (1min)": StocksOHLCVResponseObjects;}
export interface StocksIntradayData5Min extends WithMetaDataIntraday { "Time Series (5min)": StocksOHLCVResponseObjects;}
export interface StocksIntradayData15Min extends WithMetaDataIntraday { "Time Series (15min)": StocksOHLCVResponseObjects;}
export interface StocksIntradayData30Min extends WithMetaDataIntraday { "Time Series (30min)": StocksOHLCVResponseObjects;}
export interface StocksIntradayData60Min extends WithMetaDataIntraday { "Time Series (60min)": StocksOHLCVResponseObjects;}

export interface StocksIntradayMetaData {
  "1. Information":    string;
  "2. Symbol":         string;
  "3. Last Refreshed": Date;
  "4. Interval":       AVTimeSeriesIntervalEnum;
  "5. Output Size":    string;
  "6. Time Zone":      string;
}
export interface StocksOHLCVData {
  "1. open":   number;
  "2. high":   number;
  "3. low":    number;
  "4. close":  number;
  "5. volume": number;
}

export interface StocksDailyData {
  "Meta Data":           StocksDailyMetaData;
  "Time Series (Daily)": StocksOHLCVResponseObjects;
}

export interface StocksDailyAdjustedData {
  "Meta Data":           StocksDailyMetaData;
  "Time Series (Daily)": StocksOHLCVDailyAdjResponseObjects;
}

export interface StocksOHLCVDailyAdjustedData {
  "1. open":              number;
  "2. high":              number;
  "3. low":               number;
  "4. close":             number;
  "5. adjusted close":    number;
  "6. volume":            number;
  "7. dividend amount":   number;
  "8. split coefficient": number;
}

export interface StocksDailyMetaData {
  "1. Information":    string;
  "2. Symbol":         string;
  "3. Last Refreshed": Date;
  "4. Output Size":    string;
  "5. Time Zone":      string;
}

export interface StocksLongtermMetaDataResponse {
  "1. Information":    string;
  "2. Symbol":         string;
  "3. Last Refreshed": Date;
  "4. Time Zone":      string;
}
interface WithStockLongtermMetaData { "Meta Data": StocksLongtermMetaDataResponse; }
export interface StocksWeeklyData extends WithStockLongtermMetaData { "Weekly Time Series": StocksOHLCVResponseObjects; }
export interface StocksWeeklyAdjustedData extends WithStockLongtermMetaData { "Weekly Adjusted Time Series": StocksOHLCVResponseObjects; }
export interface StocksMonthlyData extends WithStockLongtermMetaData { "Monthly Time Series": StocksOHLCVResponseObjects; }

export interface StocksOHLCVMonthlyAdjustedData {
  "1. open":            number;
  "2. high":            number;
  "3. low":             number;
  "4. close":           number;
  "5. adjusted close":  number;
  "6. volume":          number;
  "7. dividend amount": number;
}

export type StocksOHLCVMonthlyAdjustedDataObjects = { [key: string]: StocksOHLCVMonthlyAdjustedData };
export interface StocksMonthlyAdjustedData extends WithStockLongtermMetaData { "Monthly Adjusted Time Series": StocksOHLCVMonthlyAdjustedDataObjects;}

export interface GlobalQuoteData { "Global Quote": GlobalQuoteInnerData;}
export interface GlobalQuoteInnerData {
  "01. symbol":             number;
  "02. open":               number;
  "03. high":               number;
  "04. low":                number;
  "05. price":              number;
  "06. volume":             number;
  "07. latest trading day": Date;
  "08. previous close":     number;
  "09. change":             number;
  "10. change percent":     string;
}

export interface SearchData { bestMatches: BestMatchData[];}
export interface BestMatchData {
  "1. symbol":      string;
  "2. name":        string;
  "3. type":        string;
  "4. region":      string;
  "5. marketOpen":  string;
  "6. marketClose": string;
  "7. timezone":    string;
  "8. currency":    string;
  "9. matchScore":  number;
}
