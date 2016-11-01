const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const session = require('express-session');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRouter');
const authRouter = require('./routes/authRouter');
const noteRouter = require('./routes/noteRouter');
const authentication = require('./middleware/authentication');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: true,
  saveUninitialized: true,
}));
app.use(morgan('dev'));

app.use('/api', authentication);
app.use('/api', authRouter);
app.use('/api/users', userRouter);
app.use('/api/notes', noteRouter);


module.exports = app;
