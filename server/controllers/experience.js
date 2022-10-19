const mExperience = require("../models/experience");

class Experience {
  static async getExperience(req, res, next) {
    try {
      const experience = await mExperience.find();
      res.status(200).json(experience);
    } catch (error) {
      console.log(error);
    }
  }
  static async addExperience(req, res, next) {
    try {
      let { title, company, yearOfEntry, yearOut, jobDesk } = req.body;
      jobDesk = jobDesk.split(";");
      const newExperience = await new mExperience({
        title,
        company,
        yearOfEntry,
        yearOut,
        jobDesk,
      }).save();
      res.status(201).json(newExperience);
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = Experience;
