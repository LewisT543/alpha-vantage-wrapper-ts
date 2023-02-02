import {
  AVCryptoIntradayResponse,
  AVCryptoLongTermResponse,
  AVCryptoResponse,
  CryptoDailyResponse,
  CryptoDoubleOHLCVResponse,
  CryptoDoubleOHLCVResponseObjects,
  CryptoIntradayMetaDataResponse,
  CryptoIntradayResponse15Min,
  CryptoIntradayResponse1Min,
  CryptoIntradayResponse30Min,
  CryptoIntradayResponse5Min,
  CryptoIntradayResponse60Min,
  CryptoLongtermMetaDataResponse,
  CryptoMonthlyResponse,
  CryptoOHLCVResponse,
  CryptoOHLCVResponseObjects,
  CryptoWeeklyResponse
} from "../types/alphavantage/responses/cryptoResponse.types";
import {
  AVCryptoData,
  AVCryptoIntradayData,
  AVCryptoLongTermData,
  CryptoDailyData,
  CryptoDoubleOHLCVData,
  CryptoDoubleOHLCVDataObjects,
  CryptoIntradayData15Min,
  CryptoIntradayData1Min,
  CryptoIntradayData30Min,
  CryptoIntradayData5Min,
  CryptoIntradayData60Min,
  CryptoIntradayMetaData,
  CryptoLongtermMetaData,
  CryptoMonthlyData,
  CryptoOHLCVData,
  CryptoOHLCVDataObjects,
  CryptoWeeklyData
} from "../types/alphavantage/data/cryptoData.types";
import {getDateFromString} from "../utils";
import {DATE_FORMATS} from "../types/constants";

export const isIntradayCrypto = (response: AVCryptoResponse): response is AVCryptoIntradayResponse => response["Meta Data"] !== undefined && (response as AVCryptoIntradayResponse)["Meta Data"]["1. Information"].includes("Crypto Intraday")
export const isLongTermCrypto = (response: AVCryptoResponse): response is AVCryptoLongTermResponse => response["Meta Data"] !== undefined && (response as AVCryptoLongTermResponse)["Meta Data"]["1. Information"].includes("Digital Currency")
export const is1MinCrypto = (response: AVCryptoIntradayResponse): response is CryptoIntradayResponse1Min => (response as CryptoIntradayResponse1Min)["Time Series Crypto (1min)"] !== undefined
export const is5MinCrypto = (response: AVCryptoIntradayResponse): response is CryptoIntradayResponse5Min => (response as CryptoIntradayResponse5Min)["Time Series Crypto (5min)"] !== undefined
export const is15MinCrypto = (response: AVCryptoIntradayResponse): response is CryptoIntradayResponse15Min => (response as CryptoIntradayResponse15Min)["Time Series Crypto (15min)"] !== undefined
export const is30MinCrypto = (response: AVCryptoIntradayResponse): response is CryptoIntradayResponse30Min => (response as CryptoIntradayResponse30Min)["Time Series Crypto (30min)"] !== undefined
export const is60MinCrypto = (response: AVCryptoIntradayResponse): response is CryptoIntradayResponse60Min => (response as CryptoIntradayResponse60Min)["Time Series Crypto (60min)"] !== undefined
export const isDailyCrypto = (response: AVCryptoLongTermResponse): response is CryptoDailyResponse => (response as CryptoDailyResponse)["Time Series (Digital Currency Daily)"] !== undefined
export const isWeeklyCrypto = (response: AVCryptoLongTermResponse): response is CryptoWeeklyResponse => (response as CryptoWeeklyResponse)["Time Series (Digital Currency Weekly)"] !== undefined
export const isMonthlyCrypto = (response: AVCryptoLongTermResponse): response is CryptoMonthlyResponse => (response as CryptoMonthlyResponse)["Time Series (Digital Currency Monthly)"] !== undefined

