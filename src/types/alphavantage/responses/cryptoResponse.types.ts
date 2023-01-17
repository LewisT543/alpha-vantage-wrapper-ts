import {CurrencyExchangeResponse} from "./avResponse.types";

export type AVCryptoIntradayResponse = CryptoIntradayResponse1Min | CryptoIntradayResponse5Min | CryptoIntradayResponse15Min | CryptoIntradayResponse30Min | CryptoIntradayResponse60Min
export type AVCryptoResponse = CurrencyExchangeResponse | AVCryptoIntradayResponse | CryptoDailyResponse | CryptoWeeklyResponse | CryptoMonthlyResponse

interface WithCryptoIntradayMetaData { "Meta Data": CryptoIntradayMetaData; }

export interface CryptoIntradayResponse1Min extends WithCryptoIntradayMetaData { "Time Series Crypto (1min)": { [key: string]: CryptoOHLCVData }; }
export interface CryptoIntradayResponse5Min extends WithCryptoIntradayMetaData { "Time Series Crypto (5min)": { [key: string]: CryptoOHLCVData }; }
export interface CryptoIntradayResponse15Min extends WithCryptoIntradayMetaData { "Time Series Crypto (15min)": { [key: string]: CryptoOHLCVData }; }
export interface CryptoIntradayResponse30Min extends WithCryptoIntradayMetaData { "Time Series Crypto (30min)": { [key: string]: CryptoOHLCVData }; }
export interface CryptoIntradayResponse60Min extends WithCryptoIntradayMetaData { "Time Series Crypto (60min)": { [key: string]: CryptoOHLCVData }; }

export interface CryptoIntradayMetaData {
  "1. Information":           string;
  "2. Digital Currency Code": string;
  "3. Digital Currency Name": string;
  "4. Market Code":           string;
  "5. Market Name":           string;
  "6. Last Refreshed":        Date;
  "7. Interval":              string;
  "8. Output Size":           string;
  "9. Time Zone":             string;
}

export interface CryptoOHLCVData {
  "1. open":  string;
  "2. high":  string;
  "3. low":   string;
  "4. close": string;
  "5. volume": number;
}

interface WithLongtermMetaData { "Meta Data": CryptoLongtermMetaData; }
export interface CryptoDailyResponse extends WithLongtermMetaData { "Time Series (Digital Currency Daily)": { [key: string]: CryptoDoubleOHLCVData }; }
export interface CryptoWeeklyResponse extends WithLongtermMetaData  { "Time Series (Digital Currency Weekly)": { [key: string]: CryptoDoubleOHLCVData }; }
export interface CryptoMonthlyResponse extends WithLongtermMetaData { "Time Series (Digital Currency Monthly)": { [key: string]: CryptoDoubleOHLCVData }; }

export interface CryptoLongtermMetaData {
  "1. Information":           string;
  "2. Digital Currency Code": string;
  "3. Digital Currency Name": string;
  "4. Market Code":           string;
  "5. Market Name":           string;
  "6. Last Refreshed":        Date;
  "7. Time Zone":             string;
}

export interface CryptoDoubleOHLCVData {
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



