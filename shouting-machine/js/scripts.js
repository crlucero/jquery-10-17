$(document).ready(function() {
    $("#inputText").submit(function() {
          var textInput = $("input#message").val();
            var upperCase = textInput.toUpperCase();
    
          $("#shoutBack").append(upperCase);
  
      $("#shoutBack").show();
      event.preventDefault();
    });
  });