export class NewsFormatter {
  formatNewsResponse(articles) {
    if (!articles?.length) {
      return "I apologize, but I couldn't fetch any news at the moment. Please try again later!";
    }

    let response = "👋 Hey there! Let me update you on the latest crypto developments!\n\n";
    response += "🌟 Here are the most significant crypto news stories:\n\n";
    
    articles.forEach((article, index) => {
      const date = new Date(article.pubDate).toLocaleString();
      response += `${index + 1}. 📰 ${article.title}\n`;
      response += `📝 ${article.summary}\n`;
      response += `🏷️ Category: ${article.category}\n`;
      response += `⏰ ${date}\n\n`;
    });

    response += "💡 Would you like me to elaborate on any of these stories? Just ask!\n";
    response += "🔄 For market data, try /market or /top10 commands.";

    return response;
  }
}