import "./configs/loadEnv.js";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import connectDb from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import resumeRouter from "./routes/resumeRoutes.js";
import aiRouter from "./routes/aiRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Database Connection
await connectDb();

// Middleware
app.use(cors());
app.use(express.json());

// Serve Static Assets in Production
const clientDistPath = path.join(__dirname, "../client/dist");
app.use(express.static(clientDistPath));

// Ping route for UptimeRobot to keep server awake
app.get("/ping", (req, res) => {
  res.status(200).send("pong");
});

// API Routes
app.use("/api/users", userRouter);
app.use("/api/resumes", resumeRouter);
app.use("/api/ai", aiRouter);

// Fallback Route for Single Page Application (SPA)
app.get("/{*splat}", (req, res) => {
  res.sendFile(path.join(clientDistPath, "index.html"));
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});