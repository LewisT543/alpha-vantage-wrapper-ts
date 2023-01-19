import {
  AVCryptoIntradayResponse,
  AVCryptoLongTermResponse, AVCryptoResponse,
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
  AVCryptoLongTermData, CryptoDailyData, CryptoDoubleOHLCVData,
  CryptoDoubleOHLCVDataObjects,
  CryptoIntradayData15Min,
  CryptoIntradayData1Min,
  CryptoIntradayData30Min,
  CryptoIntradayData5Min,
  CryptoIntradayData60Min,
  CryptoIntradayMetaData,
  CryptoLongtermMetaData, CryptoMonthlyData,
  CryptoOHLCVData,
  CryptoOHLCVDataObjects, CryptoWeeklyData
} from "../types/alphavantage/data/cryptoData.types";
import {getDateFromString} from "../utils";

const isIntradayCrypto = (response: AVCryptoResponse): response is AVCryptoIntradayResponse => response !== undefined
const isLongTermCrypto = (response: AVCryptoResponse): response is AVCryptoLongTermResponse => response !== undefined
const is1MinCrypto = (response: AVCryptoIntradayResponse): response is CryptoIntradayResponse1Min => response !== undefined
const is5MinCrypto = (response: AVCryptoIntradayResponse): response is CryptoIntradayResponse5Min => response !== undefined
const is15MinCrypto = (response: AVCryptoIntradayResponse): response is CryptoIntradayResponse15Min => response !== undefined
const is30MinCrypto = (response: AVCryptoIntradayResponse): response is CryptoIntradayResponse30Min => response !== undefined
const is60MinCrypto = (response: AVCryptoIntradayResponse): response is CryptoIntradayResponse60Min => response !== undefined
const isDailyCrypto = (response: AVCryptoLongTermResponse): response is CryptoDailyResponse => response === response
const isWeeklyCrypto = (response: AVCryptoLongTermResponse): response is CryptoWeeklyResponse => response === response
const isMonthlyCrypto = (response: AVCryptoLongTermResponse): response is CryptoMonthlyResponse => response === response

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


const convertIntradayCryptoMetaData = (metaData: CryptoIntradayMetaDataResponse): CryptoIntradayMetaData => ({
  "1. Information":           metaData["1. Information"],
  "2. Digital Currency Code": metaData["2. Digital Currency Code"],
  "3. Digital Currency Name": metaData["3. Digital Currency Name"],
  "4. Market Code":           metaData["4. Market Code"],
  "5. Market Name":           metaData["5. Market Name"],
  "6. Last Refreshed":        getDateFromString(metaData["6. Last Refreshed"]),
  "7. Interval":              metaData["7. Interval"],
  "8. Output Size":           metaData["8. Output Size"],
  "9. Time Zone":             metaData["9. Time Zone"]
})
const convertCryptoIntraday1MinData = (intraDayResponse: CryptoIntradayResponse1Min): CryptoIntradayData1Min => ({
  "Meta Data":                    convertIntradayCryptoMetaData(intraDayResponse["Meta Data"]),
  "Time Series Crypto (1min)":    loopConvertOHLCVObj(intraDayResponse["Time Series Crypto (1min)"])
})
const convertCryptoIntraday5MinData = (intraDayResponse: CryptoIntradayResponse5Min): CryptoIntradayData5Min => ({
  "Meta Data":                     convertIntradayCryptoMetaData(intraDayResponse["Meta Data"]),
  "Time Series Crypto (5min)":     loopConvertOHLCVObj(intraDayResponse["Time Series Crypto (5min)"])
})
const convertCryptoIntraday15MinData = (intraDayResponse: CryptoIntradayResponse15Min): CryptoIntradayData15Min => ({
  "Meta Data":                     convertIntradayCryptoMetaData(intraDayResponse["Meta Data"]),
  "Time Series Crypto (15min)":    loopConvertOHLCVObj(intraDayResponse["Time Series Crypto (15min)"])
})
const convertCryptoIntraday30MinData = (intraDayResponse: CryptoIntradayResponse30Min): CryptoIntradayData30Min => ({
  "Meta Data":                     convertIntradayCryptoMetaData(intraDayResponse["Meta Data"]),
  "Time Series Crypto (30min)":    loopConvertOHLCVObj(intraDayResponse["Time Series Crypto (30min)"])
})
const convertCryptoIntraday60MinData = (intraDayResponse: CryptoIntradayResponse60Min): CryptoIntradayData60Min => ({
  "Meta Data":                     convertIntradayCryptoMetaData(intraDayResponse["Meta Data"]),
  "Time Series Crypto (60min)":    loopConvertOHLCVObj(intraDayResponse["Time Series Crypto (60min)"])
})

