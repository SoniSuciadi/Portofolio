const mEducation = require("../models/education");

class Education {
  static async getEducation(req, res, next) {
    try {
      const education = await mEducation.find();
      res.status(200).json(education);
    } catch (error) {
      console.log(error);
    }
  }
  static async addEducation(req, res, next) {
    try {
      const { school, major, yearOfEntry, yearOut, desc } = req.body;
      const newEducation = await new mEducation({
        school,
        yearOfEntry,
        yearOut,
        major,
        desc,
      }).save();

      res.status(201).json(newEducation);
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = Education;
