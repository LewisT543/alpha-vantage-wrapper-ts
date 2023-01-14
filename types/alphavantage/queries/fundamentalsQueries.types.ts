import {AlphaVantageQuery} from "./avQuery.types";
import {AlphaVantageFundamentalsFnEnum} from "../../enums";

export interface FundamentalsBaseQuery extends AlphaVantageQuery {
  fn: AlphaVantageFundamentalsFnEnum;
  symbol: string;
}
export interface FundamentalsOverviewQuery extends FundamentalsBaseQuery { fn: AlphaVantageFundamentalsFnEnum.OVERVIEW; }
export interface FundamentalsIncomeStatementQuery extends FundamentalsBaseQuery { fn: AlphaVantageFundamentalsFnEnum.INCOME_STATEMENT; }
export interface FundamentalsBalanceSheetQuery extends FundamentalsBaseQuery { fn: AlphaVantageFundamentalsFnEnum.BALANCE_SHEET; }
export interface FundamentalsCashFlowQuery extends FundamentalsBaseQuery { fn: AlphaVantageFundamentalsFnEnum.CASH_FLOW; }
export interface FundamentalsEarningsQuery extends FundamentalsBaseQuery { fn: AlphaVantageFundamentalsFnEnum.EARNINGS; }
export interface FundamentalsListingStatusQuery extends AlphaVantageQuery {
  fn: AlphaVantageFundamentalsFnEnum.LISTING_STATUS;
  date?: string;
  state?: 'active' | 'delisted';
}
export interface FundamentalsEarningCalendarQuery extends AlphaVantageQuery {
  fn: AlphaVantageFundamentalsFnEnum.EARNINGS_CALENDAR;
  symbol?: string;
  horizon?: '3month' | '6month' | '12month';
}
export interface FundamentalsIPOCalendarQuery extends AlphaVantageQuery {
  fn: AlphaVantageFundamentalsFnEnum.IPO_CALENDAR;
}

export type AVFundamentalsQuery = FundamentalsOverviewQuery | FundamentalsIncomeStatementQuery |
  FundamentalsBalanceSheetQuery | FundamentalsCashFlowQuery | FundamentalsEarningsQuery |
  FundamentalsListingStatusQuery | FundamentalsEarningCalendarQuery | FundamentalsIPOCalendarQuery

