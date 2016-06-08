'use strict';
var hbs = require('handlebars');

export function (content, file, opts) {
  return hbs.compile(content + '')(opts.data);
};
