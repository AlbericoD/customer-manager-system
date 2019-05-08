import * as dotenv from 'dotenv';
dotenv.config();

const environment = ['PORT', 'DB_HOST', 'DB'];

environment.forEach(name => {
  if (!process.env[name]) {
    throw new Error(`${name}: ${process.env[name]}`);
  }
});

export default {
  PORT: process.env.PORT,
  DB_HOST: process.env.DB_HOST,
  DB: process.env.DB
};
