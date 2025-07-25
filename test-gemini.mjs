// test-gemini.mjs
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

async function run() {
  const model = genAI.getGenerativeModel({ model: "models/gemini-pro" }); // ←ここを修正
  const result = await model.generateContent("こんにちは！調子はどう？");
  const response = await result.response;
  console.log(response.text());
}

run();
