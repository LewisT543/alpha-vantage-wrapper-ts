import {AlphaVantageQuery, WithAVOutputSize} from "./avQuery.types";
import {AlphaVantageCryptoFn, AVTimeSeriesIntervalEnum} from "../../enums";

export interface CryptoBaseQuery extends AlphaVantageQuery {
  fn: AlphaVantageCryptoFn;
  symbol: string;
  market: string;
}
export interface CryptoIntradayQuery extends CryptoBaseQuery, WithAVOutputSize {
  fn: AlphaVantageCryptoFn.CRYPTO_INTRADAY;
  interval: AVTimeSeriesIntervalEnum;
}
export interface CryptoDailyQuery extends CryptoBaseQuery { fn: AlphaVantageCryptoFn.DIGITAL_CURRENCY_DAILY; }
export interface CryptoWeeklyQuery extends CryptoBaseQuery { fn: AlphaVantageCryptoFn.DIGITAL_CURRENCY_WEEKLY; }
export interface CryptoMonthlyQuery extends CryptoBaseQuery { fn: AlphaVantageCryptoFn.DIGITAL_CURRENCY_MONTHLY; }

export type AVCryptoQuery = CryptoIntradayQuery | CryptoDailyQuery | CryptoWeeklyQuery | CryptoMonthlyQuery