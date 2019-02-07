const data = require('../../data')
const graphQlQuery = require("./requestHandler").graphQlQuery;

const query = `
  query {
    ideas(discussionPhaseId: 101) {
      ... on Idea {
        id
      }
    }
  }`;
const url = `${data.url}${data.threadTest.slug}/graphql`;

describe("Should test the allIdeas query", function() {
  it("should return all ideas", () => {
    const expectedData = {
      data: {
        ideas: [{ id: data.threadTest.ideaId }]
      }
    };
    return expect(graphQlQuery(url, query)).resolves.toEqual(expectedData);
  });
});
