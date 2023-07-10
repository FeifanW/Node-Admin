const { env } = require('./env');
const UPLOAD_PATH = env === 'dev' ? 'D:\\admin-upload-ebook' : '';
const OLD_UPLOAD_URL =
  env === 'dev' ? 'http://localhost:8089/book/res/img' : '';
const UPLOAD_URL = env === 'dev' ? 'http://localhost:8089' : '';
module.exports = {
  CODE_ERROR: -1,
  CODE_SUCCESS: 0,
  CODE_TOKEN_EXPIRED: -2,
  debug: true,
  PWD_SALT: 'admin_imooc_node',
  PRIVATE_KEY: 'HelloWorld',
  JWT_EXPIRED: 60 * 60,
  UPLOAD_PATH,
  MIME_TYPE_EPUB: 'application/epub',
  UPLOAD_URL,
  OLD_UPLOAD_URL,
};
