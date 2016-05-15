App.Views.ContainerView = Backbone.View.extend({
  className: 'container',
  initialize: function() {
    this.html = App.templates.ContainerView();
    this.render();
  },
  render: function() {
    this.$el.html(this.html);
    $('body').append(this.$el);
  }
});