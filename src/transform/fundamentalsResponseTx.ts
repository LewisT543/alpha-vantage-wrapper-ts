import {
  AnnualEarning,
  AnnualEarningsResponse,
  AVFundamentalsResponse,
  AVReport,
  BalanceSheetReport,
  BalanceSheetResponse,
  CashFlowReport,
  CashFlowResponse,
  EarningsCalendarResponse,
  GeneralOverviewResponse,
  IncomeStatementReport,
  IncomeStatementResponse,
  IPOCalendarResponse,
  ListDelistResponse,
  QuarterlyEarning
} from "../types/alphavantage/responses/fundamentalsResponse.types";
import {
  AnnualEarningD,
  AnnualEarningsData,
  AVFundamentalsData,
  AVReportData,
  BalanceSheetData,
  BalanceSheetReportData,
  CashFlowData,
  CashFlowReportData,
  EarningsCalendarData,
  GeneralOverviewData,
  IncomeStatementData,
  IncomeStatementReportData,
  IPOCalendarData,
  ListDelistData,
  QuarterlyEarningD
} from "../types/alphavantage/data/fundamentalsData.types";
import {isNumeric} from "../utils";

const isGeneralResponse = (response: AVFundamentalsResponse): response is GeneralOverviewResponse => 'symbol' in response
const isIncomeStatementResponse = (response: AVFundamentalsResponse): response is IncomeStatementResponse => 'symbol' in response
const isBalanceSheetResponse = (response: AVFundamentalsResponse): response is BalanceSheetResponse => 'symbol' in response
const isCashFlowResponse = (response: AVFundamentalsResponse): response is CashFlowResponse => 'symbol' in response
const isAnnualEarningsResponse = (response: AVFundamentalsResponse): response is AnnualEarningsResponse => 'symbol' in response
const isListDelistResponse = (response: AVFundamentalsResponse): response is ListDelistResponse => 'symbol' in response
const isEarningsCalendarResponse = (response: AVFundamentalsResponse): response is EarningsCalendarResponse => 'symbol' in response
const isIPOCalendarResponse = (response: AVFundamentalsResponse): response is IPOCalendarResponse => 'symbol' in response

const responseHasSymbol = (response: AVFundamentalsResponse): boolean => 'symbol' in response

// Takes a Response object - returns a data object
export const fundamentalsTx = (response: AVFundamentalsResponse): AVFundamentalsData => {
  if (isGeneralResponse(response)) return generalOverviewTx<GeneralOverviewResponse, GeneralOverviewData>(response)
  if (isIncomeStatementResponse(response)) return incomeStatementTx(response)
  if (isBalanceSheetResponse(response)) return balanceSheetTx(response)
  if (isCashFlowResponse(response)) return cashFlowTx(response)
  if (isAnnualEarningsResponse(response)) return annualEarningsTx(response)
  if (isListDelistResponse(response)) return listDelistTx(response)
  if (isEarningsCalendarResponse(response)) return earningsCalendarTx(response)
  if (isIPOCalendarResponse(response)) return ipoCalendarTx(response)
  return {} as AVFundamentalsData
}

const generalOverviewTx = <R extends AVFundamentalsResponse, D extends AVFundamentalsData>(response: R): D =>
  Object.entries(response).reduce((acc: D , [key, value], index: number) =>
    ({ ...acc, [key]: fundamentalsConverter(key, value, index) }), {} as D)

const incomeStatementTx = (response: IncomeStatementResponse): IncomeStatementData => ({
  symbol:           response.symbol,
  annualReports:    response.annualReports.map(rep => mapOverReportPropsAndDoFn<IncomeStatementReport, IncomeStatementReportData>(rep, fundamentalsConverter)),
  quarterlyReports: response.quarterlyReports.map(rep => mapOverReportPropsAndDoFn<IncomeStatementReport, IncomeStatementReportData>(rep, fundamentalsConverter))
})

