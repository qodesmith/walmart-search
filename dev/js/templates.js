App.templates["ContainerView"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
App.templates["ProductView"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"col1\">\n  <img src=\""
    + alias4(((helper = (helper = helpers.thumbnailImage || (depth0 != null ? depth0.thumbnailImage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thumbnailImage","hash":{},"data":data}) : helper)))
    + "\" alt=\"\" class=\"thumb\">\n  <div class=\"description\">Here's a description of the product right here, it is.</div>\n  <div class=\"view-more\">\n    <img src=\"./images/open.png\" alt=\"\">\n  </div>\n</div>\n\n<div class=\"col2\">\n  <div class=\"brand-name\">"
    + alias4(((helper = (helper = helpers.brandName || (depth0 != null ? depth0.brandName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"brandName","hash":{},"data":data}) : helper)))
    + "</div>\n</div>\n\n<div class=\"col3\">\n  <div class=\"category\">Some Cool Category</div>\n</div>\n\n<div class=\"col4\">\n  <div class=\"price\">4.99</div>\n</div>\n\n<div class=\"col5\">\n  <div class=\"msrp\">6.99</div>\n</div>\n\n<div class=\"col6\">\n  <img src=\""
    + alias4(((helper = (helper = helpers.customerRatingImage || (depth0 != null ? depth0.customerRatingImage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"customerRatingImage","hash":{},"data":data}) : helper)))
    + "\" alt=\"\" class=\"stars\">\n  <div class=\"count\">(36)</div>\n  <div class=\"close\">&times;</div>\n</div>";
},"useData":true});
App.templates["ProductsView"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"search-products\">\n  <input type=\"text\" placeholder=\"Search products\">\n  <div class=\"product-amount\">4 of 4 products</div>\n</div>\n<header>\n  <div class=\"col1 header\">\n    Product\n    <div class=\"toggle\"></div>\n  </div>\n\n  <div class=\"col2\">Brand Name</div>\n  <div class=\"col3\">Category</div>\n  <div class=\"col4\">Price</div>\n  <div class=\"col5\">MSRP</div>\n  <div class=\"col6\">Reviews</div>\n</header>";
},"useData":true});
App.templates["QueryView"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form action=\"\" id=\"searchForm\">\n  <input type=\"text\" name=\"query\" placeholder=\"Query (required)\" id=\"query\">\n\n  <div class=\"advanced-search\">\n    <input type=\"text\" name=\"brand-name\" placeholder=\"Brand Name\" id=\"brand-name\">\n    <input type=\"text\" name=\"results\" placeholder=\"Results\" id=\"results\">\n    <input type=\"text\" name=\"start-at\" placeholder=\"Start at\" id=\"start-at\">\n    <div id=\"sorted-by\">Sorted By</div>\n    <div class=\"drop-down\">\n      <select name=\"sorted-by-dropdown\">\n        <option value=\"relevance\">Relevance</option>\n        <option value=\"price\">Price</option>\n        <option value=\"title\">Title</option>\n        <option value=\"bestseller\">Best Seller</option>\n        <option value=\"customerRating\">Customer Rating</option>\n        <option value=\"new\">New</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"search-title hidden\"></div>\n\n  <div class=\"add-products\">Add Products</div>\n</form>";
},"useData":true});