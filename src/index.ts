import * as http from "http";

const myServer = http.createServer((req, res) => {
  res.write('Hello World')
  res.end()
})