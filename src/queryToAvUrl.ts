import {Query} from "./types/query";
import {AlphaVantageQuery} from "./types/alphavantage/queries/avQuery.types";
import {API_BASE_URLS} from "./types/constants";

interface UrlQueryBuilderParams {
  baseUrl: string;
  queryParams: QueryParam[]
}

interface QueryParam {
  param: string;
  value: string
}

const isAVQuery = (query: any ): query is AlphaVantageQuery => query.fn !== undefined;
const setBaseUrl = (query: Query): API_BASE_URLS => {
  if (isAVQuery(query)) return API_BASE_URLS.ALPHA_VANTAGE
  // if (isOtherQuery(query)) return API_BASE_URLS.SOMETHING_ELSE
  return API_BASE_URLS.ALPHA_VANTAGE
}

const transformParam = (param: string): string => param === 'fn' ? 'function' : param.toLowerCase()
const setQueryParams = (query: Query): QueryParam[] => {
  return Object.entries(query).map((entryArr: string[]): QueryParam => {
    return {
      param: transformParam(entryArr[0]),
      value: entryArr[1]
    }
  })
}

const queryToBuilderParams = (query: Query): UrlQueryBuilderParams => {
  return {
    baseUrl: setBaseUrl(query),
    queryParams: setQueryParams(query)
  }
}

const urlBuilder = (urlParams: UrlQueryBuilderParams): string => {
  const queryParamToUrlFrag = (qp: QueryParam): string => `${qp.param}=${qp.value}&`
  return urlParams.baseUrl + '/query?' + urlParams.queryParams.map(queryParamToUrlFrag).join('').slice(0, -1)
}

export const queryToAVUrl = (query: Query): string => urlBuilder(queryToBuilderParams(query))


