
export type AVStocksIntradayResponse = StocksIntradayResponse1Min | StocksIntradayResponse5Min |
  StocksIntradayResponse15Min | StocksIntradayResponse30Min | StocksIntradayResponse60Min
export type AVStocksLongTermResponse = StocksDailyResponse | StocksWeeklyResponse | StocksMonthlyResponse
export type AVStocksLongTermAdjustedResponse = StocksDailyAdjustedResponse | StocksWeeklyAdjustedResponse | StocksMonthlyAdjustedResponse
export type AVStocksResponse = AVStocksIntradayResponse | AVStocksLongTermResponse | AVStocksLongTermAdjustedResponse | GlobalQuoteResponse | SearchResponse

export interface WithMetaDataIntradayResponse { "Meta Data": StocksIntradayMetaDataResponse; }
export type StocksOHLCVResponseObjects = { [key: string]: StocksOHLCVDataResponse };
export interface StocksIntradayResponse1Min extends WithMetaDataIntradayResponse { "Time Series (1min)": StocksOHLCVResponseObjects; }
export interface StocksIntradayResponse5Min extends WithMetaDataIntradayResponse { "Time Series (5min)": StocksOHLCVResponseObjects; }
export interface StocksIntradayResponse15Min extends WithMetaDataIntradayResponse { "Time Series (15min)": StocksOHLCVResponseObjects; }
export interface StocksIntradayResponse30Min extends WithMetaDataIntradayResponse { "Time Series (30min)": StocksOHLCVResponseObjects; }
export interface StocksIntradayResponse60Min extends WithMetaDataIntradayResponse { "Time Series (60min)": StocksOHLCVResponseObjects; }

export interface StocksIntradayMetaDataResponse {
  "1. Information":    string;
  "2. Symbol":         string;
  "3. Last Refreshed": string;
  "4. Interval":       string;
  "5. Output Size":    string;
  "6. Time Zone":      string;
}
export interface StocksOHLCVDataResponse {
  "1. open":   string;
  "2. high":   string;
  "3. low":    string;
  "4. close":  string;
  "5. volume": string;
}

export interface StocksDailyResponse {
  "Meta Data": StocksDailyMetaDataResponse;
  "Time Series (Daily)": StocksOHLCVResponseObjects;
}
export type StocksOHLCVDailyAdjustedResponseObjects = { [key: string]: StocksOHLCVDailyAdjustedResponse };

export interface StocksDailyAdjustedResponse {
  "Meta Data": StocksDailyMetaDataResponse;
  "Time Series (Daily)": StocksOHLCVDailyAdjustedResponseObjects;
}
export interface StocksOHLCVDailyAdjustedResponse {
  "1. open":              string;
  "2. high":              string;
  "3. low":               string;
  "4. close":             string;
  "5. adjusted close":    string;
  "6. volume":            string;
  "7. dividend amount":   string;
  "8. split coefficient": string;
}

export interface StocksDailyMetaDataResponse {
  "1. Information":    string;
  "2. Symbol":         string;
  "3. Last Refreshed": string;
  "4. Output Size":    string;
  "5. Time Zone":      string;
}

export interface StocksLongtermMetaDataResponse {
  "1. Information":    string;
  "2. Symbol":         string;
  "3. Last Refreshed": string;
  "4. Time Zone":      string;
}
interface WithStockLongtermMetaDataResponse { "Meta Data": StocksLongtermMetaDataResponse;}
export interface StocksWeeklyResponse extends WithStockLongtermMetaDataResponse { "Weekly Time Series": StocksOHLCVResponseObjects;}
export interface StocksMonthlyResponse extends WithStockLongtermMetaDataResponse { "Monthly Time Series": StocksOHLCVResponseObjects;}

export interface StocksOHLCVLongtermAdjustedResponse {
  "1. open":            string;
  "2. high":            string;
  "3. low":             string;
  "4. close":           string;
  "5. adjusted close":  string;
  "6. volume":          string;
  "7. dividend amount": string;
}

export type StocksOHLCVLongtermAdjustedResponseObjects = { [key: string]: StocksOHLCVLongtermAdjustedResponse };
export interface StocksWeeklyAdjustedResponse extends WithStockLongtermMetaDataResponse { "Weekly Adjusted Time Series": StocksOHLCVLongtermAdjustedResponseObjects;}
export interface StocksMonthlyAdjustedResponse extends WithStockLongtermMetaDataResponse { "Monthly Adjusted Time Series": StocksOHLCVLongtermAdjustedResponseObjects;}

export interface GlobalQuoteResponse { "Global Quote": GlobalQuoteInnerResponse;}
export interface GlobalQuoteInnerResponse {
  "01. symbol":             string;
  "02. open":               string;
  "03. high":               string;
  "04. low":                string;
  "05. price":              string;
  "06. volume":             string;
  "07. latest trading day": string;
  "08. previous close":     string;
  "09. change":             string;
  "10. change percent":     string;
}

export interface SearchResponse { bestMatches: BestMatchResponse[]}
export interface BestMatchResponse {
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
