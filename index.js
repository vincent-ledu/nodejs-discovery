const { fizzbuzz } = require("./fizzbuzz");
const http = require("http");
const { add } = require("./addition");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(add(1,4).toString());
    // let output = "<h1>da awsome fizzbuzz</h1>";
    // for (let i = 1; i <= 100; i++) {
    //   output += fizzbuzz(i) + "<br>";
    // }
    // res.end(output);
  })
  .listen(8080);
