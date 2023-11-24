// index.js

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import Residence from './models/residence.js';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

// Connect to MongoDB
import connectDB from './mongo.js';
connectDB();

// Routes
app.get('/', (req, res) => {
  res.send('Hello to Memories API');
});

// Route to fetch residences data
app.get('/residences', async (req, res) => {
  try {
    const residences = await Residence.find();
    res.status(200).json(residences);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
