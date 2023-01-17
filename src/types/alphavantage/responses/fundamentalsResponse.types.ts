
export type AVFundamentalsResponse = GeneralOverviewResponse | IncomeStatementResponse | BalanceSheetResponse | CashFlowResponse |
  AnnualEarningsResponse | ListDelistResponse | EarningsCalendarResponse | IPOCalendarResponse

export interface GeneralOverviewResponse {
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
  MarketCapitalization:       string;
  EBITDA:                     string;
  PERatio:                    string;
  PEGRatio:                   string;
  BookValue:                  string;
  DividendPerShare:           string;
  DividendYield:              string;
  EPS:                        string;
  RevenuePerShareTTM:         string;
  ProfitMargin:               string;
  OperatingMarginTTM:         string;
  ReturnOnAssetsTTM:          string;
  ReturnOnEquityTTM:          string;
  RevenueTTM:                 string;
  GrossProfitTTM:             string;
  DilutedEPSTTM:              string;
  QuarterlyEarningsGrowthYOY: string;
  QuarterlyRevenueGrowthYOY:  string;
  AnalystTargetPrice:         string;
  TrailingPE:                 string;
  ForwardPE:                  string;
  PriceToSalesRatioTTM:       string;
  PriceToBookRatio:           string;
  EVToRevenue:                string;
  EVToEBITDA:                 string;
  Beta:                       string;
  "52WeekHigh":               string;
  "52WeekLow":                string;
  "50DayMovingAverage":       string;
  "200DayMovingAverage":      string;
  SharesOutstanding:          string;
  DividendDate:               Date;
  ExDividendDate:             Date;
}

export interface IncomeStatementResponse {
  symbol:           string;
  annualReports:    IncomeStatementReport[];
  quarterlyReports: IncomeStatementReport[];
}

export interface IncomeStatementReport {
  fiscalDateEnding:                  Date;
  reportedCurrency:                  string;
  grossProfit:                       string;
  totalRevenue:                      string;
  costOfRevenue:                     string;
  costofGoodsAndServicesSold:        string;
  operatingIncome:                   string;
  sellingGeneralAndAdministrative:   string;
  researchAndDevelopment:            string;
  operatingExpenses:                 string;
  investmentIncomeNet:               string;
  netInterestIncome:                 string;
  interestIncome:                    string;
  interestExpense:                   string;
  nonInterestIncome:                 string;
  otherNonOperatingIncome:           string;
  depreciation:                      string;
  depreciationAndAmortization:       string;
  incomeBeforeTax:                   string;
  incomeTaxExpense:                  string;
  interestAndDebtExpense:            string;
  netIncomeFromContinuingOperations: string;
  comprehensiveIncomeNetOfTax:       string;
  ebit:                              string;
  ebitda:                            string;
  netIncome:                         string;
}

export interface BalanceSheetResponse {
  symbol:           string;
  annualReports:    BalanceSheetReport[];
  quarterlyReports: BalanceSheetReport[];
}

export interface BalanceSheetReport {
  fiscalDateEnding:                       Date;
  reportedCurrency:                       string;
  totalAssets:                            string;
  totalCurrentAssets:                     string;
  cashAndCashEquivalentsAtCarryingValue:  string;
  cashAndShortTermInvestments:            string;
  inventory:                              string;
  currentNetReceivables:                  string;
  totalNonCurrentAssets:                  string;
  propertyPlantEquipment:                 string;
  accumulatedDepreciationAmortizationPPE: string;
  intangibleAssets:                       string;
  intangibleAssetsExcludingGoodwill:      string;
  goodwill:                               string;
  investments:                            string;
  longTermInvestments:                    string;
  shortTermInvestments:                   string;
  otherCurrentAssets:                     string;
  otherNonCurrentAssets:                  string;
  totalLiabilities:                       string;
  totalCurrentLiabilities:                string;
  currentAccountsPayable:                 string;
  deferredRevenue:                        string;
  currentDebt:                            string;
  shortTermDebt:                          string;
  totalNonCurrentLiabilities:             string;
  capitalLeaseObligations:                string;
  longTermDebt:                           string;
  currentLongTermDebt:                    string;
  longTermDebtNoncurrent:                 string;
  shortLongTermDebtTotal:                 string;
  otherCurrentLiabilities:                string;
  otherNonCurrentLiabilities:             string;
  totalShareholderEquity:                 string;
  treasuryStock:                          string;
  retainedEarnings:                       string;
  commonStock:                            string;
  commonStockSharesOutstanding:           string;
}

