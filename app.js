/**
 * This app.js file implements the server with the express package
 */

const express = require('express');

// Express app
const app = express();

// Register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');

// Listen for requests
app.listen(3000);

// Routing
app.get('/', (req, res) => {
    const blogs = [
      {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
    res.render('index', { title: 'Home', blogs });
  });

  app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
  });
  
  app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
  });
  
  // 404 page not found
  app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
  });