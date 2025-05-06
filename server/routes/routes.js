import express from "express";
import FormController from "../controllers/formControllers.js";

const router= express.Router();

router.post("/message", FormController.writeMessage)

export default router;