import tickets from "../data/data.js";

// Path: /api/tickets
// Method: Get
// Access: public
// Desc: Route to get all the tickets

export const getAllTickets = (req, res) => {
  res.status(200).json(tickets);
};

// Path: /api/tickets/:id
// Method: Get
// Access: public
// Desc: Route to get a specific tickets

export const getTicketById = (req, res) => {
  const { id } = req.params;
  const ticket = tickets.find((ticket) => ticket.id == id);
  if (ticket) {
    return res.status(200).json(ticket);
  }
  res.status(404).json({ error: "Invalid id" });
};
