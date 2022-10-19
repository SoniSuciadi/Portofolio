const express = require("express");
const Experience = require("../controllers/experience");

const routes = express.Router();

// import all controllers
// import SessionController from './app/controllers/SessionController';

// Add routes
routes.get("/", Experience.getExperience);
routes.post("/", Experience.addExperience);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

module.exports = routes;
