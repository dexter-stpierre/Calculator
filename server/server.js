//load premade modules
var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
