import OpenAI from 'openai';

export class NewsSummarizer {
  constructor(apiKey) {
    this.openai = new OpenAI({ apiKey });
  }

  async generateSummary(articles) {
    try {
      const newsContent = articles
        .map(article => article.title)
        .join('\n');

      const completion = await this.openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{
          role: "system",
          content: `You are a crypto news analyst. Create a brief but engaging summary of these crypto headlines. Focus on:
            1. Key market movements and trends
            2. Important project developments
            3. Regulatory updates
            4. Industry impact
            
            Format the response with emojis and make it conversational but informative.`
        }, {
          role: "user",
          content: newsContent
        }],
        temperature: 0.7,
        max_tokens: 500
      });

      return completion.choices[0].message.content;
    } catch (error) {
      console.error('Summary generation failed:', error);
      return null;
    }
  }
}