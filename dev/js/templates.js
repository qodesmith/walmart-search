App.templates["ContainerView"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
App.templates["ProductView"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.newBrandName || (depth0 != null ? depth0.newBrandName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"newBrandName","hash":{},"data":data}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.brandName || (depth0 != null ? depth0.brandName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"brandName","hash":{},"data":data}) : helper)));
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "      <span class=\"msrp\">$"
    + container.escapeExpression(((helper = (helper = helpers.msrp || (depth0 != null ? depth0.msrp : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"msrp","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "      <span class=\"none\">(none)</span>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "    <img src=\""
    + container.escapeExpression(((helper = (helper = helpers.customerRatingImage || (depth0 != null ? depth0.customerRatingImage : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"customerRatingImage","hash":{},"data":data}) : helper)))
    + "\" alt=\"\" class=\"stars\">\n    <div class=\"count\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.numReviews : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data})) != null ? stack1 : "")
    + "    </div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        ("
    + container.escapeExpression(((helper = (helper = helpers.numReviews || (depth0 != null ? depth0.numReviews : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"numReviews","hash":{},"data":data}) : helper)))
    + ")\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.customerRatingImage : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    return "          (1)\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"none\">(no reviews)</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"col1\">\n  <img src=\""
    + alias4(((helper = (helper = helpers.thumbnailImage || (depth0 != null ? depth0.thumbnailImage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thumbnailImage","hash":{},"data":data}) : helper)))
    + "\" alt=\"\" class=\"thumb\">\n  <div class=\"description\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n  <a href=\""
    + alias4(((helper = (helper = helpers.productUrl || (depth0 != null ? depth0.productUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"productUrl","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\" class=\"view-more\">\n    <img src=\"./images/open.png\" alt=\"\">\n  </a>\n</div>\n\n<div class=\"col2\">\n  <input type=\"text\" class=\"brand-name\" placeholder=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.newBrandName : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\n</div>\n\n<div class=\"col3\">\n  <div class=\"category\">"
    + alias4((helpers.category || (depth0 && depth0.category) || alias2).call(alias1,(depth0 != null ? depth0.categoryPath : depth0),{"name":"category","hash":{},"data":data}))
    + "</div>\n</div>\n\n<div class=\"col4\">\n  <div class=\"price\">$"
    + alias4(((helper = (helper = helpers.salePrice || (depth0 != null ? depth0.salePrice : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"salePrice","hash":{},"data":data}) : helper)))
    + "</div>\n</div>\n\n<div class=\"col5\">\n  <div class=\"msrp\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.msrp : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "  </div>\n</div>\n\n<div class=\"col6\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.customerRatingImage : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(15, data, 0),"data":data})) != null ? stack1 : "")
    + "  <div class=\"close\">&times;</div>\n</div>";
},"useData":true});
App.templates["ProductsView"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"search-products\">\n  <div>\n    <input type=\"text\" placeholder=\"Search products\">\n  </div>\n  <div class=\"product-amount\"></div>\n  <div class=\"right\">\n    <span class=\"clear-products btn\">Clear Products</span>\n  </div>\n</div>\n<header>\n  <div class=\"col1 header\">\n    Product\n    <div class=\"toggle\"></div>\n  </div>\n\n  <div class=\"col2\">Brand Name</div>\n  <div class=\"col3\">Category</div>\n  <div class=\"col4\">Price</div>\n  <div class=\"col5\">MSRP</div>\n  <div class=\"col6\">Reviews</div>\n</header>\n<div class=\"individual-products\"></div>";
},"useData":true});
App.templates["QueryView"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form action=\"\" id=\"searchForm\">\n  <input type=\"text\" name=\"query\" placeholder=\"Query (required)\" id=\"query\" class=\"form-input\">\n\n  <div class=\"advanced-search\">\n    <input type=\"text\" name=\"brand-name\" placeholder=\"Brand Name\" id=\"brand-name\" class=\"form-input\">\n    <input type=\"number\" name=\"numItems\" placeholder=\"Results\" id=\"results\" class=\"form-input\">\n    <input type=\"number\" name=\"start\" placeholder=\"Start at\" id=\"start-at\" class=\"form-input\">\n    <div id=\"sorted-by\">Sorted By</div>\n    <div class=\"drop-down\">\n      <select name=\"sort\" class=\"form-input\">\n        <option value=\"relevance\">Relevance</option>\n        <option value=\"price\">Price</option>\n        <option value=\"title\">Title</option>\n        <option value=\"bestseller\">Best Seller</option>\n        <option value=\"customerRating\">Customer Rating</option>\n        <option value=\"new\">New</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"search-title hidden\"></div>\n\n  <div class=\"add-products btn\">Add Products</div>\n</form>\n<div class=\"no-results\">NO RESULTS</div>";
},"useData":true});