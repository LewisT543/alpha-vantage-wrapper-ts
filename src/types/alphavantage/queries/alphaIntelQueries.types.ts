import {AlphaVantageQuery} from "./avQuery.types";
import {AlphaVantageIntelFnEnum, AlphaVantageNewsSortEnum, AlphaVantageNewsTopicsEnum} from "../../enums";

export interface TimeFromAndTo {
  timeFrom: string,   //YYYYMMDDTHHMM
  timeTo?: string     //YYYYMMDDTHHMM
}

export interface AlphaIntelNewsQuery extends AlphaVantageQuery {
  fn: AlphaVantageIntelFnEnum.NEWS_SENTIMENT;
  tickers?: string;
  topics?: AlphaVantageNewsTopicsEnum;
  timeFromAndTo?: TimeFromAndTo;
  sort?: AlphaVantageNewsSortEnum;
  limit?: 50 | 200;
}

export interface AlphaIntelWinningPortfoliosQuery extends AlphaVantageQuery {
  fn: AlphaVantageIntelFnEnum.TOURNAMENT_PORTFOLIO;
  season?: string;    // YYYY-MM
}

export type AVIntelQuery = AlphaIntelNewsQuery | AlphaIntelWinningPortfoliosQuery