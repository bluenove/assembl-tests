const https = require("https");

module.exports = {
  httpsRequest(url) {
    return new Promise(resolve => {
      return https.get(url, response => {
        let data = "";
        response.on("data", _data => (data += _data));
        response.on("end", () => resolve(data));
      });
    });
  }
};
