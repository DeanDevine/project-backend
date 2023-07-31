const { readFileEndpoints } = require("../models/model-api");

exports.getApi = (req, res) => {
  readFileEndpoints().then((endpoints) => {
    res.status(200).send({ endpoints });
  });
};
