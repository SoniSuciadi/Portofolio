const mProfile = require("../models/profile");
class Profile {
  static async getProfile(req, res, next) {
    try {
      const profile = await mProfile.find();
      res.status(200).json(profile);
    } catch (error) {
      console.log(error);
    }
  }
  static async addProfile(req, res, next) {
    try {
      const { fullName, title, about, imgUrl } = req.body;
      const newProfile = await new mProfile({
        fullName,
        title,
        about,
        imgUrl,
      }).save();
      res.status(201).json(newProfile);
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = Profile;
