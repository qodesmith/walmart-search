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
    'click .clear-search': 'clearSearch',
    'click .remove-all-products': 'removeAllProducts'
  },
  sortProducts: function(e) {
    var scrollTop = $('.individual-products')[0].scrollTop;

    $('header .toggle').toggleClass('up');
    $('.individual-products').toggleClass('reverse');
    $('.individual-products')[0].scrollTop = scrollTop;
  },
  searchProducts: function(e) {
    if(!App.searchFiltering) {
      $('.search-container').addClass('searching');
    }

    App.searchFiltering = true;
    var val = $(e.target).val().toLowerCase();

    if(!val) App.clearSearch();

    App.collection.models.map(function(model) {
      if(!val) return model.set({hidden: false});

      var name = model.get('name').toLowerCase();
      name.indexOf(val) === -1 ? model.set({hidden: true}) : model.set({hidden: false});
    });

    App.productAmount();
  },
  clearSearch: function() {
    App.clearSearch();
  },
  removeAllProducts: function() {
    var models = App.collection.slice();

    models.map(function(model) {
      model.destroy();
    });

    App.productAmount();
  }
});