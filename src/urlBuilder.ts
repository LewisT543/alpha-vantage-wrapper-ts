import {Query} from "../types/query";
import {AlphaVantageQuery} from "../types/alphavantage/queries/avQuery.types";
import {API_BASE_URLS} from "../types/constants";

export interface UrlQueryBuilderParams {
  baseUrl: string;
  queryParams: QueryParam[]
}

export interface QueryParam {
  param: string;
  value: string
}

export const isAVQuery = (query: any ): query is AlphaVantageQuery => query.fn !== undefined;
export const setBaseUrl = (query: Query): API_BASE_URLS => {
  if (isAVQuery(query)) return API_BASE_URLS.ALPHA_VANTAGE
  // if (isOtherQuery(query)) return API_BASE_URLS.SOMETHING_ELSE
  return API_BASE_URLS.ALPHA_VANTAGE
}

export const transformParam = (param: string): string => param === 'fn' ? 'function' : param.toLowerCase()
export const setQueryParams = (query: Query): QueryParam[] => {
  return Object.entries(query).map((entryArr: string[]): QueryParam => {
    return {
      param: transformParam(entryArr[0]),
      value: entryArr[1]
    }
  })
}

export const queryToBuilderParams = (query: Query): UrlQueryBuilderParams => {
  return {
    baseUrl: setBaseUrl(query),
    queryParams: setQueryParams(query)
  }
}

export const urlBuilder = (urlParams: UrlQueryBuilderParams): string => {
  const queryParamToUrlFrag = (qp: QueryParam): string => `${qp.param}=${qp.value}&`
  return urlParams.baseUrl + '/query?' + urlParams.queryParams.map(queryParamToUrlFrag).join('').slice(0, -1)
}

export const queryToUrl = (query: Query): string => urlBuilder(queryToBuilderParams(query))


