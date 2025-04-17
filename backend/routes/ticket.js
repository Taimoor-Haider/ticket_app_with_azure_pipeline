import express from "express";
import { getAllTickets, getTicketById } from "../controllers/ticket.js";
const router = express.Router();

router.get("/", getAllTickets);
router.get("/:id", getTicketById);

export default router;
