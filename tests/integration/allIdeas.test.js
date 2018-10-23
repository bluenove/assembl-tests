const config = require("./config");
const graphQlQuery = require("./requestHandler").graphQlQuery;

const query = `
  query {
    ideas(discussionPhaseId: 101) {
      ... on Idea {
        id
      }
    }
  }`;
const url = `${config.uri}${config.slug}/graphql`;

describe("Should test the allIdeas query", function() {
  it("should return all ideas", () => {
    const expectedData = {
      data: {
        ideas: [{ id: "SWRlYTo0MDAw" }]
      }
    };
    return expect(graphQlQuery(url, query)).resolves.toEqual(expectedData);
  });
});
