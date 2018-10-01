import Vue from "vue";
import router from "./router/router"
import App from "./App.vue";
import jquery from "jquery";
global.jquery = jquery;
let Bootstrap = require("bootstrap");
window.$ = window.jQuery = require("jquery");
$ = require("jquery");
// require("./assets/js/modernizr-2.8.3.min.js");
// require("./assets/js/jquery.prettyPhoto.js");
require("./assets/js/jquery.nivo.slider.js");
// require("./assets/js/wow.js");
require("./assets/js/jquery.sticky.js");
require("./assets/js/jquery.scrollUp.min.js");
require("./assets/js/owl.carousel.min.js");
require("./assets/js/jquery.meanmenu.js");
require("./assets/js/tio.js");
require("./assets/js/jquery.easing-1.3.js");
require("./assets/js/jquery.counterup.min.js");
require("./assets/js/jquery.waypoints.min.js");
require("./assets/js/app.js");
require("./assets/js/main.js");

new Vue({
  router,
  el: "#app",
  render: h => h(App)
});
