import {
  AVForexIntradayResponse,
  AVForexLongTermResponse,
  AVForexResponse,
  ForexDailyMetaDataResponse,
  ForexDailyResponse,
  ForexIntradayMetaDataResponse,
  ForexIntradayResponse15Min,
  ForexIntradayResponse1Min,
  ForexIntradayResponse30Min,
  ForexIntradayResponse5Min,
  ForexIntradayResponse60Min,
  ForexMonthlyResponse,
  ForexOHLCResponse,
  ForexOHLCResponseObjects,
  ForexWeeklyAndMonthlyMetaDataResponse,
  ForexWeeklyResponse
} from "../types/alphavantage/responses/forexResponse.types";
import {
  AVForexData,
  AVForexIntradayData,
  AVForexLongTermData,
  ForexDailyData,
  ForexDailyMetaData,
  ForexIntradayData15Min,
  ForexIntradayData1Min,
  ForexIntradayData30Min,
  ForexIntradayData5Min,
  ForexIntradayData60Min,
  ForexIntradayMetaData,
  ForexMonthlyData,
  ForexOHLCData,
  ForexOHLCDataObjects,
  ForexWeeklyAndMonthlyMetaData,
  ForexWeeklyData
} from "../types/alphavantage/data/forexData.types";
import {getDateFromString} from "../utils";

const isIntradayForex = (response: AVForexResponse): response is AVForexIntradayResponse => response !== undefined
const isLongTermForex = (response: AVForexResponse): response is AVForexLongTermResponse => response !== undefined

const is1MinForex = (response: AVForexIntradayResponse): response is ForexIntradayResponse1Min => response !== undefined
const is5MinForex = (response: AVForexIntradayResponse): response is ForexIntradayResponse5Min => response !== undefined
const is15MinForex = (response: AVForexIntradayResponse): response is ForexIntradayResponse15Min => response !== undefined
const is30MinForex = (response: AVForexIntradayResponse): response is ForexIntradayResponse30Min => response !== undefined
const is60MinForex = (response: AVForexIntradayResponse): response is ForexIntradayResponse60Min => response !== undefined
const isDailyForex = (response: AVForexLongTermResponse): response is ForexDailyResponse => response !== undefined
const isWeeklyForex = (response: AVForexLongTermResponse): response is ForexWeeklyResponse => response !== undefined
const isMonthlyForex = (response: AVForexLongTermResponse): response is ForexMonthlyResponse => response !== undefined

export const convertForexToData = (response: AVForexResponse): AVForexData => {
  if (isIntradayForex(response)) return convertForexIntradayData(response)
  if (isLongTermForex(response)) return convertForexLongTermData(response)
  throw new Error(`convertForexIntradayData failed: ${response}`)
}

const convertForexIntradayData = (intraDayResponse: AVForexIntradayResponse): AVForexIntradayData => {
  if (is1MinForex(intraDayResponse)) return convertForexIntraday1MinData(intraDayResponse)
  if (is5MinForex(intraDayResponse)) return convertForexIntraday5MinData(intraDayResponse)
  if (is15MinForex(intraDayResponse)) return convertForexIntraday15MinData(intraDayResponse)
  if (is30MinForex(intraDayResponse)) return convertForexIntraday30MinData(intraDayResponse)
  if (is60MinForex(intraDayResponse)) return convertForexIntraday60MinData(intraDayResponse)
  throw new Error(`convertForexIntradayData failed: ${intraDayResponse}`)
}
const convertForexLongTermData = (longTermResponse: AVForexLongTermResponse): AVForexLongTermData => {
  if (isDailyForex(longTermResponse)) return convertForexDaily(longTermResponse)
  if (isWeeklyForex(longTermResponse)) return convertForexWeekly(longTermResponse)
  if (isMonthlyForex(longTermResponse)) return convertForexMonthly(longTermResponse)
  throw new Error(`convertForexLongTermData failed: ${longTermResponse}`)
}

