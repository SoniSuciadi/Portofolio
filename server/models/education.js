const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  school: {
    type: String,
    require: true,
  },
  major: {
    type: String,
    require: true,
  },
  yearOfEntry: {
    type: Date,
    require: true,
  },
  yearOut: {
    type: Date,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
});
const Education = mongoose.model("Education", educationSchema);
module.exports = Education;
