
const Bert = require('.');

(async () => {
  const bert = new Bert('http://35.196.197.215:8125');
  console.log(await bert.vectorize(['Hello world']));
})();
