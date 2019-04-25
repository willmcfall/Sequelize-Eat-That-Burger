/* eslint-disable func-names */
// /* eslint-disable func-names */
// /* eslint-disable prefer-arrow-callback */

const db = require('../models');

module.exports = function (app) {
  // Get all examples
  app.get('/', (req, res) => {
    db.burgers.findAll({}).then((dbExamples) => {
      res.json(dbExamples);
      console.log("get request successful");
    });
  });

  // Create a new example
  app.post('/api/burgers', (req, res) => {
    db.burgers.create(req.body).then((dbExample) => {
      res.json(dbExample);
      console.log("post request successful");
    });
  });

  // Delete an example by id
  app.delete('/api/burgers/:id', (req, res) => {
    db.burgers.destroy({ where: { id: req.params.id } }).then((
      dbExample
    ) => {
      res.json(dbExample);
      console.log("delete request successful");
    });
  });
};
