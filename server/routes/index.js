const express = require("express");
const routes = express.Router();
const routeSkill = require("./skill");
const routeProfile = require("./profile");
const routeEducation = require("./education");
const routeExperience = require("./experience");

// Add routes
// routes.get('/', SessionController.store);
routes.use("/skill", routeSkill);
routes.use("/profile", routeProfile);
routes.use("/education", routeEducation);
routes.use("/experience", routeExperience);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

module.exports = routes;
