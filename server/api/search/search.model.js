'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SearchSchema = new Schema({
  room: [],
  adult: [],
  child: [],
  active: Boolean
});

module.exports = mongoose.model('Search', SearchSchema);