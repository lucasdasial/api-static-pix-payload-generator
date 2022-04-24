import { Router } from "express";
import { createPayload } from "src/controllers/PayloadController";
export const router = Router();

// const pix = new Payload("06365165714", "teste", "lucas", "BELEM", 0.1);

// verificar o cpf (pix key quando passar pelo body da requesição)
router.post("/payload/create", createPayload);
