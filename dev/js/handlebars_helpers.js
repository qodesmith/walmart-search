Handlebars.registerHelper('category', function(input) {
  return input.split('/').join(' > ');
});