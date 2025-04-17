import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import colors from "colors";
import ticketRoutes from "./routes/ticket.js";
import connectDB from "./config/db.js";
const app = express();
dotenv.config();
connectDB();
app.use("/api/tickets", ticketRoutes);
app.get("/", (req, res) => {
  res.send("Hello ES Modules!");
});

app.use(morgan("dev"));

const port = process.env.PORT || 6000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
