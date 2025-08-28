import "dotenv/config";
import mongoose from "mongoose";

const { MONGO_URL } = process.env;

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Conexão com o banco de dados estabelecida!");
  } catch (error) {
    console.log("A conexão ao banco de dados falhou -> ", error);
  }
};

connectDB();
