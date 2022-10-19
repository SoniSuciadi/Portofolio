const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  yearOfEntry: {
    type: Date,
    require: true,
  },
  yearOut: {
    type: Date,
    require: true,
  },
  jobDesk: {
    type: Array,
    require: true,
  },
});

const Experience = mongoose.model("Experience", experienceSchema);

module.exports = Experience;
