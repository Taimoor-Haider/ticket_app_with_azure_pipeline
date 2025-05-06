import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import colors from "colors";
import path from "path";
import ticketRoutes from "./routes/ticket.js";
import userRoutes from "./routes/user.js";
import connectDB from "./config/db.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
dotenv.config();
connectDB();

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// API Routes
app.use("/api/tickets", ticketRoutes);
app.use("/api/auth", userRoutes);

console.log(path.join(__dirname, "..", "frontend", "dist"));
console.log(express.static(path.join(__dirname, "..", "frontend", "dist")));

// Serve static files from Vite's dist directory
// app.use(express.static(path.join(__dirname, "..", "frontend", "dist")));

// // Handle SPA routing – redirect all unknown routes to index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "dist", "index.html"));
});

// Error handler (should be last)
app.use(errorHandler);

const port = process.env.PORT || 6000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`.yellow.bold);
});
