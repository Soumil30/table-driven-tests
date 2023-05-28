const extractUrls = (message) =>
  message.match(/(https?:\/\/)?[a-zA-Z0-9.]+\.(com|co|in|gov|org)(\/[^\s]*)?/g);

module.exports = { extractUrls };
