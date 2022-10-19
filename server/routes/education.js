const express = require("express");
const Education = require("../controllers/education");

const routes = express.Router();

// import all controllers
// import SessionController from './app/controllers/SessionController';

// Add routes
routes.get("/", Education.getEducation);
routes.post("/", Education.addEducation);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

module.exports = routes;
