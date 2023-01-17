import {queryToAVUrl} from "../queryToAvUrl";
import {TEST_QUERIES} from "./data/exampleQueries";


describe('urlbuilder should correctly form urls from queries', () => {
  Object.values(TEST_QUERIES).forEach((testQuery) => {
    test(`${testQuery.query.fn.toLowerCase()}`, () => {
      expect(queryToAVUrl(testQuery.query)).toBe(testQuery.output)
    })
  })
})

