var toBeepBoop = function(int) {
  var range = [];
  for(var i = 0; i<=int; i++ ) {
    range[i]=i.toString();
  }

  return range;

};




$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#numberInput").val());


    var numberArray = toBeepBoop(number);
    $("#result").text(numberArray);

  });
});
