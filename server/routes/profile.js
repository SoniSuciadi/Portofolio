const express = require("express");
const Profile = require("../controllers/profile");
const routes = express.Router();

// import all controllers
// import SessionController from './app/controllers/SessionController';

// Add routes
routes.get("/", Profile.getProfile);
routes.post("/", Profile.addProfile);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

module.exports = routes;
