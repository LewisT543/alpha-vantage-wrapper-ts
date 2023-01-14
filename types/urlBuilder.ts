export interface UrlQueryBuilderParams {
  baseUrl: string;
  queryParams: QueryParam[]
}

export interface QueryParam {
  param: string;
  value: string
}

export const urlBuilder = (urlParams: UrlQueryBuilderParams): string => {
  const queryParamToUrlFrag = (qp: QueryParam): string => `${qp.param}=${qp.value}&`
  return urlParams.baseUrl + '/query?' + urlParams.queryParams.map(queryParamToUrlFrag).join('').slice(0, -1)
}