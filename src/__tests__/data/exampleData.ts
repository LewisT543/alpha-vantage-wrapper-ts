import {BalanceSheetResponse} from "../../types/alphavantage/responses/fundamentalsResponse.types";
import {StocksDailyAdjustedResponse} from "../../types/alphavantage/responses/stockResponse.types";
import {StocksDailyAdjustedData} from "../../types/alphavantage/data/stockData.types";
import {BalanceSheetData} from "../../types/alphavantage/data/fundamentalsData.types";
import {NewsResponse} from "../../types/alphavantage/responses/alphaIntelResponse.types";
import {NewsData} from "../../types/alphavantage/data/alphaIntelData.types";
import {ForexIntradayResponse5Min} from "../../types/alphavantage/responses/forexResponse.types";
import {ForexIntradayData5Min} from "../../types/alphavantage/data/forexData.types";
import {CryptoDailyResponse} from "../../types/alphavantage/responses/cryptoResponse.types";
import {CryptoDailyData} from "../../types/alphavantage/data/cryptoData.types";
import {CommoditiesResponse} from "../../types/alphavantage/responses/commoditiesResponse.types";
import {CommoditiesData} from "../../types/alphavantage/data/commoditiesData.types";
import {CurrencyExchangeResponse} from "../../types/alphavantage/responses/avResponse.types";
import {CurrencyExchangeData} from "../../types/alphavantage/data/avData.types";
import {EconIndResponse} from "../../types/alphavantage/responses/econIndResponse.types";
import {TimeSeriesDailyAdjustedQuery} from "../../types/alphavantage/queries/stockQueries.types";
import {
  AlphaVantageCommoditiesFn,
  AlphaVantageCryptoFn,
  AlphaVantageEconIndsEnum,
  AlphaVantageExchangeFn,
  AlphaVantageForexFn,
  AlphaVantageFundamentalsFnEnum,
  AlphaVantageIntelFnEnum,
  AlphaVantageStockFnEnum,
  AVTimeSeriesIntervalEnum
} from "../../types/enums";
import {AlphaIntelNewsQuery} from "../../types/alphavantage/queries/alphaIntelQueries.types";
import {FundamentalsBalanceSheetQuery} from "../../types/alphavantage/queries/fundamentalsQueries.types";
import {ForexIntradayQuery} from "../../types/alphavantage/queries/forexQueries.types";
import {CryptoDailyQuery} from "../../types/alphavantage/queries/cryptoQueries.types";
import {CommoditiesAluminiumQuery} from "../../types/alphavantage/queries/commoditiesQueries.types";
import {EconIndCPIQuery} from "../../types/alphavantage/queries/econIndQueries.types";
import {CurrencyExchangeQuery} from "../../types/alphavantage/queries/avQuery.types";
import {getDateFromString} from "../../utils";
import {DATE_FORMATS} from "../../types/constants";

const timeSeriesDailyAdjustedTestQuery: TimeSeriesDailyAdjustedQuery = {
  fn: AlphaVantageStockFnEnum.TIME_SERIES_DAILY_ADJUSTED,
  symbol: 'IBM',
  outputSize: 'compact',
  dataType: 'json',
  apiKey: 'demo'
}
const alphaIntelNewsTestQuery: AlphaIntelNewsQuery = {
  fn: AlphaVantageIntelFnEnum.NEWS_SENTIMENT,
  apiKey: 'demo'
}
const fundamentalsBalanceSheetTestQuery: FundamentalsBalanceSheetQuery = {
  fn: AlphaVantageFundamentalsFnEnum.BALANCE_SHEET,
  symbol: 'IBM',
  apiKey: 'demo'
}
const forexIntradayTestQuery: ForexIntradayQuery = {
  fn: AlphaVantageForexFn.FX_INTRADAY,
  fromCurrency: 'USD',
  toCurrency: 'GBP',
  outputSize: 'compact',
  interval: AVTimeSeriesIntervalEnum.FIVE_MIN,
  apiKey: 'demo'
}
const cryptoDailyTestQuery: CryptoDailyQuery = {
  fn: AlphaVantageCryptoFn.DIGITAL_CURRENCY_DAILY,
  symbol: 'ETH',
  market: 'USD',
  apiKey: 'demo'
}
const commoditiesAluminiumTestQuery: CommoditiesAluminiumQuery = {
  fn: AlphaVantageCommoditiesFn.ALUMINUM,
  dataType: 'json',
  apiKey: 'demo'
}
const econIndCPITestQuery: EconIndCPIQuery = {
  fn: AlphaVantageEconIndsEnum.CPI,
  interval: "monthly",
  apiKey: 'demo'
}
const currencyExchangeTestQuery: CurrencyExchangeQuery = {
  fn: AlphaVantageExchangeFn.CURRENCY_EXCHANGE_RATE,
  fromCurrency: 'USD',
  toCurrency: 'GBP',
  apiKey: 'demo'
}

