import {TEST_RESPONSES} from "./data/exampleQueries";
import {fundamentalsTx} from "../transform/fundamentalsResponseTx";

describe('responseTx should transform responses into typed objects', () => {
  Object.values(TEST_RESPONSES).forEach((testResponse, index) => {
    test(`${testResponse.response.symbol.toLowerCase()}_${index}`, () => {
      const x = fundamentalsTx(testResponse.response)
      // console.log('response', testResponse.response)
      // console.log('result', x)
      // console.log('expectedOutput', testResponse.output)
      expect(x).toMatchObject(testResponse.output)
    })
  })
})
