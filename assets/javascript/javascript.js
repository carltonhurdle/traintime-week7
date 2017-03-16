

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyApKXu2Z0Vj-v4IPURB3i0ENtxN710C6Dg",
    authDomain: "traintimeproject.firebaseapp.com",
    databaseURL: "https://traintimeproject.firebaseio.com",
    storageBucket: "traintimeproject.appspot.com",
    messagingSenderId: "269248819663"
  };
  firebase.initializeApp(config);
//A variable for the firebase database
  var database = firebase.database();
//Creating the variables we will need to store the data in our form
  var trainname = "";
  var destination = "";
  var traintime = "03:30";
  var frequency = 0;


//function that collects the data and sends it to firebase
  $("#addTrain").on("click", function(event){

    event.preventDefault();
   	trainname = $("#trainNameInput").val().trim();
  	destination = $("#destinationInput").val().trim();
  	traintime = $("#trainTimeInput").val().trim();
  	frequency = $("#frequencyInput").val().trim();
  	
  	database.ref().set({
  		trainname:trainname,
  		destination:destination,
  		traintime:traintime,
  		frequency:frequency

  	});
  })

//firebase listener to change the display on the train area well
  database.ref().on("value", function(snapshot){
	//$("#counterDisplay").html(snapshot.val().name);
  var data = snapshot.val();
  console.log(data);

  $("#trainNameDisplay").append(data.trainname);
  $("#destinationDisplay").append(data.destination);
  $("#frequencyDisplay").append(data.frequency);
  $("nextArrivalDisplay").append(data.traintime);
//  $("minutesAwayDisplay").append("null");
//  $(".well").append('<br>');
//  $(".well").append(data.frequency);

     
     
     
     
     
                       

//Displays it in the well in one data dump, for testing
/* $(".well").append(data.traintime);
  $(".well").append('<br>');
  $(".well").append(data.trainname);
  $(".well").append('<br>');
  $(".well").append(data.destination);
  $(".well").append('<br>');
  $(".well").append(data.frequency);
*/

  // TO WORK ON:
  // Look into push method for firebase vs set
  // Remember which data which want to end up showing on the page
  // Remember to reference train-example for said logic
  // Ideally, format the html inside of the well as a Table

})
