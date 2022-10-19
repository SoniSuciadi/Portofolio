const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  value: {
    type: Array,
    default: [],
    require: true,
  },
});
const Skill = mongoose.model("Skill", skillSchema);
module.exports = Skill;
