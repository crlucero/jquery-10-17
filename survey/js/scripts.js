$(document).ready(function() {
    $("#form").submit(function() {
          var music = $("select#music").val();
          var flavor = $("input:radio[name=flavor]:checked").val();
          var dob = $("#born").val();
          var favoriteColor = $("#color").val();

        
          $("#musicOutput").append(music);
          $("flavorOutput").append(flavor);
          $("dobOutput").append(dob);
          $("favoriteColorOutput").append(favoriteColor);
          
  
      event.preventDefault();
    });
  });