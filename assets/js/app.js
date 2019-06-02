const firebaseConfig = {
    apiKey: "AIzaSyAAYKK793wpSvEP-gxLAVKOib1aqbd2qxM",
    authDomain: "train-scheduler-d1448.firebaseapp.com",
    databaseURL: "https://train-scheduler-d1448.firebaseio.com",
    projectId: "train-scheduler-d1448",
    storageBucket: "train-scheduler-d1448.appspot.com",
    messagingSenderId: "1010829073857",
    appId: "1:1010829073857:web:f6456bb1ced934cd"

    // Initialize Firebase
};
firebase.initializeApp(firebaseConfig);
  
  // var trainName = "";
  // var destination = "";
  // var firstTrainTime = "";
  // var frequency = "";

var dataBase = firebase.database();

// var firstConvertedTime = moment(firstTrainTime,"HH:MM")

//  onClick btn function 
$("#add-btn").on("click" ,function(event){

 event.preventDefault();

//  submits the user data
train = $("#train-name-input").val().trim();
destination = $("#destination-input").val().trim();
first = $("#start-input").val().trim(); 
frequency = $("#frequency-input").val().trim();

 // holds new info from submit
     var newRoute = {
      name:train,
      route:destination,
      start:first,
      howoften:frequency
  };
 
 // upload new train data to the database
 database.ref().push(newRoute);

    // Logs everything to console
 console.log(newRoute.name);
 console.log(newRoute.route);
 console.log(newRoute.start);
 console.log(newRoute.howoften);
 alert("Route successfully added");

 // Clears text boxes
 $("#train-name-input").val("");
 $("#destination-input").val("");
 $("#start-input").val("");
 $("#frequency-input").val("");
});

    // Uploads employee data to the database
      database.ref().on("child-added",function(childSnapshot){ 

       // store in a new var 
     var train = (childSnapshot.val().name);
     var destination = (childSnapshot.val().route);
     var first = (childSnapshot.val().start);
     var frequency = (childSnapshot.val().howoften);
  
      // Employee Info
       console.log(train);
       console.log(destination);
       console.log(first);
       console.log(frequency);
      });