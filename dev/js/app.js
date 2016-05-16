App.killView = function(view) {
  // Prevent Backbone zombie views from forming: http://goo.gl/OJEqsr
  view.undelegateEvents();
  view.remove();
}

// Renders our collection from localStorage.
// Should only run once on app startup.
App.renderCollection = function() {
  var collection = App.collection;
  if(!collection.models.length) return App.productAmount();

  var frag = document.createDocumentFragment();
  var individuals = $('.individual-products');
  var len = collection.models.length;
  var i = 0;

  collection.each(function(model) {
    var product = new App.Views.ProductView({model: model});
    frag.appendChild(product.el);
  });

  individuals.prepend(frag);

  var interval = setInterval(function() {
    if(i === len) clearInterval(interval);
    $(individuals.children()[i]).addClass('show');
    i++;
  }, 100);

  App.productAmount();
}

// AJAX request data from the query form.
// This function called from the query view.
App.processData = function(data) {
  var time = new Date().getTime();
  var frag = document.createDocumentFragment();
  var len = data.length;
  var individuals = $('.individual-products');
  var i = j = 0;
  var elements = [];
  var models = [];

  for(i; i < data.length; i++) {
    data[i].hidden = false;
    data[i].searchTime = time;
    var model = App.collection.create(data[i]);
    var product = new App.Views.ProductView({model: model});
    frag.appendChild(product.el);
    elements.push(product.el);
    models.push(model);
  }


  // Add newly retrieved items to the beginning of the list.
  individuals.prepend(frag);

  var interval = setInterval(function() {
    if(len === j) clearInterval(interval);
    $(elements[j]).addClass('show');
    j++;
  }, 100);

  App.productAmount();
}

// Keeps the 'x of y products' up to date.
App.productAmount = function() {
  var shown = $('.product').length;
  var hidden = $('.product.hidden').length;
  var models = App.collection.models.length;
  $('.product-amount').text((shown - hidden) + ' of ' + models + ' products');
}

// Collection created - local storage defined within.
App.collection = new App.Collections.ProductsCollection();

// Views created.
App.container = new App.Views.ContainerView();
App.query = new App.Views.QueryView();
App.products = new App.Views.ProductsView();

// Retrieve our models from localStorage & render the collection.
App.collection.fetch();
App.renderCollection();