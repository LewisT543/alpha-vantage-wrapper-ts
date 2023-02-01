import {BalanceSheetResponse} from "../../types/alphavantage/responses/fundamentalsResponse.types";
import {convertAVResponseToData} from "../../avResponseToDataConverter";


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
const fundamentalsBalanceSheetData = {}

export const TEST_DATA_AND_RESPONSES = [
  { name: "fundamentalsBalanceSheet", rAndD: { response: fundamentalsBalanceSheet, data: fundamentalsBalanceSheetData } },
]

console.log(convertAVResponseToData(fundamentalsBalanceSheet))