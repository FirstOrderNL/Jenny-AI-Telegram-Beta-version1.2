import { setupPriceCommand } from '../handlers/price.js';
import { setupMarketCommand } from '../handlers/market.js';
import { setupTop10Command } from '../handlers/top10.js';
import { setupJennyCommand } from '../handlers/jenny.js';
import { setupNewsCommand } from '../handlers/news.js';

export function setupHandlers(bot, services) {
  // Initialize all command handlers
  setupPriceCommand(bot, services.cryptoService, services.giphyService);
  setupMarketCommand(bot, services.cryptoService);
  setupTop10Command(bot, services.cryptoService);
  setupJennyCommand(bot, services);
  setupNewsCommand(bot, services.newsService, services.giphyService);
}