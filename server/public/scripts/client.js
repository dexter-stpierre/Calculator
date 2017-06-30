console.log("js sourced");
var numbers = [];
var operator;
$(document).ready(function(){
  console.log("jquery started");
  $("#operations").on("click", "button", function(){
    var currentButton = $(this);
    operator = currentButton.text();
    console.log("operator is " + operator);
  });
  $("#submit").on("click", "button", function(){
    numbers[0] = ($("#x").val());
    numbers[1] = ($("#y").val());
    console.log("The numbers are " + numbers);
    console.log("The operator is " + operator);
  })
  console.log("jquery fully loaded");
})
