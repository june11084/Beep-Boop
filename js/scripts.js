var toBeepBoop = function(int,string) {
  var range = [];
  var name = string;
  for(var i = 0; i<=int; i++ ) {
    if ((i != 0) && (i % 3 == 0)){
      range[i] = "I'm sorry " + name + " I'm afraid I can't do that.";
    }
    for (index = 0; index <= range[i].toString().length; index++)



  }

  return range;
  return name;

};




$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var name = $("#nameInput").val();
    var number = parseInt($("#numberInput").val());


    var numberArray = toBeepBoop(number,name);
    $("#result").text(numberArray);

  });
});
