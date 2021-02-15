const express = require("express");
const history = require("connect-history-api-fallback");
const jsonServer = require("json-server");
const bodyParser = require('body-parser');
const auth = require("./authMiddleware");
const router = jsonServer.router("data.json");
const app = express();
app.use(bodyParser.json());
app.use(auth);
app.use("/api", router);
app.use(history());
// app.use("/", express.static("./dist"));
let port = process.env.PORT;
if (port == null || port == "") {
  port = 5050;
}
app.listen(port, function () {
 console.log(`HTTP Server running on port ${port}`);
});