$(document).ready(function() {
    $("#form").submit(function() {
          var name = $("input#name").val();
          var description = $("textarea#description").val();
          var date= $("input#date").val();
          var startTime = $("input#startTime").val();
          var endTime = $("input#endTime").val();
          var language = $("select#language").val();
        
          $("#nameOutput").append(name);
          $("#descriptionOutput").append(description);
          $("#languageOutput").append(language);
          $("#dateOutput").append(date);
          $("#startOutput").append(startTime);
          $("#endOutput").append(endTime);
          
  
      $("#details").fadeIn();
      event.preventDefault();
    });
  });