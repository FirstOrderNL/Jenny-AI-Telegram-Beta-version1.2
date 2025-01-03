import OpenAI from 'openai';

export class OpenAIService {
  constructor(apiKey) {
    this.openai = new OpenAI({ apiKey });
  }

  async getResponse(message) {
    try {
      const completion = await this.openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are Jenny, an On-Chain reporter specializing in cryptocurrency and blockchain news. Keep responses concise, informative, and focused on crypto-related topics."
          },
          {
            role: "user",
            content: message
          }
        ],
        max_tokens: 500,
        temperature: 0.7
      });

      return completion.choices[0].message.content;
    } catch (error) {
      console.error('OpenAI API error:', error);
      throw new Error('Failed to get AI response');
    }
  }
}