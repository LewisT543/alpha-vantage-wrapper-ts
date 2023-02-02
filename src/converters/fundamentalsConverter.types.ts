import {
  AnnualEarning,
  AnnualEarningsResponse, AVFundamentalsResponse,
  BalanceSheetReport,
  BalanceSheetResponse, CashFlowReport, CashFlowResponse,
  GeneralOverviewResponse, IncomeStatementReport,
  IncomeStatementResponse, QuarterlyEarning
} from "../types/alphavantage/responses/fundamentalsResponse.types";
import {getDateFromString} from "../utils";
import {
  AnnualEarningD,
  AnnualEarningsData, AVFundamentalsData,
  BalanceSheetData,
  BalanceSheetReportData, CashFlowData, CashFlowReportData,
  GeneralOverviewData,
  IncomeStatementData,
  IncomeStatementReportData, QuarterlyEarningD
} from "../types/alphavantage/data/fundamentalsData.types";

export const isGeneralOverview = (response: AVFundamentalsResponse): response is GeneralOverviewResponse => (response as GeneralOverviewResponse).EPS !== undefined
export const isIncomeStatementResponse = (response: AVFundamentalsResponse): response is IncomeStatementResponse => (response as IncomeStatementResponse).quarterlyReports !== undefined && (response as IncomeStatementResponse).quarterlyReports[0].grossProfit !== undefined
export const isBalanceSheetResponse = (response: AVFundamentalsResponse): response is BalanceSheetResponse => (response as BalanceSheetResponse).annualReports !== undefined && (response as BalanceSheetResponse).annualReports[0].goodwill !== undefined
export const isCashFlowResponse = (response: AVFundamentalsResponse): response is CashFlowResponse => (response as CashFlowResponse).annualReports !== undefined && (response as CashFlowResponse).annualReports[0].changeInCashAndCashEquivalents !== undefined
export const isAnnualEarningsResponse = (response: AVFundamentalsResponse): response is AnnualEarningsResponse => (response as AnnualEarningsResponse).annualEarnings !== undefined

export const convertFundamentalsToData = (response: AVFundamentalsResponse): AVFundamentalsData => {
  if (isGeneralOverview(response)) return convertGeneralOverviewToData(response)
  if (isIncomeStatementResponse(response)) return convertIncomeStatementToData(response)
  if (isBalanceSheetResponse(response)) return convertBalanceSheetToData(response)
  if (isCashFlowResponse(response)) return convertCashFlowToData(response)
  if (isAnnualEarningsResponse(response)) return convertAnnualEarningsToData(response)
  throw new Error("ERROR: Cannot convert to fundamentals data")
}

export const convertGeneralOverviewToData = (response: GeneralOverviewResponse): GeneralOverviewData => ({
  Symbol:                     response.Symbol,
  AssetType:                  response.AssetType,
  Name:                       response.Name,
  Description:                response.Description,
  CIK:                        response.CIK,
  Exchange:                   response.Exchange,
  Currency:                   response.Currency,
  Country:                    response.Country,
  Sector:                     response.Sector,
  Industry:                   response.Industry,
  Address:                    response.Address,
  FiscalYearEnd:              response.FiscalYearEnd,
  LatestQuarter:              getDateFromString(response.LatestQuarter),
  MarketCapitalization:       Number(response.MarketCapitalization),
  EBITDA:                     Number(response.EBITDA),
  PERatio:                    Number(response.PERatio),
  PEGRatio:                   Number(response.PEGRatio),
  BookValue:                  Number(response.BookValue),
  DividendPerShare:           Number(response.DividendPerShare),
  DividendYield:              Number(response.DividendYield),
  EPS:                        Number(response.EPS),
  RevenuePerShareTTM:         Number(response.RevenuePerShareTTM),
  ProfitMargin:               Number(response.ProfitMargin),
  OperatingMarginTTM:         Number(response.OperatingMarginTTM),
  ReturnOnAssetsTTM:          Number(response.ReturnOnAssetsTTM),
  ReturnOnEquityTTM:          Number(response.ReturnOnEquityTTM),
  RevenueTTM:                 Number(response.RevenueTTM),
  GrossProfitTTM:             Number(response.GrossProfitTTM),
  DilutedEPSTTM:              Number(response.DilutedEPSTTM),
  QuarterlyEarningsGrowthYOY: Number(response.QuarterlyEarningsGrowthYOY),
  QuarterlyRevenueGrowthYOY:  Number(response.QuarterlyRevenueGrowthYOY),
  AnalystTargetPrice:         Number(response.AnalystTargetPrice),
  TrailingPE:                 Number(response.TrailingPE),
  ForwardPE:                  Number(response.ForwardPE),
  PriceToSalesRatioTTM:       Number(response.PriceToSalesRatioTTM),
  PriceToBookRatio:           Number(response.PriceToBookRatio),
  EVToRevenue:                Number(response.EVToRevenue),
  EVToEBITDA:                 Number(response.EVToEBITDA),
  Beta:                       Number(response.Beta),
  "52WeekHigh":               Number(response["52WeekHigh"]),
  "52WeekLow":                Number(response["52WeekLow"]),
  "50DayMovingAverage":       Number(response["50DayMovingAverage"]),
  "200DayMovingAverage":      Number(response["200DayMovingAverage"]),
  SharesOutstanding:          Number(response.SharesOutstanding),
  DividendDate:               getDateFromString(response.DividendDate),
  ExDividendDate:             getDateFromString(response.ExDividendDate),
})

