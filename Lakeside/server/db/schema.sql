-- DROP DATABASE
DROP DATABASE IF EXISTS user_db;

-- CREATE DATABASE
CREATE DATABASE user_db;

-- Users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

-- Offices table
CREATE TABLE offices (
  id SERIAL PRIMARY KEY,
  specialty VARCHAR(255),
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255),
  phoneNumber VARCHAR(255),

);