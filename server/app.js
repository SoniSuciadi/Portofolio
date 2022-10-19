const express = require("express");
const db = require("./configs/mongodb");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  app.listen(3001, () => {
    console.log("Server is running at port 3000");
  });
});
