(function($){
    /* trigger when page is ready */    
    $(document).ready(function() {
		
		// FancyBox ( FancyBox- Fancy JQuery Lightbox Alternative )
		$(".fancybox").fancybox({
		    maxWidth	: 992,
		    maxHeight	: 600,
		    fitToView	: false,
		    width		: '90%',
		    height		: '90%',
		    autoSize	: false,
		    closeClick	: false,
		    openEffect	: 'none',
		    closeEffect	: 'none',
			helpers : {
    		    title : {
    			    type : 'over'
    		    }
    	    }
	    });
		
		// Elastic Slider ( Elastislide - A Responsive JQuery Carousel Plugin )
		$( '#carousel' ).elastislide( {
				orientation : 'horizontal',
				minItems : 3
	    } );
		
		// Tool-Tip Controls ( McFarland, 2011 )
        $('body').on('mouseover', '.trigger',function(){
            var ttLeft,
                ttTop,
                $this=$(this),
                $tip = $($this.attr('data-tooltip')),
                triggerPos = $this.offset(),
                triggerH = $this.outerHeight(),
                triggerW = $this.outerWidth(),
                tipW = $tip.outerWidth(),
                tipH = $tip.outerHeight(),
                screenW = $(window).width(),
                scrollTop = $(document).scrollTop();
            if(triggerPos.top - tipH - scrollTop > 0){
                ttTop = triggerPos.top - tipH -10;
            } else {
                ttTop = triggerPos.top + triggerH + 10;
            }
            var overFlowRight = (triggerPos.left + tipW) - screenW;
            if(overFlowRight > 0){
                ttLeft = triggerPos.left - overFlowRight - 10;
            } else {
                ttLeft = triggerPos.left;
            }
            $tip.css({
                left : ttLeft ,
                top : ttTop,
                position: 'absolute'
            }).fadeIn(0);
        }); // end Tool-Tip Controls (McFarland, 2011)
    
        $('body').on('mouseout', '.trigger', function(){
            $('.tooltip').fadeOut(0);
        }); // end on()
    }); // end ready()
    
    /* optional triggers
    $(window).load(function() {

    });

    $(window).resize(function() {
    
    });
    */    

})(window.jQuery);