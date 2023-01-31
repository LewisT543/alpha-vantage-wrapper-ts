import {
  AVStocksIntradayResponse,
  AVStocksLongTermAdjustedResponse,
  AVStocksLongTermResponse,
  AVStocksResponse, BestMatchResponse, GlobalQuoteInnerResponse, GlobalQuoteResponse, SearchResponse,
  StocksDailyAdjustedResponse, StocksDailyMetaDataResponse,
  StocksDailyResponse,
  StocksIntradayMetaDataResponse,
  StocksIntradayResponse15Min,
  StocksIntradayResponse1Min,
  StocksIntradayResponse30Min,
  StocksIntradayResponse5Min,
  StocksIntradayResponse60Min, StocksLongtermMetaDataResponse,
  StocksMonthlyAdjustedResponse,
  StocksMonthlyResponse, StocksOHLCVDailyAdjustedResponse, StocksOHLCVDailyAdjustedResponseObjects,
  StocksOHLCVDataResponse, StocksOHLCVLongtermAdjustedResponse, StocksOHLCVLongtermAdjustedResponseObjects,
  StocksOHLCVResponseObjects,
  StocksWeeklyAdjustedResponse,
  StocksWeeklyResponse
} from "../types/alphavantage/responses/stockResponse.types";
import {
  AVStockIntradayData,
  AVStocksData,
  AVStocksLongTermAdjustedData,
  AVStocksLongTermData, BestMatchData, GlobalQuoteData, GlobalQuoteInnerData, SearchData,
  StocksDailyAdjustedData,
  StocksDailyData,
  StocksDailyMetaData,
  StocksIntradayData15Min,
  StocksIntradayData1Min,
  StocksIntradayData30Min,
  StocksIntradayData5Min,
  StocksIntradayData60Min,
  StocksIntradayMetaData, StocksLongtermMetaData,
  StocksMonthlyAdjustedData,
  StocksMonthlyData,
  StocksOHLCVDailyAdjDataObjects,
  StocksOHLCVDailyAdjustedData,
  StocksOHLCVData,
  StocksOHLCVDataObjects, StocksOHLCVLongtermAdjustedData, StocksOHLCVLongtermAdjustedDataObjects,
  StocksWeeklyAdjustedData,
  StocksWeeklyData
} from "../types/alphavantage/data/stockData.types";
import {convertPctStr, getDateFromString} from "../utils";


const isIntradayStocks = (response: AVStocksResponse): response is AVStocksIntradayResponse => response !== undefined
const isLongTermStocks = (response: AVStocksResponse): response is AVStocksLongTermResponse => response !== undefined
const isLongTermAdjustedStocks = (response: AVStocksResponse): response is AVStocksLongTermAdjustedResponse => response !== undefined
const isGlobalQuote = (response: AVStocksResponse): response is GlobalQuoteResponse => response !== undefined
const isSearch = (response: AVStocksResponse): response is SearchResponse => response !== undefined

const is1MinStocks = (response: AVStocksIntradayResponse): response is StocksIntradayResponse1Min => response !== undefined
const is5MinStocks = (response: AVStocksIntradayResponse): response is StocksIntradayResponse5Min => response !== undefined
const is15MinStocks = (response: AVStocksIntradayResponse): response is StocksIntradayResponse15Min => response !== undefined
const is30MinStocks = (response: AVStocksIntradayResponse): response is StocksIntradayResponse30Min => response !== undefined
const is60MinStocks = (response: AVStocksIntradayResponse): response is StocksIntradayResponse60Min => response !== undefined
const isDailyStocks = (response: AVStocksLongTermResponse): response is StocksDailyResponse => response !== undefined
const isDailyAdjustedStocks = (response: AVStocksLongTermAdjustedResponse): response is StocksDailyAdjustedResponse => response !== undefined
const isWeeklyStocks = (response: AVStocksLongTermResponse): response is StocksWeeklyResponse => response !== undefined
const isWeeklyAdjustedStocks = (response: AVStocksLongTermAdjustedResponse): response is StocksWeeklyAdjustedResponse => response !== undefined
const isMonthlyStocks = (response: AVStocksLongTermResponse): response is StocksMonthlyResponse => response !== undefined
const isMonthlyAdjustedStocks = (response: AVStocksLongTermAdjustedResponse): response is StocksMonthlyAdjustedResponse => response !== undefined