const convertForexIntraday1MinData = (response: ForexIntradayResponse1Min): ForexIntradayData1Min => ({
  metaData:           convertForexIntradayMetaData(response["Meta Data"]),
  timeSeriesFX1min:   loopConvertOHLCObj(response["Time Series FX (1min)"])
})
const convertForexIntraday5MinData = (response: ForexIntradayResponse5Min): ForexIntradayData5Min => ({
  metaData:            convertForexIntradayMetaData(response["Meta Data"]),
  timeSeriesFX5min:    loopConvertOHLCObj(response["Time Series FX (5min)"])
})
const convertForexIntraday15MinData = (response: ForexIntradayResponse15Min): ForexIntradayData15Min => ({
  metaData:            convertForexIntradayMetaData(response["Meta Data"]),
  timeSeriesFX15min:   loopConvertOHLCObj(response["Time Series FX (15min)"])
})
const convertForexIntraday30MinData = (response: ForexIntradayResponse30Min): ForexIntradayData30Min => ({
  metaData:            convertForexIntradayMetaData(response["Meta Data"]),
  timeSeriesFX30min:   loopConvertOHLCObj(response["Time Series FX (30min)"])
})
const convertForexIntraday60MinData = (response: ForexIntradayResponse60Min): ForexIntradayData60Min => ({
  metaData:             convertForexIntradayMetaData(response["Meta Data"]),
  timeSeriesFX60min:    loopConvertOHLCObj(response["Time Series FX (60min)"])
})

const loopConvertOHLCObj = (obj: ForexOHLCResponseObjects): ForexOHLCDataObjects =>
  Object.fromEntries(Object.entries(obj).map(([key, val]) => [key, convertForexOHLC(val)]));

const convertForexIntradayMetaData = (metaData: ForexIntradayMetaDataResponse): ForexIntradayMetaData => ({
  the1Information:    metaData["1. Information"],
  the2FromSymbol:     metaData["2. From Symbol"],
  the3ToSymbol:       metaData["3. To Symbol"],
  the4LastRefreshed:  getDateFromString(metaData["4. Last Refreshed"]),
  the5Interval:       metaData["5. Interval"],
  the6OutputSize:     metaData["6. Output Size"],
  the7TimeZone:       metaData["7. Time Zone"],
})

const convertForexOHLC = (ohlc: ForexOHLCResponse): ForexOHLCData => ({
  the1Open:  Number(ohlc["1. open"]),
  the2High:  Number(ohlc["2. high"]),
  the3Low:   Number(ohlc["3. low"]),
  the4Close: Number(ohlc["4. close"]),
})

const convertForexDaily = (response: ForexDailyResponse): ForexDailyData => ({
  metaData:                convertForexDailyMetaData(response["Meta Data"]),
  timeSeriesFXDaily:       loopConvertOHLCObj(response["Time Series FX (Daily)"])
})
const convertForexWeekly = (response: ForexWeeklyResponse): ForexWeeklyData => ({
  metaData:                convertForexLongTermMetaData(response["Meta Data"]),
  timeSeriesFXWeekly:      loopConvertOHLCObj(response["Time Series FX (Weekly)"])
})
const convertForexMonthly = (response: ForexMonthlyResponse): ForexMonthlyData => ({
  metaData:                convertForexLongTermMetaData(response["Meta Data"]),
  timeSeriesFXMonthly:     loopConvertOHLCObj(response["Time Series FX (Monthly)"])
})

const convertForexDailyMetaData = (metaData: ForexDailyMetaDataResponse): ForexDailyMetaData => ({
  the1Information:    metaData["1. Information"],
  the2FromSymbol:     metaData["2. From Symbol"],
  the3ToSymbol:       metaData["3. To Symbol"],
  the4OutputSize:     metaData["4. Output Size"],
  the5LastRefreshed:  getDateFromString(metaData["5. Last Refreshed"]),
  the6TimeZone:       metaData["6. Time Zone"],
})

const convertForexLongTermMetaData = (metaData: ForexWeeklyAndMonthlyMetaDataResponse): ForexWeeklyAndMonthlyMetaData => ({
  the1Information:    metaData["1. Information"],
  the2FromSymbol:     metaData["2. From Symbol"],
  the3ToSymbol:       metaData["3. To Symbol"],
  the4LastRefreshed:  getDateFromString(metaData["4. Last Refreshed"]),
  the5TimeZone:       metaData["5. Time Zone"],
})