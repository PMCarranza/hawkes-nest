'use strict';

    // // Your web app's Firebase configuration
    // const firebaseConfig = {
    //   apiKey: "AIzaSyAaNW1ok52CEuySat-1KvxGCskTOrowe7k",
    //   authDomain: "hawkes-nest-b78d2.firebaseapp.com",
    //   databaseURL: "https://hawkes-nest-b78d2-default-rtdb.firebaseio.com",
    //   projectId: "hawkes-nest-b78d2",
    //   storageBucket: "hawkes-nest-b78d2.appspot.com",
    //   messagingSenderId: "367613085714",
    //   appId: "1:367613085714:web:160f58d1bf94dc7ff370cb"
    // };
  
    // // Initialize Firebase
    // firebase.initializeApp(firebaseConfig);
    
    // const database = firebase.database();


var user;
var comment;
var today = new Date();

$('#submit').on('click', function(capture){

    user = $('#name').val().trim();

    comment = $('#comment').val().trim();

    var date = today.toDateString();


    // code for handling the push to the database
    // A Reference represents a specific location in your Database and can be used for reading or writing data to that Database location (firebase - docs - reference)
    // in this case the method push is used to add the child to the firebase data as opposed to replacing it whe .set()is used
    // the child being added has its values in key pairs, not all of the being appended on the pages is being passed to the database
    database.ref().push( {
      user: user,
      comment: comment,
      date: date
  });

  // clear form
  // the trigger() method is being used to clear the div selected (the fillable form in this case); user inputs the information and on click trigger() clears the form and is ready for the next input  
  $('#my-form').trigger('reset');


});


  // Firebase watcher .on('child-added)
  // A Reference represents a specific location in your Database and can be used for reading or writing data to that Database location (firebase - docs - reference)
  // The child_added event is typically used when retrieving a list of items from the database. Unlike value which returns the entire contents of the location, child_added is triggered once for each existing child and then again every time a new child is added to the specified path (firebase-real time database - docs - guides)
  // on child added, the function snapshot will be be run
  database.ref().on('child_added', function(snapshot) {
      
      // create a new variable for snapshot for convenience
      // A snapshot is a picture of the data at a particular database reference at a single point in time
      var sv = snapshot.val();
      console.log("snapshot: " + sv);

      // Handle the errors
  }, function(errorObject) {
          console.log("Errors handled: " + errorObject.code);
  });

