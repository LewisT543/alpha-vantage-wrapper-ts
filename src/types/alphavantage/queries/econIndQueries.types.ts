import {AlphaVantageQuery, WithAVDataType} from "./avQuery.types";
import {AlphaVantageEconIndsEnum, AVEconIndIntervalEnum, AVTreasuryYieldEnum} from "../../enums";

export interface WithAVQuartlyAnnualyInterval {
  interval?: 'quarterly' | 'annual'
}
export interface WithAVDilyWeeklyMonthlyInterval {
  interval?: 'daily' | 'weekly' | 'monthly'
}
export interface WithAVMonthlySemiannualInterval {
  interval?: 'monthly' | 'semiannual'
}
export interface EconIndBaseQuery extends AlphaVantageQuery, WithAVDataType { fn: AlphaVantageEconIndsEnum; }
export interface EconIndRealGDPQuery extends EconIndBaseQuery, WithAVQuartlyAnnualyInterval { fn: AlphaVantageEconIndsEnum.REAL_GDP; }
export interface EconIndRealGDPPerCapQuery extends EconIndBaseQuery { fn: AlphaVantageEconIndsEnum.REAL_GDP_PER_CAPITA; }
export interface EconIndTreasuryYieldQuery extends EconIndBaseQuery, WithAVDilyWeeklyMonthlyInterval {
  fn: AlphaVantageEconIndsEnum.TREASURY_YIELD;
  maturity?: AVTreasuryYieldEnum
}
export interface EconIndFederalFundRateQuery extends EconIndBaseQuery, WithAVDilyWeeklyMonthlyInterval { fn: AlphaVantageEconIndsEnum.FEDERAL_FUNDS_RATE; }
export interface EconIndCPIQuery extends EconIndBaseQuery, WithAVMonthlySemiannualInterval { fn: AlphaVantageEconIndsEnum.CPI; }
export interface EconIndInflationQuery extends EconIndBaseQuery { fn: AlphaVantageEconIndsEnum.INFLATION; }
export interface EconIndRetailSalesQuery extends EconIndBaseQuery { fn: AlphaVantageEconIndsEnum.RETAIL_SALES; }
export interface EconIndDurablesQuery extends EconIndBaseQuery { fn: AlphaVantageEconIndsEnum.DURABLES; }
export interface EconIndUnemploymentQuery extends EconIndBaseQuery { fn: AlphaVantageEconIndsEnum.UNEMPLOYMENT; }
export interface EconIndNonFarmPayQuery extends EconIndBaseQuery { fn: AlphaVantageEconIndsEnum.NONFARM_PAYROLL; }

export type AVEconIndQuery = EconIndRealGDPQuery | EconIndRealGDPPerCapQuery | EconIndTreasuryYieldQuery |
  EconIndFederalFundRateQuery | EconIndCPIQuery | EconIndInflationQuery | EconIndRetailSalesQuery |
  EconIndDurablesQuery | EconIndUnemploymentQuery | EconIndNonFarmPayQuery