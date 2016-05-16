# WALMART SEARCH!

This [Backbone.js](http://backbonejs.org/) app utilizes the [Walmart search api](https://developer.walmartlabs.com/docs/read/Search_API) to produce a sortable, filterable list of products from the search results. All data persists to localStorage on your machine.


## INSTALLATION

Download the zip file in the top right of this screen. Within that zip you'll find a `public` folder. Extract that and run the index.html within. #EasyPeazy


## USAGE

### Simple Search

To begin, simply enter a product in the top query input field and press enter or click "Add Products". By default, the list below will be populated with 10 results. If no results are found, a "NO RESULTS" message will appear indicating so.

### Advanced Search

If you'd like to further customize your search, click on "Advanced Search" to reveal more options for your search:

* ***Brand Name***: Filter your query by brand name. This field is case-sensative, so some experimenting may be needed for desired results.

* ***Results***: Determines how many products are returned for each search. The default is 10. The max is 25 the minimum is 1. Any values above 25 will be reduced to 25, and values below 1 will produce the default of 10.

* ***Start at***: The Walmart catalog is robust, to say the least. This will cause your query to be start at this number in the list of total products found by the api. The max for this is 1000.

* ***Sorted By***: You can have your query delivered pre-sorted by the following options: _relevance_, _price_, _title_, _best seller_, _customer rating_, and _new_.


### THE LIST

The list has a few features for your convenience:

* ***Search Products***: Once you've completed a search, the _Search Products_ field can be used to filter the results. It filters as you type. To clear the filtered results, simply click the "x" that appears in the field.

* ***Remove All Products***: Removes all products at once from the list. This can be useful when you have numerous products.

* ***Product***: Clicking this field in the _header_ of the list table will reverse the order of the list. Your scrolling position within the list is maintained.

* ***Brand Name***: For _each product_ in the _list_, the _Brand Name_ entry is an editable input field which you can name what you want. By default, the field is pre-populated with the results from the api. Simply edit the field and clicking outside will persist the data to localStorage.

* ***Close***: Clicking the _red "x"_ at the far right of each product will remove that product from the list.