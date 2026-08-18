import "./loadEnv.js";
import OpenAI from "openai";

const getBaseURL = () => {
  if (process.env.OPENAI_BASE_URL) return process.env.OPENAI_BASE_URL;
  if (process.env.OPENAI_API_KEY?.startsWith("gsk_")) return "https://api.groq.com/openai/v1";
  return "https://api.groq.com/openai/v1";
};

const ai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: getBaseURL(),
  timeout: 30000,
  maxRetries: 2,
});

export default ai;