export const convertIncomeStatementToData = (response: IncomeStatementResponse): IncomeStatementData => ({
  symbol:                   response.symbol,
  annualReports:            response.annualReports.map(convertIncomeStatementReports),
  quarterlyReports:         response.quarterlyReports.map(convertIncomeStatementReports)
})

const convertIncomeStatementReports = (report: IncomeStatementReport): IncomeStatementReportData => ({
  fiscalDateEnding:                  getDateFromString(report.fiscalDateEnding),
  reportedCurrency:                  report.reportedCurrency,
  grossProfit:                       Number(report.grossProfit),
  totalRevenue:                      Number(report.totalRevenue),
  costOfRevenue:                     Number(report.costOfRevenue),
  costofGoodsAndServicesSold:        Number(report.costofGoodsAndServicesSold),
  operatingIncome:                   Number(report.operatingIncome),
  sellingGeneralAndAdministrative:   Number(report.sellingGeneralAndAdministrative),
  researchAndDevelopment:            Number(report.researchAndDevelopment),
  operatingExpenses:                 Number(report.operatingExpenses),
  investmentIncomeNet:               Number(report.investmentIncomeNet),
  netInterestIncome:                 Number(report.netInterestIncome),
  interestIncome:                    Number(report.interestIncome),
  interestExpense:                   Number(report.interestExpense),
  nonInterestIncome:                 Number(report.nonInterestIncome),
  otherNonOperatingIncome:           Number(report.otherNonOperatingIncome),
  depreciation:                      Number(report.depreciation),
  depreciationAndAmortization:       Number(report.depreciationAndAmortization),
  incomeBeforeTax:                   Number(report.incomeBeforeTax),
  incomeTaxExpense:                  Number(report.incomeTaxExpense),
  interestAndDebtExpense:            Number(report.interestAndDebtExpense),
  netIncomeFromContinuingOperations: Number(report.netIncomeFromContinuingOperations),
  comprehensiveIncomeNetOfTax:       Number(report.comprehensiveIncomeNetOfTax),
  ebit:                              Number(report.ebit),
  ebitda:                            Number(report.ebitda),
  netIncome:                         Number(report.netIncome),
})


export const convertBalanceSheetToData = (response: BalanceSheetResponse): BalanceSheetData => ({
  symbol:                   response.symbol,
  annualReports:            response.annualReports.map(convertBalanceSheetReports),
  quarterlyReports:         response.quarterlyReports.map(convertBalanceSheetReports)
})

const convertBalanceSheetReports = (report: BalanceSheetReport): BalanceSheetReportData => ({
  fiscalDateEnding:                       getDateFromString(report.fiscalDateEnding),
  reportedCurrency:                       report.reportedCurrency,
  totalAssets:                            Number(report.totalAssets),
  totalCurrentAssets:                     Number(report.totalCurrentAssets),
  cashAndCashEquivalentsAtCarryingValue:  Number(report.cashAndCashEquivalentsAtCarryingValue),
  cashAndShortTermInvestments:            Number(report.cashAndShortTermInvestments),
  inventory:                              Number(report.inventory),
  currentNetReceivables:                  Number(report.currentNetReceivables),
  totalNonCurrentAssets:                  Number(report.totalNonCurrentAssets),
  propertyPlantEquipment:                 Number(report.propertyPlantEquipment),
  accumulatedDepreciationAmortizationPPE: Number(report.accumulatedDepreciationAmortizationPPE),
  intangibleAssets:                       Number(report.intangibleAssets),
  intangibleAssetsExcludingGoodwill:      Number(report.intangibleAssetsExcludingGoodwill),
  goodwill:                               Number(report.goodwill),
  investments:                            Number(report.investments),
  longTermInvestments:                    Number(report.longTermInvestments),
  shortTermInvestments:                   Number(report.shortTermInvestments),
  otherCurrentAssets:                     Number(report.otherCurrentAssets),
  otherNonCurrentAssets:                  Number(report.otherNonCurrentAssets),
  totalLiabilities:                       Number(report.totalLiabilities),
  totalCurrentLiabilities:                Number(report.totalCurrentLiabilities),
  currentAccountsPayable:                 Number(report.currentAccountsPayable),
  deferredRevenue:                        Number(report.deferredRevenue),
  currentDebt:                            Number(report.currentDebt),
  shortTermDebt:                          Number(report.shortTermDebt),
  totalNonCurrentLiabilities:             Number(report.totalNonCurrentLiabilities),
  capitalLeaseObligations:                Number(report.capitalLeaseObligations),
  longTermDebt:                           Number(report.longTermDebt),
  currentLongTermDebt:                    Number(report.currentLongTermDebt),
  longTermDebtNoncurrent:                 Number(report.longTermDebtNoncurrent),
  shortLongTermDebtTotal:                 Number(report.shortLongTermDebtTotal),
  otherCurrentLiabilities:                Number(report.otherCurrentLiabilities),
  otherNonCurrentLiabilities:             Number(report.otherNonCurrentLiabilities),
  totalShareholderEquity:                 Number(report.totalShareholderEquity),
  treasuryStock:                          Number(report.treasuryStock),
  retainedEarnings:                       Number(report.retainedEarnings),
  commonStock:                            Number(report.commonStock),
  commonStockSharesOutstanding:           Number(report.commonStockSharesOutstanding),
})

