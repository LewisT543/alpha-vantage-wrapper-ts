import {
  AVResponse,
  CurrencyExchangeResponse,
  RealtimeCurrencyExchangeRateResponseData
} from "./types/alphavantage/responses/avResponse.types";
import {getDateFromString} from "./utils";
import {AVData, CurrencyExchangeData, RealtimeCurrencyExchangeRateData} from "./types/alphavantage/data/avData.types";
import {AVForexResponse} from "./types/alphavantage/responses/forexResponse.types";
import {AVCommoditiesResponse} from "./types/alphavantage/responses/commoditiesResponse.types";
import {AVFundamentalsResponse} from "./types/alphavantage/responses/fundamentalsResponse.types";
import {AVIntelResponse} from "./types/alphavantage/responses/alphaIntelResponse.types";
import {AVCryptoResponse} from "./types/alphavantage/responses/cryptoResponse.types";
import {AVStocksResponse} from "./types/alphavantage/responses/stockResponse.types";
import {AVEconIndResponse} from "./types/alphavantage/responses/econIndResponse.types";
import {convertAlphaIntelToData} from "./converters/alphaIntelConverter.types";
import {convertCommoditiesToData} from "./converters/commoditiesConverter.types";
import {convertCryptoToData} from "./converters/cryptoConverter.types";
import {convertFundamentalsToData} from "./converters/fundamentalsConverter.types";
import {convertEconIndToData} from "./converters/econIndConverter.types";
import {convertForexToData} from "./converters/forexConverter.types";
import {convertStocksToData} from "./converters/stockConverter.types";


const convertCurrencyExchangeToData = (exchangeResponse: CurrencyExchangeResponse): CurrencyExchangeData => ({
  realtimeCurrencyExchangeRate:        convertRealtimeCurrencyExchangeRate(exchangeResponse["Realtime Currency Exchange Rate"])
})

const convertRealtimeCurrencyExchangeRate = (exchangeRate: RealtimeCurrencyExchangeRateResponseData): RealtimeCurrencyExchangeRateData => ({
  the1FromCurrencyCode:     exchangeRate["1. From_Currency Code"],
  the2FromCurrencyName:     exchangeRate["2. From_Currency Name"],
  the3ToCurrencyCode:       exchangeRate["3. To_Currency Code"],
  the4ToCurrencyName:       exchangeRate["4. To_Currency Name"],
  the5ExchangeRate:         Number(exchangeRate["5. Exchange Rate"]),
  the6LastRefreshed:        getDateFromString(exchangeRate["6. Last Refreshed"]),
  the7TimeZone:             exchangeRate["7. Time Zone"],
  the8BidPrice:             Number(exchangeRate["8. Bid Price"]),
  the9AskPrice:             Number(exchangeRate["9. Ask Price"]),
})

const isIntelResponse = (response: AVResponse): response is AVIntelResponse => response !== undefined
const isCommoditiesResponse = (response: AVResponse): response is AVCommoditiesResponse => response !== undefined
const isCryptoResponse = (response: AVResponse): response is AVCryptoResponse => response !== undefined
const isFundamentalsResponse = (response: AVResponse): response is AVFundamentalsResponse => response !== undefined
const isEconIndResponse = (response: AVResponse): response is AVEconIndResponse => response !== undefined
const isForexResponse = (response: AVResponse): response is AVForexResponse => response !== undefined
const isStocksResponse = (response: AVResponse): response is AVStocksResponse => response !== undefined
const isExchangeRateResponse = (response: AVResponse): response is CurrencyExchangeResponse => response !== undefined

export const convertAVResponseToData = (response: AVResponse): AVData => {
  if(isIntelResponse(response)) return convertAlphaIntelToData(response)
  if(isCommoditiesResponse(response)) return convertCommoditiesToData(response)
  if(isCryptoResponse(response)) return convertCryptoToData(response)
  if(isFundamentalsResponse(response)) return convertFundamentalsToData(response)
  if(isEconIndResponse(response)) return convertEconIndToData(response)
  if(isForexResponse(response)) return convertForexToData(response)
  if(isStocksResponse(response)) return convertStocksToData(response)
  if(isExchangeRateResponse(response)) return convertCurrencyExchangeToData(response)
  throw new Error("ERROR: Response is not Recognised.")
}
