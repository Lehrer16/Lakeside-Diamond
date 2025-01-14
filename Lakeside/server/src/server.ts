import express from 'express';
import sequelize from './config/connection.js';
import routes from './routes/index.js';
import dotenv from 'dotenv';
import nodemailer, { SendMailOptions, SentMessageInfo } from 'nodemailer';

import bodyParser from 'body-parser';
import cors from 'cors';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors());
app.use(express.static('../client/dist'));


app.use(express.json());
app.use(bodyParser.json());


app.use(routes);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

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


sequelize.sync({ force: false }).then(async () => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});

