import {TEST_DATA_AND_RESPONSES} from "../data/moreData";
import {convertAVResponseToData} from "../../avResponseToDataConverter";


describe("avConverter", () => {
  TEST_DATA_AND_RESPONSES.forEach((nameAnd) => {
    test(`${nameAnd.name}`, () => {
      expect(convertAVResponseToData(nameAnd.rAndD.response)).toMatchObject(nameAnd.rAndD.data)
    })
  })
})