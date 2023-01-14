import {AlphaVantageQuery, WithAVOutputSize} from "./avQuery.types";
import {AlphaVantageForexFn, AVTimeSeriesIntervalEnum} from "../../enums";

export interface ForexBaseQuery extends AlphaVantageQuery {
  fn: AlphaVantageForexFn
  fromCurrency: string;
  toCurrency: string;
}
export interface ForexCurrencyExchangeQuery extends AlphaVantageQuery { fn: AlphaVantageForexFn.CURRENCY_EXCHANGE_RATE; }
export interface ForexIntradayQuery extends AlphaVantageQuery, WithAVOutputSize {
  fn: AlphaVantageForexFn.FX_INTRADAY;
  interval: AVTimeSeriesIntervalEnum;
}
export interface ForexDailyQuery extends AlphaVantageQuery, WithAVOutputSize { fn: AlphaVantageForexFn.FX_DAILY; }
export interface ForexWeeklyQuery extends AlphaVantageQuery, WithAVOutputSize { fn: AlphaVantageForexFn.FX_WEEKLY; }
export interface ForexMonthlyQuery extends AlphaVantageQuery, WithAVOutputSize { fn: AlphaVantageForexFn.FX_MONTHLY; }

export type AVForexQuery = ForexBaseQuery | ForexCurrencyExchangeQuery | ForexIntradayQuery | ForexDailyQuery | ForexWeeklyQuery | ForexMonthlyQuery