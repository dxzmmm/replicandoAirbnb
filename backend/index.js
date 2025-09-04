import express from "express";
import "dotenv/config";
import userRoutes from "./domains/users/routes.js";
import cors from "cors";

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use(cors());
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`O servidor está rodando na porta ${PORT}`);
});
