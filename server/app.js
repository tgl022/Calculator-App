import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
import routes from './routes';

mongoose.connect('mongodb://admin:admin@ds143449.mlab.com:43449/calculator', () => {
  console.log('Connected to MongoDB...');
});

const app = express();

//Middlesware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', routes);

//alternate
// require('./route')(app);

export default app;
