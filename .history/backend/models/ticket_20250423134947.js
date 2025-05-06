import mongoose from "mongoose";
import Joi from "joi"
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

function validateTicker(ticket){
  const schema =
}
const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;
