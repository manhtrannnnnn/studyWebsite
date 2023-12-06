const express = require('express');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();
const port = 8080;

const route = require('./routes/app');
const db = require('./config/db/app');

//Connect to db;
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
// HTTP logger
app.use(morgan('combined'));

// Template engine
const hbs = exphbs.create({ extname: '.hbs' });
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//Routes init
route(app);

app.listen(port, () => {
    console.log('Server is running on port 8080');
});
// Get: máy chủ về client
// Post: gửi client lên server