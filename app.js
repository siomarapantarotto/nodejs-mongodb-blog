/**
 * This app.js file implements the server with the express package
 */

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');


// Express app
const app = express();


// Connect to MongoDB database
const dbURI = 'mongodb+srv://blogcorneruser:blogcornerpwd@spantarotto.ved3mjt.mongodb.net/blog-corner?retryWrites=true&w=majority';
//mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }); // to disable deprecation warn if it happens
mongoose.connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log('err: ', err));


// Register view engine to implement templates
app.set('view engine', 'ejs');
// app.set('views', 'myviews');


// Middleware to log request info - next allows to move to next middleware
// This code was replaced by installing and using Morgan as bellow
//app.use((req, res, next) => {
//  console.log('new request was made...');
//  console.log('host: ', req.hostname);
//  console.log('path: ', req.path);
//  console.log('method: ', req.method);
//  next();
//});


// middleware & static files (CSS, images etc)
app.use(express.static('public'))
app.use(morgan('dev')); // logger middleware - log details of every request


// Routes
app.get('/', (req, res) => {
    const blogs = [
      {title: 'Fall In Love With Nodejs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      {title: 'Why MongoDB Succeeds', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      {title: 'Javascript for Frontend and Backend', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
    res.render('index', { title: 'Home', blogs });
  });

  app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
  });
  
  app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
  });
  

  // Middleware to handle 404 error
  app.use((req, res) => {
    res.status(404).render('404', { title: '404 Page not found' });
  });