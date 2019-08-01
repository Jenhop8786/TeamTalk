// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require activestorage
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .


$(document).ready( function () {


let submit = document.getElementById("create");
let input = document.getElementById("comment_content");
let commentContent = document.querySelector("ul");
//let comment-created-by = document.getElementById("p");

submit.addEventListener("click", function(e) {
  e.preventDefault()
  //console.log("winning");

  if (input.value.length > 0) {
    let li = document.createElement("li");
    let commentPostedBy = document.getElementById("p");
    li.appendChild(document.createTextNode(input.value));
    commentContent.appendChild(li, commentPostedBy);
    input.value = "";
  }

});

});
