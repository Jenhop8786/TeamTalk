// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `rails generate channel` command.
//
//= require action_cable
//= require_self
//= require_tree ./channels

(function() {
  this.App || (this.App = {});

  App.cable = ActionCable.createConsumer();

}).call(this);

//Closures = function ran. function executed. It's never going to run again. But it'going to remember that there are references
// to those variables. So the child scope always has access to the parent scope 
