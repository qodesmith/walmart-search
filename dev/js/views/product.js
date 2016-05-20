App.Views.ProductView = Backbone.View.extend({
  className: 'product',
  initialize: function() {
    this.listenTo(this.model, 'change:hidden', this.hidden);
    this.listenTo(this.model, 'destroy', function() {
      App.killView(this);
    });
    this.render();
  },
  render: function() {
    this.html = App.templates.ProductView(this.model.toJSON());
    this.$el.html(this.html);
  },
  events: {
    'blur .brand-name': 'brandName',
    'click .close': 'close'
  },
  brandName: function(e) {
    var val = $(e.target).val();
    var placeholder = $(e.target).attr('placeholder');

    this.model.save({newBrandName: val || placeholder});
    this.render();
  },
  close: function() {
    var _this = this;

    this.$el.animate({
      padding: 0,
      height: 0,
      borderBottomWidth: 0,
      opacity: 0
    }, function() {
      _this.model.destroy();
      App.killView(_this);
      App.productAmount();
    });
  },
  hidden: function() {
    var hidden = this.model.get('hidden');
    if(hidden) {
      this.$el.addClass('hidden');
    } else {
      this.$el.removeClass('hidden');
    }
  }
});