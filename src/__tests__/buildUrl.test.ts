import {queryToUrl} from "../urlBuilder";
import {TEST_QUERIES} from "./exampleQueries";


describe('urlbuilder should correctly form urls from queries', () => {
  Object.values(TEST_QUERIES).forEach((testQuery) => {
    test(`${testQuery.query.fn.toLowerCase()}`, () => {
      expect(queryToUrl(testQuery.query)).toBe(testQuery.output)
    })
  })
})

