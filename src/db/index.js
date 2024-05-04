require("dotenv").config({ path: "./.env" });
const mongoose = require("mongoose");
const { DB_NAME } = require("../constants");

const ConnectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n Database connection succesfull!! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB connection error", error);
    process.exit(1);
  }
};

module.exports = ConnectDB;