export const convertCryptoToData = (response: AVCryptoResponse): AVCryptoData => {
  if (isIntradayCrypto(response)) return convertCryptoIntradayData(response)
  if (isLongTermCrypto(response)) return convertCryptoLongTermData(response)
  throw new Error(`convertCryptoIntradayData failed: ${response}`)
}
const convertCryptoIntradayData = (intraDayResponse: AVCryptoIntradayResponse): AVCryptoIntradayData => {
  if (is1MinCrypto(intraDayResponse)) return convertCryptoIntraday1MinData(intraDayResponse)
  if (is5MinCrypto(intraDayResponse)) return convertCryptoIntraday5MinData(intraDayResponse)
  if (is15MinCrypto(intraDayResponse)) return convertCryptoIntraday15MinData(intraDayResponse)
  if (is30MinCrypto(intraDayResponse)) return convertCryptoIntraday30MinData(intraDayResponse)
  if (is60MinCrypto(intraDayResponse)) return convertCryptoIntraday60MinData(intraDayResponse)
  throw new Error(`convertCryptoIntradayData failed: ${intraDayResponse}`)
}
const convertCryptoLongTermData = (longTermResponse: AVCryptoLongTermResponse): AVCryptoLongTermData => {
  if (isDailyCrypto(longTermResponse)) return convertCryptoDaily(longTermResponse)
  if (isWeeklyCrypto(longTermResponse)) return convertCryptoWeekly(longTermResponse)
  if (isMonthlyCrypto(longTermResponse)) return convertCryptoMonthly(longTermResponse)
  throw new Error(`convertCryptoLongTermData failed: ${longTermResponse}`)
}

export const convertIntradayCryptoMetaData = (metaData: CryptoIntradayMetaDataResponse): CryptoIntradayMetaData => ({
  the1Information:            metaData["1. Information"],
  the2DigitalCurrencyCode:    metaData["2. Digital Currency Code"],
  the3DigitalCurrencyName:    metaData["3. Digital Currency Name"],
  the4MarketCode:             metaData["4. Market Code"],
  the5MarketName:             metaData["5. Market Name"],
  the6LastRefreshed:          getDateFromString(metaData["6. Last Refreshed"], DATE_FORMATS.yearMonthDay_Time),
  the7Interval:               metaData["7. Interval"],
  the8OutputSize:             metaData["8. Output Size"],
  the9TimeZone:               metaData["9. Time Zone"]
})
const convertCryptoIntraday1MinData = (intraDayResponse: CryptoIntradayResponse1Min): CryptoIntradayData1Min => ({
  metaData:                     convertIntradayCryptoMetaData(intraDayResponse["Meta Data"]),
  timeSeriesCrypto1min:         loopConvertOHLCVObj(intraDayResponse["Time Series Crypto (1min)"])
})
const convertCryptoIntraday5MinData = (intraDayResponse: CryptoIntradayResponse5Min): CryptoIntradayData5Min => ({
  metaData:                     convertIntradayCryptoMetaData(intraDayResponse["Meta Data"]),
  timeSeriesCrypto5min:         loopConvertOHLCVObj(intraDayResponse["Time Series Crypto (5min)"])
})
const convertCryptoIntraday15MinData = (intraDayResponse: CryptoIntradayResponse15Min): CryptoIntradayData15Min => ({
  metaData:                     convertIntradayCryptoMetaData(intraDayResponse["Meta Data"]),
  timeSeriesCrypto15min:        loopConvertOHLCVObj(intraDayResponse["Time Series Crypto (15min)"])
})
const convertCryptoIntraday30MinData = (intraDayResponse: CryptoIntradayResponse30Min): CryptoIntradayData30Min => ({
  metaData:                     convertIntradayCryptoMetaData(intraDayResponse["Meta Data"]),
  timeSeriesCrypto30min:        loopConvertOHLCVObj(intraDayResponse["Time Series Crypto (30min)"])
})
const convertCryptoIntraday60MinData = (intraDayResponse: CryptoIntradayResponse60Min): CryptoIntradayData60Min => ({
  metaData:                     convertIntradayCryptoMetaData(intraDayResponse["Meta Data"]),
  timeSeriesCrypto60min:        loopConvertOHLCVObj(intraDayResponse["Time Series Crypto (60min)"])
})

