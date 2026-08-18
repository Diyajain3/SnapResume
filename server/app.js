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
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// Fix Vercel URL rewrite & pre-parsed body handling
app.use((req, res, next) => {
  const targetUrl = req.headers["x-matched-path"] || req.originalUrl || req.url;
  if (targetUrl && targetUrl.startsWith("/api") && req.url !== targetUrl) {
    req.url = targetUrl;
  }
  if (typeof req.body === "string") {
    try {
      req.body = JSON.parse(req.body);
    } catch (e) {}
  }
  next();
});

// Ping route
app.get("/ping", (req, res) => {
  res.status(200).send("pong");
});

// API Routes
app.use("/api/users", userRouter);
app.use("/api/resumes", resumeRouter);
app.use("/api/ai", aiRouter);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Global Express Error:", err);
  res.status(err.status || 500).json({
    message: err.message || "An unexpected error occurred",
  });
});

export default app;
