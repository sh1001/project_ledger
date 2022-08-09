const mongoose = require('mongoose');

const connect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            sslKey: process.env.MONGO_CREDENTIALS,
            sslCert: process.env.MONGO_CREDENTIALS,
            serverApi: "1"
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
};

module.exports = connect;