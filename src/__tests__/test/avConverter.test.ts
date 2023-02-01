import {testResponsesAndData} from "../data/moreData";
import {convertAVResponseToData} from "../../avResponseToDataConverter";


describe("avConverter", () => {
  testResponsesAndData.forEach(nameAnd => {
    test(`${nameAnd.name}`, () => {
      expect(convertAVResponseToData(nameAnd.rAndD.response)).toMatchObject(nameAnd.rAndD.data)
    })
  })
})