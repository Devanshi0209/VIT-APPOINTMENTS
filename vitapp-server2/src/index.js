require('./models/studentuser');
require('./models/profuser');
require('./models/freeslots');
require('./models/appointments');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authrouter');
const trackroutes = require('./routes/trackroutes');
const appointrouter = require('./routes/appointrouter');
const requireAuth = require('./middlewares/requireauth');
const requireauthprof=require('./middlewares/requireauthprof');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackroutes);
app.use(appointrouter);
app.use(function (req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});

const mongoUri = 'mongodb+srv://admin:passwordpassword@cluster0-ds0do.mongodb.net/test?retryWrites=true&w=majority';
if (!mongoUri) {
  throw new Error(
    `MongoURI was not supplied.  Make sure you watch the video on setting up Mongo DB!`
  );
}
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true
});
mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});
mongoose.connection.on('error', err => {
  console.error('Error connecting to mongo', err);
});

app.get('/p',requireauthprof, (req, res) => {
  res.send(`Your email is : ${req.user.vitemail}`);
});

app.get('/',requireAuth, (req, res) => {
  res.send(`Your email is : ${req.user.vitemail}`);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
