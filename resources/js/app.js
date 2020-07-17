/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require("./bootstrap");

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
require("./components/App");
require("./components/Example");
require("./components/clientApp");
//shops
require("./components/shop/shopDetail");
// require("./components/shop/createShop");

require("./components/shop/facia");
require("./components/shop/client/createShop");
require("./components/shop/client/editShop");
require("./components/shop/favorShop");
//require("./components/shop/shops");
//menu
require("./components/menu/menuForm");
require("./components/menu/menuShow");
require("./components/menu/clientMenu");
require("./components/menu/deliShow");
//require("./components/menu/callTest");
//delivery

require("./components/delivery/deliShow");
//maps
require("./components/maps/map");
require("./components/maps/getDist");
//require("./components/routeTest");
//general
require("./components/clientIndex");
