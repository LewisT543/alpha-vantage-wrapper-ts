import {AVCommoditiesResponse, CommoditiesResponseDatum} from "../types/alphavantage/responses/commoditiesResponse.types";
import {AVCommoditiesData, CommoditiesDataDatum} from "../types/alphavantage/data/commoditiesData.types";
import {getDateFromString} from "../utils";

export const convertCommoditiesToData = (commodityResponse: AVCommoditiesResponse): AVCommoditiesData => ({
  name:         commodityResponse.name,
  interval:     commodityResponse.interval,
  unit:         commodityResponse.unit,
  data:         commodityResponse.data.map(convertCommoditiesDatum)
})

const convertCommoditiesDatum = (datum: CommoditiesResponseDatum): CommoditiesDataDatum => ({
  date:   getDateFromString(datum.date),
  value:  Number(datum.value)
})

