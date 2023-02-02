# easy-alpha-v-ts

Typescript wrapper for AlphaVantage Financial Data API.

Allows the easy building of queries, and enforces type safety on responses. Also 
allows the user to leverage the type system to easily access and use data from 
responses.

## Installation

Use either package manager, npm or yarn to install [easy-alpha-v-ts](https://www.npmjs.com/package/easy-alpha-v-ts).

```bash
npm install easy-alpha-v-ts | yarn add easy-alpha-v-ts
```

## Usage

```typescript
import {queryToAVUrl, convertAVResponseToData} from 'easy-alpha-v-ts'
import {AVResponse} from "./avResponse.types";

const myQuery: CommoditiesAluminiumQuery = {
  fn: AlphaVantageCommoditiesFn.ALUMINUM,
  dataType: 'json', // enforced types allow for heavy leveraging of alt-enter code complete
  apiKey: 'demo'
}

// Build the query into a url
const myUrl = queryToAVUrl(myQuery)

const makeHttpRequest = (): AVResponse => {
  // Filler function to represent hitting an AlphaVantage API endpoint 
  // and recieving a response
  return response
}

const myResponse: AVResponse = makeHttpRequest()

const myData: AVIntelResponse  = convertAVResponseToData(myResponse)

// Now you can do whatever you like, with typed and easily accessible data...

```

## Contributing

Currently this is a solo project and I am going to make little effort for this to
be seen. 

However, if there is genuine interest in this project, I am open to any and all 
contributions and collaborations.

## License

[MIT](https://choosealicense.com/licenses/mit/)