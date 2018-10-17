$(document).ready(function() {
    $("#form").submit(function() {
          var name = $("input#name").val();
          var number = $("input#number").val();
          var email = $("input#email").val();
          var address = $("input#address").val();
          
        
          $("#nameOutput").text(name);
          $("#numberOutput").text(number);
          $("#emailOutput").text(email);
          $("#addressOutput").text(address);

         
        $(".output").append(`<ul class="contact"> ${name} </ul>`);
        $(".output").children("ul").last().append(`<li>${number}</li> <li>${email}</li> <li>${address}</li>`);
        
        $("ul.contact").click(function() {
            $(this).children("li").toggleClass("opened");
          });
          
        
      event.preventDefault();
    });
  });