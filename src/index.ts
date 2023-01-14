import * as http from "http";

const myServer = http.createServer((req, res) => {
  console.log(req.url)
  res.write('Hello World')
  res.end()
})