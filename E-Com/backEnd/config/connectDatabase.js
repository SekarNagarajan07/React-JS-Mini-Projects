const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected to host: " + mongoose.connection.host);
    })
    .catch((error) => {
      console.error("Mongoose error:", error.message);
    });
};

module.exports = connectDatabase;
