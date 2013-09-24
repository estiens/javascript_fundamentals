// Exercises: Arrays

// EXERCISE: Your top choices

// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

var colorArray = [];
var arraySuffix = [];

colorArray[0] = "Blue";
colorArray[1] = "Red";
colorArray[2] = "Green";

arraySuffix[0] = "st";
arraySuffix[1] = "nd";
arraySuffix[2] = "rd";

for (i=0; i < 3; i++)
  console.log("My " + (i+1) + arraySuffix[i] + " choice is " + colorArray[i]);

