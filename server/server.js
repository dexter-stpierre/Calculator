//load premade modules
var express = require("express");
var app = express();
var path = require("path");
var port = 5000;
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/*", function(req, res){
  console.log("got a request for: " + req.params[0]);
  var file = req.params[0] || "views/index.html";
  res.sendFile(path.join(__dirname, "/public/", file));
})

app.listen(port, function(){
  console.log("listening on port " + port);
})
