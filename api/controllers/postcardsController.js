'use strict';

const mongoose = require('mongoose'),
Postcard = mongoose.model('Postcards');

// GET
exports.list_all_postcards = (req, res) => {
  Postcard.find({}, (err, postcard) => {
    if (err)
      res.send(err);
    res.json(postcard);
  });
};

// POST
exports.create_a_postcard = (req, res) => {
  var new_postcard = new Postcard(req.body);
  new_postcard.save((err, postcard) => {
    if (err)
      res.send(err);
    res.json(postcard);
  });
};

// GET one
exports.read_a_postcard = (req, res) => {
  Postcard.findById(req.params.postcardId, (err, postcard) => {
    if (err)
      res.send(err);
    res.json(postcard);
  });
};

// PUT
exports.update_a_postcard = (req, res) => {
  Postcard.findOneAndUpdate({ _id: req.params.postcardId }, req.body, { new: true }, (err, postcard) => {
    if (err)
      res.send(err);
    res.json(postcard);
  });
};

// DELETE
exports.delete_a_postcard = (req, res) => {
  Postcard.remove({
    _id: req.params.postcardId
  }, (err)  => {
    if (err)
      res.send(err);
      res.json({ message: `postcard successfully deleted` });
  });
};