const loopConvertOHLCVObj = (obj: CryptoOHLCVResponseObjects): CryptoOHLCVDataObjects =>
  Object.fromEntries(Object.entries(obj).map(([key, val]) => [key, convertCryptoOHLCV(val)]));

const convertCryptoOHLCV = (ohlcv: CryptoOHLCVResponse): CryptoOHLCVData => ({
  the1Open:      Number(ohlcv["1. open"]),
  the2High:      Number(ohlcv["2. high"]),
  the3Low:       Number(ohlcv["3. low"]),
  the4Close:     Number(ohlcv["4. close"]),
  the5Volume:    Number(ohlcv["5. volume"]),
})

const convertCryptoLongTermMetaData = (metaData: CryptoLongtermMetaDataResponse): CryptoLongtermMetaData => ({
  the1Information:           metaData["1. Information"],
  the2DigitalCurrencyCode:   metaData["2. Digital Currency Code"],
  the3DigitalCurrencyName:   metaData["3. Digital Currency Name"],
  the4MarketCode:            metaData["4. Market Code"],
  the5MarketName:            metaData["5. Market Name"],
  the6LastRefreshed:         getDateFromString(metaData["6. Last Refreshed"], DATE_FORMATS.yearMonthDay_Time),
  the7TimeZone:              metaData["7. Time Zone"]
})

const convertCryptoDaily = (longTermResponse: CryptoDailyResponse): CryptoDailyData => ({
  metaData:                         convertCryptoLongTermMetaData(longTermResponse["Meta Data"]),
  timeSeriesDigitalCurrencyDaily:   loopConvertDoubleOHLCVObj(longTermResponse["Time Series (Digital Currency Daily)"])
})
const convertCryptoWeekly = (longTermResponse: CryptoWeeklyResponse): CryptoWeeklyData => ({
  metaData:                         convertCryptoLongTermMetaData(longTermResponse["Meta Data"]),
  timeSeriesDigitalCurrencyWeekly:  loopConvertDoubleOHLCVObj(longTermResponse["Time Series (Digital Currency Weekly)"])
})
const convertCryptoMonthly = (longTermResponse: CryptoMonthlyResponse): CryptoMonthlyData => ({
  metaData:                         convertCryptoLongTermMetaData(longTermResponse["Meta Data"]),
  timeSeriesDigitalCurrencyMonthly: loopConvertDoubleOHLCVObj(longTermResponse["Time Series (Digital Currency Monthly)"])
})

const loopConvertDoubleOHLCVObj = (obj: CryptoDoubleOHLCVResponseObjects): CryptoDoubleOHLCVDataObjects =>
  Object.fromEntries(Object.entries(obj).map(([key, val]) => [key, convertCryptoDoubleOHLCV(val)]));

const convertCryptoDoubleOHLCV = (doubleOhlcv: CryptoDoubleOHLCVResponse): CryptoDoubleOHLCVData => ({
  the1AOpenCNY:         Number(doubleOhlcv["1a. open (CNY)"]),
  the1BOpenUSD:         Number(doubleOhlcv["1b. open (USD)"]),
  the2AHighCNY:         Number(doubleOhlcv["2a. high (CNY)"]),
  the2BHighUSD:         Number(doubleOhlcv["2b. high (USD)"]),
  the3ALowCNY:          Number(doubleOhlcv["3a. low (CNY)"]),
  the3BLowUSD:          Number(doubleOhlcv["3b. low (USD)"]),
  the4ACloseCNY:        Number(doubleOhlcv["4a. close (CNY)"]),
  the4BCloseUSD:        Number(doubleOhlcv["4b. close (USD)"]),
  the5Volume:           Number(doubleOhlcv["5. volume"]),
  the6MarketCapUSD:     Number(doubleOhlcv["6. market cap (USD)"]),
})
