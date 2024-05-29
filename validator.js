var validator = require('validator');
const { default: isEmail } = require('validator/lib/isEmail');

 const is_Email = validator.isEmail("test@gmail.com")

module.exports = is_Email