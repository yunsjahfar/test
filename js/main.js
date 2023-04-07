   // box shadow navbar





   // // landing opacity on click search btn
   $(".search-input").on("click", function() {
       $(".overlay").css({ "opacity": ".9", "transition": ".4s ease-in" });
   });
   //reset the opacity overlay
   $(".overlay").on("click", function() {
       $(".overlay").css({ "opacity": ".7", "transition": ".4s ease-out" });
   });