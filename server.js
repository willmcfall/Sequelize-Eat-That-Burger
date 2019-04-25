// This file sets up the server and loads express for use across the application

// sets up the Express Module
const express = require('express');

const app = express();

// sets up the Express Handlebars Module
const exphbs = require('express-handlebars');

// sets up the Routes
const routes = require('./controllers/burgers_controller');

// sets up the connection to the database
const db = require('./models');

const PORT = process.env.PORT || 8080;

app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.listen(PORT, console.log(`Server listening on: http://localhost: ${PORT}`));

db.sequelize.sync({ force: true }).then(() => {
  db.authenticate().then(() => console.log('Databae connected...'))
    .catch(err => console.log(`Error: ${err}`));
});
