const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const products = require('./data/products.json');

const formidable = require('formidable');

const mockData = {
  products,
};

const app = express();
app.use(express.urlencoded());
// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, authorization');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  if ('OPTIONS' === req.method) {
    //respond with 200
    res.send(200);
  }
  else {
  //move on
    next();
  }
});
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  }),
);

// simulate delay response
app.use((req, res, next) => {
  setTimeout(() => next(), 500);
});

// user with some login:
let user = {
  email: 'q@q.com',
  password: 'password',
  firstName: 'some firstName',
  guid: 'guid_0',
  lastName: 'some lastName',
  avatar: './assets/img/avatar.jpg',
};

let timeStamp = 0;
const refreshTokenTime = 1 * 60 * 1000; // minute sec ms

let access_token = '';
let refresh_token = '';

app.locals.basedir = path.join(__dirname, 'mock-backend');

app.post('/oauth/token', wait(500), function (req, res) {
  timeStamp = +new Date();
  const form = new formidable.IncomingForm();

  form.parse(req, (err, fields) => {
    if (
      req &&
      fields.username === user.email &&
      fields.password === user.password
      // fields.grant_type === 'password'
    ) {
      access_token = `${user.email}_${user.password}_${user.guid}_${+new Date()}`;
      refresh_token = `refresh_${user.email}_${user.password}_${user.guid}_${+new Date()}`;
      res.send({access_token, refresh_token, username: user.firstName});
    } else if (req && fields.refresh_token && fields.grant_type === 'refresh_token') {
      access_token = `${user.email}_${user.password}_${user.guid}_${+new Date()}`;
      refresh_token = `refresh_${user.email}_${user.password}_${user.guid}_${+new Date()}`;
      res.send({access_token, refresh_token, username: user.firstName});
    } else {
      res.sendStatus(401);
    }
  });
});

app.post('/user/register', function (req, res) {
  if (req && req.body.firstName && req.body.password && req.body.email) {
    // if user already exists:
    if (req.body.email === user.email) return res.sendStatus(400);

    user = {...user, ...req.body};
    res.status(201).send({message: 'Created'});
  } else {
    res.sendStatus(400);
  }
});

app.get('/products', auth, (req, res) => {
  let page = req.query.page || 1;
  let count = req.query.count || 10;
  const search = req.query.search;
  const filters = req.query.filters;

  let airports = mockData.products;
  if(search) {
    airports = mockData.products.filter(item => item.title.toLowerCase().includes(search))
  }
  if(filters) {
    airports = mockData.products
      .filter(item => item.countries.includes(filters.country))
      .filter(item => item.region.includes(filters.region))
  }
  const data = airports.slice((page - 1) * count, page * count)
  res.send(data);
});

app.get('/handbooks', auth, (req, res) => {
  let type = req.query.type;
  const types = new Set();
  mockData.posts.map(item => item[type]).forEach(item => types.add(item))
  res.send([...types]);
});

app.get('/user/me', auth, (req, res) => {
  res.send(user);
});

app.listen(3001, function () {
  console.log('Listening on port 3001!');
});

function auth(req, res, next) {
  if (req && req.headers.authorization === `Bearer ${access_token}`) {
    if (+new Date() - refreshTokenTime > timeStamp) {
      return res.status(401).send({error_description: 'Access token expired: some_token_value'});
    } else {
      return next();
    }
  }
  return next(); // switch of auth
}

function wait(time = 1000) {
  return function (req, res, next) {
    setTimeout(() => {
      return next();
    }, time);
  };
}
