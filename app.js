const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var items = ["Buy Food", "Cook Food", "Eat Food"];

app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.post("/", (req, res) => {
  var item = req.body.newItem;
  items.push(item);
  // console.log(item);
  res.redirect("/");
});
app.get("/", (req, res) => {
  var today = new Date();
  // var currentDay = today.getDay();
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  var day = today.toLocaleDateString("en-US", options);

  res.render("list", { day, newItems: items });
  // switch (currentDay) {
  //   case 0:
  //     day = "Sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //     day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //     day = "Thursday";
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "Saturday";
  //     break;
  //   default:
  //     console.log("Error: current day is " + currentDay);
  //     break;
  // }
});

app.post;
app.listen(3000, () => {
  console.log("Server is running");
});
