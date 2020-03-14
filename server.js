// setting the variables for express and handlebars
const express = require("express");
const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.satic("public"));
app.use(express.urlencoded({extended: true}));
app.use(xpress.json());

const handlebar = require("express-handlebars");

app.engine("handlebars", handlebar({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// importing the routes
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

// adding a listen to we know it's there
app.listen(PORT, function() {
    console.log("App is listening on localhost:" + PORT);
});