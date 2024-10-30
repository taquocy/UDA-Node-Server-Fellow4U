const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/config');

const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone_number: {
    type: DataTypes.STRING
  },
  user_type: {
    type: DataTypes.ENUM('Traveler', 'Guide'),
    allowNull: false
  },
  bio: {
    type: DataTypes.TEXT
  },
  language_spoken: {
    type: DataTypes.STRING
  },
  country: {
    type: DataTypes.STRING
  },
  avatar: {
    type: DataTypes.STRING
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'User',
  timestamps: true
});

module.exports = User;
