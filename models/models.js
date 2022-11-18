const { Sequelize } = require("sequelize");

const db = {};

const user = process.env.USER;
const pass = process.env.PASS;
const host = process.env.DB;
const dbname = process.env.DBNAME;
const PORT = process.env.PORT;

const sequelize = new Sequelize(dbname, user, pass, { host: host, dialect: "mysql" });

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.author = require("./author.model")(sequelize, Sequelize);

module.exports = db;
