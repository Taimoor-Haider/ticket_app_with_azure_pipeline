import mongoose from "mongoose";
import Joi from "joi";
const ticketSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    price: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    available: {
      type: Boolean,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    seatType: {
      type: String,
      required: true,
    },
    organizer: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

function validateTicket(ticket) {
  const schema = Joi.object({
    user: Joi.string().required(), // This should be a MongoDB ObjectId in string form
    category: Joi.string().required(),
    title: Joi.string().required(),
    location: Joi.string().required(),
    date: Joi.date(), // optional because it defaults to Date.now
    price: Joi.number().required(),
    currency: Joi.string().required(),
    available: Joi.boolean().required(),
    description: Joi.string().required(),
    seatType: Joi.string().required(),
    organizer: Joi.string().required(),
  });

  return schema.validate(ticket);
}

const Ticket = mongoose.model("Ticket", ticketSchema);
export { Ticket, validateTicket };
