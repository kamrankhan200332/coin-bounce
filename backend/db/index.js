const mongoose = require("mongoose");
const { MONGODB_CONNECTION_STRING } = require('../config/index');

// const connectionString = "mongodb+srv://kamrankhan815com:ltLsRLLeOZaFVelM@cluster0.vdxs5.mongodb.net/coin-bounce?retryWrites=true&w=majority&appName=Cluster0";
// const connectionString = "mongodb://127.0.0.1:27017/coin-bounce";

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_CONNECTION_STRING);
    console.log(`Database connected to host: ${conn.connection.host}`);
  } catch {
    console.log(`Error: ${error}`);
  }
};

module.exports = dbConnect;
