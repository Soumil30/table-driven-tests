const { extractUrls } = require("../src/extractUrls");

describe("extractUrls (Regular Tests)", () => {
  it("should extract url from given message", () => {
    const message = "Go to https://knowledge.com";

    const extractedUrls = extractUrls(message);

    expect(extractedUrls).toEqual(["https://knowledge.com"]);
  });

  it("should extract multiple urls from given message", () => {
    const message = "Go to https://knowledge.com and https://world.org";

    const extractedUrls = extractUrls(message);

    expect(extractedUrls).toEqual([
      "https://knowledge.com",
      "https://world.org",
    ]);
  });

  it("should extract http urls from given message", () => {
    const message = "Go to http://knowledge.com";

    const extractedUrls = extractUrls(message);

    expect(extractedUrls).toEqual(["http://knowledge.com"]);
  });

  it("should extract url-like text without protocol from given message", () => {
    const message = "Go to google.com";

    const extractedUrls = extractUrls(message);

    expect(extractedUrls).toEqual(["google.com"]);
  });
});
