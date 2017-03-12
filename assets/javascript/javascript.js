var database = firebase.database();

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyApKXu2Z0Vj-v4IPURB3i0ENtxN710C6Dg",
    authDomain: "traintimeproject.firebaseapp.com",
    databaseURL: "https://traintimeproject.firebaseio.com",
    storageBucket: "traintimeproject.appspot.com",
    messagingSenderId: "269248819663"
  };
  firebase.initializeApp(config);

  var trainname = "";
  var destination = "";
  var traintime = "";
  var frequency = 0;

  $("#addTrain").on("click", function(){
   	trainname = $("#trainNameInput").val().trim();
  	destination = $("#destinationInput").val().trim();
  	traintime = $("#trainTimeInput").val().trim();
  	frequency = $("#frequencyInput").val().trim();
  	
  	firebase.database().ref().set({
  		trainname:trainname,
  		destination:destination,
  		traintime:traintime,
  		frequency:frequency

  	});
  })

firebase.database().ref().on("value", function(snapshot){
	$("#counterDisplay").html(snapshot.val().name);
})
