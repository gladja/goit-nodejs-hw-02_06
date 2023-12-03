const dotenv = require('dotenv');
const path = require('path');
const app = require('./app');
const conectDb = require('./config');

const configPath = path.join(__dirname, 'config', '.env');

dotenv.config({ path: configPath });

conectDb();
const { PORT } = process.env;
app.listen(PORT, () => {
    console.log(`Server running. Use our API on port: ${PORT}`);
});
