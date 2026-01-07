
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getStrategyAssistantResponse = async (userGoal: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are the 'Nexus Digital Strategy AI'. A potential client is asking for strategy advice. 
      Their goal: "${userGoal}". 
      
      Provide a concise, professional 3-step digital transformation plan. 
      Format the response in clean Markdown. Be encouraging and highly professional. 
      Include a section on how Nexus Digital (our company) could specifically help them.`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return "I'm sorry, I'm having trouble connecting to the strategy brain right now. Please try again later.";
  }
};
