const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURL");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err.message);

    process.exit(1); //Exit Process with failure
  }
};

module.exports = connectDB;
