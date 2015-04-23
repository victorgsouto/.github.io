(function($) {
	"use strict";
    
    $(document).ready(function() {
		$('form#contact-form').submit(function() {
			var hasError = false;
            
			if(!hasError) {
				var formInput = $(this).serialize();
				$.post($(this).attr('action'),formInput, function(data){
					$('.success').addClass('success-after');
				}); 
			}
			
			return false;	
		});

		$('form#subscribe').submit(function() {
			var hasError = false;
            
			if(!hasError) {
				var formInput = $(this).serialize();
				$.post($(this).attr('action'),formInput, function(data){
                    $('.email, .subscribe').css("opacity", "0");
					$('.subscribe-success').addClass('subscribe-success-after');
				}); 
			}
			
			return false;	
		});
        
	});
    
})(jQuery);