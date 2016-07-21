const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');

const app = express();

const simulated = require('./data/simulated.json');

app.set('port', 4000);

app.use(logger('dev'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  console.log(simulated);
  res.render('index', { data: JSON.stringify(simulated) });
});


const server = app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + server.address().port);
});
