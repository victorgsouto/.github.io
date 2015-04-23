(function($) {
	"use strict";
    
    $(document).ready(function() {
        
    // Activate reveal animation when you scrolling
        var wow = new WOW ({
            animateClass: 'animated',
            offset:       0,
            mobile:		  false
        });
        wow.init();

        // Activate smoothscroll 
        try {
            $.browserSelector();

                // Adds window smooth scroll on chrome, opera.
                if($("html").hasClass("chrome" || "opera")) {
                   $.smoothScroll();
                }

        } catch(err) {}
    
        /* jQuery scrollTo function */
        $(function() {
                
            $('.other').click(function () {
                $.scrollTo('#downloads', 1000, {
                    easing:'easeInOutExpo',
                });
            return false;
            });
            
            $('.nav-feat').click(function () {
                 $.scrollTo('#features', 1000, {
                    easing:'easeInOutExpo',
                });
            $("#sidebar-navigation").removeClass("sliding");
            $(".main-background-overlay").removeClass("lefting");  
            $(".icon-bar").removeClass("icon-bar-white");
            return false;
            });
                
            $('.nav-acti').click(function () {
                $.scrollTo('#action', 1000, {
                    easing:'easeInOutExpo',
                });
            $("#sidebar-navigation").removeClass("sliding");
            $(".main-background-overlay").removeClass("lefting");  
            $(".icon-bar").removeClass("icon-bar-white");
            return false;
            });

            $('.nav-why').click(function () {
                $.scrollTo('#why', 1000, {
                    easing:'easeInOutExpo',
                });
            $("#sidebar-navigation").removeClass("sliding");
            $(".main-background-overlay").removeClass("lefting");  
            $(".icon-bar").removeClass("icon-bar-white");
            return false;
            });

            $('.nav-home, .navbar-logo').click(function () {
                $.scrollTo('#home', 1000, {
                    easing:'easeInOutExpo',
                });
            $("#sidebar-navigation").removeClass("sliding");
            $(".main-background-overlay").removeClass("lefting");  
            $(".icon-bar").removeClass("icon-bar-white");
            return false;
            });

            $('.nav-desc').click(function () {
                $.scrollTo('#describe', 1000, {
                    easing:'easeInOutExpo',
                });
            $("#sidebar-navigation").removeClass("sliding");
            $(".main-background-overlay").removeClass("lefting");  
            $(".icon-bar").removeClass("icon-bar-white");
            return false;
            });

            $('.nav-cont').click(function () {
                $.scrollTo('#contact', 1000, {
                    easing:'easeInOutExpo',
                });
            $("#sidebar-navigation").removeClass("sliding");
            $(".main-background-overlay").removeClass("lefting");  
            $(".icon-bar").removeClass("icon-bar-white");
            return false;
            });

            $('.nav-scre').click(function () {
                $.scrollTo('#screenshot', 1000, {
                    easing:'easeInOutExpo',
                });
            $("#sidebar-navigation").removeClass("sliding");
            $(".main-background-overlay").removeClass("lefting");  
            $(".icon-bar").removeClass("icon-bar-white");
            return false;
            });
                
            $('.nav-subs').click(function () {
                $.scrollTo('#subscribe', 1000, {
                    easing:'easeInOutExpo',
                });
            $("#sidebar-navigation").removeClass("sliding");
            $(".main-background-overlay").removeClass("lefting");  
            $(".icon-bar").removeClass("icon-bar-white");
            return false;
            });
            
            });
                
            // Start progress animation when whole page loading the contents.
            $('body').show();
            NProgress.inc(0.2)
            setTimeout(function() { NProgress.done(); $('.fade').removeClass('out');
                }, 0);
            $("#home .right-column").addClass("wow fadeInUp");
            
            // Activate stellar js to make parallax effect
            $(window).stellar();
            
            // Sliding color-switcher setting
            $("#gear").click(function() {
                $(".color-switcher").toggleClass("sliding");            
            });

            // Create carousel slider in div #testimonials
			$("#owl-container-testimonials").owlCarousel({
				autoPlay : 3000,
				navigation : true,
				slideSpeed : 300,
				paginationSpeed : 400,
				singleItem : true
			});

            // Create carousel slider in div #screenshot
			$("#owl-container-screenshot").owlCarousel({
				autoPlay: 2000,
				items : 4,
				itemsDesktop : [1199,3],
				itemsDesktopSmall : [979,3]
			});	
            
            // Success fade out
            $(".close").click(function() {
                $(".success-after").fadeOut("fast");
            });
        
            /* sidebar reveal */
            $(".navbar-toggle").click(function() {
                $("#sidebar-navigation").toggleClass("sliding");
                $(".main-background-overlay").toggleClass("lefting");
                $(".icon-bar").toggleClass("icon-bar-white");
            });
            
            $(".main-background-overlay").click(function() {
                $("#sidebar-navigation").removeClass("sliding");
                $(".main-background-overlay").removeClass("lefting");  
                $(".icon-bar").removeClass("icon-bar-white");
            });
			
            /* jQuery waypoint function */
            $(function() {
            
                // Reveal #top-navbar when scrolling
                $(".big-logo").waypoint(function(){
                    $("#top-navbar").css("-moz-transform", "translateY(-100%)");	
                    $("#top-navbar").css("-webkit-transform", "translateY(-100%)");	
                    $("#top-navbar").css("transform", "translateY(-100%)");	
                    $(".nav-home").addClass("nav-active");
                     $(".nav-feat").removeClass("nav-active"); 
                });

                // Adding and remove classes when scroll and click			
                $("#home").waypoint(function(){
                    $("#top-navbar").css("-moz-transform", "translateY(-100%)");	
                    $("#top-navbar").css("-webkit-transform", "translateY(-100%)");	
                    $("#top-navbar").css("transform", "translateY(-100%)");	
                    $(".nav-feat").removeClass("nav-active");    
                    $(".nav-home").addClass("nav-active");
                });

                // When you scroll to div #features-target, the top-navbar will reveal and add nav-active class to a .nav-feat
                $("#features").waypoint(function() {
                    $(".navbar-toggle").css("display", "block");
                    $(".nav-home").removeClass("nav-active");
                    $(".nav-acti").removeClass("nav-active");
                    $(".nav-why").removeClass("nav-active");
                    $(".nav-scre").removeClass("nav-active");
                    $(".nav-feat").addClass("nav-active");
                });
                
                

                $("#describe").waypoint(function(){
                    $(".nav-scre").removeClass("nav-active");
                    $(".nav-why").removeClass("nav-active");
                    $(".nav-cont").removeClass("nav-active");
                    $(".nav-desc").addClass("nav-active");
                    $(".nav-feat").removeClass("nav-active");		
                });

                $("#contact").waypoint(function(){
                    $(".nav-desc").removeClass("nav-active");
                    $(".nav-scre").removeClass("nav-active");
                    $(".nav-cont").addClass("nav-active");
                    $(".nav-feat").removeClass("nav-active");		
                });

                $("#screenshot").waypoint(function(){
                    $(".nav-desc").removeClass("nav-active");
                    $(".nav-cont").removeClass("nav-active");
                    $(".nav-subs").removeClass("nav-active");
                    $(".nav-scre").addClass("nav-active");
                    $(".nav-feat").removeClass("nav-active");		
                });

                
                
            });
		  
            // Screenshot lightbox
            $('.item a').nivoLightbox({

                effect: 'fadeScale', // The effect to use when showing the lightbox
                theme: 'default', // The lightbox theme to use
                keyboardNav: true, // Enable/Disable keyboard nav
                onInit: function(){},// Callback when lightbox has loaded
                beforeShowLightbox: function(){}, // Callback before shown
                afterShowLightbox: function(lightbox){},// Callback after shown
                beforeHideLightbox: function(){}, // Callback before hidden
                afterHideLightbox: function(){}, // Callback after hidden
                onPrev: function(element){}, // Callback when gallery goes to prev item
                onNext: function(element){}, // Callback when gallery goes to next 
                errorMessage: 'The requested content cannot be loaded. Please try again later.' // Error message when content can't be loaded

           });
        
    });
    
})(jQuery);