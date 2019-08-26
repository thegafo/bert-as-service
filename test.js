
const Bert = require('.');
const bert = new Bert('http://localhost:8125');

bert.vectorize(['Hello world']).then(embeddings => {
  console.log(embeddings[0]);
});
