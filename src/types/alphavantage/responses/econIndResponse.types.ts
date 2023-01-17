
export type AVEconIndResponse = EconIndResponse

export interface EconIndResponse {
  name:     string;
  interval: string;
  unit:     string;
  data:     EconIndDatum[];
}

export interface EconIndDatum {
  date:  Date;
  value: string;
}