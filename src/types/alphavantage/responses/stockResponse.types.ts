
export type AVStockIntradayResponse = IntradayTimeSeriesResponse1Min | IntradayTimeSeriesResponse5Min |
  IntradayTimeSeriesResponse15Min | IntradayTimeSeriesResponse30Min | IntradayTimeSeriesResponse60Min
export type AVStockResponse = AVStockIntradayResponse | DailyTimeSeriesResponse | DailyAdjustedTimeSeriesResponse |
  WeeklyTimeSeriesResponse | WeeklyAdjustedTimeSeriesResponse | MonthlyTimeSeriesResponse | MonthlyAdjustedTimeSeriesResponse |
  GlobalQuoteResponse | SearchResponse

export interface WithMetaDataIntraday { "Meta Data": MetaDataIntraday; }

export interface IntradayTimeSeriesResponse1Min extends WithMetaDataIntraday { "Time Series (1min)": { [key: string]: OHLCVolumeData }; }
export interface IntradayTimeSeriesResponse5Min extends WithMetaDataIntraday { "Time Series (5min)": { [key: string]: OHLCVolumeData }; }
export interface IntradayTimeSeriesResponse15Min extends WithMetaDataIntraday { "Time Series (15min)": { [key: string]: OHLCVolumeData }; }
export interface IntradayTimeSeriesResponse30Min extends WithMetaDataIntraday { "Time Series (30min)": { [key: string]: OHLCVolumeData }; }
export interface IntradayTimeSeriesResponse60Min extends WithMetaDataIntraday { "Time Series (60min)": { [key: string]: OHLCVolumeData }; }

export interface MetaDataIntraday {
  "1. Information":    string;
  "2. Symbol":         string;
  "3. Last Refreshed": Date;
  "4. Interval":       string;
  "5. Output Size":    string;
  "6. Time Zone":      string;
}
export interface OHLCVolumeData {
  "1. open":   string;
  "2. high":   string;
  "3. low":    string;
  "4. close":  string;
  "5. volume": string;
}

export interface DailyTimeSeriesResponse {
  "Meta Data": MetaDataDaily;
  "Time Series (Daily)": { [key: string]: OHLCVolumeData };
}
export interface DailyAdjustedTimeSeriesResponse {
  "Meta Data": MetaDataDaily;
  "Time Series (Daily)": { [key: string]: TimeSeriesAdjustedDailyData };
}
export interface TimeSeriesAdjustedDailyData {
  "1. open":              string;
  "2. high":              string;
  "3. low":               string;
  "4. close":             string;
  "5. adjusted close":    string;
  "6. volume":            string;
  "7. dividend amount":   string;
  "8. split coefficient": string;
}

export interface MetaDataDaily {
  "1. Information":    string;
  "2. Symbol":         string;
  "3. Last Refreshed": Date;
  "4. Output Size":    string;
  "5. Time Zone":      string;
}

export interface StockLongtermMetaData {
  "1. Information":    string;
  "2. Symbol":         string;
  "3. Last Refreshed": Date;
  "4. Time Zone":      string;
}
interface WithStockLongtermMetaData { "Meta Data": StockLongtermMetaData;}
export interface WeeklyTimeSeriesResponse extends WithStockLongtermMetaData { "Weekly Time Series": { [key: string]: OHLCVolumeData };}
export interface WeeklyAdjustedTimeSeriesResponse extends WithStockLongtermMetaData { "Weekly Adjusted Time Series": { [key: string]: OHLCVolumeData };}
export interface MonthlyTimeSeriesResponse extends WithStockLongtermMetaData { "Monthly Time Series": { [key: string]: OHLCVolumeData };}

export interface MonthlyAdjustedTimeSeriesData {
  "1. open":            string;
  "2. high":            string;
  "3. low":             string;
  "4. close":           string;
  "5. adjusted close":  string;
  "6. volume":          string;
  "7. dividend amount": string;
}

export interface MonthlyAdjustedTimeSeriesResponse extends WithStockLongtermMetaData { "Monthly Adjusted Time Series": { [key: string]: MonthlyAdjustedTimeSeriesData };}

export interface GlobalQuoteResponse {
  "Global Quote": GlobalQuoteData;
}

export interface GlobalQuoteData {
  "01. symbol":             string;
  "02. open":               string;
  "03. high":               string;
  "04. low":                string;
  "05. price":              string;
  "06. volume":             string;
  "07. latest trading day": Date;
  "08. previous close":     string;
  "09. change":             string;
  "10. change percent":     string;
}

export interface SearchResponse {
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
  "9. matchScore":  string;
}
