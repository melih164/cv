//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {

res.render("home")

});

app.get("/Portfolio", function(req, res) {
res.render("Portfolio")
});

app.get("/Aboutme", function(req, res) {
res.render("About-me")
});

app.get("/Ability", function(req, res) {
res.render("Ability")
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
