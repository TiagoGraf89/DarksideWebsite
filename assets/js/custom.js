(function ($) {
    "use strict";
    var mainApp = {

        bindPageScroll: function () {
            $(function () {
                $('.scroll a').bind('click', function (event) { 
                    // smooth scroll on anchors
                    var $anchor = $(this);

                    $('.navbar-collapse').removeAttr('style');
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top - 30
                    }, 1000, 'easeInOutQuad');

                    // prevent default anchor behavior
                    event.preventDefault();
                });
            });
        },
        
        setVideoPlayer:function()
        {
            $(function () {
                // video data is set in the view
                $(".player").mb_YTPlayer();
            });
        },

        setSlider: function()
        {
            $(function() {
                $("#lightSlider").lightSlider({
                    keyPress:false,
                    item:2,
                    loop:true,
                }); 
            });
        },
    }
   
    $(document).ready(function () {
        mainApp.bindPageScroll();
        mainApp.setVideoPlayer();
        mainApp.setSlider();
    });
}(jQuery));


