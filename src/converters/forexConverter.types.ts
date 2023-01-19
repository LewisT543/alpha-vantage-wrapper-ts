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
  "Meta Data":               convertForexIntradayMetaData(response["Meta Data"]),
  "Time Series FX (1min)":   loopConvertOHLCObj(response["Time Series FX (1min)"])
})
const convertForexIntraday5MinData = (response: ForexIntradayResponse5Min): ForexIntradayData5Min => ({
  "Meta Data":                convertForexIntradayMetaData(response["Meta Data"]),
  "Time Series FX (5min)":    loopConvertOHLCObj(response["Time Series FX (5min)"])
})
const convertForexIntraday15MinData = (response: ForexIntradayResponse15Min): ForexIntradayData15Min => ({
  "Meta Data":                convertForexIntradayMetaData(response["Meta Data"]),
  "Time Series FX (15min)":   loopConvertOHLCObj(response["Time Series FX (15min)"])
})
const convertForexIntraday30MinData = (response: ForexIntradayResponse30Min): ForexIntradayData30Min => ({
  "Meta Data":                convertForexIntradayMetaData(response["Meta Data"]),
  "Time Series FX (30min)":   loopConvertOHLCObj(response["Time Series FX (30min)"])
})
const convertForexIntraday60MinData = (response: ForexIntradayResponse60Min): ForexIntradayData60Min => ({
  "Meta Data":                convertForexIntradayMetaData(response["Meta Data"]),
  "Time Series FX (60min)":   loopConvertOHLCObj(response["Time Series FX (60min)"])
})

const loopConvertOHLCObj = (obj: ForexOHLCResponseObjects): ForexOHLCDataObjects =>
  Object.fromEntries(Object.entries(obj).map(([key, val]) => [key, convertForexOHLC(val)]));

const convertForexIntradayMetaData = (metaData: ForexIntradayMetaDataResponse): ForexIntradayMetaData => ({
  "1. Information":    metaData["1. Information"],
  "2. From Symbol":    metaData["2. From Symbol"],
  "3. To Symbol":      metaData["3. To Symbol"],
  "4. Last Refreshed": getDateFromString(metaData["4. Last Refreshed"]),
  "5. Interval":       metaData["5. Interval"],
  "6. Output Size":    metaData["6. Output Size"],
  "7. Time Zone":      metaData["7. Time Zone"],
})

const convertForexOHLC = (ohlc: ForexOHLCResponse): ForexOHLCData => ({
  "1. open":  Number(ohlc["1. open"]),
  "2. high":  Number(ohlc["2. high"]),
  "3. low":   Number(ohlc["3. low"]),
  "4. close": Number(ohlc["4. close"]),
})

const convertForexDaily = (response: ForexDailyResponse): ForexDailyData => ({
  "Meta Data":                convertForexDailyMetaData(response["Meta Data"]),
  "Time Series FX (Daily)":   loopConvertOHLCObj(response["Time Series FX (Daily)"])
})
const convertForexWeekly = (response: ForexWeeklyResponse): ForexWeeklyData => ({
  "Meta Data":                convertForexLongTermMetaData(response["Meta Data"]),
  "Time Series FX (Weekly)":  loopConvertOHLCObj(response["Time Series FX (Weekly)"])
})
const convertForexMonthly = (response: ForexMonthlyResponse): ForexMonthlyData => ({
  "Meta Data":                convertForexLongTermMetaData(response["Meta Data"]),
  "Time Series FX (Monthly)": loopConvertOHLCObj(response["Time Series FX (Monthly)"])
})

const convertForexDailyMetaData = (metaData: ForexDailyMetaDataResponse): ForexDailyMetaData => ({
  "1. Information":    metaData["1. Information"],
  "2. From Symbol":    metaData["2. From Symbol"],
  "3. To Symbol":      metaData["3. To Symbol"],
  "4. Output Size":    metaData["4. Output Size"],
  "5. Last Refreshed": getDateFromString(metaData["5. Last Refreshed"]),
  "6. Time Zone":      metaData["6. Time Zone"],
})

const convertForexLongTermMetaData = (metaData: ForexWeeklyAndMonthlyMetaDataResponse): ForexWeeklyAndMonthlyMetaData => ({
  "1. Information":    metaData["1. Information"],
  "2. From Symbol":    metaData["2. From Symbol"],
  "3. To Symbol":      metaData["3. To Symbol"],
  "4. Last Refreshed": getDateFromString(metaData["4. Last Refreshed"]),
  "5. Time Zone":      metaData["5. Time Zone"],
})