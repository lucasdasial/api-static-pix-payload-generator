import { Router } from "express";

const router = Router();

router.get("/", (request, response) => {
  response.send("rota index says Hello");
});

export default router;
