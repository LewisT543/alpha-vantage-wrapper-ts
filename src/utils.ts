// returns a new object with the values at each key mapped using mapFn(value)
export const objectMap = (obj: any, fn: any) =>
  Object.entries(obj).map(
    ([key, val], ind) => [key, fn(val, key, ind)]
  )

export const isNumeric = (str: string) => {
  if (str.trim() === '') return false
  return !isNaN(Number(str)) &&
    !isNaN(parseFloat(str))
};