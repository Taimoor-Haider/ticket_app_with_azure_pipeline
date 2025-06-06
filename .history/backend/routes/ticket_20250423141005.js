import express from "express";
import {
  getAllTickets,
  getTicketById,
  createTicket,
} from "../controllers/ticket.js";
const router = express.Router();

router.get("/", getAllTickets);
router.get("/:id", getTicketById);
router.post("/", createTicket);

export default router;
