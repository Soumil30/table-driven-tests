const { extractUrls } = require("../src/extractUrls");

describe("extractUrls (Table-driven tests custom format)", () => {
  const tests = [
    {
      name: "should extract url from given message",
      message: "Go to https://knowledge.com",
      expectedUrls: ["https://knowledge.com"],
      testType: "only",
    },
    {
      name: "should extract multiple urls from given message",
      message: "Go to https://knowledge.com and https://world.org",
      expectedUrls: ["https://knowledge.com", "https://world.org"],
    },
    {
      name: "should extract http urls from given message",
      message: "Go to http://knowledge.com",
      expectedUrls: ["http://knowledge.com"],
    },
    {
      name: "should extract url-like text without protocol from given message",
      message: "Go to google.com",
      expectedUrls: ["google.com"],
      testType: "only",
    },
  ];

  const testCallback =
    ({ message, expectedUrls }) =>
    () => {
      const extractedUrls = extractUrls(message);

      expect(extractedUrls).toEqual(expectedUrls);
    };

  const getTestingMethod = (testType) => {
    switch (testType) {
      case "only":
        return it.only;
      case "skip":
        return it.skip;
      default:
        return it;
    }
  };

  tests.forEach(({ name, testType, ...testData }) => {
    const testMethod = getTestingMethod(testType);
    testMethod(name, testCallback(testData));
  });
});
