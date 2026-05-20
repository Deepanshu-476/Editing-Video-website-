const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, maxlength: 100 },
    category: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true, maxlength: 500 },
    videoUrl: { type: String, required: true, trim: true },
    thumbnailUrl: { type: String, default: '', trim: true },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Portfolio', portfolioSchema);
