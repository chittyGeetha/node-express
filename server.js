const express = require("express");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");
const app = express();

/* ======================MIDDLEWARE STARTS HERE BLOCK ===========================*/

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

/*=======================ENDS MIDDLEWARE BLOCK =========================*/

/*========================SERVE STATIC ASSETS================================*/
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/node_modules"));
//connect database
let mongodb_url="mongodb+srv://chitty:<>@cluster0.7pgf5.mongodb.net/<chitty>?retryWrites=true&w=majority";
mongoose.connect(mongodb_url,
    {
        useUnifiedTopology:true,
        useNewUrlParser:true,
    },
    (err)=>{
    if(err)throw err;
    console.log("database connected!");
    }
    );
//create express web server

///basic route
app.get("/", (req, res) => {
    res.render("./home");
  });
  

/*===================ALL GET REQUEST ============*/
// @HTTP METHODS
//GET,POST,PUT,DELETE
app.get("/login", (req, res) => {
    res.render("./auth/login");
  });
  app.get("/register", (req, res) => {
    res.render("./auth/register");
  });
  
  app.get("/add-profile", (req, res) => {
    res.render("./profiles/addprofile-form");
  });
  
  /*===================ALL GET REQUEST ends here ============*/
  
  
  //listen port
  let port = 3000;
  
  app.listen(port, (err) => {
    if (err) throw err;
    console.log("express server is running on port number " + port);
  });