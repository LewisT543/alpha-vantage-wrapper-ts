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
import {fundBExampleResponse, imbAnnualReportsExpected, imbAnnualReportsExpected2} from "./moreData";

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
export const TEST_QUERIES = {
  "timeSeriesDaily": { query: timeSeriesDailyAdjustedTestQuery, output: 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&outputsize=compact&datatype=json&apikey=demo' },
  "fundamentalsBalanceSheet": { query: fundamentalsBalanceSheetTestQuery, output: 'https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=IBM&apikey=demo' },
  "alphaIntelNews": { query: alphaIntelNewsTestQuery, output: 'https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=demo' },
  "forexCurrenyExchange": { query: forexCurrenyExchangeTestQuery, output: 'https://www.alphavantage.co/query?function=FX_DAILY&fromcurrency=USD&tocurrency=GBP&apikey=demo' },
  "cryptoDaily": { query: cryptoDailyTestQuery, output: 'https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=ETH&market=USD&apikey=demo' },
  "commoditiesAluminium": { query: commoditiesAluminiumTestQuery, output: 'https://www.alphavantage.co/query?function=ALUMINUM&datatype=json&apikey=demo' },
  "econIndCPITestQuery": { query: econIndCPITestQuery, output: 'https://www.alphavantage.co/query?function=CPI&interval=monthly&apikey=demo' },
}

export const TEST_RESPONSES = {
  "ibmBalanceSheets": { response: fundBExampleResponse, output: imbAnnualReportsExpected2 }
}
