import {AVCommoditiesIntervalEnum} from "../../enums";

export type AVCommoditiesResponse = CommoditiesResponse

export interface CommoditiesResponse {
  name:     string;
  interval: AVCommoditiesIntervalEnum;
  unit:     string;
  data:     CommoditiesResponseDatum[];
}

export interface CommoditiesResponseDatum {
  date:  string;
  value: string;
}

