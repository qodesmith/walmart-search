App.Views.QueryView = Backbone.View.extend({
  className: 'query-container',
  initialize: function() {
    this.html = App.templates.QueryView();
    this.render();
  },
  render: function() {
    this.$el.html(this.html);
    $('.container').append(this.$el);
  }
});