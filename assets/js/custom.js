
/*
    Author: tiago.graf@gmail.com
*/

(function ($) {
    "use strict";
    var mainApp = {

        scroll_fun: function () {
            /* SCROLL SCRIPTS */
            $(function () {
                $('.move-me a').bind('click', function (event) { 
                    //just pass move-me in design and start scrolling
                    var $anchor = $(this);
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top - 30
                    }, 1000, 'easeInOutQuad');
                    event.preventDefault();
                });
            });
        },
        
        gallery_fun: function () {
            /* FOR IMAGE/GALLERY POPUP */
            $("a.preview").prettyPhoto({
                social_tools: false
            });

            /* FOR IMAGE/GALLERY FILTER */
            $('#port-folio').mixitup({
                targetSelector: '.portfolio-item',
                filterSelector: '.filter',
            });
        },

        vedio_fun:function()
        {
            /* FOR VIDEO PLAYER*/
            $(function () {
                $(".player").mb_YTPlayer();
            });
        },

        nice_scroll_fun:function()
        {
            /* FOR CUSTOM SCROLL */
            $("html").niceScroll();
        },

        custom_fun:function()
        {

        },
    }
   
    $(document).ready(function () {
        mainApp.scroll_fun();
        mainApp.gallery_fun();
        mainApp.vedio_fun();
        mainApp.nice_scroll_fun();
        mainApp.custom_fun();
    });
}(jQuery));


