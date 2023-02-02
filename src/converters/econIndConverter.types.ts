import {AVEconIndResponse, EconIndResponseDatum} from "../types/alphavantage/responses/econIndResponse.types";
import {getDateFromString} from "../utils";
import {EconIndData, EconIndDataDatum} from "../types/alphavantage/data/econIndData.types";
import {DATE_FORMATS} from "../types/constants";

export type AVEconIndData = EconIndData

export const convertEconIndToData = (response: AVEconIndResponse): AVEconIndData => ({
  name:     response.name,
  interval: response.interval,
  unit:     response.unit,
  data:     response.data.map(convertEconIndDatum)
})

const convertEconIndDatum = (datum: EconIndResponseDatum): EconIndDataDatum => ({
  date:   getDateFromString(datum.date, DATE_FORMATS.yearMonthDay),
  value:  Number(datum.value)
})
