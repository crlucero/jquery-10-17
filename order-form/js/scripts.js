$(document).ready(function() {
    $("#form").submit(function() {
          var name = $("input#name").val();
          var address = $("textarea#address").val();
          var quantity = parseInt($("input:radio[name=quantity]:checked").val());
          var type = $("select#type").val();
          var total = quantity * 10;
        
          $("#nameOutput").text(name);
          $("#addressOutput").text(address);
          $("#quantityOutput").text(quantity);
          $("#typeOutput").text(type);
          $("#totalOutput").text(total);
          
  
      $("#details").fadeIn();
      event.preventDefault();
    });
  });