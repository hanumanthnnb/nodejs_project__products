const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const path = require('path');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/404');

const port = process.env.PORT | 3000;

// Template Engines Setup
app.set('view engine', 'ejs');
app.set('views', "views/layouts");

const rootDir = require('./utils/path');
// Path which we can want to execute
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false}));

app.use("/admin", adminRoutes);
app.use(shopRoutes);


// 404 page
app.use(errorController.pageNotFound);


app.listen(port);



// .use allow us to add middleware function it accepts array of request handler
// next() allows the request to continue to the next middleware in line