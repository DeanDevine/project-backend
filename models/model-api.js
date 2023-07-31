const fs = require("fs/promises");

exports.readFileEndpoints = () => {
  return fs
    .readFile(`${__dirname}/../endpoints.json`, `utf8`)
    .then((endpoint) => {
      const parsedEndpoint = JSON.parse(endpoint);
      return parsedEndpoint;
    });
};
