'use strict';
var hbs = require('handlebars');

module.exports = function (content, file, opts) {
  return hbs.compile(content + '')(opts.data);
};
