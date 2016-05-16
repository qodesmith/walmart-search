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
    'focus input': 'focus',
    'keypress': 'enterKey'
  },
  focus: function() {
    $('.no-results').removeClass('show');
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

    function minMax(min, max, value) {
      if(!value) return false;
      if(value >= min && value <= max) return value;
      if(value < min) return false;
      if(value > max) return max;
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
    var data2 = minMax(1, 25, data[2].value);
    var data3 = minMax(1, 1000, data[3].value);

    // Build out the AJAX GET request url.
    var url = 'http://api.walmartlabs.com/v1/search?apiKey=w48yd89ju28reu976jxc3ewz&facet=on&responseGroup=full';
    url += '&query=' + data[0].value;
    url += data[1].value ? '&facet=on&facet.filter=brand:' + data[1].value : '';
    url += data2 ? '&numItems=' + data2 : '';
    url += data3 ? '&start=' + data3 : '';
    url += data[4].value ? '&sort=' + data[4].value : '';

    this.searching = true;
    $('.add-products').addClass('searching');

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

        if(res.totalResults > 0) {
          App.checkDuplicates(res.items); // Begin processing the data.
        } else {
          $('.no-results').addClass('show');
        }

        $('.add-products').removeClass('searching');
        $('#searchForm input').val('');
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