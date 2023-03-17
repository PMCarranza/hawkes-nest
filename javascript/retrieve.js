'use strict';

var person = '';
var message = ''
var date = '';

// Firebase watcher .on('child-added)
    // A Reference represents a specific location in your Database and can be used for reading or writing data to that Database location (firebase - docs - reference)
    // The child_added event is typically used when retrieving a list of items from the database. Unlike value which returns the entire contents of the location, child_added is triggered once for each existing child and then again every time a new child is added to the specified path (firebase-real time database - docs - guides)
    // on child added, the function snapshot will be be run
    database.ref().on('child_added', function(snapshot) {
        
        // create a new variable for snapshot for convenience
        // A snapshot is a picture of the data at a particular database reference at a single point in time
        var sv = snapshot.val();


            
            let comments = $('<div>').addClass('box');

            let who = $('<p>').text(sv.user).addClass('who');
            let what = $('<p>').text(sv.comment).addClass('what');
            let when = $('<p>').text(sv.date).addClass('when');
        
            comments.append(when, what, who);
      
            $('#comments').append(comments); 
            console.log(sv);

            // $('who').append(who);
            // $('what').append(what);
            // $('when').append(when);
      
            // $('#comments').append(who, what, when); 
           
        // Handle the errors
    }, function(errorObject) {
            console.log("Errors handled: " + errorObject.code);
    });