const fundamentalsBalanceSheet: BalanceSheetResponse = {
  "symbol": "IBM",
  "annualReports": [
    {
      "fiscalDateEnding": "2021-12-31",
      "reportedCurrency": "USD",
      "totalAssets": "132001000000",
      "totalCurrentAssets": "29539000000",
      "cashAndCashEquivalentsAtCarryingValue": "6650000000",
      "cashAndShortTermInvestments": "6650000000",
      "inventory": "1649000000",
      "currentNetReceivables": "14977000000",
      "totalNonCurrentAssets": "101786000000",
      "propertyPlantEquipment": "5694000000",
      "accumulatedDepreciationAmortizationPPE": "14390000000",
      "intangibleAssets": "68154000000",
      "intangibleAssetsExcludingGoodwill": "12511000000",
      "goodwill": "55643000000",
      "investments": "199000000",
      "longTermInvestments": "159000000",
      "shortTermInvestments": "600000000",
      "otherCurrentAssets": "5663000000",
      "otherNonCurrentAssets": "None",
      "totalLiabilities": "113005000000",
      "totalCurrentLiabilities": "33619000000",
      "currentAccountsPayable": "3955000000",
      "deferredRevenue": "16095000000",
      "currentDebt": "13551000000",
      "shortTermDebt": "6787000000",
      "totalNonCurrentLiabilities": "90188000000",
      "capitalLeaseObligations": "63000000",
      "longTermDebt": "56193000000",
      "currentLongTermDebt": "6728000000",
      "longTermDebtNoncurrent": "44917000000",
      "shortLongTermDebtTotal": "110496000000",
      "otherCurrentLiabilities": "9386000000",
      "otherNonCurrentLiabilities": "13996000000",
      "totalShareholderEquity": "18901000000",
      "treasuryStock": "169392000000",
      "retainedEarnings": "154209000000",
      "commonStock": "57319000000",
      "commonStockSharesOutstanding": "898068600"
    },
  ],
  "quarterlyReports": [
    {
      "fiscalDateEnding": "2022-09-30",
      "reportedCurrency": "USD",
      "totalAssets": "125850000000",
      "totalCurrentAssets": "28999000000",
      "cashAndCashEquivalentsAtCarryingValue": "7816000000",
      "cashAndShortTermInvestments": "7816000000",
      "inventory": "1794000000",
      "currentNetReceivables": "6289000000",
      "totalNonCurrentAssets": "95237000000",
      "propertyPlantEquipment": "5150000000",
      "accumulatedDepreciationAmortizationPPE": "13525000000",
      "intangibleAssets": "65185000000",
      "intangibleAssetsExcludingGoodwill": "10967000000",
      "goodwill": "54218000000",
      "investments": "None",
      "longTermInvestments": "1614000000",
      "shortTermInvestments": "1753000000",
      "otherCurrentAssets": "4928000000",
      "otherNonCurrentAssets": "None",
      "totalLiabilities": "105703000000",
      "totalCurrentLiabilities": "30466000000",
      "currentAccountsPayable": "3806000000",
      "deferredRevenue": "14157000000",
      "currentDebt": "11678000000",
      "shortTermDebt": "5937000000",
      "totalNonCurrentLiabilities": "75236000000",
      "capitalLeaseObligations": "2947000000",
      "longTermDebt": "46685000000",
      "currentLongTermDebt": "5741000000",
      "longTermDebtNoncurrent": "44942000000",
      "shortLongTermDebtTotal": "76684000000",
      "otherCurrentLiabilities": "7073000000",
      "otherNonCurrentLiabilities": "13413000000",
      "totalShareholderEquity": "20076000000",
      "treasuryStock": "169514000000",
      "retainedEarnings": "148611000000",
      "commonStock": "58117000000",
      "commonStockSharesOutstanding": "904076831"
    },
  ]
}
const fundamentalsBalanceSheetData: BalanceSheetData = {
  symbol: 'IBM',
  annualReports: [
    {
      fiscalDateEnding: getDateFromString("2021-12-31", DATE_FORMATS.yearMonthDay),
      reportedCurrency: 'USD',
      totalAssets: 132001000000,
      totalCurrentAssets: 29539000000,
      cashAndCashEquivalentsAtCarryingValue: 6650000000,
      cashAndShortTermInvestments: 6650000000,
      inventory: 1649000000,
      currentNetReceivables: 14977000000,
      totalNonCurrentAssets: 101786000000,
      propertyPlantEquipment: 5694000000,
      accumulatedDepreciationAmortizationPPE: 14390000000,
      intangibleAssets: 68154000000,
      intangibleAssetsExcludingGoodwill: 12511000000,
      goodwill: 55643000000,
      investments: 199000000,
      longTermInvestments: 159000000,
      shortTermInvestments: 600000000,
      otherCurrentAssets: 5663000000,
      otherNonCurrentAssets: NaN,
      totalLiabilities: 113005000000,
      totalCurrentLiabilities: 33619000000,
      currentAccountsPayable: 3955000000,
      deferredRevenue: 16095000000,
      currentDebt: 13551000000,
      shortTermDebt: 6787000000,
      totalNonCurrentLiabilities: 90188000000,
      capitalLeaseObligations: 63000000,
      longTermDebt: 56193000000,
      currentLongTermDebt: 6728000000,
      longTermDebtNoncurrent: 44917000000,
      shortLongTermDebtTotal: 110496000000,
      otherCurrentLiabilities: 9386000000,
      otherNonCurrentLiabilities: 13996000000,
      totalShareholderEquity: 18901000000,
      treasuryStock: 169392000000,
      retainedEarnings: 154209000000,
      commonStock: 57319000000,
      commonStockSharesOutstanding: 898068600
    }
  ],
  quarterlyReports: [
    {
      fiscalDateEnding: getDateFromString("2022-09-30", DATE_FORMATS.yearMonthDay),
      reportedCurrency: 'USD',
      totalAssets: 125850000000,
      totalCurrentAssets: 28999000000,
      cashAndCashEquivalentsAtCarryingValue: 7816000000,
      cashAndShortTermInvestments: 7816000000,
      inventory: 1794000000,
      currentNetReceivables: 6289000000,
      totalNonCurrentAssets: 95237000000,
      propertyPlantEquipment: 5150000000,
      accumulatedDepreciationAmortizationPPE: 13525000000,
      intangibleAssets: 65185000000,
      intangibleAssetsExcludingGoodwill: 10967000000,
      goodwill: 54218000000,
      investments: NaN,
      longTermInvestments: 1614000000,
      shortTermInvestments: 1753000000,
      otherCurrentAssets: 4928000000,
      otherNonCurrentAssets: NaN,
      totalLiabilities: 105703000000,
      totalCurrentLiabilities: 30466000000,
      currentAccountsPayable: 3806000000,
      deferredRevenue: 14157000000,
      currentDebt: 11678000000,
      shortTermDebt: 5937000000,
      totalNonCurrentLiabilities: 75236000000,
      capitalLeaseObligations: 2947000000,
      longTermDebt: 46685000000,
      currentLongTermDebt: 5741000000,
      longTermDebtNoncurrent: 44942000000,
      shortLongTermDebtTotal: 76684000000,
      otherCurrentLiabilities: 7073000000,
      otherNonCurrentLiabilities: 13413000000,
      totalShareholderEquity: 20076000000,
      treasuryStock: 169514000000,
      retainedEarnings: 148611000000,
      commonStock: 58117000000,
      commonStockSharesOutstanding: 904076831
    }
  ]
}

