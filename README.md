# WeTube

### Cloning YouTube with Vanilla and Node JS

## install Express

```
npm install express
```

Example Code

```
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('hello world')
})
```

Link : [ExpressJS Offcial Site][expresslink]

[expresslink]: https://expressjs.com/ "To ExpressJS"

## Routing

GET, POST Method & request and response object

```
app.get(req, res);
app.post(req, res);
```

#### Use Request Object

- who request page
- what data sended to page

## Babel

Babel is compiler that converts es5+ script to old version javascript code

```
"presets": ["@babel/preset-env"]
```

### ES6

#### arrow function

```
const sayHello = () => console.log("hello");
```

#### use babel to convert

```
function sayHello() {
  console.log("hello");
}
```

## Middleware

Middleware is something that connected to the end of processing<br>
It has the power that kill connection

### Express Middleware

- Morgan : HTTP request logger middleware for node.js
- helmet : it helps secure Express app by setting various HTTP headers.
- body-parser
- cookie-parser

## Routing

Routing refers to how an application’s endpoints (URIs) respond to client requests.
