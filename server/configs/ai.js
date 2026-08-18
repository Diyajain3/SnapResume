import OpenAI from "openai";

const ai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: process.env.OPENAI_BASE_URL || "https://generativelanguage.googleapis.com/v1beta/openai/",
    timeout: 30000,
    maxRetries: 2,
});

export default ai;