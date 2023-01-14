import {AlphaVantageStockFnEnum, AVTimeSeriesIntervalEnum, AVIntradaySliceEnum} from "../../enums";
import {AlphaVantageQuery, WithAVAdjusted, WithAVDataType, WithAVOutputSize} from "./avQuery.types";

export interface TimeSeriesBaseQuery extends AlphaVantageQuery {
  fn: AlphaVantageStockFnEnum;
  symbol: string;
}
export interface TimeSeriesIntradayQuery extends TimeSeriesBaseQuery, WithAVOutputSize, WithAVDataType, WithAVAdjusted {
  fn: AlphaVantageStockFnEnum.TIME_SERIES_INTRADAY;
  interval: AVTimeSeriesIntervalEnum;
}
export interface TimeSeriesIntradayEntendedQuery extends TimeSeriesBaseQuery, WithAVAdjusted {
  fn: AlphaVantageStockFnEnum.TIME_SERIES_INTRADAY_EXTENDED;
  slice: AVIntradaySliceEnum;
}
export interface TimeSeriesDailyQuery extends TimeSeriesBaseQuery, WithAVOutputSize, WithAVDataType { fn: AlphaVantageStockFnEnum.TIME_SERIES_DAILY }
export interface TimeSeriesDailyAdjustedQuery extends TimeSeriesBaseQuery, WithAVOutputSize, WithAVDataType { fn: AlphaVantageStockFnEnum.TIME_SERIES_DAILY_ADJUSTED }
export interface TimeSeriesWeeklyQuery extends TimeSeriesBaseQuery, WithAVDataType { fn: AlphaVantageStockFnEnum.TIME_SERIES_WEEKLY }
export interface TimeSeriesWeeklyAdjustedQuery extends TimeSeriesBaseQuery, WithAVDataType { fn: AlphaVantageStockFnEnum.TIME_SERIES_WEEKLY_ADJUSTED }
export interface TimeSeriesMonthlyQuery extends TimeSeriesBaseQuery, WithAVDataType { fn: AlphaVantageStockFnEnum.TIME_SERIES_MONTHLY }
export interface TimeSeriesMonthlyAdjustedQuery extends TimeSeriesBaseQuery, WithAVDataType { fn: AlphaVantageStockFnEnum.TIME_SERIES_MONTHLY_ADJUSTED }
export interface GlobalQuoteQuery extends TimeSeriesBaseQuery, WithAVDataType { fn: AlphaVantageStockFnEnum.GLOBAL_QUOTE }
export interface SymbolSearchQuery extends AlphaVantageQuery, WithAVDataType {
  fn: AlphaVantageStockFnEnum.SYMBOL_SEARCH;
  keywords: string;
}

export type AVStocksQuery = TimeSeriesIntradayQuery | TimeSeriesIntradayEntendedQuery |
  TimeSeriesDailyQuery | TimeSeriesDailyAdjustedQuery | TimeSeriesWeeklyQuery |
  TimeSeriesWeeklyAdjustedQuery | TimeSeriesMonthlyQuery | TimeSeriesMonthlyAdjustedQuery |
  GlobalQuoteQuery | SymbolSearchQuery
