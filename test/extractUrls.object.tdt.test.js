const { extractUrls } = require("../src/extractUrls");

describe("extractUrls (Table-driven tests object format)", () => {
  it.each([
    {
      message: "Go to https://knowledge.com",
      expectedUrls: ["https://knowledge.com"],
    },
    {
      message: "Go to https://knowledge.com and https://world.org",
      expectedUrls: ["https://knowledge.com", "https://world.org"],
    },
    {
      message: "Go to http://knowledge.com",
      expectedUrls: ["http://knowledge.com"],
    },
    {
      message: "Go to google.com",
      expectedUrls: ["google.com"],
    },
  ])(
    "should extract urls $expectedUrls from message $message",
    ({ message, expectedUrls }) => {
      const extractedUrls = extractUrls(message);

      expect(extractedUrls).toEqual(expectedUrls);
    }
  );
});
