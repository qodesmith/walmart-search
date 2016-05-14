App.Models.Product = Backbone.Model.extend({
  initialize: function() {
    console.log('Product model created.');
  },
  defaults: {
    msrp: '(none)'
  },
  localStorage: App.storage,
});