import "./configs/loadEnv.js";
import express from "express";
import cors from "cors";

import connectDb from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import resumeRouter from "./routes/resumeRoutes.js";
import aiRouter from "./routes/aiRoutes.js";

const app = express();

// Database Connection
await connectDb();

// Middleware
app.use(cors());
app.use(express.json());

// Ping route
app.get("/ping", (req, res) => {
  res.status(200).send("pong");
});

// API Routes
app.use("/api/users", userRouter);
app.use("/api/resumes", resumeRouter);
app.use("/api/ai", aiRouter);

export default app;
