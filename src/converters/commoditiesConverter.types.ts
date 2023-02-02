import {AVCommoditiesResponse, CommoditiesResponseDatum} from "../types/alphavantage/responses/commoditiesResponse.types";
import {AVCommoditiesData, CommoditiesDataDatum} from "../types/alphavantage/data/commoditiesData.types";
import {getDateFromString} from "../utils";
import {DATE_FORMATS} from "../types/constants";

export const convertCommoditiesToData = (commodityResponse: AVCommoditiesResponse): AVCommoditiesData => ({
  name:         commodityResponse.name,
  interval:     commodityResponse.interval,
  unit:         commodityResponse.unit,
  data:         commodityResponse.data.map(convertCommoditiesDatum)
})

const convertCommoditiesDatum = (datum: CommoditiesResponseDatum): CommoditiesDataDatum => ({
  date:   getDateFromString(datum.date, DATE_FORMATS.yearMonthDay),
  value:  Number(datum.value)
})
