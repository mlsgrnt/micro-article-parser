const cors = require('micro-cors')();
const fetch = require('node-fetch');
const { extract } = require('article-parser');

const handler = async (req, res) => {
  const url = req.url.substr(1);
  extract(url).then((article) => {
    res.end(JSON.stringify(article));
  }).catch((err) => {
    res.end(JSON.stringify(err));
  });
};

module.exports = cors(handler);

