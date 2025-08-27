import express from "express";
import "dotenv/config";

const app = express();
const { PORT } = process.env;

app.get("/", (req, res) => {
  res.json("Olá, mundo!");
});

app.listen(PORT, () => {
  console.log(`O servidor está rodando na porta ${PORT}`);
});
