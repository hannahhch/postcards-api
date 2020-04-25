'use strict';
module.exports = (app) => {
  const postcards = require('../controllers/postcardsController');

  // postcard Routes
  app.route('/postcards')
    .get(postcards.list_all_postcards)
    .post(postcards.create_a_postcard);

  app.route('/postcards/:postcardId')
    .get(postcards.read_a_postcard)
    .put(postcards.update_a_postcard)
    .delete(postcards.delete_a_postcard);
};
