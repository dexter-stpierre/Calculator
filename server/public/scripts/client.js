console.log("js sourced");
var numbers = [];
var operator;
$(document).ready(function(){
  $("#operations").on("click", "button", function(){
    var currentButton = $(this);
    numbers.push($("#x").val());
    numbers.push($("#y").val());
    console.log(numbers);
    operator = currentButton.text();
    console.log(operator);
  })

})
