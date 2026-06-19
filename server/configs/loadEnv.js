import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Since loadEnv.js is in server/configs/, the .env file is in server/.env (one directory up)
dotenv.config({ path: path.resolve(__dirname, "../.env") });
