const config = require("./config");
const httpsRequest = require("./requestHandler").httpsRequest;

function getDebateData() {
  const url = config.uri + config.discussionApiUrl + config.discussionId;
  return httpsRequest(url).then(data => JSON.parse(data));
}

describe("Should test the Discussion API", function() {
  it("should return the debate data", () => {
    return getDebateData().then(data => {
      expect(data["@id"]).toBe("local:Discussion/" + config.discussionId);
    });
  });
});
