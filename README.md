# bert-as-service
NodeJS module for consuming [bert-as-service](https://github.com/hanxiao/bert-as-service)
to map variable-length sentences to fixed-length vectors.

## Installation

```bash
npm i bert-as-service
```

## Usage

```javascript
const Bert = require('bert-as-service');
const bert = new Bert('http://localhost:8125');

bert.vectorize(['Hello world']).then(embeddings => {
  console.log(embeddings[0]);
});

```
