import {queryToAVUrl} from "../../queryToAvUrl";
import {TEST_QUERIES} from "../data/exampleQueries";


describe('urlBuilder should correctly form urls from queries', () => {
  TEST_QUERIES.forEach((testQuery) => {
    test(`${testQuery.name} | ${testQuery.data.query.fn}`, () => {
      expect(queryToAVUrl(testQuery.data.query)).toBe(testQuery.data.output)
    })
  })
})

