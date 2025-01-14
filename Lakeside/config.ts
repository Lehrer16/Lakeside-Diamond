import dotenv from 'dotenv';

dotenv.config();

const config = {
  email: process.env.EMAIL as string,
};

export default config;
