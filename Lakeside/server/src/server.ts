
import express from 'express';
import sequelize from './config/connection.js';
import routes from './routes/index.js';  
import dotenv from 'dotenv';
import User from './models/User.js'; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files from the client/dist directory
app.use(express.static('../client/dist'));

// Middleware to parse JSON
app.use(express.json());

// Use defined routes
app.use(routes);

// Sync Sequelize models and start the server
sequelize.sync({ force: false }).then(async () => {


  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});
