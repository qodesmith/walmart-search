App.Views.ProductsView = Backbone.View.extend({
  className: 'products-container',
  initialize: function() {
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
        App.data = data;
        var frag = document.createDocumentFragment();
        for(var i = 0; i < 15; i++) {
          var product = new App.Views.ProductView(data);
          frag.appendChild(product.el);
        }

        var len = frag.children.length;
        var individuals = $('.individual-products');

        individuals.append(frag);

        var children = individuals.children();
        var i = 0;
        var interval = setInterval(function() {
          if(len === i) clearInterval(interval);
          $(children[i]).addClass('show');
          i++;
        }, 100);
      }
    });
  },
  events: {
    'click .col1.header': 'sortProducts',

  },
  sortProducts: function(e) {
    $('header .toggle').toggleClass('up');
  }
});