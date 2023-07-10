const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { PRIVATE_KEY } = require('./constant');

function isObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

function md5(s) {
  // 注意参数需要为String类型，否则会出错
  return crypto.createHash('md5').update(String(s)).digest('hex');
}

function decoded(req) {
  let token = req.get('Authorization');
  if (token.indexOf('Bearer') === 0) {
    token = token.replace('Bearer ', '');
  }
  return jwt.verify(token, PRIVATE_KEY);
}

module.exports = {
  md5,
  decoded,
  isObject,
};
