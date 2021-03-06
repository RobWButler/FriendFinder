var express = require("express");
var fs = require("fs")
var router = require("./app/routing/htmlRoutes")
var apirouter = require("./app/routing/apiRoutes")


var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static("app/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router);
app.use('/', apirouter)

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});