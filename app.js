const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");


const app = express();
const items = [];
const workItems = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.post("/", (req, res) => {
  let item = req.body.newItem;
  let buttonTitle = req.body.button;

  if (buttonTitle == "Work List") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }

  // console.log(buttonTitle);
  // console.log(item);
  
});
app.get("/", (req, res) => {
 
  const day = date.getDate();

  res.render("list", { titleList: day, newItems: items });

});

app.get("/work", (req, res) => {
  res.render("list", { titleList: "Work List", newItems: workItems });
});

app.post("/work", (req, res) => {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.listen(3000, () => {
  console.log("Server is running");
});
