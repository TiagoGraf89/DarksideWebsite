(function ($) {
    "use strict";
    var mainApp = {

        bindPageScroll: function () {
            $(function () {
                $('.scroll a').bind('click', function (event) { 
                    // smooth scroll on anchors
                    var $anchor = $(this);

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
    }
   
    $(document).ready(function () {
        mainApp.bindPageScroll();
        mainApp.setVideoPlayer();
    });
}(jQuery));


