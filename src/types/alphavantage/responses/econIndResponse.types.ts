
export type AVEconIndResponse = EconIndResponse

export interface EconIndResponse {
  name:     string;
  interval: string;
  unit:     string;
  data:     EconIndResponseDatum[];
}

export interface EconIndResponseDatum {
  date:  string;
  value: string;
}