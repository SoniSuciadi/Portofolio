const express = require("express");
const routes = express.Router();
const Skill = require("../controllers/skill");

// import all controllers
// import SessionController from './app/controllers/SessionController';

// Add routes
routes.get("/", Skill.getSkill);
routes.post("/", Skill.addSkill);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

module.exports = routes;
