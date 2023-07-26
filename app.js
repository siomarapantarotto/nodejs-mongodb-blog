/**
 * This app.js file implements the server with the express package
 */

const express = require('express');

// Express app
const app = express();

// Register view engine
app.set('view engine', 'ejs');

// Listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    //res.send('<p><h1>Home Page</h1></p>');
    //res.sendFile('./views/index.html', {root: __dirname});
    res.render('index', {title: 'Homepage'});
});

app.get('/about', (req, res) => {
    //res.send('<p><h1>About Page</h1></p>');
    //res.sendFile('./views/about.html', {root: __dirname});
    res.render('about', {title: 'About'});
});

// Redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// 404 page
app.use((req, res) => {
    //res.status(404).sendFile('./views/404.html', {root: __dirname});
    res.status(404).render('404', {title: '404 Not Found'});
});
