
// Write a general function for creating a query

import {AVQuery} from "../types/alphavantage/queries/avQuery.types";
import {QueryParam, urlBuilder, UrlQueryBuilderParams} from "./urlBuilder";

// export const urlBuilder = (urlParams: UrlQueryBuilderParams): string => {
//   const queryParamToUrlFrag = (qp: QueryParam): string => `${qp.param}=${qp.value}&`
//   return urlParams.baseUrl + '/query?' + urlParams.queryParams.map(queryParamToUrlFrag).join('').slice(0, -1)
// }

// export const extractQueryParams = (): QueryParam[] => {
//   const extractParam = (): QueryParam => {
//
//   }
// }

// What I need to do
// 1. Take a Query
  // 1a. baseUrl is determined by type of Query if AVQuery => https://www.alphavantage.co
  // 1b. paramsList is created by iterating over all properties on the query and returning a