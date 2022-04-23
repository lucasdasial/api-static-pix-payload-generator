//importações
import express from "express";
import cors from "cors";

import index from "./routes/index";

//configuração do cors
const corsConfig = {
  origin: "http://localhost:8080",
  optionsSuccessStatus: 200,
};

// inicialização do serviço
const app = express();
app.use(cors(corsConfig));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// rotas
app.use("/", index);

export default app;
