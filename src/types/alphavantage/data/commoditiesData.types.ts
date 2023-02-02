import {AVCommoditiesIntervalEnum} from "../../enums";

export type AVCommoditiesData = CommoditiesData

export interface CommoditiesData {
  name:     string;
  interval: string;
  unit:     string;
  data:     CommoditiesDataDatum[];
}

export interface CommoditiesDataDatum {
  date:  Date;
  value: number;
}

