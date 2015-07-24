(function($){
    /* trigger when page is ready */    
    $(document).ready(function() {
                
        // Single Page Website Controls        
        $('#fullpage').fullpage({ //FullPage.js
            resize: true,
			// navigation
            anchors: ['home', 'meetTheTeam', 'projects', 'contact'],
            
            // scrolling
            css3: true,
            // call-backs
            onLeave: function(index, nextIndex, direction){
                var leavingSection = $(this);

                // after leaving section
                $('nav li.selected').removeClass('selected');
            },            
            afterLoad: function(anchorLink, index){
                var loadedSection = $(this);
                //using index
                if(index == 2){
                    $('#mtt').addClass('selected');
                }
                if(index == 3){
                    $('#pro').addClass('selected');
                }
                if(index == 4){
                    $('#con').addClass('selected');
                }
            }
        }); // end fullpage()
        
        // Hidden Menu on Mobile
        $(function() { // How to Create a Responsive Navigation.
            var pull = $('#pull');
            menu = $('nav ul');
            menuHeight = menu.height();
 
            $(pull).on('click', function(e) {
                e.preventDefault();
                menu.slideToggle();
            });
            var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
            if( w < 601){
                $(pull).click();
            }
        }); // end hidden menu
        
        // FancyBox ( FancyBox- Fancy JQuery Lightbox Alternative )
        $('.fancybox').fancybox({
                padding : 0,
                openEffect  : 'elastic',
                helpers : {
                    overlay : {
                        css : {
                            'background' : 'rgba(68, 8, 143, 0.75)'
                        }
                    }
                },
                maxWidth : 992,
                maxHeight : 600,
                fitToView : false,
                width : '90%',
                height : '90%',
                autoSize : false,
                closeClick : false,
                scrolling : 'auto',
                closeEffect : 'elastic'
        }); // end FancyBox  

        // Elastic Image Slideshow with Thumbnail Preview ( Elastic Image Slideshow with Thumbnail Preview )
        $('#writing-slider, #programming-slider, #webdesign-slider').eislideshow({
            easing : 'easeOutExpo',
            titleeasing : 'easeOutExpo',
            titlespeed : 1200
        }); // end Elastic Image Slideshow with Thumbnail Preview
		
		// Tool-Tip Controls (McFarland, 2011)
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
    */
    $(window).resize(function() { // How to Create a Responsive Navigation.
        var w = $(window).width();
        if(w > 320 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
    

})(window.jQuery);