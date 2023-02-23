// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails

import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"
import "./components"
import jQuery from "jquery";

// NOTE: make jQuery global if needed
window.$ = window.jQuery = jQuery;
console.log($); // ok
window.bootstrap = bootstrap