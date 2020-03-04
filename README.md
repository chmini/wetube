# WeTube

### Cloning YouTube with Vanilla and Node JS

## install Express

```
npm install express
```

Example Code

```javascript
const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("hello world");
});
```

Link : [ExpressJS Offcial Site][expresslink]

[expresslink]: https://expressjs.com/ "To ExpressJS"

## Routing

GET, POST Method & request and response object

```javascript
app.get(req, res);
app.post(req, res);
```

#### Use Request Object

- who request page
- what data sended to page

## Babel

Babel is compiler that converts es5+ script to old version javascript code

```json
"presets": ["@babel/preset-env"]
```

### ES6

#### arrow function

```javascript
const sayHello = () => console.log("hello");
```

#### use babel to convert

```javascript
function sayHello() {
  console.log("hello");
}
```

## Middleware

Middleware is something that connected to the end of processing<br>
It has the power that kill connection

```javascript
app.use([function]);
```

### Express Middleware

- Morgan : HTTP request logger middleware for node.js
- helmet : it helps secure Express app by setting various HTTP headers
- body-parser
- cookie-parser

```javascript
app.use(morgan("dev"));
```

## Routing

Routing refers to how an application’s endpoints (URIs) respond to client requests
Router is in charge of mapping URLS with Controller Functions

## MVC Pattern

Model : Data <br>
View : how does the data look <br>
Controller : function that looks for the data

## Pug

Pug is NodeJS Express Template Engine

```javascript
app.set("view engine", "pug");
```

### Layout

Layout is template that basis of all pug files and extending from them.

```pug
extends [layout]
```

### Block

Block is a way of making space for dynamic content inside of a template

```pug
block [name]
```

### Partial

Partial is piece of HTML code that i can reuse on pug

```pug
include [partial]
```

### Mixin

Mixins are useful when I want to reuse some HTML block that has same structure but different data
this is kind of pug function

```pug
mixin function(args = {})

include [mixin]
```

### Variables in Pug

#### 1. Locals

It can be use all pugs

```javascript
res.locals.[variable name] = [you want to save it]
```

#### 2. Templates

If you render page, you can send a variable(object) to page

```javascript
res.render([page], { [variable] })
```

# Pages

- [x] Home
- [x] Join
- [x] Login
- [x] Search
- [ ] User Detail
- [x] Edit Profile
- [x] Change Password
- [x] Upload
- [ ] Video Detail
- [x] Edit Video

## View and Controller

Insert info or data in controller into the each appropriate view  
If the controller knows what the user has requested, the method must be **get**;

### Pug file

```pug
form(action=[you want] method="get")
  input(type="text", name=[name])
```

### js file

```javascript
const {
  query: [name]
} = req;
```

**Login** and **join** require **post method**, so the controller needs post routes.
**get method** sends the data of the form on the url and **post method** sends it hidden from the user

### Controller

Controller's job is to get data and render the page

## MongoDB

MongoDB is a Non SQL Database

```
1. cd ~
2. sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
3. echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list
4. sudo apt-get update
5. sudo apt-get install -y mongodb-org
6. cd ~
7. sudo mkdir -p data/db
8. sudo mongod --dbpath ~/data/db
9. mongo
```

Link : [Install MongoDB in WSL][mongodb]

[mongodb]: https://github.com/michaeltreat/Windows-Subsystem-For-Linux-Setup-Guide/blob/master/readmes/installs/MongoDB.md
