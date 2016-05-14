App.Views.ProductView = Backbone.View.extend({
  className: 'product',
  initialize: function(obj) {
    this.html = App.templates.ProductView(obj);
    this.render();
  },
  render: function() {
    this.$el.html(this.html);
    $('.individual-products').append(this.$el);
  }
});