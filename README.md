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

**Use Request Object**
who request page
what data sended to page
