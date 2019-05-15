var express = require("express")
var path = require("path");
var apirouter = express.Router()


apirouter.get("/api/friends", function(req, res) {
    res.send(("json here eventually"));
});


module.exports = apirouter