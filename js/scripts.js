var toBeepBoop = function(int,string) { //number and name parameter
  var range = [];      //initialize empty array
  var name = string;  //initialize the user name.
  for (var i = 0; i<=int; i++){  // loop to fill the array with corresponding ints
    range[i] = i;
  }
  for(var j = 0; j<=int; j++ ) { //loop through all elements
    if ((range[j] != 0) && (range[j] % 3 == 0)){  //if divisible by 3 and is not 0
      range[j] = "I'm sorry " + name + " I'm afraid I can't do that."; //overrides the element if true
    }
    for (index = 0; index <= range[j].toString().length; index++){ //loops through all the element characters, .toString is used because range[] have all integral elements, and can't be checked by charAt()
      if (range[j].toString().charAt(index).match("1")) { //if any char matches "1", override the element
        range[j]="Boop";
      } else if (range[j].toString().charAt(index).match("0")) { //if any char matches "0", override the element
        range[j]="Beep";
      }
    }
  }
  var result = range.join(", "); // joins array into string to read easier
  return result;  //print modified result
};

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var name = $("#nameInput").val();
    var number = parseInt($("#numberInput").val());
    var numberArray = toBeepBoop(number,name);
    var reversed = numberArray.split(", ").reverse().join(", ") //.split() is used to split the result string into arrays again, so that it can be used with .reverse(). then finally joins the array back to string after reversing
    $("#originalResult").text(numberArray);
    $("#reversedResult").text(reversed);
    $("#original").show()
    $("#reversed").hide() //hides the reversed result if user inputs a new number or converts again.
  });
});
