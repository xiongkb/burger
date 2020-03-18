const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

// start of the routes
router.get("/", function(req, res) {
    burger.all(function(data) {
        let burObj = {
            burgers: data
        };
        console.log(burObj);
        res.render("index", burObj);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create(["burger_name, Devoured"], [req.body.burger_name, req.body.devoured], function(result) {
        res.json({ id: result.insertID });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;
    console.log("condition: " + condition);
    burger.update({devoured: req.body.devoured}, condition, function(result) {
        // displaying the status if changed row was changed or not
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            return res.status(202).end();
        };
    });
});

router.delete("/api/burgers/:id", function(req, res) {
    let condition = "id: " + req.params.id;
    burger.delete(condition, function(result) {
        if (result.affectRows == 0) {
            return res.status(404).end();
        } else {
            return res.status(202).end();
        };
    });
});

// exporting this file
module.exports = router