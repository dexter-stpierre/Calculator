console.log("js sourced");

//global variables
var operator;
var x;
var y;

$(document).ready(function(){
  console.log("jquery started");

  //program clear button
  $("#clear").on("click", "button", reset())

  //set operator
  $("#operations").on("click", "button", setOperators());

  //assign numbers in input fields to numbers array and send all the data to server
  $("#submit").on("click", "button", sendCalc())
  console.log("jquery fully loaded");
})

//define reset function
function reset(){
  operator = undefined;
  x = undefined;
  y = undefined;
  $("input").val("");
  $("#answer").empty();
}

//define operator button functions
function setOperators(){
  var currentButton = $(this);
  operator = currentButton.text();
  console.log("operator is " + operator);
}

//define calculations function
function sendCalc(){
  x = ($("#x").val());
  y = ($("#y").val());
  console.log("The numbers are " + x, y);
  console.log(x);
  console.log(y);
  console.log("The operator is " + operator);
  $.ajax({
    type: "POST",
    url: "/calculate",
    data: {
      x: x,
      y: y,
      type: operator
    },
    success: function(response){
      console.log(response.answer);
      $('#answer').empty().append(response.answer);
    }
  });
}
