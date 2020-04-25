'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostcardSchema = new Schema({
  sender: {
    type: String,
    required: 'Kindly enter the name of the postcard'
  },
  location: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
    default: 'United States'
  },
  year: {
    type: Number
  }
});

module.exports = mongoose.model('Postcards', PostcardSchema);