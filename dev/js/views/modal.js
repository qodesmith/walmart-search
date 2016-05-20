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
      App.processDuplicates(App.modalData, 'overwrite');
    } else if(text === 'Skip') {
      App.processDuplicates(App.modalData, 'skip');
    }

    this.$el.removeClass('show');
    App.modalData = '';
  }
});