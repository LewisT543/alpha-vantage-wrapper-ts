
export type AVFundamentalsData = GeneralOverviewData | IncomeStatementData | BalanceSheetData | CashFlowData |
  AnnualEarningsData | ListDelistData | EarningsCalendarData | IPOCalendarData

export type AVFundamentalsDataWithReports = IncomeStatementData | BalanceSheetData | CashFlowData
export type AVReportData = IncomeStatementReportData | BalanceSheetReportData | CashFlowReportData

export interface GeneralOverviewData {
  Symbol:                     string;
  AssetType:                  string;
  Name:                       string;
  Description:                string;
  CIK:                        string;
  Exchange:                   string;
  Currency:                   string;
  Country:                    string;
  Sector:                     string;
  Industry:                   string;
  Address:                    string;
  FiscalYearEnd:              string;
  LatestQuarter:              Date;
  MarketCapitalization:       number;
  EBITDA:                     number;
  PERatio:                    number;
  PEGRatio:                   number;
  BookValue:                  number;
  DividendPerShare:           number;
  DividendYield:              number;
  EPS:                        number;
  RevenuePerShareTTM:         number;
  ProfitMargin:               number;
  OperatingMarginTTM:         number;
  ReturnOnAssetsTTM:          number;
  ReturnOnEquityTTM:          number;
  RevenueTTM:                 number;
  GrossProfitTTM:             number;
  DilutedEPSTTM:              number;
  QuarterlyEarningsGrowthYOY: number;
  QuarterlyRevenueGrowthYOY:  number;
  AnalystTargetPrice:         number;
  TrailingPE:                 number;
  ForwardPE:                  number;
  PriceToSalesRatioTTM:       number;
  PriceToBookRatio:           number;
  EVToRevenue:                number;
  EVToEBITDA:                 number;
  Beta:                       number;
  "52WeekHigh":               number;
  "52WeekLow":                number;
  "50DayMovingAverage":       number;
  "200DayMovingAverage":      number;
  SharesOutstanding:          number;
  DividendDate:               Date;
  ExDividendDate:             Date;
}

export interface IncomeStatementData {
  symbol:           string;
  annualReports:    IncomeStatementReportData[];
  quarterlyReports: IncomeStatementReportData[];
}

export interface IncomeStatementReportData {
  fiscalDateEnding:                  Date;
  reportedCurrency:                  string;
  grossProfit:                       number;
  totalRevenue:                      number;
  costOfRevenue:                     number;
  costofGoodsAndServicesSold:        number;
  operatingIncome:                   number;
  sellingGeneralAndAdministrative:   number;
  researchAndDevelopment:            number;
  operatingExpenses:                 number;
  investmentIncomeNet:               number;
  netInterestIncome:                 number;
  interestIncome:                    number;
  interestExpense:                   number;
  nonInterestIncome:                 number;
  otherNonOperatingIncome:           number;
  depreciation:                      number;
  depreciationAndAmortization:       number;
  incomeBeforeTax:                   number;
  incomeTaxExpense:                  number;
  interestAndDebtExpense:            number;
  netIncomeFromContinuingOperations: number;
  comprehensiveIncomeNetOfTax:       number;
  ebit:                              number;
  ebitda:                            number;
  netIncome:                         number;
}

export interface BalanceSheetData {
  symbol:           string;
  annualReports:    BalanceSheetReportData[];
  quarterlyReports: BalanceSheetReportData[];
}

