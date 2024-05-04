require("dotenv").config({ path: "./env" });
const { app } = require("./app");
const ConnectDB = require("./db/index");

const PORT = process.env.PORT;

ConnectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running at port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection error", err);
  });
