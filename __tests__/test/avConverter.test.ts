import {TEST_DATA} from "../data/exampleData";
import {convertAVResponseToData} from "../../src/avResponseToDataConverter";


describe("avConverter", () => {
  TEST_DATA.forEach((nameAnd) => {
    test(`${nameAnd.name}`, () => {
      console.log(JSON.stringify(convertAVResponseToData(nameAnd.rAndD.response)))
      expect(convertAVResponseToData(nameAnd.rAndD.response)).toStrictEqual(nameAnd.rAndD.data)
    })
  })
})