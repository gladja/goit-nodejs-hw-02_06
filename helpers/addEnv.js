const addEnv = data => {
    const dotenv = require('dotenv');
    const path = require('path');
    const configPath = path.join(__dirname, ...data);
    dotenv.config({ path: configPath });
};

module.exports = addEnv;
