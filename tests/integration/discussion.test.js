const config = require("./config");
const httpRequest = require("./requestHandler").httpRequest;

const url = `${config.uri}${config.discussionApiUrl}${config.discussionId}`;

describe("Should test the Discussion API", function() {
  it("should return the debate data", () => {
    return httpRequest(url).then(data => {
      expect(data["@id"]).toBe("local:Discussion/" + config.discussionId);
    });
  });
});
