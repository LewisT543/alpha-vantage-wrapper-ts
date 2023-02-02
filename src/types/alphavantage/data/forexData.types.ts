import {AVTimeSeriesIntervalEnum} from "../../enums";

export type AVForexLongTermData = ForexDailyData | ForexWeeklyData | ForexMonthlyData
export type AVForexIntradayData = ForexIntradayData1Min | ForexIntradayData5Min | ForexIntradayData15Min | ForexIntradayData30Min | ForexIntradayData60Min
export type AVForexData = AVForexIntradayData | AVForexLongTermData

interface WithForexIntradayMetaData { metaData: ForexIntradayMetaData; }

export type ForexOHLCDataObjects = { [key: string]: ForexOHLCData };
export interface ForexIntradayData1Min extends WithForexIntradayMetaData { timeSeriesFX1min: ForexOHLCDataObjects; }
export interface ForexIntradayData5Min extends WithForexIntradayMetaData { timeSeriesFX5min: ForexOHLCDataObjects; }
export interface ForexIntradayData15Min extends WithForexIntradayMetaData { timeSeriesFX15min: ForexOHLCDataObjects; }
export interface ForexIntradayData30Min extends WithForexIntradayMetaData { timeSeriesFX30min: ForexOHLCDataObjects; }
export interface ForexIntradayData60Min extends WithForexIntradayMetaData { timeSeriesFX60min: ForexOHLCDataObjects; }


export interface ForexIntradayMetaData {
  the1Information:    string;
  the2FromSymbol:     string;
  the3ToSymbol:       string;
  the4LastRefreshed:  Date;
  the5Interval:       string;
  the6OutputSize:     string;
  the7TimeZone:       string;
}

export interface ForexOHLCData {
  the1Open:  number;
  the2High:  number;
  the3Low:   number;
  the4Close: number;
}

export interface ForexDailyData {
  metaData:              ForexDailyMetaData;
  timeSeriesFXDaily:     ForexOHLCDataObjects;
}

export interface ForexDailyMetaData {
  the1Information:    string;
  the2FromSymbol:     string;
  the3ToSymbol:       string;
  the4OutputSize:     string;
  the5LastRefreshed:  Date;
  the6TimeZone:       string;
}

export interface ForexWeeklyData {
  metaData:               ForexWeeklyAndMonthlyMetaData;
  timeSeriesFXWeekly:     ForexOHLCDataObjects;
}

export interface ForexMonthlyData {
  metaData:                ForexWeeklyAndMonthlyMetaData;
  timeSeriesFXMonthly:     ForexOHLCDataObjects;
}

export interface ForexWeeklyAndMonthlyMetaData {
  the1Information:    string;
  the2FromSymbol:     string;
  the3ToSymbol:       string;
  the4LastRefreshed:  Date;
  the5TimeZone:       string;
}

