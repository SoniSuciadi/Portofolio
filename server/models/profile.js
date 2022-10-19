const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    require: true,
  },
  about: {
    type: String,
    require: true,
  },
  imgUrl: {
    type: String,
    require: true,
  },
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
