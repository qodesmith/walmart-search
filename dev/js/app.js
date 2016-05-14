App.kill = function(view) {
    // Prevent Backbone zombie views from forming: http://goo.gl/OJEqsr
    view.undelegateEvents();
    view.remove();
}

App.renderCollection = function() {
  this.collection.fetch();

  // Create a document fragment on the App object if it doesn't exist.
  App.fragment = document.createDocumentFragment();

  this.collection.each(this.renderProduct);

  // Append the fragment to the page.
  $('.products-container').append(App.fragment);

  // Delete the fragment property on the App object.
  App.fragment = '';
}

App.renderProduct = function(model) {
  // Use handlbars template to generate an HTML structure for the model.
  // Append the structure to the fragment.
}


// 1. local storage created
App.storage = new Backbone.LocalStorage('walmart');

// 2. collection created
App.collection = new App.Collections.ProductsCollection();

// 3. collection fetched
// 4. collection rendered

App.container = new App.Views.ContainerView();
App.query = new App.Views.QueryView();
App.products = new App.Views.ProductsView();