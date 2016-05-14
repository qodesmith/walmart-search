App.Views.ContainerView = Backbone.View.extend({
  className: 'container',
  initialize: function() {
    this.html = App.templates.ContainerView();
    this.render();
  },
  render: function() {
    this.$el.html(this.html);
    $('body').append(this.$el);
  },
  events: {
    'click .search-title': 'searchToggle',
    'click .col1.header': 'sortProducts',
    'click .close': 'deleteProduct',
    'keypress': 'enterKey'
  },
  searchToggle: function(e) {
    $(e.target).toggleClass('hidden shown');
    $('.advanced-search').toggleClass('hidden shown');
  },
  sortProducts: function(e) {
    $('header .toggle').toggleClass('up');
  },
  deleteProduct: function(e) {
    $(e.target).closest('.product').remove();
  },
  enterKey: function(e) {
    if(e.keyCode !== 13) return;
    if(!$(document.activeElement).hasClass('form-input')) return;
    if($('#query').val() === '') return noQuery();

    function noQuery() {

    }

    console.log(e);

    var data = $('#searchForm').serializeArray();

    console.log(data);
  }
});