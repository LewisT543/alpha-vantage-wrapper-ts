import {
  AVStocksIntradayResponse,
  AVStocksLongTermResponse,
  AVStocksResponse, StockDailyResponse,
  StockIntradayResponse15Min,
  StockIntradayResponse1Min,
  StockIntradayResponse30Min,
  StockIntradayResponse5Min, StockIntradayResponse60Min, StockMonthlyResponse, StockWeeklyResponse
} from "../types/alphavantage/responses/StockResponse.types";


const isIntradayStock = (response: AVStocksResponse): response is AVStocksIntradayResponse => response !== undefined
const isLongTermStock = (response: AVStocksResponse): response is AVStocksLongTermResponse => response !== undefined

const is1MinStock = (response: AVStocksIntradayResponse): response is StockIntradayResponse1Min => response !== undefined
const is5MinStock = (response: AVStocksIntradayResponse): response is StockIntradayResponse5Min => response !== undefined
const is15MinStock = (response: AVStocksIntradayResponse): response is StockIntradayResponse15Min => response !== undefined
const is30MinStock = (response: AVStocksIntradayResponse): response is StockIntradayResponse30Min => response !== undefined
const is60MinStock = (response: AVStocksIntradayResponse): response is StockIntradayResponse60Min => response !== undefined
const isDailyStock = (response: AVStocksLongTermResponse): response is StockDailyResponse => response !== undefined
const isWeeklyStock = (response: AVStocksLongTermResponse): response is StockWeeklyResponse => response !== undefined
const isMonthlyStock = (response: AVStocksLongTermResponse): response is StockMonthlyResponse => response !== undefined