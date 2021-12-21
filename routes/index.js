"use strict";

const index = require("../controllers/index");

module.exports = (app) => {
    app.route("/api/auth").post(index.auth);
    app.route("/api/fetch").get(index.fetch);
}