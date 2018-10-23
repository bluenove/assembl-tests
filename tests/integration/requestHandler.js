const https = require("https");
const fetch = require("node-fetch");

module.exports = {
  httpRequest(url) {
    return fetch(url).then(res => res.json());
  },
  graphQlQuery(url, query) {
    return fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query })
    }).then(res => res.json());
  }
};
