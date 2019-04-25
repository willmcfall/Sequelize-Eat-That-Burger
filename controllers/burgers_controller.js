/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */

const db = require('../models');

module.exports = function (app) {
  app.get('/', function (req, res) {
    db.burger.findAll({}).then(function (data) {
      res.json(data);
    });
  });

  app.post('/api/burgers', function (req, res) {
    db.burger.create(req.body).then(function (data) {
      res.json(data);
    });
  });

  app.put('/api/burgers/:id', function (req, res) {
    db.burger.update({ devoured: 'TRUE' },
      { where: { id: req.params.id } })
      .then(function (data) {
        res.json(data);
      });
  });

  app.delete('/api/burgers/:id', function (req, res) {
    db.burger.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function (data) {
      res.json(data);
    });
  });
};
