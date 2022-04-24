import { Router } from "express";
import { createPayload } from "../controllers/PayloadController";
export const router = Router();

router.post("/payload/create", createPayload);
router.get("/", (req, res) => {
  res.redirect("/doc");
});
