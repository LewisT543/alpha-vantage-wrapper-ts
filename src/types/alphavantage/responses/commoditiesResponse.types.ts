export type AVCommoditiesResponse = CommoditiesResponse

export interface CommoditiesResponse {
  name:     string;
  interval: string;
  unit:     string;
  data:     CommoditiesResponseDatum[];
}

export interface CommoditiesResponseDatum {
  date:  string;
  value: string;
}