export const convertStocksToData = (response: AVStocksResponse): AVStocksData => {
  if (isIntradayStocks(response)) return convertStocksIntradayData(response)
  if (isLongTermStocks(response)) return convertStocksLongTermData(response)
  if (isLongTermAdjustedStocks(response)) return convertStocksLongTermAdjustedData(response)
  if (isGlobalQuote(response)) return convertGlobalQuoteData(response)
  if (isSearch(response)) return convertSearchData(response)
  throw new Error(`convertStocksToData failed: ${response}`)
}

const convertStocksIntradayData = (intradayResponse: AVStocksIntradayResponse): AVStockIntradayData => {
  if (is1MinStocks(intradayResponse)) return convert1MinStocks(intradayResponse)
  if (is5MinStocks(intradayResponse)) return convert5MinStocks(intradayResponse)
  if (is15MinStocks(intradayResponse)) return convert15MinStocks(intradayResponse)
  if (is30MinStocks(intradayResponse)) return convert30MinStocks(intradayResponse)
  if (is60MinStocks(intradayResponse)) return convert60MinStocks(intradayResponse)
  throw new Error(`convertStocksIntradayData failed: ${intradayResponse}`)
}

const convertStocksLongTermData = (longTermResponse: AVStocksLongTermResponse): AVStocksLongTermData => {
  if (isDailyStocks(longTermResponse)) return convertDailyStocks(longTermResponse)
  if (isWeeklyStocks(longTermResponse)) return convertWeeklyStocks(longTermResponse)
  if (isMonthlyStocks(longTermResponse)) return convertMonthlyStocks(longTermResponse)
  throw new Error(`convertStocksLongTermData failed: ${longTermResponse}`)
}

const convertStocksLongTermAdjustedData = (longTermAdjustedResponse: AVStocksLongTermAdjustedResponse): AVStocksLongTermAdjustedData => {
  if (isDailyAdjustedStocks(longTermAdjustedResponse)) return convertDailyAdjustedStocks(longTermAdjustedResponse)
  if (isWeeklyAdjustedStocks(longTermAdjustedResponse)) return convertWeeklyAdjustedStocks(longTermAdjustedResponse)
  if (isMonthlyAdjustedStocks(longTermAdjustedResponse)) return convertMonthlyAdjustedStocks(longTermAdjustedResponse)
  throw new Error(`convertStocksLongTermAdjustedData failed: ${longTermAdjustedResponse}`)
}

const convert1MinStocks = (intradayResponse: StocksIntradayResponse1Min): StocksIntradayData1Min => ({
  metaData:               convertShortTermStocksMetaData(intradayResponse["Meta Data"]),
  "Time Series (1min)":   loopConvertStocksOHLCVObj(intradayResponse["Time Series (1min)"])
})
const convert5MinStocks = (intradayResponse: StocksIntradayResponse5Min): StocksIntradayData5Min => ({
  metaData:               convertShortTermStocksMetaData(intradayResponse["Meta Data"]),
  "Time Series (5min)":   loopConvertStocksOHLCVObj(intradayResponse["Time Series (5min)"])
})
const convert15MinStocks = (intradayResponse: StocksIntradayResponse15Min): StocksIntradayData15Min => ({
  metaData:               convertShortTermStocksMetaData(intradayResponse["Meta Data"]),
  "Time Series (15min)":  loopConvertStocksOHLCVObj(intradayResponse["Time Series (15min)"])
})
const convert30MinStocks = (intradayResponse: StocksIntradayResponse30Min): StocksIntradayData30Min => ({
  metaData:               convertShortTermStocksMetaData(intradayResponse["Meta Data"]),
  "Time Series (30min)":  loopConvertStocksOHLCVObj(intradayResponse["Time Series (30min)"])
})
const convert60MinStocks = (intradayResponse: StocksIntradayResponse60Min): StocksIntradayData60Min => ({
  metaData:               convertShortTermStocksMetaData(intradayResponse["Meta Data"]),
  "Time Series (60min)":  loopConvertStocksOHLCVObj(intradayResponse["Time Series (60min)"])
})

