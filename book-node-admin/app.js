const express = require('express');
const router = require('./router');
const fs = require('fs');
const https = require('https');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', router);

const server = app.listen(18082, () => {
  const { address, port } = server.address();
  console.log('Http服务启动成功 http://localhost:18082');
});
