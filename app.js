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
app.use(express.urlencoded({ extended:true})); // middleware to pass data from forms
app.use(morgan('dev')); // logger middleware - log details of every request


// Basic routes
app.get('/', (req, res) => {
    res.redirect('/blogs');
  });

  app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
  });
  
  // Blog routes
  app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 }) // display from the newest to the oldest
      .then((result) => {
        res.render('index', { title: 'All Blogs', blogs: result })
      })
      .catch((err) => {
        console.log(err);
      });
  });

  app.post('/blogs', (req, res) => {
    //console.log(req.body);
    const blog = new Blog(req.body);
    blog.save()
      .then((result) => {
        res.redirect('/blogs');
      })
      .catch((err) => {
        console.log(err);
      });
  });

  app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    //console.log(id);
    Blog.findById(id)
      .then(result => {
        res.render('details', { blog: result, title: 'Blog Details' });
      })
      .catch(err => {
        console.log(err);
      });
  });

  app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
  });

  
  // Middleware to handle 404 error
  app.use((req, res) => {
    res.status(404).render('404', { title: '404 Page not found' });
  });