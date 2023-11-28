const SQLite = require('better-sqlite3');
const DB = new SQLite("./What-Now-Database.db");
exports.DB = DB;