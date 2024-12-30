import express from "express";
import { logSession } from "../controllers/sessionController.js";

const router = express.Router();

// Route to log a session
router.post("/log", logSession);

export default router;
