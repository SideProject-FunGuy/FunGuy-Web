require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const shelflifeAPI = require('./shelf_life/shelf-life');

require('./app_api/models/db');

const indexRouter = require('./app_server/routes/index');
const apiRouter = require('./app_api/routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);

const asyncApiCall = async () => {
    const response = await shelflifeAPI.getCompatibility('Parsley');
    console.log(response);
    let select = response.data[0].name;
    console.log(select);
    // let methods = response.data.methods;
    // console.log(response);
    // console.log(methods);
    // let expirationTime = methods[0].expirationTime * 1000;
    // let start = Date.now();
    // console.log("Today's date: " + start);
    // console.log("Expiration: " + expirationTime);
    // let shelf_life = start + expirationTime;
    // let newExpiryDate = new Date(shelf_life);
    // console.log('expiry date: ' + newExpiryDate.toLocaleString());
}

asyncApiCall()

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
