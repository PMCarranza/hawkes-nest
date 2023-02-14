'use strict';

//retrieving from local storage

var person = '';
var message = ''
var date = '';

function retrieve(){


    addData();
}

// retrieve();


function addData(){
      
        let comments = $('<div>');

        let who = $('<p>').text(person).addClass('who');
        let what = $('<p>').text(message).addClass('what');
        let when = $('<p>').text(date).addClass('when');
    
        comments.append(when, who, what);
  
        $('.container').append(comments);

};
  

