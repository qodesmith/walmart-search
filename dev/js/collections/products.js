App.Collections.ProductsCollection = Backbone.Collection.extend({
  model: App.Models.Product,
  localStorage: new Backbone.LocalStorage('walmart')
});