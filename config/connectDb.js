const mongoose = require('mongoose');

const conectDb = async () => {
    try {
        const db = await mongoose.connect(process.env.DB_STRING);
        console.log(
            `Database connection successful. Name:${db.connection.name}. Host:${db.connection.host}. Port: ${db.connection.port}`
        );
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

module.exports = conectDb;
