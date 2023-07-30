
const express = require("express");
const bodyParser = require("body-parser");
//binds all of the module exports (date.js) in const date
const date = require(__dirname + "/date.js");


const app = express();

let items = ["Buy Books", "Read Books", "Write Journal"];
let workItems = [];
//tells app to use ejs as view engine //set EJS as a templating engine
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", function (req, res) {
    let day = date.getDate();
   
    res.render("list", { listTitle: day, newItem: items });
});

app.post("/", function (req, res) {
    let item = req.body.newItem;
    if (req.body.list === "Work List") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);

        res.redirect("/");
    }


});

app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work List", newItem: workItems });
});

app.post("/work", function (req, res) {
    let item = req.body.newItem;
    workItems.push(item);

    res.redirect("/work");
});

app.get("/about", function (req, res) {
    res.render("about");
});
app.listen(3001, function () {
    console.log("Server started at 3001");
});