const stocksDailyAdjTimeSeries: StocksDailyAdjustedResponse = {
  "Meta Data": {
    "1. Information": "Daily Time Series with Splits and Dividend Events",
    "2. Symbol": "IBM",
    "3. Last Refreshed": "2023-02-01",
    "4. Output Size": "Compact",
    "5. Time Zone": "US/Eastern"
  },
  "Time Series (Daily)": {
    "2023-02-01": {
      "1. open": "134.49",
      "2. high": "135.79",
      "3. low": "132.8",
      "4. close": "135.09",
      "5. adjusted close": "135.09",
      "6. volume": "5428898",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
    },
    "2023-01-31": {
      "1. open": "135.5",
      "2. high": "135.65",
      "3. low": "133.76",
      "4. close": "134.73",
      "5. adjusted close": "134.73",
      "6. volume": "7206448",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
    },
  }
}
const stocksDailyAdjTimeSeriesData: StocksDailyAdjustedData = {
  metaData: {
    the1Information: 'Daily Time Series with Splits and Dividend Events',
    the2Symbol: 'IBM',
    the3LastRefreshed: getDateFromString("2023-02-01", DATE_FORMATS.yearMonthDay),
    the4OutputSize: 'Compact',
    the5TimeZone: 'US/Eastern'
  },
  timeSeriesDaily: {
    '2023-02-01': {
      the1Open: 134.49,
        the2High: 135.79,
        the3Low: 132.8,
        the4Close: 135.09,
        the5AdjustedClose: 135.09,
        the6Volume: 5428898,
        the7DividendAmount: 0,
        the8SplitCoefficient: 1
    },
    '2023-01-31': {
      the1Open: 135.5,
        the2High: 135.65,
        the3Low: 133.76,
        the4Close: 134.73,
        the5AdjustedClose: 134.73,
        the6Volume: 7206448,
        the7DividendAmount: 0,
        the8SplitCoefficient: 1
    }
  }
}

