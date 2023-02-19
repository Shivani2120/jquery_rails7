// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import * as bootstrap from "bootstrap"
import "@fortawesome/fontawesome-free"

import jQuery from "jquery";
import "book";

// NOTE: make jQuery global if needed
let $ = window.$ = window.jQuery = jQuery

console.log($); // ok


