const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const User = require('../models/userModel'); // Import the User model

const config = {
  database: {
    name: 'batdongsandanang',
    username: 'taquocy',
    password: 'Y649394$y',
    host: 'db4free.net',
    dialect: 'mysql',
    logging: console.log
  },
  server: {
    port: 5000
  }
};

const app = express();
app.use(bodyParser.json());

const sequelize = new Sequelize(
  config.database.name,
  config.database.username,
  config.database.password,
  {
    host: config.database.host,
    dialect: config.database.dialect,
  }
);

sequelize.authenticate()
  .then(() => {
    console.log('Kết nối thành công với cơ sở dữ liệu MySQL');
  })
  .catch(err => {
    console.error('Lỗi kết nối:', err);
  });

sequelize.sync() // Ensure the User model is synced with the database
  .then(() => {
    console.log('Đồng bộ hóa thành công với cơ sở dữ liệu');
  })
  .catch(err => {
    console.error('Lỗi khi đồng bộ hóa:', err);
  });

module.exports = { app, sequelize, config };
