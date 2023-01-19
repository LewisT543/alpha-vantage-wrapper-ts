import {CurrencyExchangeResponse} from "./avResponse.types";
import {AVTimeSeriesIntervalEnum} from "../../enums";

export type AVCryptoLongTermResponse = CryptoDailyResponse | CryptoWeeklyResponse | CryptoMonthlyResponse
export type AVCryptoIntradayResponse = CryptoIntradayResponse1Min | CryptoIntradayResponse5Min | CryptoIntradayResponse15Min | CryptoIntradayResponse30Min | CryptoIntradayResponse60Min
export type AVCryptoResponse = CurrencyExchangeResponse | AVCryptoIntradayResponse | AVCryptoLongTermResponse

interface WithCryptoIntradayMetaData { "Meta Data": CryptoIntradayMetaDataResponse; }

export type CryptoOHLCVResponseObjects = { [key: string]: CryptoOHLCVResponse };
export interface CryptoIntradayResponse1Min extends WithCryptoIntradayMetaData { "Time Series Crypto (1min)": CryptoOHLCVResponseObjects; }
export interface CryptoIntradayResponse5Min extends WithCryptoIntradayMetaData { "Time Series Crypto (5min)": CryptoOHLCVResponseObjects; }
export interface CryptoIntradayResponse15Min extends WithCryptoIntradayMetaData { "Time Series Crypto (15min)": CryptoOHLCVResponseObjects; }
export interface CryptoIntradayResponse30Min extends WithCryptoIntradayMetaData { "Time Series Crypto (30min)": CryptoOHLCVResponseObjects; }
export interface CryptoIntradayResponse60Min extends WithCryptoIntradayMetaData { "Time Series Crypto (60min)": CryptoOHLCVResponseObjects; }

export interface CryptoIntradayMetaDataResponse {
  "1. Information":           string;
  "2. Digital Currency Code": string;
  "3. Digital Currency Name": string;
  "4. Market Code":           string;
  "5. Market Name":           string;
  "6. Last Refreshed":        string;
  "7. Interval":              AVTimeSeriesIntervalEnum;
  "8. Output Size":           string;
  "9. Time Zone":             string;
}

export interface CryptoOHLCVResponse {
  "1. open":  string;
  "2. high":  string;
  "3. low":   string;
  "4. close": string;
  "5. volume": number;
}

export type CryptoDoubleOHLCVResponseObjects = { [key: string]: CryptoDoubleOHLCVResponse };
interface WithLongtermMetaData { "Meta Data": CryptoLongtermMetaDataResponse; }
export interface CryptoDailyResponse extends WithLongtermMetaData { "Time Series (Digital Currency Daily)": CryptoDoubleOHLCVResponseObjects }
export interface CryptoWeeklyResponse extends WithLongtermMetaData  { "Time Series (Digital Currency Weekly)": CryptoDoubleOHLCVResponseObjects }
export interface CryptoMonthlyResponse extends WithLongtermMetaData { "Time Series (Digital Currency Monthly)": CryptoDoubleOHLCVResponseObjects }

export interface CryptoLongtermMetaDataResponse {
  "1. Information":           string;
  "2. Digital Currency Code": string;
  "3. Digital Currency Name": string;
  "4. Market Code":           string;
  "5. Market Name":           string;
  "6. Last Refreshed":        string;
  "7. Time Zone":             string;
}

export interface CryptoDoubleOHLCVResponse {
  "1a. open (CNY)":      string;
  "1b. open (USD)":      string;
  "2a. high (CNY)":      string;
  "2b. high (USD)":      string;
  "3a. low (CNY)":       string;
  "3b. low (USD)":       string;
  "4a. close (CNY)":     string;
  "4b. close (USD)":     string;
  "5. volume":           string;
  "6. market cap (USD)": string;
}



