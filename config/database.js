const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,     // DB name
  process.env.DB_USER,     // DB user
  process.env.DB_PASS,     // DB password
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging: false, // optional
  }
);

module.exports = sequelize;