const alphaIntelNewsResponse: NewsResponse = {
  "items": "50",
  "sentiment_score_definition": "x <= -0.35: Bearish; -0.35 < x <= -0.15: Somewhat-Bearish; -0.15 < x < 0.15: Neutral; 0.15 <= x < 0.35: Somewhat_Bullish; x >= 0.35: Bullish",
  "relevance_score_definition": "0 < x <= 1, with a higher score indicating higher relevance.",
  "feed": [
    {
      "title": "This trader nailed two big market calls in 2022. She says investors are 'being paid to wait' so should steer clear of stocks for 2023.",
      "url": "https://www.marketwatch.com/story/this-trader-nailed-two-big-market-calls-in-2022-she-says-investors-are-being-paid-to-wait-so-should-steer-clear-of-stocks-for-2023-11675338394",
      "time_published": "20230202T114600",
      "authors": [
        "Barbara Kollmeyer"
      ],
      "summary": "In our call of the day, LaDuc says cash is the place to be and that investors are \"being paid to wait. They're getting very favorable 4.5% on their sitting cash.\" ...",
      "banner_image": "https://images.mktw.net/im-715650?width=700&height=462",
      "source": "MarketWatch",
      "category_within_source": "Top Stories",
      "source_domain": "www.marketwatch.com",
      "topics": [
        {
          "topic": "Technology",
          "relevance_score": "0.25"
        },
        {
          "topic": "Finance",
          "relevance_score": "0.25"
        },
        {
          "topic": "Economy - Monetary",
          "relevance_score": "0.576289"
        },
        {
          "topic": "Retail & Wholesale",
          "relevance_score": "0.25"
        },
        {
          "topic": "Financial Markets",
          "relevance_score": "0.972756"
        },
        {
          "topic": "Manufacturing",
          "relevance_score": "0.25"
        },
        {
          "topic": "Earnings",
          "relevance_score": "0.857896"
        }
      ],
      "overall_sentiment_score": 0.007264,
      "overall_sentiment_label": "Neutral",
      "ticker_sentiment": [
        {
          "ticker": "BLK",
          "relevance_score": "0.045224",
          "ticker_sentiment_score": "0.0",
          "ticker_sentiment_label": "Neutral"
        },
        {
          "ticker": "META",
          "relevance_score": "0.090304",
          "ticker_sentiment_score": "0.313531",
          "ticker_sentiment_label": "Somewhat-Bullish"
        },
        {
          "ticker": "AAPL",
          "relevance_score": "0.090304",
          "ticker_sentiment_score": "0.0",
          "ticker_sentiment_label": "Neutral"
        },
        {
          "ticker": "SBUX",
          "relevance_score": "0.090304",
          "ticker_sentiment_score": "0.0",
          "ticker_sentiment_label": "Neutral"
        },
        {
          "ticker": "QCOM",
          "relevance_score": "0.090304",
          "ticker_sentiment_score": "0.0",
          "ticker_sentiment_label": "Neutral"
        },
        {
          "ticker": "HON",
          "relevance_score": "0.090304",
          "ticker_sentiment_score": "0.0",
          "ticker_sentiment_label": "Neutral"
        },
        {
          "ticker": "BIDU",
          "relevance_score": "0.090304",
          "ticker_sentiment_score": "0.0",
          "ticker_sentiment_label": "Neutral"
        },
        {
          "ticker": "FOREX:USD",
          "relevance_score": "0.045224",
          "ticker_sentiment_score": "-0.007929",
          "ticker_sentiment_label": "Neutral"
        },
        {
          "ticker": "CRYPTO:XCP",
          "relevance_score": "0.045224",
          "ticker_sentiment_score": "0.082035",
          "ticker_sentiment_label": "Neutral"
        }
      ]
    },
    {
      "title": "Nasdaq Futures Fly As Meta Keeps Tech Earnings' Buoyancy Intact: Will Apple, Amazon, Alphabet Toe In Line?",
      "url": "https://www.benzinga.com/news/earnings/23/02/30684282/nasdaq-futures-fly-as-meta-keeps-tech-earnings-buoyancy-intact-will-apple-amazon-alphabet-toe-in-li",
      "time_published": "20230202T113423",
      "authors": [
        "Shanthi Rexaline"
      ],
      "summary": "The index futures point to a mixed opening on Thursday, as tech earnings continue to be encouraging. Meta Platform Inc's META strong earnings could set the tempo for the market mood as traders wait to hear from some of its big tech peers after the close.",
      "banner_image": "https://cdn.benzinga.com/files/images/story/2023/02/02/share_market_photo_by_ashdesign_on_shutterstock.jpg?width=1200&height=800&fit=crop",
      "source": "Benzinga",
      "category_within_source": "Trading",
      "source_domain": "www.benzinga.com",
      "topics": [
        {
          "topic": "Life Sciences",
          "relevance_score": "0.142857"
        },
        {
          "topic": "Energy & Transportation",
          "relevance_score": "0.142857"
        },
        {
          "topic": "Technology",
          "relevance_score": "0.142857"
        },
        {
          "topic": "Finance",
          "relevance_score": "0.142857"
        },
        {
          "topic": "Economy - Monetary",
          "relevance_score": "0.928139"
        },
        {
          "topic": "Retail & Wholesale",
          "relevance_score": "0.142857"
        },
        {
          "topic": "Financial Markets",
          "relevance_score": "0.988915"
        },
        {
          "topic": "Manufacturing",
          "relevance_score": "0.142857"
        },
        {
          "topic": "Earnings",
          "relevance_score": "0.795202"
        },
        {
          "topic": "Real Estate & Construction",
          "relevance_score": "0.142857"
        }
      ],
      "overall_sentiment_score": 0.049974,
      "overall_sentiment_label": "Neutral",
      "ticker_sentiment": [
        {
          "ticker": "BABA",
          "relevance_score": "0.093836",
          "ticker_sentiment_score": "-0.062628",
          "ticker_sentiment_label": "Neutral"
        },
        {
          "ticker": "HUM",
          "relevance_score": "0.093836",
          "ticker_sentiment_score": "0.15725",
          "ticker_sentiment_label": "Somewhat-Bullish"
        },
        {
          "ticker": "AAPL",
          "relevance_score": "0.093836",
          "ticker_sentiment_score": "0.116157",
          "ticker_sentiment_label": "Neutral"
        },
        {
          "ticker": "COP",
          "relevance_score": "0.093836",
          "ticker_sentiment_score": "-0.062628",
          "ticker_sentiment_label": "Neutral"
        },
        {
          "ticker": "F",
          "relevance_score": "0.093836",
          "ticker_sentiment_score": "0.116157",
          "ticker_sentiment_label": "Neutral"
        },
        {
          "ticker": "CAH",
          "relevance_score": "0.093836",
          "ticker_sentiment_score": "-0.062628",
          "ticker_sentiment_label": "Neutral"
        },
        {
          "ticker": "ALGN",
          "relevance_score": "0.093836",
          "ticker_sentiment_score": "0.253534",
          "ticker_sentiment_label": "Somewhat-Bullish"
        },
        {
          "ticker": "IVZ",
          "relevance_score": "0.046999",
          "ticker_sentiment_score": "0.233609",
          "ticker_sentiment_label": "Somewhat-Bullish"
        },
        {
          "ticker": "BMY",
          "relevance_score": "0.093836",
          "ticker_sentiment_score": "-0.062628",
          "ticker_sentiment_label": "Neutral"
        },
        {
          "ticker": "BZH",
          "relevance_score": "0.093836",
          "ticker_sentiment_score": "0.116157",
          "ticker_sentiment_label": "Neutral"
        },
        {
          "ticker": "QCOM",
          "relevance_score": "0.093836",
          "ticker_sentiment_score": "0.116157",
          "ticker_sentiment_label": "Neutral"
        },
        {
          "ticker": "CMA",
          "relevance_score": "0.046999",
          "ticker_sentiment_score": "-0.095415",
          "ticker_sentiment_label": "Neutral"
        },
        {
          "ticker": "LLY",
          "relevance_score": "0.093836",
          "ticker_sentiment_score": "-0.062628",
          "ticker_sentiment_label": "Neutral"
        },
        {
          "ticker": "CVNA",
          "relevance_score": "0.093836",
          "ticker_sentiment_score": "0.0",
          "ticker_sentiment_label": "Neutral"
        },
        {
          "ticker": "AMZN",
          "relevance_score": "0.093836",
          "ticker_sentiment_score": "0.116157",
          "ticker_sentiment_label": "Neutral"
        }
      ]
    },
  ]
}
const alphaIntelNewsData: NewsData = {
  items: 50,
  sentiment_score_definition: 'x <= -0.35: Bearish; -0.35 < x <= -0.15: Somewhat-Bearish; -0.15 < x < 0.15: Neutral; 0.15 <= x < 0.35: Somewhat_Bullish; x >= 0.35: Bullish',
  relevance_score_definition: '0 < x <= 1, with a higher score indicating higher relevance.',
  feed: [
    {
      title: "This trader nailed two big market calls in 2022. She says investors are 'being paid to wait' so should steer clear of stocks for 2023.",
      url: 'https://www.marketwatch.com/story/this-trader-nailed-two-big-market-calls-in-2022-she-says-investors-are-being-paid-to-wait-so-should-steer-clear-of-stocks-for-2023-11675338394',
      time_published: getDateFromString('20230202T114600', DATE_FORMATS.yearMonthDayTTime),
      authors: ["Barbara Kollmeyer"],
      summary: `In our call of the day, LaDuc says cash is the place to be and that investors are "being paid to wait. They're getting very favorable 4.5% on their sitting cash." ...`,
      banner_image: 'https://images.mktw.net/im-715650?width=700&height=462',
      source: 'MarketWatch',
      category_within_source: 'Top Stories',
      source_domain: 'www.marketwatch.com',
      topics: [
        {
          "topic":"Technology",
          "relevance_score":0.25
        },
        {
          "topic":"Finance",
          "relevance_score":0.25
        },
        {
          "topic":"Economy - Monetary",
          "relevance_score":0.576289
        },
        {
          "topic":"Retail & Wholesale",
          "relevance_score":0.25
        },
        {
          "topic":"Financial Markets",
          "relevance_score":0.972756
        },
        {
          "topic":"Manufacturing",
          "relevance_score":0.25
        },
        {
          "topic":"Earnings",
          "relevance_score":0.857896
        }
      ],
      overall_sentiment_score: 0.007264,
      overall_sentiment_label: 'Neutral',
      ticker_sentiment: [
        {
          "ticker":"BLK",
          "relevance_score":0.045224,
          "ticker_sentiment_score":0,
          "ticker_sentiment_label":"Neutral"
        },
        {
          "ticker":"META",
          "relevance_score":0.090304,
          "ticker_sentiment_score":0.313531,
          "ticker_sentiment_label":"Somewhat-Bullish"
        },
        {
          "ticker":"AAPL",
          "relevance_score":0.090304,
          "ticker_sentiment_score":0,
          "ticker_sentiment_label":"Neutral"
        },
        {
          "ticker":"SBUX",
          "relevance_score":0.090304,
          "ticker_sentiment_score":0,
          "ticker_sentiment_label":"Neutral"
        },
        {
          "ticker":"QCOM",
          "relevance_score":0.090304,
          "ticker_sentiment_score":0,
          "ticker_sentiment_label":"Neutral"
        },
        {
          "ticker":"HON",
          "relevance_score":0.090304,
          "ticker_sentiment_score":0,
          "ticker_sentiment_label":"Neutral"
        },
        {
          "ticker":"BIDU",
          "relevance_score":0.090304,
          "ticker_sentiment_score":0,
          "ticker_sentiment_label":"Neutral"
        },
        {
          "ticker":"FOREX:USD",
          "relevance_score":0.045224,
          "ticker_sentiment_score":-0.007929,
          "ticker_sentiment_label":"Neutral"
        },
        {
          "ticker":"CRYPTO:XCP",
          "relevance_score":0.045224,
          "ticker_sentiment_score":0.082035,
          "ticker_sentiment_label":"Neutral"
        }
      ]
    },
    {
      title: "Nasdaq Futures Fly As Meta Keeps Tech Earnings' Buoyancy Intact: Will Apple, Amazon, Alphabet Toe In Line?",
      url: 'https://www.benzinga.com/news/earnings/23/02/30684282/nasdaq-futures-fly-as-meta-keeps-tech-earnings-buoyancy-intact-will-apple-amazon-alphabet-toe-in-li',
      time_published: new Date('2023-02-02T11:34:00.230Z'),
      authors: ["Shanthi Rexaline"],
      summary: "The index futures point to a mixed opening on Thursday, as tech earnings continue to be encouraging. Meta Platform Inc's META strong earnings could set the tempo for the market mood as traders wait to hear from some of its big tech peers after the close.",
      banner_image: 'https://cdn.benzinga.com/files/images/story/2023/02/02/share_market_photo_by_ashdesign_on_shutterstock.jpg?width=1200&height=800&fit=crop',
      source: 'Benzinga',
      category_within_source: 'Trading',
      source_domain: 'www.benzinga.com',
      topics: [
        {
          "topic":"Life Sciences",
          "relevance_score":0.142857
        },
        {
          "topic":"Energy & Transportation",
          "relevance_score":0.142857
        },
        {
          "topic":"Technology",
          "relevance_score":0.142857
        },
        {
          "topic":"Finance",
          "relevance_score":0.142857
        },
        {
          "topic":"Economy - Monetary",
          "relevance_score":0.928139
        },
        {
          "topic":"Retail & Wholesale",
          "relevance_score":0.142857
        },
        {
          "topic":"Financial Markets",
          "relevance_score":0.988915
        },
        {
          "topic":"Manufacturing",
          "relevance_score":0.142857
        },
        {
          "topic":"Earnings",
          "relevance_score":0.795202
        },
        {
          "topic":"Real Estate & Construction",
          "relevance_score":0.142857
        }
      ],
      overall_sentiment_score: 0.049974,
      overall_sentiment_label: 'Neutral',
      ticker_sentiment: [
        {
          "ticker":"BABA",
          "relevance_score":0.093836,
          "ticker_sentiment_score":-0.062628,
          "ticker_sentiment_label":"Neutral"
        },
        {
          "ticker":"HUM",
          "relevance_score":0.093836,
          "ticker_sentiment_score":0.15725,
          "ticker_sentiment_label":"Somewhat-Bullish"
        },
        {
          "ticker":"AAPL",
          "relevance_score":0.093836,
          "ticker_sentiment_score":0.116157,
          "ticker_sentiment_label":"Neutral"
        },
        {
          "ticker":"COP",
          "relevance_score":0.093836,
          "ticker_sentiment_score":-0.062628,
          "ticker_sentiment_label":"Neutral"
        },
        {
          "ticker":"F",
          "relevance_score":0.093836,
          "ticker_sentiment_score":0.116157,
          "ticker_sentiment_label":"Neutral"
        },
        {
          "ticker":"CAH",
          "relevance_score":0.093836,
          "ticker_sentiment_score":-0.062628,
          "ticker_sentiment_label":"Neutral"
        },
        {
          "ticker":"ALGN",
          "relevance_score":0.093836,
          "ticker_sentiment_score":0.253534,
          "ticker_sentiment_label":"Somewhat-Bullish"
        },
        {
          "ticker":"IVZ",
          "relevance_score":0.046999,
          "ticker_sentiment_score":0.233609,
          "ticker_sentiment_label":"Somewhat-Bullish"
        },
        {
          "ticker":"BMY",
          "relevance_score":0.093836,
          "ticker_sentiment_score":-0.062628,
          "ticker_sentiment_label":"Neutral"
        },
        {
          "ticker":"BZH",
          "relevance_score":0.093836,
          "ticker_sentiment_score":0.116157,
          "ticker_sentiment_label":"Neutral"
        },
        {
          "ticker":"QCOM",
          "relevance_score":0.093836,
          "ticker_sentiment_score":0.116157,
          "ticker_sentiment_label":"Neutral"
        },
        {
          "ticker":"CMA",
          "relevance_score":0.046999,
          "ticker_sentiment_score":-0.095415,
          "ticker_sentiment_label":"Neutral"
        },
        {
          "ticker":"LLY",
          "relevance_score":0.093836,
          "ticker_sentiment_score":-0.062628,
          "ticker_sentiment_label":"Neutral"
        },
        {
          "ticker":"CVNA",
          "relevance_score":0.093836,
          "ticker_sentiment_score":0,
          "ticker_sentiment_label":"Neutral"
        },
        {
          "ticker":"AMZN",
          "relevance_score":0.093836,
          "ticker_sentiment_score":0.116157,
          "ticker_sentiment_label":"Neutral"
        }
      ]
    }
  ]
}

