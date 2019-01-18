var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8889;

app.use("/static", express.static(path.join(__dirname + "/App/Public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./App/Routing/apiRoutes.js")(app);
require("./App/Routing/htmlRoutes.js")(app);

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});