const { Sequelize } = require("sequelize");
const mysql = require("mysql2/promise");

module.exports = db = {};

initialize();

async function initialize() {
    const user = process.env.USER;
    const pass = process.env.PASS;
    const host = process.env.DB;
    const dbname = process.env.DBNAME;
    const port = process.env.PORT;

    const connection = await mysql.createConnection({ host, port, user, pass });

    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbname}\`;`);
    const sequelize = new Sequelize(dbname, user, pass, { dialect: "mysql" });

    db.author = require("../models/author.model")(sequelize);

    await sequelize.sync();

    console.log("Connected to database");
}
