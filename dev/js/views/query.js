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

    if(this.searching) return; // AJAX request in progress.
    if(this.queryTransitioning) return; // Transitioning the red border off in progress.
    this.queryTransitioning = true;

    if($('#query').val() === '') {
      return noQuery();
    } else {
      this.queryTransitioning = false;
    }

    var _this = this;
    var data = $('#searchForm').serializeArray();

    // Build out the AJAX GET request url.
    var url = 'http://api.walmartlabs.com/v1/search?apiKey=w48yd89ju28reu976jxc3ewz&facet=on&responseGroup=full';
    url += '&query=' + data[0].value;
    url += data[1].value ? '&facet.brand=' + data[1].value : '';
    url += data[2].value ? '&numItems=' + data[2].value : '';
    url += data[3].value ? '&start=' + data[3].value : '';
    url += data[4].value ? '&sort=' + data[4].value : '';

    this.searching = true;
    $('.add-products').addClass('searching')

    // AJAX request the Walmart search api.
    $.ajax({
      dataType: 'jsonp',
      type: 'GET',
      url: url,
      success: function(res) {
        if(res.errors) {
          for(var i = 0; i < res.errors.length; i++) {
            console.log(res.errors[i].message);
          }
          return;
        }

        _this.searching = false;
        App.processData(res.items);
        $('.add-products').removeClass('searching');
      },
      error: function(err) {
        console.log('AJAX error:');
        console.log(err);
        _this.searching = false;
      }
    });
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