const balanceSheetTx = (response: BalanceSheetResponse): BalanceSheetData => ({
  symbol:           response.symbol,
  annualReports:    response.annualReports.map(rep => mapOverReportPropsAndDoFn<BalanceSheetReport, BalanceSheetReportData>(rep, fundamentalsConverter)),
  quarterlyReports: response.quarterlyReports.map(rep => mapOverReportPropsAndDoFn<BalanceSheetReport, BalanceSheetReportData>(rep, fundamentalsConverter))
})

const cashFlowTx = (response: CashFlowResponse): CashFlowData => ({
  symbol:           response.symbol,
  annualReports:    response.annualReports.map(rep => mapOverReportPropsAndDoFn<CashFlowReport, CashFlowReportData>(rep, fundamentalsConverter)),
  quarterlyReports: response.quarterlyReports.map(rep => mapOverReportPropsAndDoFn<CashFlowReport, CashFlowReportData>(rep, fundamentalsConverter))
})

const annualEarningsTx = (response: AnnualEarningsResponse): AnnualEarningsData => ({
  symbol:           response.symbol,
  annualEarnings:    response.annualEarnings.map(rep => mapOverEarnings<AnnualEarning, AnnualEarningD>(rep, fundamentalsConverter)),
  quarterlyEarnings: response.quarterlyEarnings.map(rep => mapOverEarnings<QuarterlyEarning, QuarterlyEarningD>(rep, fundamentalsConverter)),
})

const dateFields = [ 'LatestQuarter', 'DividendDate', 'ExDividendDate', 'fiscalDateEnding', 'reportedDate' ]
type ReportMapFns = (key: string, val: any, index: number) => number | string | Date

// ToDo: This is being called on the entire BalanceSheetReport[] not an individual BalanceSheetReport
const fundamentalsConverter = (key: string, val: string, index: number) => {
  console.log('Logging in fundamentals converter', val, isNumeric(val))
  if (isNumeric(val)) return Number(val)
  if (val === 'None') return Number(0)
  if (dateFields.includes(key)) return new Date(Date.parse(val))
  return val
}

// this takes a single AVReport and returns a single AVReportData
const mapOverReportPropsAndDoFn = <R extends AVReport, RD extends AVReportData>(report: R, fn: ReportMapFns): RD =>
  Object.fromEntries(
    Object.entries(report).reduce((acc: RD , [key, value], index: number) =>
      ({ [key]: fn(key, value, index), ...acc }), {} as RD)
  ) as RD



type AnnualOrQuarterlyEarnings = AnnualEarning | QuarterlyEarning
type AnnualOrQuarterlyEarningsData = AnnualEarningD | QuarterlyEarningD

const mapOverEarnings = <R extends AnnualOrQuarterlyEarnings, RD extends AnnualOrQuarterlyEarningsData>(report: R, fn: ReportMapFns): RD => {
  return Object.entries(report).reduce((acc: RD, [key, value], index: number) =>
    ({ ...acc, [key]: fn(key, value, index)}), {} as RD)
}



// const withReportsTx = (response: AVFundamentalsResponseWithReports): AVFundamentalsDataWithReports => ({
//     symbol:           response.symbol,
//     annualReports:    response.annualReports.map(rep => mapOverReportPropsAndDoFn(rep, (x: any) => x)),
//     quarterlyReports: response.quarterlyReports.map(rep => mapOverReportPropsAndDoFn(rep, (x: any) => x))
//   })

/* THESE ARE ALL CSV RESPONSES - No code written to handle csv format currently */
const listDelistTx = (response: ListDelistResponse): ListDelistData => ({} as ListDelistData)
const earningsCalendarTx = (response: EarningsCalendarResponse): EarningsCalendarData => ({} as EarningsCalendarData)
const ipoCalendarTx = (response: IPOCalendarResponse): IPOCalendarData => ({} as IPOCalendarData)



