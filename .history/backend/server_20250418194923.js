import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import colors from "colors";
import ticketRoutes from "./routes/ticket.js";
import userRoutes from "./routes/user.js";
import connectDB from "./config/db.js";
import { errorHandler } from "./middlewares/errorHandler.js";
const app = express();
dotenv.config();
connectDB();
app.use(express.json());
app.use("/api/tickets", ticketRoutes);
app.use("/api/auth", userRoutes);
app.get("/", (req, res) => {
  res.send("Hello ES Modules!");
});

app.use(morgan("dev"));
app.use(errorHandler);
const port = process.env.PORT || 6000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
