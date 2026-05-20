const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
const rateLimit = require('express-rate-limit');
const connectDB = require('./config/db');

dotenv.config();
const contactRoutes = require('./routes/contactRoutes');
const portfolioRoutes = require('./routes/portfolioRoutes');
const authRoutes = require('./routes/authRoutes');
const app = express();
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:3000', credentials: true }));
app.use('/api/', rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const startServer = async () => {
  await connectDB();
  app.use('/api/contact', contactRoutes);
  app.use('/api/portfolio', portfolioRoutes);
  app.use('/api/auth', authRoutes);
  app.get('/api/health', (_req, res) => res.json({ status: 'OK', database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected' }));
  app.use('*', (_req, res) => res.status(404).json({ success: false, message: 'Route not found' }));
  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`Server running on ${port}`));
};
startServer();
