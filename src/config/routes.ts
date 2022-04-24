import { Router } from "express";
import { Payload } from "src/entities/Payload";
export const router = Router();

const pix = new Payload("06365165714", "teste", "lucas", "BELEM", 0.1);

router.get("/", (req, res) => {
  res.send(pix.getPayload());
});
