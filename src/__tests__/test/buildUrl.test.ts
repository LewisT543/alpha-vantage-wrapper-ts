import {queryToAVUrl} from "../../queryToAvUrl";
import {TEST_DATA} from "../data/moreData";


describe('urlBuilder should correctly form urls from queries', () => {
  TEST_DATA.forEach((testQuery) => {
    test(`${testQuery.name} | ${testQuery.qAndUrl.query.fn}`, () => {
      expect(queryToAVUrl(testQuery.qAndUrl.query)).toBe(testQuery.qAndUrl.url)
    })
  })
})

