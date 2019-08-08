// importing core/third-party node modules
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// importing my routes
const dishRouter = require('./routes/dishRouter');
const promotionRouter = require('./routes/promotionRouter');
const leaderRouter = require('./routes/leaderRouter');

// constants -- TRY TO CREATE AN AD HOC MODULE FOR CONSTANTS
const hostname = 'localhost';
const port = '3000';

const app = express();

app.use(morgan('dev'))
app.use(bodyParser.json());

// mounting dishRouter
app.use('/dishes', dishRouter);
app.use('/promotions',promotionRouter);
app.use('/leaders',leaderRouter);
app.use(express.static(__dirname+'/public'))

const server = http.createServer(app);

server.listen(port,hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
