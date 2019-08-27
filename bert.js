'use strict';

const request = require('request');

class Bert {
  constructor(uri) {
    this.uri = uri;
  }

  /**
   * vectorize - get sentence embeddings for a list of sentences
   *
   * @param  {Array} texts list of sentences to encode
   * @return {Array}       list of encoded embeddings
   */
  vectorize (texts) {
    return new Promise((resolve,reject) => {
      texts = texts.filter(t => !!t);
      var options = {
        method: 'POST',
        uri: `${this.uri}/encode`,
        headers: {
          'Content-Type': 'application/json'
        },
        json: {
          id: new Date().getTime(),
          texts: texts,
          is_tokenized: false
        }
      }
      request(options, (err,res,body) => {
        if (err) return reject(err);
        var { id, result, status, description} = body;
        if (status == 200) return resolve(result);
        else return reject(new Error(description));
      });
    });
  }

  /**
   * async vectorizeOne - get embedding for a single sentence
   *
   * @param  {String} text the sentence to encode
   * @return {Array}      784-dimensional array containg embedding
   */
  async vectorizeOne(text) {
    var vectors = await this.vectorize([text]);
    if (vectors && vectors.length) return vectors[0];
    return [];
  }

}

module.exports = Bert;
