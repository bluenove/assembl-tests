const data = require('../../data');
const httpRequest = require("./requestHandler").httpRequest;
const discussionAPIV2 = "/data/Discussion/";

const url = `${data.url}${discussionAPIV2}${data.threadTest.discussionId}`;

describe("Should test the Discussion API", function() {
  it("should return the debate data", () => {
    return httpRequest(url).then(d => {
      expect(d["@id"]).toBe("local:Discussion/" + data.threadTest.discussionId);
    });
  });
});
