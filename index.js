var http = require("http");
const url = require("url");
const js2jl = require("js2jl");
const jsonLogic = require("json-logic-js");
//create a server object:
http
  .createServer(function (req, res) {
    const queryObject = url.parse(req.url, true).query;
    console.log(queryObject);

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(queryObject["expression"]);

    const jsonconv = JSON.stringify(js2jl(queryObject["expression"]), null, 4);

    console.log(jsonconv);
  })
  .listen(8080);
