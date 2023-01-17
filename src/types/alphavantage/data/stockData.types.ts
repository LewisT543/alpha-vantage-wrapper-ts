import {AVTimeSeriesIntervalEnum} from "../../enums";

export type AVStockIntradayData = IntradayTimeSeriesData1Min | IntradayTimeSeriesData5Min |
  IntradayTimeSeriesData15Min | IntradayTimeSeriesData30Min | IntradayTimeSeriesData60Min
export type AVStockData = AVStockIntradayData | DailyTimeSeriesData | DailyAdjustedTimeSeriesData |
  WeeklyTimeSeriesData | WeeklyAdjustedTimeSeriesData | MonthlyTimeSeriesData | MonthlyAdjustedTimeSeriesData |
  GlobalQuoteData | SearchData


export interface WithMetaDataIntraday { "Meta Data":          MetaDataIntraday; }
export interface IntradayTimeSeriesData1Min extends WithMetaDataIntraday {
  "Time Series (1min)": { [key: string]: OHLCVolumeData };
}
export interface IntradayTimeSeriesData5Min extends WithMetaDataIntraday {
  "Time Series (5min)": { [key: string]: OHLCVolumeData };
}
export interface IntradayTimeSeriesData15Min extends WithMetaDataIntraday {
  "Time Series (15min)": { [key: string]: OHLCVolumeData };
}
export interface IntradayTimeSeriesData30Min extends WithMetaDataIntraday {
  "Time Series (30min)": { [key: string]: OHLCVolumeData };
}
export interface IntradayTimeSeriesData60Min extends WithMetaDataIntraday {
  "Time Series (60min)": { [key: string]: OHLCVolumeData };
}
export interface MetaDataIntraday {
  "1. Information":    string;
  "2. Symbol":         string;
  "3. Last Refreshed": Date;
  "4. Interval":       AVTimeSeriesIntervalEnum;
  "5. Output Size":    string;
  "6. Time Zone":      string;
}
export interface OHLCVolumeData {
  "1. open":   number;
  "2. high":   number;
  "3. low":    number;
  "4. close":  number;
  "5. volume": number;
}

export interface DailyTimeSeriesData {
  "Meta Data":           MetaDataDaily;
  "Time Series (Daily)": { [key: string]: OHLCVolumeData };
}
export interface DailyAdjustedTimeSeriesData {
  "Meta Data":           MetaDataDaily;
  "Time Series (Daily)": { [key: string]: TimeSeriesAdjustedDailyData };
}
export interface TimeSeriesAdjustedDailyData {
  "1. open":              number;
  "2. high":              number;
  "3. low":               number;
  "4. close":             number;
  "5. adjusted close":    number;
  "6. volume":            number;
  "7. dividend amount":   number;
  "8. split coefficient": number;
}


export interface MetaDataDaily {
  "1. Information":    string;
  "2. Symbol":         string;
  "3. Last Refreshed": Date;
  "4. Output Size":    string;
  "5. Time Zone":      string;
}

export interface WeeklyTimeSeriesData {
  "Meta Data":          MetaDataWeekly;
  "Weekly Time Series": { [key: string]: OHLCVolumeData };
}
export interface WeeklyAdjustedTimeSeriesData {
  "Meta Data":          MetaDataWeekly;
  "Weekly Adjusted Time Series": { [key: string]: OHLCVolumeData };
}
export interface MetaDataWeekly {
  "1. Information":    string;
  "2. Symbol":         string;
  "3. Last Refreshed": Date;
  "4. Time Zone":      string;
}

export interface MonthlyTimeSeriesData {
  "Meta Data":                    MetaDataMonthly;
  "Monthly Time Series": { [key: string]: OHLCVolumeData };
}
export interface MonthlyAdjustedTimeSeriesData {
  "Meta Data":                    MetaDataMonthly;
  "Monthly Adjusted Time Series": { [key: string]: MonthlyAdjustedTimeSeriesData };
}
export interface MetaDataMonthly {
  "1. Information":    string;
  "2. Symbol":         string;
  "3. Last Refreshed": Date;
  "4. Time Zone":      string;
}
export interface MonthlyAdjustedTimeSeriesData {
  "1. open":            number;
  "2. high":            number;
  "3. low":             number;
  "4. close":           number;
  "5. adjusted close":  number;
  "6. volume":          number;
  "7. dividend amount": number;
}

export interface GlobalQuoteData {
  "Global Quote": GlobalQuoteData;
}

export interface GlobalQuoteData {
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

export interface SearchData {
  bestMatches: BestMatch[];
}

export interface BestMatch {
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
