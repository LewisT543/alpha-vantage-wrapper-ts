import {
  AVResponse,
  CurrencyExchangeResponse,
  RealtimeCurrencyExchangeRateResponseData
} from "./types/alphavantage/responses/avResponse.types";
import {asAndIsResponseType, getDateFromString} from "./utils";
import {AVData, CurrencyExchangeData, RealtimeCurrencyExchangeRateData} from "./types/alphavantage/data/avData.types";
import {
  AVForexIntradayResponse,
  AVForexLongTermResponse,
  AVForexResponse
} from "./types/alphavantage/responses/forexResponse.types";
import {
  AnnualEarningsResponse,
  AVFundamentalsResponse,
  BalanceSheetResponse,
  CashFlowResponse,
  GeneralOverviewResponse,
  IncomeStatementResponse
} from "./types/alphavantage/responses/fundamentalsResponse.types";
import {
  AVIntelResponse,
  NewsResponse,
  PortfoliosResponse
} from "./types/alphavantage/responses/alphaIntelResponse.types";
import {
  AVCryptoIntradayResponse,
  AVCryptoLongTermResponse,
  AVCryptoResponse
} from "./types/alphavantage/responses/cryptoResponse.types";
import {
  AVStocksIntradayResponse,
  AVStocksLongTermAdjustedResponse,
  AVStocksLongTermResponse,
  AVStocksResponse,
  GlobalQuoteResponse,
  SearchResponse
} from "./types/alphavantage/responses/stockResponse.types";
import {AVEconIndResponse} from "./types/alphavantage/responses/econIndResponse.types";
import {convertAlphaIntelToData, isNewsIntel, isPortfolioIntel} from "./converters/alphaIntelConverter.types";
import {convertCryptoToData, isIntradayCrypto, isLongTermCrypto} from "./converters/cryptoConverter.types";
import {
  convertFundamentalsToData,
  isAnnualEarningsResponse,
  isBalanceSheetResponse,
  isCashFlowResponse,
  isGeneralOverview,
  isIncomeStatementResponse
} from "./converters/fundamentalsConverter.types";
import {convertEconIndToData} from "./converters/econIndConverter.types";
import {convertForexToData, isIntradayForex, isLongTermForex} from "./converters/forexConverter.types";
import {
  convertStocksToData,
  isGlobalQuote,
  isIntradayStocks,
  isLongTermAdjustedStocks,
  isLongTermStocks,
  isSearch
} from "./converters/stockConverter.types";
import {DATE_FORMATS} from "./types/constants";


const convertCurrencyExchangeToData = (exchangeResponse: CurrencyExchangeResponse): CurrencyExchangeData => ({
  realtimeCurrencyExchangeRate:        convertRealtimeCurrencyExchangeRate(exchangeResponse["Realtime Currency Exchange Rate"])
})

const convertRealtimeCurrencyExchangeRate = (exchangeRate: RealtimeCurrencyExchangeRateResponseData): RealtimeCurrencyExchangeRateData => ({
  the1FromCurrencyCode:     exchangeRate["1. From_Currency Code"],
  the2FromCurrencyName:     exchangeRate["2. From_Currency Name"],
  the3ToCurrencyCode:       exchangeRate["3. To_Currency Code"],
  the4ToCurrencyName:       exchangeRate["4. To_Currency Name"],
  the5ExchangeRate:         Number(exchangeRate["5. Exchange Rate"]),
  the6LastRefreshed:        getDateFromString(exchangeRate["6. Last Refreshed"], DATE_FORMATS.yearMonthDay_Time),
  the7TimeZone:             exchangeRate["7. Time Zone"],
  the8BidPrice:             Number(exchangeRate["8. Bid Price"]),
  the9AskPrice:             Number(exchangeRate["9. Ask Price"]),
})

const isIntelResponse = (response: AVResponse): response is AVIntelResponse =>
  asAndIsResponseType<AVIntelResponse, NewsResponse>(response, isNewsIntel)
  || asAndIsResponseType<AVIntelResponse, PortfoliosResponse>(response, isPortfolioIntel)

const isCryptoResponse = (response: AVResponse): response is AVCryptoResponse =>
  asAndIsResponseType<AVCryptoResponse, AVCryptoIntradayResponse>(response, isIntradayCrypto)
  || asAndIsResponseType<AVCryptoResponse, AVCryptoLongTermResponse>(response, isLongTermCrypto)

const isFundamentalsResponse = (response: AVResponse): response is AVFundamentalsResponse =>
  asAndIsResponseType<AVFundamentalsResponse, GeneralOverviewResponse>(response, isGeneralOverview)
  || asAndIsResponseType<AVFundamentalsResponse, IncomeStatementResponse>(response, isIncomeStatementResponse)
  || asAndIsResponseType<AVFundamentalsResponse, BalanceSheetResponse>(response, isBalanceSheetResponse)
  || asAndIsResponseType<AVFundamentalsResponse, CashFlowResponse>(response, isCashFlowResponse)
  || asAndIsResponseType<AVFundamentalsResponse, AnnualEarningsResponse>(response, isAnnualEarningsResponse)

const isEconIndCommoditiesResponse = (response: AVResponse): response is AVEconIndResponse =>
  (response as AVEconIndResponse).data !== undefined

const isForexResponse = (response: AVResponse): response is AVForexResponse =>
  asAndIsResponseType<AVForexResponse, AVForexIntradayResponse>(response, isIntradayForex)
  || asAndIsResponseType<AVForexResponse, AVForexLongTermResponse>(response, isLongTermForex)

const isStocksResponse = (response: AVResponse): response is AVStocksResponse =>
  asAndIsResponseType<AVStocksResponse, AVStocksIntradayResponse>(response, isIntradayStocks)
  || asAndIsResponseType<AVStocksResponse, AVStocksLongTermResponse>(response, isLongTermStocks)
  || asAndIsResponseType<AVStocksResponse, AVStocksLongTermAdjustedResponse>(response, isLongTermAdjustedStocks)
  || asAndIsResponseType<AVStocksResponse, GlobalQuoteResponse>(response, isGlobalQuote)
  || asAndIsResponseType<AVStocksResponse, SearchResponse>(response, isSearch)

const isExchangeRateResponse = (response: AVResponse): response is CurrencyExchangeResponse =>
  response !== undefined
  && (response as CurrencyExchangeResponse)["Realtime Currency Exchange Rate"] !== undefined

export const convertAVResponseToData = (response: AVResponse): AVData => {
  if(isIntelResponse(response)) return convertAlphaIntelToData(response)
  if(isCryptoResponse(response)) return convertCryptoToData(response)
  if(isFundamentalsResponse(response)) return convertFundamentalsToData(response)
  if(isEconIndCommoditiesResponse(response)) return convertEconIndToData(response)
  if(isForexResponse(response)) return convertForexToData(response)
  if(isStocksResponse(response)) return convertStocksToData(response)
  if(isExchangeRateResponse(response)) return convertCurrencyExchangeToData(response)
  throw new Error(`ERROR in convertAVResponseToData: Response is not Recognised: ${response}`)
}
