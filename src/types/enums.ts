export enum AVTimeSeriesIntervalEnum {
  ONE_MIN = '1min',
  FIVE_MIN = '5min',
  FIFTEEN_MIN = '15min',
  THIRTY_MIN = '30min',
  SIXTY_MIN = '60min'
}

export enum AVCommoditiesIntervalEnum {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly'
}

export enum AVEconIndIntervalEnum {
  QUARTERLY = 'quarterly',
  ANNUAL = 'annual '
}

export enum AVTreasuryYieldEnum {
  THREE_MONTH = '3month',
  TWO_YEAR = '2year',
  FIVE_YEAR = '5year',
  SEVEN_YEAR = '7year',
  TEN_YEAR = '10year',
  THIRTY_YEAR = '30year'
}

export enum AVIntradaySliceEnum {
  year1month1 = 'year1month1',
  year1month2 = 'year1month2',
  year1month3 = 'year1month3',
  year1month4 = 'year1month4',
  year1month5 = 'year1month5',
  year1month6 = 'year1month6',
  year1month7 = 'year1month7',
  year1month8 = 'year1month8',
  year1month9 = 'year1month9',
  year1month10 = 'year1month10',
  year1month11 = 'year1month11',
  year1month12 = 'year1month12',
  year2month1 = 'year2month1',
  year2month2 = 'year2month2',
  year2month3 = 'year2month3',
  year2month4 = 'year2month4',
  year2month5 = 'year2month5',
  year2month6 = 'year2month6',
  year2month7 = 'year2month7',
  year2month8 = 'year2month8',
  year2month9 = 'year2month9',
  year2month10 = 'year2month10',
  year2month11 = 'year2month11',
  year2month12 = 'year2month12',
}

export enum AlphaVantageNewsTopicsEnum {
  blockchain = 'blockchain',
  earnings = 'earnings',
  ipo = 'ipo',
  mergers_and_acquisitions = 'mergers_and_acquisitions',
  financial_markets = 'financial_markets',
  economy_fiscal = 'economy_fiscal',
  economy_monetary = 'economy_monetary',
  economy_macro = 'economy_macro',
  energy_transportation = 'energy_transportation',
  finance = 'finance',
  life_sciences = 'life_sciences',
  manufacturing = 'manufacturing',
  real_estate = 'real_estate',
  retail_wholesale = 'retail_wholesale',
  technology = 'technology'
}

export enum AlphaVantageNewsSortEnum {
  LATEST = 'LATEST',
  EARLIEST = 'EARLIEST',
  RELEVANCE = 'RELEVANCE'
}

export enum AlphaVantageStockFnEnum {
  TIME_SERIES_INTRADAY = 'TIME_SERIES_INTRADAY',
  TIME_SERIES_INTRADAY_EXTENDED = 'TIME_SERIES_INTRADAY_EXTENDED',
  TIME_SERIES_DAILY = 'TIME_SERIES_DAILY',
  TIME_SERIES_DAILY_ADJUSTED = 'TIME_SERIES_DAILY_ADJUSTED',
  TIME_SERIES_WEEKLY = 'TIME_SERIES_WEEKLY',
  TIME_SERIES_WEEKLY_ADJUSTED = 'TIME_SERIES_WEEKLY_ADJUSTED',
  TIME_SERIES_MONTHLY = 'TIME_SERIES_MONTHLY',
  TIME_SERIES_MONTHLY_ADJUSTED = 'TIME_SERIES_MONTHLY_ADJUSTED',
  GLOBAL_QUOTE = 'GLOBAL_QUOTE',
  SYMBOL_SEARCH = 'SYMBOL_SEARCH',
}
export enum AlphaVantageIntelFnEnum {
  NEWS_SENTIMENT = 'NEWS_SENTIMENT',
  TOURNAMENT_PORTFOLIO = 'TOURNAMENT_PORTFOLIO',
}
export enum AlphaVantageFundamentalsFnEnum {
  OVERVIEW = 'OVERVIEW',
  INCOME_STATEMENT = 'INCOME_STATEMENT',
  BALANCE_SHEET = 'BALANCE_SHEET',
  CASH_FLOW = 'CASH_FLOW',
  EARNINGS = 'EARNINGS',
  LISTING_STATUS = 'LISTING_STATUS',
  EARNINGS_CALENDAR = 'EARNINGS_CALENDAR',
  IPO_CALENDAR = 'IPO_CALENDAR',
}
export enum AlphaVantageForexFn {
  CURRENCY_EXCHANGE_RATE = 'CURRENCY_EXCHANGE_RATE', //HERE
  FX_INTRADAY = 'FX_INTRADAY',
  FX_DAILY = 'FX_DAILY',
  FX_WEEKLY = 'FX_WEEKLY',
  FX_MONTHLY = 'FX_MONTHLY',
}
export enum AlphaVantageCryptoFn {
  CRYPTO_INTRADAY = 'CRYPTO_INTRADAY',
  DIGITAL_CURRENCY_DAILY = 'DIGITAL_CURRENCY_DAILY',
  DIGITAL_CURRENCY_WEEKLY = 'DIGITAL_CURRENCY_WEEKLY',
  DIGITAL_CURRENCY_MONTHLY = 'DIGITAL_CURRENCY_MONTHLY',
  CURRENCY_EXCHANGE_RATE = 'CURRENCY_EXCHANGE_RATE',
}

export enum AlphaVantageCommoditiesFn {
  WTI = 'WTI',
  BRENT = 'BRENT',
  NATURAL_GAS = 'NATURAL_GAS',
  COPPER = 'COPPER',
  ALUMINUM = 'ALUMINUM',
  WHEAT = 'WHEAT',
  CORN = 'CORN',
  COTTON = 'COTTON',
  SUGAR = 'SUGAR',
  COFFEE = 'COFFEE',
  ALL_COMMODITIES = 'ALL_COMMODITIES',
}
export enum AlphaVantageEconIndsEnum {
  REAL_GDP = 'REAL_GDP',
  REAL_GDP_PER_CAPITA = 'REAL_GDP_PER_CAPITA',
  TREASURY_YIELD = 'TREASURY_YIELD',
  FEDERAL_FUNDS_RATE = 'FEDERAL_FUNDS_RATE',
  CPI = 'CPI',
  INFLATION = 'INFLATION',
  RETAIL_SALES = 'RETAIL_SALES',
  DURABLES = 'DURABLES',
  UNEMPLOYMENT = 'UNEMPLOYMENT',
  NONFARM_PAYROLL = 'NONFARM_PAYROLL',
}

export type AlphaVantageFn = AlphaVantageStockFnEnum | AlphaVantageIntelFnEnum | AlphaVantageFundamentalsFnEnum
  | AlphaVantageForexFn | AlphaVantageCryptoFn | AlphaVantageCommoditiesFn | AlphaVantageEconIndsEnum