const loopConvertOHLCVObj = (obj: CryptoOHLCVResponseObjects): CryptoOHLCVDataObjects =>
  Object.fromEntries(Object.entries(obj).map(([key, val]) => [key, convertCryptoOHLCV(val)]));

const convertCryptoOHLCV = (ohlcv: CryptoOHLCVResponse): CryptoOHLCVData => ({
  "1. open":      Number(ohlcv["1. open"]),
  "2. high":      Number(ohlcv["2. high"]),
  "3. low":       Number(ohlcv["3. low"]),
  "4. close":     Number(ohlcv["4. close"]),
  "5. volume":    Number(ohlcv["5. volume"]),
})



const convertCryptoLongTermMetaData = (metaData: CryptoLongtermMetaDataResponse): CryptoLongtermMetaData => ({
  "1. Information":           metaData["1. Information"],
  "2. Digital Currency Code": metaData["2. Digital Currency Code"],
  "3. Digital Currency Name": metaData["3. Digital Currency Name"],
  "4. Market Code":           metaData["4. Market Code"],
  "5. Market Name":           metaData["5. Market Name"],
  "6. Last Refreshed":        getDateFromString(metaData["6. Last Refreshed"]),
  "7. Time Zone":             metaData["7. Time Zone"]
})

const convertCryptoDaily = (longTermResponse: CryptoDailyResponse): CryptoDailyData => ({
  "Meta Data":          convertCryptoLongTermMetaData(longTermResponse["Meta Data"]),
  "Time Series (Digital Currency Daily)" : loopConvertDoubleOHLCVObj(longTermResponse["Time Series (Digital Currency Daily)"])
})
const convertCryptoWeekly = (longTermResponse: CryptoWeeklyResponse): CryptoWeeklyData => ({
  "Meta Data":          convertCryptoLongTermMetaData(longTermResponse["Meta Data"]),
  "Time Series (Digital Currency Weekly)" : loopConvertDoubleOHLCVObj(longTermResponse["Time Series (Digital Currency Weekly)"])
})
const convertCryptoMonthly = (longTermResponse: CryptoMonthlyResponse): CryptoMonthlyData => ({
  "Meta Data":          convertCryptoLongTermMetaData(longTermResponse["Meta Data"]),
  "Time Series (Digital Currency Monthly)" : loopConvertDoubleOHLCVObj(longTermResponse["Time Series (Digital Currency Monthly)"])
})

const loopConvertDoubleOHLCVObj = (obj: CryptoDoubleOHLCVResponseObjects): CryptoDoubleOHLCVDataObjects =>
  Object.fromEntries(Object.entries(obj).map(([key, val]) => [key, convertCryptoDoubleOHLCV(val)]));

const convertCryptoDoubleOHLCV = (doubleOhlcv: CryptoDoubleOHLCVResponse): CryptoDoubleOHLCVData => ({
  "1a. open (CNY)":      Number(doubleOhlcv["1a. open (CNY)"]),
  "1b. open (USD)":      Number(doubleOhlcv["1b. open (USD)"]),
  "2a. high (CNY)":      Number(doubleOhlcv["2a. high (CNY)"]),
  "2b. high (USD)":      Number(doubleOhlcv["2b. high (USD)"]),
  "3a. low (CNY)":       Number(doubleOhlcv["3a. low (CNY)"]),
  "3b. low (USD)":       Number(doubleOhlcv["3b. low (USD)"]),
  "4a. close (CNY)":     Number(doubleOhlcv["4a. close (CNY)"]),
  "4b. close (USD)":     Number(doubleOhlcv["4b. close (USD)"]),
  "5. volume":           Number(doubleOhlcv["5. volume"]),
  "6. market cap (USD)": Number(doubleOhlcv["6. market cap (USD)"]),
})




