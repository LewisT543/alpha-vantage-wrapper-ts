// returns a new object with the values at each key mapped using mapFn(value)

import {CryptoOHLCVResponseObjects} from "./types/alphavantage/responses/cryptoResponse.types";
import {CryptoOHLCVDataObjects} from "./types/alphavantage/data/cryptoData.types";

export const objectMap = (obj: any, fn: any) =>
  Object.entries(obj).map(
    ([key, val], ind) => [key, fn(val, key, ind)]
  )

export const isNumeric = (str: string) => {
  if (str.toString().trim() === '') return false
  return !isNaN(Number(str)) &&
    !isNaN(parseFloat(str))
};

export const getDateFromString = (str: string): Date => new Date(Date.parse(str))
export const convertPctStr = (pctStr: string): string => pctStr.replace("%", "")

export const isPresentObject = <T>(arg: T): arg is T => arg && Object.keys(arg).length > 0
                          //bad any - no FN type yet
const loopConvertObj = (fn: any) => <R extends CryptoOHLCVResponseObjects, D extends CryptoOHLCVDataObjects>(obj: CryptoOHLCVResponseObjects): CryptoOHLCVDataObjects =>
  Object.fromEntries(Object.entries(obj).map(([key, val]) => [key, fn(val)]));

export type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;
type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> };
type Cast<X, Y> = X extends Y ? X : Y
type FromEntries<T> = T extends [infer Key, any][]
  ? { [K in Cast<Key, string>]: Extract<ArrayElement<T>, [K, any]>[1]}
  : { [key in string]: any }

export type FromEntriesWithReadOnly<T> = FromEntries<DeepWriteable<T>>

declare global {
  interface ObjectConstructor {
    fromEntries<T>(obj: T): FromEntriesWithReadOnly<T>
  }
}