const convertShortTermStocksMetaData = (metaData: StocksIntradayMetaDataResponse): StocksIntradayMetaData => ({
  the1Information:    metaData["1. Information"],
  the2Symbol:         metaData["2. Symbol"],
  the3LastRefreshed:  getDateFromString(metaData["3. Last Refreshed"]),
  the4Interval:       metaData["4. Interval"],
  the5OutputSize:     metaData["5. Output Size"],
  the6TimeZone:       metaData["6. Time Zone"],
})

const loopConvertStocksOHLCVObj = (obj: StocksOHLCVResponseObjects): StocksOHLCVDataObjects =>
  Object.fromEntries(Object.entries(obj).map(([key, val]) => [key, convertStocksOHLCV(val)]));

const convertStocksOHLCV = (stocksOHLCV:  StocksOHLCVDataResponse): StocksOHLCVData => ({
  the1Open:   Number(stocksOHLCV["1. open"]),
  the2High:   Number(stocksOHLCV["2. high"]),
  the3Low:    Number(stocksOHLCV["3. low"]),
  the4Close:  Number(stocksOHLCV["4. close"]),
  the5Volume: Number(stocksOHLCV["5. volume"]),
})

const convertDailyStocks = (response: StocksDailyResponse): StocksDailyData => ({
  metaData:            convertStocksDailyMetaData(response["Meta Data"]),
  timeSeriesDaily:  loopConvertStocksOHLCVObj(response["Time Series (Daily)"])
})
const convertStocksDailyMetaData = (metaData: StocksDailyMetaDataResponse): StocksDailyMetaData => ({
  the1Information:    metaData["1. Information"],
  the2Symbol:         metaData["2. Symbol"],
  the3LastRefreshed:  getDateFromString(metaData["3. Last Refreshed"]),
  the4OutputSize:     metaData["4. Output Size"],
  the5TimeZone:       metaData["5. Time Zone"],
})


const convertDailyAdjustedStocks = (response: StocksDailyAdjustedResponse): StocksDailyAdjustedData => ({
  metaData:            convertStocksDailyMetaData(response["Meta Data"]),
  timeSeriesDaily:     loopConvertStocksOHLCVAdjObj(response["Time Series (Daily)"])
})

const loopConvertStocksOHLCVAdjObj = (obj: StocksOHLCVDailyAdjustedResponseObjects): StocksOHLCVDailyAdjDataObjects =>
  Object.fromEntries(Object.entries(obj).map(([key, val]) => [key, convertStocksOHLCVAdj(val)]));

const convertStocksOHLCVAdj = (response: StocksOHLCVDailyAdjustedResponse): StocksOHLCVDailyAdjustedData => ({
  the1Open:              Number(response["1. open"]),
  the2High:              Number(response["2. high"]),
  the3Low:               Number(response["3. low"]),
  the4Close:             Number(response["4. close"]),
  the5AdjustedClose:     Number(response["5. adjusted close"]),
  the6Volume:            Number(response["6. volume"]),
  the7DividendAmount:    Number(response["7. dividend amount"]),
  the8SplitCoefficient:  Number(response["8. split coefficient"]),
})

const convertWeeklyStocks = (response: StocksWeeklyResponse): StocksWeeklyData => ({
  metaData:          convertStocksLongtermMetaData(response["Meta Data"]),
  weeklyTimeSeries:  loopConvertStocksOHLCVObj(response["Weekly Time Series"])
})