const forexIntraday: ForexIntradayResponse5Min = {
  "Meta Data": {
    "1. Information": "FX Intraday (5min) Time Series",
    "2. From Symbol": "EUR",
    "3. To Symbol": "USD",
    "4. Last Refreshed": "2023-02-02 14:30:00",
    "5. Interval": "5min",
    "6. Output Size": "Compact",
    "7. Time Zone": "UTC"
  },
  "Time Series FX (5min)": {
    "2023-02-02 14:30:00": {
      "1. open": "1.09563",
      "2. high": "1.09630",
      "3. low": "1.09500",
      "4. close": "1.09524"
    },
    "2023-02-02 14:25:00": {
      "1. open": "1.09625",
      "2. high": "1.09629",
      "3. low": "1.09500",
      "4. close": "1.09562"
    },
    "2023-02-02 14:20:00": {
      "1. open": "1.09447",
      "2. high": "1.09663",
      "3. low": "1.09420",
      "4. close": "1.09626"
    },
    "2023-02-02 14:15:00": {
      "1. open": "1.09498",
      "2. high": "1.09511",
      "3. low": "1.09340",
      "4. close": "1.09450"
    },
    "2023-02-02 14:10:00": {
      "1. open": "1.09413",
      "2. high": "1.09585",
      "3. low": "1.09350",
      "4. close": "1.09496"
    }
  }
}
const forexIntradayData: ForexIntradayData5Min = {
  "metaData":{
    "the1Information":"FX Intraday (5min) Time Series",
    "the2FromSymbol":"EUR",
    "the3ToSymbol":"USD",
    "the4LastRefreshed": getDateFromString("2023-02-02 14:30:00", DATE_FORMATS.yearMonthDay_Time),
    "the5Interval":"5min",
    "the6OutputSize":"Compact",
    "the7TimeZone":"UTC"
  },
  "timeSeriesFX5min": {
    "2023-02-02 14:30:00": {
      "the1Open": 1.09563,
      "the2High": 1.0963,
      "the3Low": 1.095,
      "the4Close": 1.09524
    },
    "2023-02-02 14:25:00": {
      "the1Open": 1.09625,
      "the2High": 1.09629,
      "the3Low": 1.095,
      "the4Close": 1.09562
    },
    "2023-02-02 14:20:00": {
      "the1Open": 1.09447,
      "the2High": 1.09663,
      "the3Low": 1.0942,
      "the4Close": 1.09626
    },
    "2023-02-02 14:15:00": {
      "the1Open": 1.09498,
      "the2High": 1.09511,
      "the3Low": 1.0934,
      "the4Close": 1.0945
    },
    "2023-02-02 14:10:00": {
      "the1Open": 1.09413,
      "the2High": 1.09585,
      "the3Low": 1.0935,
      "the4Close": 1.09496
    }
  }
}

