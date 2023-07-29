/**
 * This app.js file implements the server with the express package
 */

const express = require('express');
const morgan = require('morgan');

// Express app
const app = express();

// Register view engine to implement templates
app.set('view engine', 'ejs');
// app.set('views', 'myviews');

// Listen for requests
app.listen(3000);

// HTTP request logger middleware
app.use(morgan('dev')); // logger middleware - log details of every request

// Routing
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
  
  // middleware to handle 404 error
  app.use((req, res) => {
    res.status(404).render('404', { title: '404 Page not found' });
  });