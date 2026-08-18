import OpenAI from "openai";

const ai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: process.env.OPENAI_BASE_URL || "https://generativelanguage.googleapis.com/v1beta/openai/",
    maxRetries: 5,
});

export default ai;