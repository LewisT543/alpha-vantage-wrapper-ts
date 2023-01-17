
export type AVEconIndData = EconIndData

export interface EconIndData {
  name:     string;
  interval: string;
  unit:     string;
  data:     EconIndDataDatum[];
}

export interface EconIndDataDatum {
  date:  Date;
  value: number;
}