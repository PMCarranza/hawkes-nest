'use strict';

var user;
var comment;
var today = new today();

$('#submit').on('click', function(capture){
    capture.preventDefault();

    user = $('#name').val().trim();

    comment = $('#comment').val().trim();

    // store();

    $('.form').trigger('reset');
})

function store(){
  localStorage.setItem('user', user);
  localStorage.setItem('comment', comment);
  localStorage.setItem('today', today.toLocaleDateString());

  console.log(`${user} ${comment} ${today.toLocaleDateString()}`);

}