import {TEST_RESPONSES} from "./data/exampleQueries";
import {fundamentalTx} from "../transform/fundamentalsResponseTx";

describe('responseTx should transform responses into typed objects', () => {
  Object.values(TEST_RESPONSES).forEach((testResponse, index) => {
    test(`${testResponse.response.symbol.toLowerCase()}_${index}`, () => {
      expect(fundamentalTx(testResponse.response)).toMatchObject(testResponse.output)
    })
  })
})
