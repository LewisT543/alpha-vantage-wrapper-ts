import {TimeSeriesDailyAdjustedQuery} from "../../types/alphavantage/queries/stockQueries.types";
import {
  AlphaVantageCommoditiesFn,
  AlphaVantageCryptoFn,
  AlphaVantageEconIndsEnum,
  AlphaVantageForexFn,
  AlphaVantageFundamentalsFnEnum,
  AlphaVantageIntelFnEnum,
  AlphaVantageStockFnEnum
} from "../../types/enums";
import {FundamentalsBalanceSheetQuery} from "../../types/alphavantage/queries/fundamentalsQueries.types";
import {AlphaIntelNewsQuery} from "../../types/alphavantage/queries/alphaIntelQueries.types";
import {ForexDailyQuery} from "../../types/alphavantage/queries/forexQueries.types";
import {CommoditiesAluminiumQuery} from "../../types/alphavantage/queries/commoditiesQueries.types";
import {EconIndCPIQuery} from "../../types/alphavantage/queries/econIndQueries.types";
import {CryptoDailyQuery} from "../../types/alphavantage/queries/cryptoQueries.types";

const timeSeriesDailyAdjustedTestQuery: TimeSeriesDailyAdjustedQuery = {
  fn: AlphaVantageStockFnEnum.TIME_SERIES_DAILY_ADJUSTED,
  symbol: 'IBM',
  outputSize: 'compact',
  dataType: 'json',
  apiKey: 'demo'
}
const alphaIntelNewsTestQuery: AlphaIntelNewsQuery = {
  fn: AlphaVantageIntelFnEnum.NEWS_SENTIMENT,
  apiKey: 'demo'
}
const fundamentalsBalanceSheetTestQuery: FundamentalsBalanceSheetQuery = {
  fn: AlphaVantageFundamentalsFnEnum.BALANCE_SHEET,
  symbol: 'IBM',
  apiKey: 'demo'
}
const forexCurrenyExchangeTestQuery: ForexDailyQuery = {
  fn: AlphaVantageForexFn.FX_DAILY,
  fromCurrency: 'USD',
  toCurrency: 'GBP',
  apiKey: 'demo'
}
const cryptoDailyTestQuery: CryptoDailyQuery = {
  fn: AlphaVantageCryptoFn.DIGITAL_CURRENCY_DAILY,
  symbol: 'ETH',
  market: 'USD',
  apiKey: 'demo'
}
const commoditiesAluminiumTestQuery: CommoditiesAluminiumQuery = {
  fn: AlphaVantageCommoditiesFn.ALUMINUM,
  dataType: 'json',
  apiKey: 'demo'
}
const econIndCPITestQuery: EconIndCPIQuery = {
  fn: AlphaVantageEconIndsEnum.CPI,
  interval: "monthly",
  apiKey: 'demo'
}
export const TEST_QUERIES = [
  { name: "timeSeriesDaily", data: { query: timeSeriesDailyAdjustedTestQuery, output: 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&outputsize=compact&datatype=json&apikey=demo' } },
  { name: "fundamentalsBalanceSheet", data: { query: fundamentalsBalanceSheetTestQuery, output: 'https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=IBM&apikey=demo' } },
  { name: "alphaIntelNews", data: { query: alphaIntelNewsTestQuery, output: 'https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=demo' } },
  { name: "forexCurrenyExchange", data: { query: forexCurrenyExchangeTestQuery, output: 'https://www.alphavantage.co/query?function=FX_DAILY&fromcurrency=USD&tocurrency=GBP&apikey=demo' } },
  { name: "cryptoDaily", data: { query: cryptoDailyTestQuery, output: 'https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=ETH&market=USD&apikey=demo' } },
  { name: "commoditiesAluminium", data: { query: commoditiesAluminiumTestQuery, output: 'https://www.alphavantage.co/query?function=ALUMINUM&datatype=json&apikey=demo' } },
  { name: "econIndCPITestQuery", data: { query: econIndCPITestQuery, output: 'https://www.alphavantage.co/query?function=CPI&interval=monthly&apikey=demo' } }
]
