/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
// This file sets up the rouding which outlines what happens at different url file paths.

const express = require('express');

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require('../models/burger');

// Create all our routes and set up logic within those routes where required.

// when "/" url is reached all the burgers are passed into the handlebars
router.get('/', function (req, res) {
  burger.all(function (data) {
    const hbsObject = {
      burger: data,
    };
    // console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

// when "/api/burgers" url is hit burgers are updated
router.post('/api/burgers', function (req, res) {
  burger.create(
    ['burger_name', 'devoured'],
    [req.body.burger_name, req.body.devoured],
    // eslint-disable-next-line prefer-arrow-callback
    function (result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    },
  );
});

router.put('/api/burgers/:id', function (req, res) {
//   console.log('id = ' + req.params.id);
  burger.update(req.params.id, function () {
    res.sendStatus(200);
  });
});

router.delete('/api/burgers/:id', function (req, res) {
  // eslint-disable-next-line prefer-template
  const condition = 'id = ' + req.params.id;
  // eslint-disable-next-line consistent-return
  burger.delete(condition, function (result) {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

// Export routes for server.js to use.
module.exports = router;
