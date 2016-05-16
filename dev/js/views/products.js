App.Views.ProductsView = Backbone.View.extend({
  className: 'products-container',
  initialize: function() {
    this.html = App.templates.ProductsView();
    this.render();
  },
  render: function() {
    this.$el.html(this.html);
    $('.container').append(this.$el);
  },
  events: {
    'click .col1.header': 'sortProducts',
    'keyup .search-products input': 'searchProducts',
    'click .clear-products': 'clearProducts'
  },
  sortProducts: function(e) {
    var scrollTop = $('.individual-products')[0].scrollTop;

    $('header .toggle').toggleClass('up');
    $('.individual-products').toggleClass('reverse');
    $('.individual-products')[0].scrollTop = scrollTop;
  },
  searchProducts: function(e) {
    var val = $(e.target).val().toLowerCase();

    App.collection.models.map(function(model) {
      if(!val) return model.set({hidden: false});

      var name = model.get('name').toLowerCase();
      name.indexOf(val) === -1 ? model.set({hidden: true}) : model.set({hidden: false});
    });

    App.productAmount();
  },
  clearProducts: function() {
    var models = App.collection.slice();

    models.map(function(model) {
      model.destroy();
    });

    App.productAmount();
  }
});