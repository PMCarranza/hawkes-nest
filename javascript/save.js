'use strict';

let name;
let comment;
const today = new Date();
console.log(today.toLocaleDateString());

$('#submit').on('click', function(capture){
    capture.preventDefault();

    name = $('#name').val().trim();

    comment = $('#comment').val().trim();

    console.log(name + comment);
})