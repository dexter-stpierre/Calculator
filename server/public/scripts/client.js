console.log("js sourced");

//global variables
var operator;
var x;
var y;
var x1 = "";
var y1 = "";


$(document).ready(function(){
  console.log("jquery started");
  //turns on the x variable
  xOn();
  //program clear button
  $("#clear").on("click", "button", function(){
    reset()
  })

  //set operator
  $("#operations").on("click", "button", function(){
    var currentButton = $(this);
    operator = currentButton.text();
    console.log("operator is " + operator);
    //assign the
    x = x1;
    $(".x").off("click");
    $(".number").removeClass("x");
    x1 = "";
    $(".number").addClass("y");
    y1 = "";
    console.log(x);
    yOn();
    $("#answer").text(x + operator);
  });

  //assign numbers in input fields to numbers array and send all the data to server
  $("#submit").on("click", "button", function(){
    sendCalc()
    y = y1;
    y1 = "";
    x1 = "";
  })
  console.log("jquery fully loaded");
})

//define reset function
function reset(){
  operator = "";
  x = "";
  y = "";
  $("input").val("0");
  $("#answer").empty();
  $("#answer").text("0");
  $(".y").off("click");
  $(".number").removeClass("y");
  $(".number").addClass("x");
  xOn();
}

//define calculations function
function sendCalc(){
  //y = y1;
  x = ($("#x").val()) || x;
  y = ($("#y").val()) || y1;
  console.log("The numbers are " + x, y);
  console.log(x);
  console.log(y);
  console.log("The operator is " + operator);
  $("#answer").text("computing...");
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
      setTimeout(function(){$('#answer').empty().append(response.answer);}, 3000);
      y1 = "";
      x1 = "";
      y = "";
      x = "";
    }
  });
}


function yOn(){
  $(".y").on("click", "button", function(){
    y1 = y1 + $(this).text();
    $("#answer").text(x + operator + y1);
    console.log(y1);
  })
}

//turn on var x listener
function xOn(){
  $(".x").on("click", "button", function(){
    x1 = x1 + $(this).text();
    $("#answer").text(x1);
    console.log(x1);
});
}
