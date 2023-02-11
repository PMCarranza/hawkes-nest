'use strict';

//retrieving from local storage

const person = '';
const message = ''
const date = '';


function retrieve(){
    var who = localStorage.getItem('user');
    var what = localStorage.getItem('comment');
    var when = localStorage.getItem('date');
  
    console.log(`reading from local storage ${who} ${what} ${when}`);
  };
  
  retrieve();