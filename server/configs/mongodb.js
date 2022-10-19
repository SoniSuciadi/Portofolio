const mongoose = require("mongoose");

const username = "sonisuciadi";
const password = "03082000";
const cluster = "cluster0.eevav4f";
const dbname = "portofolio";

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
module.exports = db;
