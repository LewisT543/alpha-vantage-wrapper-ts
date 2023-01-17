import {AVCommoditiesIntervalEnum} from "../../enums";

export type AVCommoditiesResponse = CommoditiesResponse

export interface CommoditiesResponse {
  name:     string;
  interval: AVCommoditiesIntervalEnum;
  unit:     string;
  data:     CommoditiesDatum[];
}

export interface CommoditiesDatum {
  date:  Date;
  value: string;
}