const cryptoDaily: CryptoDailyResponse = {
  "Meta Data": {
    "1. Information": "Daily Prices and Volumes for Digital Currency",
    "2. Digital Currency Code": "BTC",
    "3. Digital Currency Name": "Bitcoin",
    "4. Market Code": "CNY",
    "5. Market Name": "Chinese Yuan",
    "6. Last Refreshed": "2023-02-02 00:00:00",
    "7. Time Zone": "UTC"
  },
  "Time Series (Digital Currency Daily)": {
    "2023-02-02": {
      "1a. open (CNY)": "159952.07654100",
      "1b. open (USD)": "23731.41000000",
      "2a. high (CNY)": "163481.12550000",
      "2b. high (USD)": "24255.00000000",
      "3a. low (CNY)": "159673.10380200",
      "3b. low (USD)": "23690.02000000",
      "4a. close (CNY)": "161881.43016600",
      "4b. close (USD)": "24017.66000000",
      "5. volume": "37976.29490000",
      "6. market cap (USD)": "37976.29490000"
    },
    "2023-02-01": {
      "1a. open (CNY)": "155865.68871300",
      "1b. open (USD)": "23125.13000000",
      "2a. high (CNY)": "160499.70966600",
      "2b. high (USD)": "23812.66000000",
      "3a. low (CNY)": "153406.22622300",
      "3b. low (USD)": "22760.23000000",
      "4a. close (CNY)": "159960.50166600",
      "4b. close (USD)": "23732.66000000",
      "5. volume": "310790.42271000",
      "6. market cap (USD)": "310790.42271000"
    },
    "2023-01-31": {
      "1a. open (CNY)": "153858.82393800",
      "1b. open (USD)": "22827.38000000",
      "2a. high (CNY)": "157179.13200000",
      "2b. high (USD)": "23320.00000000",
      "3a. low (CNY)": "153099.82127700",
      "3b. low (USD)": "22714.77000000",
      "4a. close (CNY)": "155865.68871300",
      "4b. close (USD)": "23125.13000000",
      "5. volume": "264649.34909000",
      "6. market cap (USD)": "264649.34909000"
    },
  }
}
const cryptoDailyData: CryptoDailyData = {
  "metaData":{
    "the1Information":"Daily Prices and Volumes for Digital Currency",
    "the2DigitalCurrencyCode":"BTC",
    "the3DigitalCurrencyName":"Bitcoin",
    "the4MarketCode":"CNY",
    "the5MarketName":"Chinese Yuan",
    "the6LastRefreshed": getDateFromString("2023-02-02 00:00:00", DATE_FORMATS.yearMonthDay_Time),
    "the7TimeZone":"UTC"
  },
  "timeSeriesDigitalCurrencyDaily":{
    "2023-02-02":{
      "the1AOpenCNY":159952.076541,
      "the1BOpenUSD":23731.41,
      "the2AHighCNY":163481.1255,
      "the2BHighUSD":24255,
      "the3ALowCNY":159673.103802,
      "the3BLowUSD":23690.02,
      "the4ACloseCNY":161881.430166,
      "the4BCloseUSD":24017.66,
      "the5Volume":37976.2949,
      "the6MarketCapUSD":37976.2949
    },
    "2023-02-01":{
      "the1AOpenCNY":155865.688713,
      "the1BOpenUSD":23125.13,
      "the2AHighCNY":160499.709666,
      "the2BHighUSD":23812.66,
      "the3ALowCNY":153406.226223,
      "the3BLowUSD":22760.23,
      "the4ACloseCNY":159960.501666,
      "the4BCloseUSD":23732.66,
      "the5Volume":310790.42271,
      "the6MarketCapUSD":310790.42271
    },
    "2023-01-31":{
      "the1AOpenCNY":153858.823938,
      "the1BOpenUSD":22827.38,
      "the2AHighCNY":157179.132,
      "the2BHighUSD":23320,
      "the3ALowCNY":153099.821277,
      "the3BLowUSD":22714.77,
      "the4ACloseCNY":155865.688713,
      "the4BCloseUSD":23125.13,
      "the5Volume":264649.34909,
      "the6MarketCapUSD":264649.34909
    }
  }
}