export interface BalanceSheetReportData {
  fiscalDateEnding:                       Date;
  reportedCurrency:                       string;
  totalAssets:                            number;
  totalCurrentAssets:                     number;
  cashAndCashEquivalentsAtCarryingValue:  number;
  cashAndShortTermInvestments:            number;
  inventory:                              number;
  currentNetReceivables:                  number;
  totalNonCurrentAssets:                  number;
  propertyPlantEquipment:                 number;
  accumulatedDepreciationAmortizationPPE: number;
  intangibleAssets:                       number;
  intangibleAssetsExcludingGoodwill:      number;
  goodwill:                               number;
  investments:                            number;
  longTermInvestments:                    number;
  shortTermInvestments:                   number;
  otherCurrentAssets:                     number;
  otherNonCurrentAssets:                  number;
  totalLiabilities:                       number;
  totalCurrentLiabilities:                number;
  currentAccountsPayable:                 number;
  deferredRevenue:                        number;
  currentDebt:                            number;
  shortTermDebt:                          number;
  totalNonCurrentLiabilities:             number;
  capitalLeaseObligations:                number;
  longTermDebt:                           number;
  currentLongTermDebt:                    number;
  longTermDebtNoncurrent:                 number;
  shortLongTermDebtTotal:                 number;
  otherCurrentLiabilities:                number;
  otherNonCurrentLiabilities:             number;
  totalShareholderEquity:                 number;
  treasuryStock:                          number;
  retainedEarnings:                       number;
  commonStock:                            number;
  commonStockSharesOutstanding:           number;
}

export interface CashFlowData {
  symbol:           string;
  annualReports:    CashFlowReportData[];
  quarterlyReports: CashFlowReportData[];
}

export interface CashFlowReportData {
  fiscalDateEnding:                                          Date;
  reportedCurrency:                                          string;
  operatingCashflow:                                         number;
  paymentsForOperatingActivities:                            number;
  proceedsFromOperatingActivities:                           number;
  changeInOperatingLiabilities:                              number;
  changeInOperatingAssets:                                   number;
  depreciationDepletionAndAmortization:                      number;
  capitalExpenditures:                                       number;
  changeInReceivables:                                       number;
  changeInInventory:                                         number;
  profitLoss:                                                number;
  cashflowFromInvestment:                                    number;
  cashflowFromFinancing:                                     number;
  proceedsFromRepaymentsOfShortTermDebt:                     number;
  paymentsForRepurchaseOfCommonStock:                        number;
  paymentsForRepurchaseOfEquity:                             number;
  paymentsForRepurchaseOfPreferredStock:                     number;
  dividendPayout:                                            number;
  dividendPayoutCommonStock:                                 number;
  dividendPayoutPreferredStock:                              number;
  proceedsFromIssuanceOfCommonStock:                         number;
  proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet: number;
  proceedsFromIssuanceOfPreferredStock:                      number;
  proceedsFromRepurchaseOfEquity:                            number;
  proceedsFromSaleOfTreasuryStock:                           number;
  changeInCashAndCashEquivalents:                            number;
  changeInExchangeRate:                                      number;
  netIncome:                                                 number;
}

export interface AnnualEarningsData {
  symbol:            string;
  annualEarnings:    AnnualEarningD[];
  quarterlyEarnings: QuarterlyEarningD[];
}

export interface AnnualEarningD {
  fiscalDateEnding: Date;
  reportedEPS:      number;
}

export interface QuarterlyEarningD {
  fiscalDateEnding:   Date;
  reportedDate:       Date;
  reportedEPS:        number;
  estimatedEPS:       number;
  surprise:           number;
  surprisePercentage: number;
}

export enum AssetType {
  Etf = "ETF",
  Stock = "Stock",
}

export enum Exchange {
  Bats = "BATS",
  Nasdaq = "NASDAQ",
  Nyse = "NYSE",
  NyseArca = "NYSE ARCA",
  NyseMkt = "NYSE MKT",
}

export enum Status {
  Active = "Active",
}

export interface ListDelistData {
  symbol:        string;
  name:          string;
  exchange:      Exchange;
  assetType:     AssetType;
  ipoDate:       string;
  delistingDate: null | string;
  status:        Status;
}

export interface EarningsCalendarData {
  symbol:        string;
  name:          string;
  exchange:      Exchange;
  assetType:     AssetType;
  ipoDate:       string;
  delistingDate: null | string;
  status:        Status;
}

export interface IPOCalendarData {
  symbol:         string;
  name:           string;
  ipoDate:        string;
  priceRangeLow:  number;
  priceRangeHigh: number;
  currency:       string;
  exchange:       string;
}

