const mSkill = require("../models/skill");

class Skill {
  static async getSkill(req, res, next) {
    try {
      let skill = await mSkill.find();
      res.status(200).json(skill);
    } catch (error) {
      console.log(error);
    }
  }
  static async addSkill(req, res, next) {
    try {
      const { category, title, imgLink } = req.body;
      const search = await mSkill.findOne({ name: category });

      if (!search) {
        await new mSkill({ name: category }).save();
      }
      await mSkill.updateOne(
        { name: category },
        { $push: { value: { title, imgLink } } }
      );
      res.status(201).json({
        msg: "Berhasil Ditambahkan",
      });
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = Skill;
