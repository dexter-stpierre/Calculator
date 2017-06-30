console.log("js sourced");
var numbers = [];
$(document).ready(function(){
  $("#operations").on("click", "button", function(){
    numbers.push($("#x").val());
    numbers.push($("#y").val());
    console.log(numbers);
  })

})
