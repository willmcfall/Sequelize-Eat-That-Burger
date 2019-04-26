/* eslint-disable func-names */
// /* eslint-disable func-names */
// /* eslint-disable prefer-arrow-callback */

const db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/", function (req, res){
    db.burgers.findAll({}).then(data => {
      var hbsObject = {
        burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
    });
  });

  // Create a new example
  app.post("/api/burgers", (req, res) => {
    db.burgers.create(req.body).then(burger => {
      res.json(burger);
      console.log("post request successful");
    });
  });

  // Delete an example by id
  app.delete("/api/burgers/:id", (req, res) => {
    db.burgers.destroy({ where: { id: req.params.id } }).then(burger => {
      res.json(burger);
      console.log("delete request successful");
    });
  });

  app.put("/api/burgers", function(req, res) {
    db.burgers
      .update(req.body, {
        where: {
          id: req.body.id
        }
      })
      .then(function(burger) {
        res.json(burger);
        console.log("put request successful");
      });
  });
};