export interface CashFlowResponse {
  symbol:           string;
  annualReports:    CashFlowReport[];
  quarterlyReports: CashFlowReport[];
}

export interface CashFlowReport {
  fiscalDateEnding:                                          Date;
  reportedCurrency:                                          string;
  operatingCashflow:                                         string;
  paymentsForOperatingActivities:                            string;
  proceedsFromOperatingActivities:                           string;
  changeInOperatingLiabilities:                              string;
  changeInOperatingAssets:                                   string;
  depreciationDepletionAndAmortization:                      string;
  capitalExpenditures:                                       string;
  changeInReceivables:                                       string;
  changeInInventory:                                         string;
  profitLoss:                                                string;
  cashflowFromInvestment:                                    string;
  cashflowFromFinancing:                                     string;
  proceedsFromRepaymentsOfShortTermDebt:                     string;
  paymentsForRepurchaseOfCommonStock:                        string;
  paymentsForRepurchaseOfEquity:                             string;
  paymentsForRepurchaseOfPreferredStock:                     string;
  dividendPayout:                                            string;
  dividendPayoutCommonStock:                                 string;
  dividendPayoutPreferredStock:                              string;
  proceedsFromIssuanceOfCommonStock:                         string;
  proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet: string;
  proceedsFromIssuanceOfPreferredStock:                      string;
  proceedsFromRepurchaseOfEquity:                            string;
  proceedsFromSaleOfTreasuryStock:                           string;
  changeInCashAndCashEquivalents:                            string;
  changeInExchangeRate:                                      string;
  netIncome:                                                 string;
}

export interface AnnualEarningsResponse {
  symbol:            string;
  annualEarnings:    AnnualEarning[];
  quarterlyEarnings: QuarterlyEarning[];
}

export interface AnnualEarning {
  fiscalDateEnding: Date;
  reportedEPS:      string;
}

export interface QuarterlyEarning {
  fiscalDateEnding:   Date;
  reportedDate:       Date;
  reportedEPS:        string;
  estimatedEPS:       string;
  surprise:           string;
  surprisePercentage: string;
}

export enum FundamentalsAssetTypeEnum {
  Etf = "ETF",
  Stock = "Stock",
}

export enum FundamentalsExchangeEnum {
  Bats = "BATS",
  Nasdaq = "NASDAQ",
  Nyse = "NYSE",
  NyseArca = "NYSE ARCA",
  NyseMkt = "NYSE MKT",
}

export enum FundamentalsStatusEnum {
  Active = "Active",
}

export interface ListDelistResponse {
  symbol:        string;
  name:          string;
  exchange:      FundamentalsExchangeEnum;
  assetType:     FundamentalsAssetTypeEnum;
  ipoDate:       string;
  delistingDate: null | string;
  status:        FundamentalsStatusEnum;
}

export interface EarningsCalendarResponse {
  symbol:        string;
  name:          string;
  exchange:      FundamentalsExchangeEnum;
  assetType:     FundamentalsAssetTypeEnum;
  ipoDate:       string;
  delistingDate: null | string;
  status:        FundamentalsStatusEnum;
}

export interface IPOCalendarResponse {
  symbol:         string;
  name:           string;
  ipoDate:        string;
  priceRangeLow:  number;
  priceRangeHigh: number;
  currency:       string;
  exchange:       string;
}

