App.killView = function(view) {
  // Prevent Backbone zombie views from forming: http://goo.gl/OJEqsr
  view.undelegateEvents();
  view.remove();
}

// Renders our collection from localStorage.
// Should only run once on app startup.
App.renderCollection = function() {
  var collection = App.collection;
  var len = collection.models.length;
  if(!len) return App.productAmount();

  // Use a document fragment to append the created views.
  // Avoid unnecessary hits to the DOM / page reflows.
  var frag = document.createDocumentFragment();
  var individuals = $('.individual-products');
  var i = 0;

  collection.each(function(model) {
    var product = new App.Views.ProductView({model: model});
    $(frag).prepend(product.el); // Most recent searches first.
  });

  individuals.append(frag);

  var interval = setInterval(function() {
    if(i === len) clearInterval(interval);
    $(individuals.children()[i]).addClass('show');
    i++;
  }, 100);

  App.productAmount();
}

App.checkDuplicates = function(data) {
  var col = App.collection.models;
  var found = col.some(function(model) {
    return data.some(function(obj) {
      return obj.itemId === model.get('itemId');
    });
  });

  found ? App.showModal(data) : App.processData(data);
}

// Run from the users choice in the modal.
// Will destroy duplicate models or modify the data array.
App.processDuplicates = function(data, choice) {
  var models = App.collection.models;

  // Destroy the duplicate models in localStorage.
  if(choice === 'overwrite') {
    var clone = models.slice();
    clone.map(function(model) {
      data.map(function(obj) {
        if(model.get('itemId') === obj.itemId) model.destroy();
      });
    });

    App.processData(data);

  // Remove the duplicate models in data.
  } else if(choice === 'skip') {
    var newData = [];
    data.map(function(obj) {
      var match = models.some(function(model){
        return model.get('itemId') === obj.itemId;
      });

      if(!match) newData.push(obj);
    });

    App.processData(newData);
  }
}

App.showModal = function(data) {
  // Store the data from the server on the app,
  // enter the modal, then head to
  App.modalData = data;
  $('.modal-container').addClass('show');
}

// AJAX request data from the query form.
App.processData = function(data) {
  var frag = document.createDocumentFragment();
  var len = data.length;
  var individuals = $('.individual-products');
  var elements = [];
  var i = j = 0;

  for(i; i < data.length; i++) {
    data[i].hidden = false; // Used for filtering the list.

    var model = App.collection.create(data[i]); // {at: 0} not working
    var product = new App.Views.ProductView({model: model});

    frag.appendChild(product.el);
    elements.push(product.el);
  }

  // Add newly retrieved items to the beginning of the list.
  individuals.prepend(frag);

  // Iterate through the list and reveal each one
  // with a sliding- / fading-in motion.
  var interval = setInterval(function() {
    if(len === j) clearInterval(interval);
    $(elements[j]).addClass('show');
    j++;
  }, 80);

  App.productAmount();
}

// Keeps the 'x of y products' up to date.
App.productAmount = function() {
  var shown = $('.product').length;
  var hidden = $('.product.hidden').length;
  var models = App.collection.models.length;
  $('.product-amount').text((shown - hidden) + ' of ' + models + ' products');
}

// Restores the list back to normal.
App.clearSearch = function() {
  console.log('App.clearSearch')
  App.searchFiltering = false;
  var input = $('.search-products input');

  input.val('');
  $('.search-container').removeClass('searching');
  $('.product.hidden').removeClass('hidden');
}

// Collection created - local storage defined within.
App.collection = new App.Collections.ProductsCollection();

// Views created.
App.container = new App.Views.ContainerView();
App.query = new App.Views.QueryView();
App.products = new App.Views.ProductsView();
App.modal = new App.Views.ModalView();

// Retrieve our models from localStorage & render the collection.
App.collection.fetch();
App.renderCollection();