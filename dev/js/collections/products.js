App.Collections.ProductsCollection = Backbone.Collection.extend({
  initialize: function() {
    console.log('Products collection created.');
  },
  model: App.product,
  localStorage: App.storage
});