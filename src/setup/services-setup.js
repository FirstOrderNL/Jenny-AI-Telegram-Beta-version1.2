import { CryptoService } from '../services/crypto-service.js';
import { OpenAIService } from '../services/openai-service.js';
import { NewsService } from '../services/news-service.js';
import { GiphyService } from '../services/giphy-service.js';
import { RSSService } from '../services/news/rss-service.js';
import { JennyHandler } from '../services/jenny-handler.js';

export async function initializeServices() {
  const cryptoService = new CryptoService(process.env.COINMARKETCAP_API_KEY);
  const openAIService = new OpenAIService(process.env.OPENAI_API_KEY);
  const newsService = new NewsService(process.env.OPENAI_API_KEY);
  const giphyService = new GiphyService(process.env.GIPHY_API_KEY);
  const rssService = new RSSService();
  const jennyHandler = new JennyHandler(
    process.env.OPENAI_API_KEY,
    process.env.COINMARKETCAP_API_KEY,
    process.env.GIPHY_API_KEY
  );

  return {
    cryptoService,
    openAIService,
    newsService,
    giphyService,
    rssService,
    jennyHandler
  };
}