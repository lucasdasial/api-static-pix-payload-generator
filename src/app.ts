import express from "express";
import { router } from "./config/routes";

export const app = express();
app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
  res.send("says hello");
});
