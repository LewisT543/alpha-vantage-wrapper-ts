import {AlphaVantageFn} from "../../enums";
import {AVStocksQuery} from "./stockQueries.types";
import {AVIntelQuery} from "./alphaIntelQueries.types";
import {AVFundamentalsQuery} from "./fundamentalsQueries.types";
import {AVForexQuery} from "./forexQueries.types";
import {AVCryptoQuery} from "./cryptoQueries.types";
import {AVCommoditiesQuery} from "./commoditiesQueries.types";
import {AVEconIndQuery} from "./econIndQueries.types";

export type OutputSize = 'compact' | 'full'
export type DataType = 'json' | 'csv'

export interface WithAVOutputSize { outputSize?: OutputSize; }
export interface WithAVDataType { dataType?: DataType; }
export interface WithAVAdjusted { adjusted?: boolean; }

export interface AlphaVantageQuery {
  fn: AlphaVantageFn;
  apiKey: string
}

export type AVQuery = AVStocksQuery | AVIntelQuery | AVFundamentalsQuery | AVForexQuery | AVCryptoQuery | AVCommoditiesQuery | AVEconIndQuery