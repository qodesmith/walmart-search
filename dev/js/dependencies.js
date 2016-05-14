// Front End libraries.
$ = jQuery = require('jquery');
Handlebars = require('handlebars/runtime.js'); // Only the runtime is needed, much smaller file.
_          = require('underscore'); // Backbone dependency.
Backbone   = require('backbone');

App = {
  Models: {},
  Collections: {},
  Views: {},
  templates: {},
};
