import express from "express";
import { newRoutine } from "../controllers/routineController.js";

const router = express.Router();

// Route to log a session
router.post("/new", newRoutine);

export default router;
