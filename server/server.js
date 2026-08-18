import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import app from "./app.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;

// Serve Static Assets in Production
const clientDistPath = path.join(__dirname, "../client/dist");
app.use(express.static(clientDistPath));

// Fallback Route for Single Page Application (SPA)
app.get("/{*splat}", (req, res) => {
  res.sendFile(path.join(clientDistPath, "index.html"));
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});