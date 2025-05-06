import asyncHandler from "express-async-handler";
import { Ticket, validateTicket } from "../models/ticket.js";
// Path: /api/tickets
// Method: Get
// Access: public
// Desc: Route to get all the tickets

export const getAllTickets = asyncHandler(async (req, res) => {
  const tickets = await Ticket.find({});
  res.status(200).json(tickets);
});

// Path: /api/tickets/:id
// Method: Get
// Access: public
// Desc: Route to get a specific tickets

export const getTicketById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const ticket = await Ticket.findById(id);
  if (ticket) {
    return res.status(200).json(ticket);
  }
  res.status(404);
  throw new Error("Ticket not found");
});

// Path: /api/tickets
// Method: POST
// Access: Public (You may want to change this to protected if needed)
// Desc: Route to create a new ticket

export const createTicket = asyncHandler(async (req, res) => {
  const { error, value } = validateTicket(req.body);

  if (error) {
    res.status(400);
    console.log(error);
    throw new Error(error.details[0].message);
  }

  const newTicket = new Ticket(value);
  const savedTicket = await newTicket.save();

  res.status(201).json(savedTicket);
});
