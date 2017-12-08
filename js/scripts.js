var toBeepBoop = function(int,string) {
  var range = [];
  var name = string;
  for (var i = 0; i<=int; i++){
    range[i] = i;
  }
  console.log(range)
  for(var index = 0; index<=int; index++ ) {
    if ((range[index] != 0) && (range[index] % 3 == 0)){
      range[index] = "I'm sorry " + name + " I'm afraid I can't do that.";
    }
    for (index = 0; index <= range[index].toString().length; index++){
      if (range[index].toString().charAt(index).match("1")) {
        range[index]="Boop";
      } else if (range[index].toString().charAt(index).match("0")) {
        range[index]="Beep";
      }
    }



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
