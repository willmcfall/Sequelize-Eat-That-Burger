// This file sets up the rouding which outlines what happens at different url file paths.

var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger");

// Create all our routes and set up logic within those routes where required.

// when "/" url is reached all the burgers are passed into the handlebars
router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// when "/api/burgers" url is hit burgers are updated
router.post("/api/burgers", function(req, res) {
    burger.create(
        ["burger_name", "devoured"],
        [req.body.burger_name, req.body.devoured],
        function(result) {
            // Send back the ID of the new quote
            res.json({ id: result.insertId });
        }
    );
});

router.put("/api/burgers/:id", function(req, res) {
    console.log("id = " + req.params.id);
    burger.update(req.params.id, function(){
      res.sendStatus(200);
    })
    // burger.update(
    //     {
    //         devoured: req.body.devoured
    //     },
    //     function(result) {
    //         if (result.changedRows == 0) {
    //             // If no rows were changed, then the ID must not exist, so 404
    //             return res.status(404).end();
    //         } else {
    //             res.status(200).end();
    //         }
    //     }
    // );
});

router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log(condition);
    burger.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;
