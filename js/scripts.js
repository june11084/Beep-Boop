var toBeepBoop = function(int,string) {
  var range = [];
  var name = string;
  for (var i = 0; i<=int; i++){
    range[i] = i;
  }
  console.log(range)
  for(var j = 0; j<=int; j++ ) {
    if ((range[j] != 0) && (range[j] % 3 == 0)){
      range[j] = "I'm sorry " + name + " I'm afraid I can't do that.";
    }
    for (index = 0; index <= range[j].toString().length; index++){
      if (range[j].toString().charAt(index).match("1")) {
        range[j]="Boop";
      } else if (range[j].toString().charAt(index).match("0")) {
        range[j]="Beep";
      }
    }
  }
  var result = range.join(", ");
  return result;
};

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var name = $("#nameInput").val();
    var number = parseInt($("#numberInput").val());
    var numberArray = toBeepBoop(number,name);
    var reversed = numberArray.split(", ").reverse().join(", ")
    $("#originalResult").text(numberArray);
    $("#reversedResult").text(reversed);
    $("#original").show()
    $("#reversed").hide()
  });
});
