App.Views.ProductsView = Backbone.View.extend({
  className: 'products-container',
  initialize: function() {
    console.log('products view');
    this.html = App.templates.ProductsView();
    this.render();
  },
  render: function() {
    this.$el.html(this.html);
    $('.container').append(this.$el);

    var url = 'http://api.walmartlabs.com/v1/items/12417832?apiKey=w48yd89ju28reu976jxc3ewz&format=json';

    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'jsonp',
      success: function(data) {
        for(var i = 0; i < 5; i++) {
          console.log(data);
          new App.Views.ProductView(data);
        }
      }
    });
  }
});