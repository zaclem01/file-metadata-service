var express = require('express');
var port = process.env.PORT || 8080;
var app = express();

app.set('views', (__dirname + '/views'));
app.set('view engine', 'pug');

app.use(express.static('public'));

app.use(require('./routes'));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})