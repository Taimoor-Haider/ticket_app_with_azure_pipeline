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

// Initialize Express
const app = express();

// Config
dotenv.config();
connectDB();

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// API Routes
app.use("/api/tickets", ticketRoutes);
app.use("/api/users", userRoutes); // Changed from '/api/auth' to '/api/users' for consistency

// Static files (Vite build)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendPath = path.join(__dirname, "..", "frontend", "dist");

app.use(express.static(frontendPath));

// SPA Fallback - MUST come after API routes but before error handler
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// Error handler (must be last middleware)
app.use(errorHandler);

// Server
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(colors.yellow.bold(`Server running on port ${PORT}`));
});
