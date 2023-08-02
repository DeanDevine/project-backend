const fs = require("fs/promises");

exports.readFileEndpoints = () => {
  return fs
    .readFile(`${__dirname}/../endpoints.json`, `utf8`)
    .then((endpoints) => {
      const parsedEndpoints = JSON.parse(endpoints);
      return parsedEndpoints;
    });
};
