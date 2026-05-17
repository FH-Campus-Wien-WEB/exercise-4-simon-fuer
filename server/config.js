// Load .env file into process.env
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });

// Load configuration from environment variables
module.exports = {
  port: parseInt(process.env.PORT || '3000', 10),
  omdbApiKey: process.env.OMDB_API_KEY || 'b8f6ba0c',
  sessionSecret: process.env.SESSION_SECRET || 'key_simon_key',
  omdbTimeoutMs: 5000 // 5 second timeout for external API calls
};
