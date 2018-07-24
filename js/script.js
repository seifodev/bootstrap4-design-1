$(function () {
    
    // Fadeout loading spinner after page loads
    $(window).on('load', function () {
        $('.loading-spinner').delay(1000).fadeOut(1000);
    });
    
    
    // Bootstrap Scrollspy

    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 70});
    
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this).scrollspy('refresh')
    });

    // Add smooth scrolling on all links inside the navbar
    $(".navbar a").on('click', function(event) {
        
        event.preventDefault();

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top - 69
        }, 800, function(){

        });

      } // End if

    }); 
    
    
    // Counter up
    $('.counter').counterUp({
        delay: 20
    });
    
    // Trigger Owlcarousel
    
    // # app-carousel options
    $('#app-carousel').owlCarousel({
        loop:true,
        margin:20,
        responsiveClass:true,
        nav:false,
        autoPlay: 3000,
        dotsEach: true,
        autoplay: true,
        responsive:{
            0:{
                dots: true,
                items:1,
            },
            768:{
                dots: true,
                items:3,
            },
            992:{
                dots: true,
                items:5,
            }
        }
    });
    
    
    // # testi-carousel options
    $('#testi-carousel').owlCarousel({
        loop:true,
        margin:20,
        responsiveClass:true,
        nav:false,
        autoPlay: 3000,
        dots: true,
        dotsEach: true,
        autoplay: true,
        responsive:{
            0:{
                dots: true,
                items:1,
            },
            992:{
                dots: true,
                items:2,
            }
        }
    });
    
    
    // AOS scroll animate elements
    AOS.init({
        duration: 600
    });
    
    /* recalculate all offsets and positions of elements  */
    onElementHeightChange(document.body, function(){
        AOS.refresh();
    });
    
    
    // Youtube Video Modal
    // Gets the video src from the data-src on each button
    var $videoSrc;  
    $('.video-btn').click(function() {
        $videoSrc = $(this).data( "src" );
    });
    console.log($videoSrc);



    // when the modal is opened autoplay it  
    $('#videoModal').on('shown.bs.modal', function (e) {

    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr('src',$videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1" ); 
    })


    // stop playing the youtube video when I close the modal
    $('#videoModal').on('hide.bs.modal', function (e) {
        // a poor man's stop video
        $("#video").attr('src',$videoSrc); 
    }) 
    
    
});

// a helper function to watch for a height change to fix AOS breaks on window resize
function onElementHeightChange(elm, callback) {
    var lastHeight = elm.clientHeight
    var newHeight;

    (function run() {
        newHeight = elm.clientHeight;      
        if (lastHeight !== newHeight) callback();
        lastHeight = newHeight;

        if (elm.onElementHeightChangeTimer) {
            clearTimeout(elm.onElementHeightChangeTimer); 
        }

        elm.onElementHeightChangeTimer = setTimeout(run, 200);
    })();
}
