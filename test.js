// Load environment variables from the .env file
require('dotenv').config();

// Example usage of environment variables
console.log('Database User:', process.env.DB_USER);
console.log('Database Password:', process.env.DB_PASS);
console.log('API Key:', process.env.API_KEY);
