var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const logger = require('morgan');
const fileUpload = require('express-fileupload')


var app = express();
require('./database');
require('./passport/local-auth');

// routes añadir mas abajo tambien

const tasksRouter = require('./routes/tasks');
const usersRouter = require('./routes/users');
const asignaturasRouter = require('./routes/asignaturas');
const estudiosRoutes = require('./routes/estudios');
const usuariosRoutes = require('./routes/usuarios');
const softwareRoutes = require('./routes/software');
const solicitudRoutes = require('./routes/solicitud');

// view engine setup
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use("/public", express.static(path.resolve(__dirname + '/public')));
app.use("/files", express.static(path.join(__dirname, "files")));
app.use(session({
  secret: 'mysecretsession',
  resave: false,
  saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(fileUpload());
// middlewares


app.use((req, res, next) => {
  app.locals.signinMessage = req.flash('signinMessage');
  app.locals.signupMessage = req.flash('signupMessage');
  app.locals.user = req.user;
  next();
});


//routes
app.use('/', usersRouter);
app.use('/', tasksRouter);
app.use('/', asignaturasRouter);
app.use('/', estudiosRoutes);
app.use('/', usuariosRoutes);
app.use('/', softwareRoutes);
app.use('/', solicitudRoutes);

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
