import express from "express";
import { router } from "./config/routes";
import cors from "cors";
import "dotenv/config";

const corsConfig = {
  origin: process.env.ALLOW_ORIGIN_LIST,
  optionsSuccessStatus: 200,
};

export const app = express();
app.use(cors(corsConfig));
app.use(express.json());
app.use(router);
