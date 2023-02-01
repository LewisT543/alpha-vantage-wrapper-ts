export type AVStockIntradayData = StocksIntradayData1Min | StocksIntradayData5Min |
  StocksIntradayData15Min | StocksIntradayData30Min | StocksIntradayData60Min
export type AVStocksLongTermData = StocksDailyData | StocksWeeklyData | StocksMonthlyData
export type AVStocksLongTermAdjustedData = StocksDailyAdjustedData | StocksWeeklyAdjustedData | StocksMonthlyAdjustedData
export type AVStocksData = AVStockIntradayData | AVStocksLongTermData | AVStocksLongTermAdjustedData | GlobalQuoteData | SearchData

export interface WithMetaDataIntraday { metaData: StocksIntradayMetaData; }
export type StocksOHLCVDataObjects = { [key: string]: StocksOHLCVData };
export type StocksOHLCVDailyAdjDataObjects = { [key: string]: StocksOHLCVDailyAdjustedData };
export interface StocksIntradayData1Min extends WithMetaDataIntraday { timeSeries1min: StocksOHLCVDataObjects;}
export interface StocksIntradayData5Min extends WithMetaDataIntraday { timeSeries5min: StocksOHLCVDataObjects;}
export interface StocksIntradayData15Min extends WithMetaDataIntraday { timeSeries15min: StocksOHLCVDataObjects;}
export interface StocksIntradayData30Min extends WithMetaDataIntraday { timeSeries30min: StocksOHLCVDataObjects;}
export interface StocksIntradayData60Min extends WithMetaDataIntraday { timeSeries60min: StocksOHLCVDataObjects;}

export interface StocksIntradayMetaData {
  the1Information:   string;
  the2Symbol:        string;
  the3LastRefreshed: Date;
  the4Interval:      string;
  the5OutputSize:    string;
  the6TimeZone:      string;
}
export interface StocksOHLCVData {
  the1Open:   number;
  the2High:   number;
  the3Low:    number;
  the4Close:  number;
  the5Volume: number;
}

export interface StocksDailyData {
  metaData:           StocksDailyMetaData;
  timeSeriesDaily:    StocksOHLCVDataObjects;
}

export interface StocksDailyAdjustedData {
  metaData:           StocksDailyMetaData;
  timeSeriesDaily:    StocksOHLCVDailyAdjDataObjects;
}

export interface StocksDailyMetaData {
  the1Information:   string;
  the2Symbol:        string;
  the3LastRefreshed: Date;
  the4OutputSize:    string;
  the5TimeZone:      string;
}

export interface StocksOHLCVDailyAdjustedData {
  the1Open:             number;
  the2High:             number;
  the3Low:              number;
  the4Close:            number;
  the5AdjustedClose:    number;
  the6Volume:           number;
  the7DividendAmount:   number;
  the8SplitCoefficient: number;
}

export interface StocksLongtermMetaData {
  the1Information:   string;
  the2Symbol:        string;
  the3LastRefreshed: Date;
  the4TimeZone:      string;
}
interface WithStockLongtermMetaData { metaData: StocksLongtermMetaData; }
export interface StocksWeeklyData extends WithStockLongtermMetaData { weeklyTimeSeries: StocksOHLCVDataObjects; }
export interface StocksMonthlyData extends WithStockLongtermMetaData { monthlyTimeSeries: StocksOHLCVDataObjects; }

export interface StocksOHLCVLongtermAdjustedData {
  the1Open:           number;
  the2High:           number;
  the3Low:            number;
  the4Close:          number;
  the5AdjustedClose:  number;
  the6Volume:         number;
  the7DividendAmount: number;
}

export type StocksOHLCVLongtermAdjustedDataObjects = { [key: string]: StocksOHLCVLongtermAdjustedData };
export interface StocksWeeklyAdjustedData extends WithStockLongtermMetaData { weeklyAdjustedTimeSeries: StocksOHLCVLongtermAdjustedDataObjects; }
export interface StocksMonthlyAdjustedData extends WithStockLongtermMetaData { monthlyAdjustedTimeSeries: StocksOHLCVLongtermAdjustedDataObjects;}

export interface GlobalQuoteData { globalQuote: GlobalQuoteInnerData;}
export interface GlobalQuoteInnerData {
  the01Symbol:           string;
  the02Open:             number;
  the03High:             number;
  the04Low:              number;
  the05Price:            number;
  the06Volume:           number;
  the07LatestTradingDay: Date;
  the08PreviousClose:    number;
  the09Change:           number;
  the10ChangePercent:    number;
}

export interface SearchData { bestMatches: BestMatchData[];}
export interface BestMatchData {
  the1Symbol:      string;
  the2Name:        string;
  the3Type:        string;
  the4Region:      string;
  the5MarketOpen:  string;
  the6MarketClose: string;
  the7Timezone:    string;
  the8Currency:    string;
  the9MatchScore:  number;
}
