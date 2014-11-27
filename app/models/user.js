var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var crypto = require('crypto');


var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  initialize: function(){
    var shasum = crypto.createHash('sha1');
  }
});

// hash a password w bcrypt, compare
// save hashed varsion of pwrd to schema
//

module.exports = User;
