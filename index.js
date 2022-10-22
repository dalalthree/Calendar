const express = require('express');
const app = express();
const session = require('express-session');

app.set('view engine', 'ejs');

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET',
}));

app.get('/', function(req, res) {
  res.render('pages/auth');
})

const port = process.env.PORT;
app.listen(port, () => console.log('App listenting on port ' + port));
