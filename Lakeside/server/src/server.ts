import express from 'express';
import sequelize from './config/connection.js';
import routes from './routes/index.js';
import dotenv from 'dotenv';
import nodemailer, { SendMailOptions, SentMessageInfo } from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';
import { createRouteHandler } from 'uploadthing/express';
import { uploadRouter } from './uploadthing.js';
import fetch from 'node-fetch';

// Load environment variables from the .env file
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001;

// Use CORS, JSON, and BodyParser middleware
app.use(cors());
app.use(express.static('../client/dist'));
app.use(express.json());
app.use(bodyParser.json());

// Nodemailer setup for sending emails
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// API route to send email
app.post('/send-email', (req, res) => {
  const { name_1228552691, name_4065521563, name_2379382481, name_6917041169 } = req.body;

  const mailOptions: SendMailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECIEVE_EMAIL,
    subject: 'New Inquiry.',
    text: `
      First Name: ${name_1228552691}
      Last Name: ${name_4065521563}
      Phone Number: ${name_2379382481}
      Message: ${name_6917041169}
    `,
  };

  transporter.sendMail(mailOptions, (error: Error | null, info: SentMessageInfo) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.send('Email sent: ' + info.response);
  });
});

// API route to fetch Instagram photos
app.get('/instagram-photos', async (req, res) => {
  const accessToken = process.env.INSTA_TOKEN;
  const userId = process.env.INSTA_ID;

  if (!accessToken || !userId) {
    return res.status(400).json({ error: 'Instagram credentials missing.' });
  }

  try {
    // Use Instagram Graph API to fetch recent photos (or videos) from the user's account
    const response = await fetch(
      `https://graph.instagram.com/${userId}/media?fields=id,media_type,media_url,caption,timestamp&limit=6&access_token=${accessToken}`
    );

    const data = await response.json();

    if (data.error) {
      return res.status(500).json({ error: data.error.message });
    }

    res.json(data.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Instagram photos.' });
  }
});

// Uploadthing route setup
app.use(
  '/api/uploadthing',
  createRouteHandler({
    router: uploadRouter,
    config: { /* your configuration */ },
  }),
);



// Sync Sequelize models and start the server
sequelize.sync({ force: false }).then(async () => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});

app.use(routes);