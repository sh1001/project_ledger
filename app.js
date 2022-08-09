const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const router = require('./routes');
require('dotenv').config();
require('./dbConnect.js')();

const app = express();

if (process.env.NODE_ENV === 'prod') {
    app.use(express.static('client/build'))
}

app.use(morgan('dev'));
app.use(express.json());
app.use(cors())

app.use('/api', router);

const notFound = (req, res, next) => {
    res.json({msg: 'Page Not Found'});
    res.status(404);
};

app.use(notFound);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening to port - ${port}`));