// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

// import "bootstrap"
import * as jquery from "jquery"
import "semantic-ui"
import "@rails/actioncable"



$(document).on('turbo:load', function() {
  $('.ui.dropdown').dropdown();
});
