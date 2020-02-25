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

```
GET, POST

request and response object

1. who request page
2. what data sended to page
=> **Use Request Object**
```
