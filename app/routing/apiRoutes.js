var express = require("express")
var path = require("path");
var apirouter = express.Router()
var friends = require("../data/friends")


apirouter.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

apirouter.post("/api/friends", function(req, res) {

    var newfriend = req.body;
  
    console.log(newfriend);
  
    friends.push(newfriend);
  
    res.json(newfriend);

  });

module.exports = apirouter