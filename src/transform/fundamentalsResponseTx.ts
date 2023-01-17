import {
  BalanceSheetReport,
  BalanceSheetResponse,
} from "../types/alphavantage/responses/fundamentalsResponse.types";
import {isNumeric, objectMap} from "../utils";


const newHalfIsoDate = (str: string): string => new Date(str).toISOString().split('T')[0]
const convertFundamentalsDataPoint = (value: string, key: string, index: number) => {
  if(isNumeric(value)) return Number(value)
  if(key === 'fiscalDateEnding') return newHalfIsoDate(value)
  if(key === 'reportedCurrency') return value
  if(value === 'None') return Number(0)
  console.log(key, value)
  return value
}
const convertFundamentalsData = (report: BalanceSheetReport) => objectMap(report, convertFundamentalsDataPoint)
export const fundamentalTx = (resp: BalanceSheetResponse) => {
  const temp2 = resp.annualReports.map(convertFundamentalsData)
  return {
    "symbol": resp.symbol,
    "annualReports": resp.annualReports.map(convertFundamentalsData),
    "quarterlyReports": resp.quarterlyReports.map(convertFundamentalsData)
  }
}
