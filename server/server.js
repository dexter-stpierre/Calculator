//load premade modules
var express = require("express");
var app = express();
var path = require("path");
var port = 5000;
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

//global variables
var data;
var operator;
var x;
var y;
var answer;

app.post("/calculate", function(req, res){
  //seperate the request into variables
  data = req.body;
  console.log(data);
  operator = data.type;
  x = parseFloat(data.x);
  y = parseFloat(data.y);
  console.log(operator);
  //determine the type of operation and evaluate
  if(operator == "+" || operator == "Add"){
    answer = x + y;
  }
  else if(operator == "-" || operator == "Subtract"){
    answer = x - y;
  }
  else if (operator == "/" || operator == "Divide") {
    answer = x / y;
  }
  else if (operator == "x" || operator == "Multiply") {
    answer = x * y;
  }
  else{
    answer = "Please select an operator."
  }
  res.send({answer: answer})
});

app.get("/calc", function(req, res){
  console.log("got a request for: " + req.params[0]);
  var file = "views/calc.html";
  res.sendFile(path.join(__dirname, "/public/", file));
});

//serves index.html
app.get("/*", function(req, res){
  console.log("got a request for: " + req.params[0]);
  var file = req.params[0] || "views/index.html";
  res.sendFile(path.join(__dirname, "/public/", file));
});

//turn on server
app.listen(port, function(){
  console.log("listening on port " + port);
});
