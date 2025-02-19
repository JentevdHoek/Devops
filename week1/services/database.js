const { MongoClient } = require("mongodb");
require('dotenv').config();

const uri = process.env.MONGO_URL;
const dbName = process.env.DB_NAME || "default_db";

console.log(`Connecting to database at: ${uri}`);

const client = new MongoClient(uri);

const db = client.db(dbName);

module.exports = {
    db: db,
    client: client
};