const commoditiesAluminium: CommoditiesResponse = {
  "name": "Global Price of Aluminum",
  "interval": "monthly",
  "unit": "dollar per metric ton",
  "data": [
    {
      "date": "2022-11-01",
      "value": "2350.71636363636"
    },
    {
      "date": "2022-10-01",
      "value": "2255.53523809524"
    },
    {
      "date": "2022-09-01",
      "value": "2224.75590909091"
    },
    {
      "date": "2022-08-01",
      "value": "2433.91608695652"
    },
    {
      "date": "2022-07-01",
      "value": "2408.42333333333"
    },
    {
      "date": "2022-06-01",
      "value": "2575.66954545455"
    },
    {
      "date": "2022-05-01",
      "value": "2839.50545454545"
    }
  ]
}
const commoditiesAluminiumData: CommoditiesData = {
  "name":"Global Price of Aluminum",
  "interval":"monthly",
  "unit":"dollar per metric ton",
  "data":[
    {
      "date": getDateFromString("2022-11-01", DATE_FORMATS.yearMonthDay),
      "value":2350.71636363636
    },
    {
      "date": getDateFromString("2022-10-01", DATE_FORMATS.yearMonthDay),
      "value":2255.53523809524
    },
    {
      "date": getDateFromString("2022-09-01", DATE_FORMATS.yearMonthDay),
      "value":2224.75590909091
    },
    {
      "date": getDateFromString("2022-08-01", DATE_FORMATS.yearMonthDay),
      "value":2433.91608695652
    },
    {
      "date": getDateFromString("2022-07-01", DATE_FORMATS.yearMonthDay),
      "value":2408.42333333333
    },
    {
      "date": getDateFromString("2022-06-01", DATE_FORMATS.yearMonthDay),
      "value":2575.66954545455
    },
    {
      "date": getDateFromString("2022-05-01", DATE_FORMATS.yearMonthDay),
      "value":2839.50545454545
    }
  ]
}

