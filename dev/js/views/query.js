App.Views.QueryView = Backbone.View.extend({
  className: 'query-container',
  initialize: function() {
    this.html = App.templates.QueryView();
    this.render();
  },
  render: function() {
    this.$el.html(this.html);
    $('.container').append(this.$el);
  },
  events: {
    'click .search-title': 'searchToggle',
    'click .add-products': 'queryForm',
    'transitionend #query': 'clearQueryClass',
    'keypress': 'enterKey'
  },
  searchToggle: function(e) {
    $(e.target).toggleClass('hidden shown');
    $('.advanced-search').toggleClass('hidden shown');
  },
  queryForm: function() {
    function noQuery() {
      $('#query').addClass('red');
      setTimeout(function() {
        $('#query').addClass('error');

        setTimeout(function() {
          $('#query').removeClass('red');
        }, 1000);
      }, 10);
    }

    if(this.queryTransitioning) return;
    this.queryTransitioning = true;

    if($('#query').val() === '') {
      return noQuery();
    } else {
      this.queryTransitioning = false;
    }

    var data = $('#searchForm').serializeArray();
    console.log(data);
  },
  clearQueryClass: function(e) {
    if(!this.queryTransitioning) return;

    this.queryTransitioning = false;
    $(e.target).removeClass('error');
  },
  enterKey: function(e) {
    if(e.keyCode !== 13) return;
    this.queryForm();
  }
});