/*---------------------------------------------------------------------
           THE COFFEE SHOP PROJECT WEBSITE SCRIPT 
---------------------------------------------------------------------
*/

/*---------------------------------------------------------------------
          Animated header 
---------------------------------------------------------------------
*/


$('.ml9 .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
}); 
           
           
           
           
anime.timeline({loop: true})
  .add({
    targets: '.ml9 .letter ',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: function(el, i) {
      return 45 * (i+1)
    }
    
  })
    .add({
    targets: '.ml9',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
    
  });


/*---------------------------------------------------------------------
                        MOBILE DEVICES MENU SCRIPTS
---------------------------------------------------------------------*/










    $("span.navBtn").click(function() {

        $("#mainMenu").slideToggle();
    });

     $("#mainMenu li").click(function(){
        
        if ( $(window).width() < 1024 ) {
        $("span.navBtn").click();
        }
    });


    $(window).resize(function() {

        if ( $(window).width() >= 1024 ) {

            $("#mainMenu").removeAttr("style");
        }
    });

   

/*---------------------------------------------------------------------
    SMOOTH SCROLLING OF ALL LINKS  --  deactivated to use HTML5's smooth scrolling feature 
---------------------------------------------------------------------*/

//$(function() {
//        $('.navC a, .actionB a, .logoC a, .viewCart a, productsBtn a').bind('click', function(event) {
//            var $anchor = $(this);
//            $('html, body').stop().animate({
//                scrollTop: $($anchor.attr('href')).offset().top - 100
//            }, 1000);
//            event.preventDefault();
//        });
//    });


/*---------------------------------------------------------------------
                        THE MODAL SCRIPT
---------------------------------------------------------------------*/

        // Get the modal
        var theModal = document.getElementById('myModal');

        // Get the button that opens the modal

        var modalButton = document.getElementById("register");

        modalButton.addEventListener("click", openModel, false);

        function openModel() {

            theModal.style.display = "block";
        }


        // Get the <span> element that closes the modal
        var theClose = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        theClose.onclick = function() {
            theModal.style.display = "none";
        }


        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == theModal) {
                theModal.style.display = "none";
            }
        }

        
 

/*---------------------------------------------------------------------
                        GOOGLE MAP SCRIPT 51.440027799999996, 0.0351658
---------------------------------------------------------------------*/
        
 function initMap() {
    
        // Creating a new variable to hold my lat and lng
          var officeLocation = {lat: 51.440027799999996, lng: 0.0351658};
    
        // Create a map object and specify the DOM element for display.
          map = new google.maps.Map(document.getElementById("map"), {
          center: officeLocation,
          scrollwheel : false,
          zoom: 16
        });
          var marker = new google.maps.Marker({
          position: officeLocation,
          map: map,
          title: 'Find us here!'
        });
    
          var popupAddress = "The Vintage Apparel Company, 2nd Floor<br />";
              popupAddress += "St. Clare House<br />";
              popupAddress += "30-33 Minories<br />";
              popupAddress += "London EC3N 1DD<br />";
          
              
          var infowindow = new google.maps.InfoWindow({
          content: popupAddress,
          maxWidth: 300
        });
          marker.addListener('click', function() {
          infowindow.open(map, marker);
        });

      }    

            



/*---------------------------------------------------------------------
                        THE PARALLAX JS CODE
---------------------------------------------------------------------*/

//The Parallax JS code

/*Let's take a step by step look at exactly what's going on here.

1. We first find all our sections with a class of .parallax.
2. We then set our speed as a fraction between 0 and 1. In this case, I used 0.5.
3. On scroll, we loop through each of our parallax sections, finding the y offset of the window.
4. We then adjust the background-position property of our parallax section accordingly, based on our speed fraction.
5. The position of our background image is now updated each time a scroll occurs, giving the impression that it is scrolling at a slower speed than the foreground elements.*/

(function(){

  var myParallax = document.querySelectorAll(".homeBgImage"), speed = 0.3;

  window.onscroll = function(){
    myParallax.forEach(function(elP){

      var windowYOffset = - window.pageYOffset,
          elPBackgrounPos = "50% " + (windowYOffset * speed) + "px";

          elP.style.backgroundPosition = elPBackgrounPos;
    });

  };

})();



/*---------------------------------------------------------------------
                        DRAG AND DROP SCRIPT
---------------------------------------------------------------------*/