export const convertCashFlowToData = (response: CashFlowResponse): CashFlowData => ({
  symbol:                   response.symbol,
  annualReports:            response.annualReports.map(convertCashFlowReports),
  quarterlyReports:         response.quarterlyReports.map(convertCashFlowReports)
})

const convertCashFlowReports = (report: CashFlowReport): CashFlowReportData => ({
  fiscalDateEnding:                                          getDateFromString(report.fiscalDateEnding),
  reportedCurrency:                                          report.reportedCurrency,
  operatingCashflow:                                         Number(report.operatingCashflow),
  paymentsForOperatingActivities:                            Number(report.paymentsForOperatingActivities),
  proceedsFromOperatingActivities:                           Number(report.proceedsFromOperatingActivities),
  changeInOperatingLiabilities:                              Number(report.changeInOperatingLiabilities),
  changeInOperatingAssets:                                   Number(report.changeInOperatingAssets),
  depreciationDepletionAndAmortization:                      Number(report.depreciationDepletionAndAmortization),
  capitalExpenditures:                                       Number(report.capitalExpenditures),
  changeInReceivables:                                       Number(report.changeInReceivables),
  changeInInventory:                                         Number(report.changeInInventory),
  profitLoss:                                                Number(report.profitLoss),
  cashflowFromInvestment:                                    Number(report.cashflowFromInvestment),
  cashflowFromFinancing:                                     Number(report.cashflowFromFinancing),
  proceedsFromRepaymentsOfShortTermDebt:                     Number(report.proceedsFromRepaymentsOfShortTermDebt),
  paymentsForRepurchaseOfCommonStock:                        Number(report.paymentsForRepurchaseOfCommonStock),
  paymentsForRepurchaseOfEquity:                             Number(report.paymentsForRepurchaseOfEquity),
  paymentsForRepurchaseOfPreferredStock:                     Number(report.paymentsForRepurchaseOfPreferredStock),
  dividendPayout:                                            Number(report.dividendPayout),
  dividendPayoutCommonStock:                                 Number(report.dividendPayoutCommonStock),
  dividendPayoutPreferredStock:                              Number(report.dividendPayoutPreferredStock),
  proceedsFromIssuanceOfCommonStock:                         Number(report.proceedsFromIssuanceOfCommonStock),
  proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet: Number(report.proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet),
  proceedsFromIssuanceOfPreferredStock:                      Number(report.proceedsFromIssuanceOfPreferredStock),
  proceedsFromRepurchaseOfEquity:                            Number(report.proceedsFromRepurchaseOfEquity),
  proceedsFromSaleOfTreasuryStock:                           Number(report.proceedsFromSaleOfTreasuryStock),
  changeInCashAndCashEquivalents:                            Number(report.changeInCashAndCashEquivalents),
  changeInExchangeRate:                                      Number(report.changeInExchangeRate),
  netIncome:                                                 Number(report.netIncome),
})

export const convertAnnualEarningsToData = (response: AnnualEarningsResponse): AnnualEarningsData => ({
  symbol:                    response.symbol,
  annualEarnings:            response.annualEarnings.map(convertAnnualEarningsReports),
  quarterlyEarnings:         response.quarterlyEarnings.map(convertQuarterlyEarningsReports)
})

const convertAnnualEarningsReports = (annualEarnings: AnnualEarning): AnnualEarningD => ({
  fiscalDateEnding: getDateFromString(annualEarnings.fiscalDateEnding),
  reportedEPS:      Number(annualEarnings.reportedEPS)
})
const convertQuarterlyEarningsReports = (quarterlyEarning: QuarterlyEarning): QuarterlyEarningD => ({
  fiscalDateEnding:   getDateFromString(quarterlyEarning.fiscalDateEnding),
  reportedDate:       getDateFromString(quarterlyEarning.reportedDate),
  reportedEPS:        Number(quarterlyEarning.reportedEPS),
  estimatedEPS:       Number(quarterlyEarning.estimatedEPS),
  surprise:           Number(quarterlyEarning.surprise),
  surprisePercentage: Number(quarterlyEarning.surprisePercentage),
})

// THE REST OF THESE ARE CSV ONLY RESPONSE TYPES (And I am just not doing it.)
