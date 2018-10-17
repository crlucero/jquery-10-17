$(document).ready(function() {
    $("#letterForm").submit(function() {
          var nameInput = $("input#name").val();
          var emailInput = $("input#email").val();
    
          $("#letterName").append(nameInput);
          $("#letterEmail").append(emailInput);
  
      $(".letter").show();
      event.preventDefault();
    });
  });