const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://hanumant:rdNK2PZ4uvik8HKG@cluster0.19gx3.mongodb.net/contact"
    );
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log("Error", error);
  }
};

module.exports = connectToDatabase;