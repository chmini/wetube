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

```
app.use([function]);
```

### Express Middleware

- Morgan : HTTP request logger middleware for node.js
- helmet : it helps secure Express app by setting various HTTP headers.
- body-parser
- cookie-parser

```
app.use(morgan("dev"));
```

## Routing

Routing refers to how an application’s endpoints (URIs) respond to client requests.

## MVC Pattern

Model : Data <br>
View : how does the data look <br>
Controller : function that looks for the data

## Pug

![Pug](https://camo.githubusercontent.com/a43de8ca816e78b1c2666f7696f449b2eeddbeca/68747470733a2f2f63646e2e7261776769742e636f6d2f7075676a732f7075672d6c6f676f2f656563343336636565386664396431373236643738333963626539396431663639343639326330632f5356472f7075672d66696e616c2d6c6f676f2d5f2d636f6c6f75722d3132382e737667)<br>
Pug is NodeJS Express Template Engine

```
app.set("view engine", "pug");
```

### layout

Layout is the basis of all the files.
