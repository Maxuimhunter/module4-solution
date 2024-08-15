// ******************************* 
// START HERE IF YOU WANT AN EASIER STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
(function () {

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
  // Loop over the names array and say either 'Hello' or "Good Bye"
  for (var i = 0; i < names.length; i++) {
  
    // Retrieve the first letter of the current name
    var firstLetter = names[i].charAt(0).toLowerCase();
  
    // Compare the 'firstLetter' to lower case 'j'
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
  
  })();
  