const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;
