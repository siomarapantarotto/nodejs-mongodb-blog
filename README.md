# Blog Corner

This repo cointains the "Blog Corner" web application implemented with:

- NodeJS
- Express
- EJS
- Morgan
- MongoDB
- Mongoose
- etc

<b>Node.js</b> is a tool written in C++, which basically wraps the V8 engine, just like web browsers, and lets us write code in JavaScript and share it between the front end and back end of our projects.

<b>Express</b> is a lightweight and flexible web application framework in JavaScript that simplifies building server-side applications and APIs with Node.js, handling routing and HTTP requests. 

<b>MongoDB</b> is a super flexible NoSQL database that is a great fit for certain types of applications where a traditional, structured database might not be the best choice. 

<b>Mongoose</b> is an ODM library - Object Document Mapping library. 


## Content

- How to create an Express app / website
- How to use the NoSQL database MongoDB
- How to use template engines to create HTML views
- How to put everything together to make a simple blog site

## MongoDB & Atlas

https://cloud.mongodb.com/

Database: blog-corner
Collection: blogs
App User: blogcorneruser

## Create Mongoose & Mongo sandbox routes for tests
### /add-blog route:

        // '/add-blog' - add a new blog into the database
        app.get('/add-blog', (req, res) => {
        const blog = new Blog({
            title: 'Lorem',
            snippet: 'Lorem ipsum dolor',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        });
        blog.save()
            .then((result) => {
            res.send(result); // send the blog that was added back to the browser
            })
            .catch((err) => {
            console.log(err);
            });
        });

![image](https://github.com/siomarapantarotto/nodejs-mongodb-blog/assets/5893219/ef9d1ec7-77d8-41a0-82f4-4edc618d0c4d)

![image](https://github.com/siomarapantarotto/nodejs-mongodb-blog/assets/5893219/36333f9d-3a74-4132-9d71-c7413452bd60)

### /all-blogs route:

        // '/all-blogs' - retrieve all blogs from the database
        app.get('/all-blogs', (req, res) => {
        Blog.find()
        .then((result) => {
            res.send(result); // send all blogs retrieved back to the browser
        })
        .catch((err) => {
            console.log(err);
        });
        });

![image](https://github.com/siomarapantarotto/nodejs-mongodb-blog/assets/5893219/00728fda-02cc-4c86-ac1b-f18e3323c396)

![image](https://github.com/siomarapantarotto/nodejs-mongodb-blog/assets/5893219/78141a6b-eea6-40b5-a28d-61a68fecad71)

### /single-blog route:

        // '/single-blog' - retrieve a specific blog from the database
        app.get('/single-blog', (req, res) => {
        Blog.findById('64c5cf5be06f183d503e310d')
            .then(result => {
            res.send(result);
            })
            .catch(err => {
            console.log(err);
            });
        });

![image](https://github.com/siomarapantarotto/nodejs-mongodb-blog/assets/5893219/5e8e35fe-7883-4cbd-8db7-476d3d7e84bb)

