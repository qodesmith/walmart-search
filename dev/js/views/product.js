App.Views.ProductView = Backbone.View.extend({
  className: 'product',
  initialize: function(obj) {
    this.html = App.templates.ProductView(obj);
    this.$el.html(this.html);
  },
  events: {
    'click .view-more': 'viewMore',
    'blur .brand-name': 'brandName',
    'click .close': 'close'
  },
  viewMore: function(e) {
    e.preventDefault();
    console.log('new tab - individual product page');
  },
  brandName: function(e) {
    console.log('persist the brand-name input data');
  },
  close: function() {
    App.kill(this);
  }
});