const econIndCPI: EconIndResponse = {
  "name": "Consumer Price Index for all Urban Consumers",
  "interval": "monthly",
  "unit": "index 1982-1984=100",
  "data": [
    {
      "date": "2022-12-01",
      "value": "296.797"
    },
    {
      "date": "2022-11-01",
      "value": "297.711"
    },
    {
      "date": "2022-10-01",
      "value": "298.012"
    },
    {
      "date": "2022-09-01",
      "value": "296.808"
    },
    {
      "date": "2022-08-01",
      "value": "296.171"
    },
  ]
}
const econIndCPIData = {
  "name":"Consumer Price Index for all Urban Consumers",
  "interval":"monthly",
  "unit":"index 1982-1984=100",
  "data":[
    {
      "date": getDateFromString("2022-12-01", DATE_FORMATS.yearMonthDay),
      "value":296.797
    },
    {
      "date": getDateFromString("2022-11-01", DATE_FORMATS.yearMonthDay),
      "value":297.711
    },
    {
      "date": getDateFromString("2022-10-01", DATE_FORMATS.yearMonthDay),
      "value":298.012
    },
    {
      "date": getDateFromString("2022-09-01", DATE_FORMATS.yearMonthDay),
      "value":296.808
    },
    {
      "date": getDateFromString("2022-08-01", DATE_FORMATS.yearMonthDay),
      "value":296.171
    }
  ]
}

const currencyExchange: CurrencyExchangeResponse = {
  "Realtime Currency Exchange Rate": {
    "1. From_Currency Code": "USD",
    "2. From_Currency Name": "United States Dollar",
    "3. To_Currency Code": "JPY",
    "4. To_Currency Name": "Japanese Yen",
    "5. Exchange Rate": "128.55100000",
    "6. Last Refreshed": "2023-02-02 14:52:01",
    "7. Time Zone": "UTC",
    "8. Bid Price": "128.54980000",
    "9. Ask Price": "128.55400000"
  }
}
const currencyExchangeData: CurrencyExchangeData = {
  "realtimeCurrencyExchangeRate": {
    "the1FromCurrencyCode":"USD",
    "the2FromCurrencyName":"United States Dollar",
    "the3ToCurrencyCode":"JPY",
    "the4ToCurrencyName":"Japanese Yen",
    "the5ExchangeRate":128.551,
    "the6LastRefreshed": getDateFromString("2023-02-02 14:52:01", DATE_FORMATS.yearMonthDay_Time),
    "the7TimeZone":"UTC",
    "the8BidPrice":128.5498,
    "the9AskPrice":128.554
  }
}

export const TEST_DATA = [
  { name: "stocksDailyAdjTimeSeries",
    qAndUrl: { query: timeSeriesDailyAdjustedTestQuery, url: "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&outputsize=compact&datatype=json&apikey=demo"},
    rAndD: { response: stocksDailyAdjTimeSeries, data: stocksDailyAdjTimeSeriesData }
  },
  { name: "fundamentalsBalanceSheet",
    qAndUrl: { query: fundamentalsBalanceSheetTestQuery, url: "https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=IBM&apikey=demo"},
    rAndD: { response: fundamentalsBalanceSheet, data: fundamentalsBalanceSheetData }
  },
  { name: "alphaIntelNews",
    qAndUrl: { query: alphaIntelNewsTestQuery, url: "https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=demo"},
    rAndD: { response: alphaIntelNewsResponse, data: alphaIntelNewsData }
  },
  { name: "forexIntraday",
    qAndUrl: { query: forexIntradayTestQuery, url: "https://www.alphavantage.co/query?function=FX_INTRADAY&fromcurrency=USD&tocurrency=GBP&outputsize=compact&interval=5min&apikey=demo"},
    rAndD: { response: forexIntraday, data: forexIntradayData }
  },
  { name: "cryptoDaily",
    qAndUrl: { query: cryptoDailyTestQuery, url: "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=ETH&market=USD&apikey=demo"},
    rAndD: { response: cryptoDaily, data: cryptoDailyData }
  },
  { name: "commoditiesAluminium",
    qAndUrl: { query: commoditiesAluminiumTestQuery, url: "https://www.alphavantage.co/query?function=ALUMINUM&datatype=json&apikey=demo"},
    rAndD: { response: commoditiesAluminium, data: commoditiesAluminiumData }
  },
  { name: "econIndCPI",
    qAndUrl: { query: econIndCPITestQuery, url: "https://www.alphavantage.co/query?function=CPI&interval=monthly&apikey=demo"},
    rAndD: { response: econIndCPI, data: econIndCPIData }
  },
  { name: "currencyExchange",
    qAndUrl: { query: currencyExchangeTestQuery, url: "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&fromcurrency=USD&tocurrency=GBP&apikey=demo"},
    rAndD: { response: currencyExchange, data: currencyExchangeData }
  }
]