const convertStocksLongtermMetaData = (metaData: StocksLongtermMetaDataResponse): StocksLongtermMetaData => ({
  the1Information:    metaData["1. Information"],
  the2Symbol:         metaData["2. Symbol"],
  the3LastRefreshed:  getDateFromString(metaData["3. Last Refreshed"]),
  the4TimeZone:       metaData["4. Time Zone"],
})

const convertWeeklyAdjustedStocks = (response: StocksWeeklyAdjustedResponse): StocksWeeklyAdjustedData => ({
  metaData:                    convertStocksLongtermMetaData(response["Meta Data"]),
  weeklyAdjustedTimeSeries:    loopConvertStocksLongtermOHLCVAdjObj(response["Weekly Adjusted Time Series"])
})

const loopConvertStocksLongtermOHLCVAdjObj = (obj: StocksOHLCVLongtermAdjustedResponseObjects): StocksOHLCVLongtermAdjustedDataObjects =>
  Object.fromEntries(Object.entries(obj).map(([key, val]) => [key, convertStocksLongtermOHLCVAdj(val)]));

const convertStocksLongtermOHLCVAdj = (lontermOHCLV: StocksOHLCVLongtermAdjustedResponse): StocksOHLCVLongtermAdjustedData => ({
  the1Open:            Number(lontermOHCLV["1. open"]),
  the2High:            Number(lontermOHCLV["2. high"]),
  the3Low:             Number(lontermOHCLV["3. low"]),
  the4Close:           Number(lontermOHCLV["4. close"]),
  the5AdjustedClose:   Number(lontermOHCLV["5. adjusted close"]),
  the6Volume:          Number(lontermOHCLV["6. volume"]),
  the7DividendAmount:  Number(lontermOHCLV["7. dividend amount"]),
})

const convertMonthlyStocks = (response: StocksMonthlyResponse): StocksMonthlyData => ({
  metaData:            convertStocksLongtermMetaData(response["Meta Data"]),
  monthlyTimeSeries:   loopConvertStocksOHLCVObj(response["Monthly Time Series"])
})
const convertMonthlyAdjustedStocks = (response: StocksMonthlyAdjustedResponse): StocksMonthlyAdjustedData => ({
  metaData:                    convertStocksLongtermMetaData(response["Meta Data"]),
  monthlyAdjustedTimeSeries:   loopConvertStocksLongtermOHLCVAdjObj(response["Monthly Adjusted Time Series"])
})

const convertGlobalQuoteData = (quoteResponse: GlobalQuoteResponse): GlobalQuoteData => ({
  globalQuote:                 convertGlobalInnerData(quoteResponse["Global Quote"])
})

const convertGlobalInnerData = (global: GlobalQuoteInnerResponse): GlobalQuoteInnerData => ({
  the01Symbol:           global["01. symbol"],
  the02Open:             Number(global["02. open"]),
  the03High:             Number(global["03. high"]),
  the04Low:              Number(global["04. low"]),
  the05Price:            Number(global["05. price"]),
  the06Volume:           Number(global["06. volume"]),
  the07LatestTradingDay: getDateFromString(global["07. latest trading day"]),
  the08PreviousClose:    Number(global["08. previous close"]),
  the09Change:           Number(global["09. change"]),
  the10ChangePercent:    Number(convertPctStr(global["10. change percent"])),
})

const convertBestMatch = (bestMatch: BestMatchResponse): BestMatchData => ({
  the1Symbol:      bestMatch["1. symbol"],
  the2Name:        bestMatch["2. name"],
  the3Type:        bestMatch["3. type"],
  the4Region:      bestMatch["4. region"],
  the5MarketOpen:  bestMatch["5. marketOpen"],
  the6MarketClose: bestMatch["6. marketClose"],
  the7Timezone:    bestMatch["7. timezone"],
  the8Currency:    bestMatch["8. currency"],
  the9MatchScore:  Number(bestMatch["9. matchScore"]),
})

const convertSearchData = (searchResponse: SearchResponse): SearchData => ({
  bestMatches:          searchResponse.bestMatches.map(match => convertBestMatch(match))
})