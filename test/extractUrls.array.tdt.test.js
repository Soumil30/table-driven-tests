const { extractUrls } = require("../src/extractUrls");

describe("extractUrls (Table-driven tests array format)", () => {
  it.each([
    ["Go to https://knowledge.com", ["https://knowledge.com"]],
    [
      "Go to https://knowledge.com and https://world.org",
      ["https://knowledge.com", "https://world.org"],
    ],
    ["Go to http://knowledge.com", ["http://knowledge.com"]],
    ["Go to google.com", ["google.com"]],
  ])("extractUrls(%s)", (message, expectedUrls) => {
    const extractedUrls = extractUrls(message);

    expect(extractedUrls).toEqual(expectedUrls);
  });
});
