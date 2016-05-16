App.Views.ModalView = Backbone.View.extend({
  className: 'modal-container',
  initialize: function() {
    this.html = App.templates.ModalView();
    this.render();
  },
  render: function() {
    this.$el.html(this.html);
    $('body').append(this.$el);
  },
  events: {
    'click .btn': 'button'
  },
  button: function(e) {
    var text = $(e.target).text();

    if(text === 'Overwrite') {

    } else if(text === 'Skip') {

    } else {
      this.$el.removeClass('show');
    }
  }
})