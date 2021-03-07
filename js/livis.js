;(function($) {

            //console.log( win.scrollTop());

    /**
     * 
     *  Menu Text Hover -> Toggle Color
     * 
     */
         var green = "rgb(71, 102, 103)",
              pink = "rgb(194, 130, 131)",
              menu = $('.menu').find('a');

            menu.css({ "color" : green });
            
            
            menu.mouseover( function() {
                if ( $(this).css("color") === pink ) { 
                    $(this).css({ "color" : pink }).mouseout( function() {
                        $(this).css({ "color" : pink });
                    });
                } else if ( $(this).css("color") === green ) {
                    $(this).css({ "color" : pink }).mouseout( function() {
                            $(this).css({ "color" : green });
                    });
                }


    });

    /**
     * 
     * Shift Box Gallery
     * 
     */
    var arrowLeft = $('.arrow-livis-left'),
        arrowRight = $('.arrow-livis-right');

        arrowRight.hide();

        arrowLeft.on('click', function(event){
            event.preventDefault();
            $('.gallery-set').css({'right':''});

            // Check Default Margin-Left
            var galleryLeftAfter = $('.gallery-set').offset().left;
                //console.log( galleryLeftAfter );

                $('.gallery-set').animate( { 'right' : 0 }, 3000);
                arrowLeft.delay(2700).fadeOut(800);
                arrowRight.delay(3500).fadeIn(800);

                arrowRight.on('click', function(event){
                    event.preventDefault();

                    // Check Value Margin-Left After Shift Gallery onto - Right: 0
                    var galleryLeft = $('.gallery-set').offset().left;
                        //console.log( galleryLeft );

                        $('.gallery-set').animate( { 'right' : (galleryLeft - galleryLeftAfter) }, 3000);
                            arrowRight.delay(2700).fadeOut(800);
                            arrowLeft.delay(3500).fadeIn(800);
                    
                        });
            });


    /*
     *
     * FadeIn First Wallpaper and Other Pictures
     * 
     */
    var cover = $('.back-image');
        cover.hide();
        setTimeout(function() { cover.fadeIn(1000); }, 500 );

    /*
     *
     * FadeIn Cards
     * 
     */
    var pfc = $('.position-first-card'),
        psc = $('.position-second-card'),
        ptc = $('.position-third-card');

        pfc.hide();
        psc.hide();
        ptc.hide();

        setTimeout(function() { pfc.fadeIn(2500); }, 1500 );
        setTimeout(function() { psc.fadeIn(2500); }, 800 );
        setTimeout(function() { ptc.fadeIn(2500); }, 2000 );

    
    /*
     *
     * Scrolling From Click BTN
     * 
     */
    var btn = $('.btn');

        btn.on('click', function(event) {
            event.preventDefault();
            $('html,body').animate( { scrollTop: $(this.hash).offset().top }, 2000 );
        });


    /*
     *
     * Scrolling Onto Section Of Page After Click On Select Menu Text
     *
     */
    var sectRef = $('.menu').find('.ref');

        sectRef.on('click', function(event) {
            event.preventDefault();
            $('html,body').animate({scrollTop: $('#references').offset().top + 90 }, 2000);
        });

    var section = $('.menu').find('.navbar, .about, .gall, .cont');

        section.on('click', function(event) {
            event.preventDefault();
            $('html,body').animate({scrollTop: $(this.hash).offset().top + 5 }, 2000);
        });

    

    /**
     * 
     * Animate Move UP and Down Top Menu Panel After Scrolling Page
     *  
     */ 
    var win = $(window),
       bgsc = $('.background-scroll');  

        win.scroll(function() {
            if ( win.scrollTop() <= 70 ) {
                bgsc.stop().animate( {'margin-top': '0'}, 150, 'linear' );
            } else if ( win.scrollTop() >= 70 ) {
                bgsc.stop().animate( {'margin-top': '-70'}, 150, 'swing' );
            };

        });


    /**
     * 
     * Back To Top ---> Show Arrow
     * 
     */
    var backToTop = $('<a>', {
                            href: '#home',
                            class: 'back-to-top',
                            html: '<i class="fa fa-caret-up fa-5x"></i>'
                            });

		backToTop.hide()
                 .appendTo('body')
                 .on('click', function() {
                    $('html,body').animate({ scrollTop: 0 }, 1000);
                 });
            
        // Show Arrow After Scrolling Some PX
			win.scroll( function() {
				if ( win.scrollTop() >= 450 ) {
                    backToTop.fadeIn();
                } else {
                    backToTop.hide();
                }
            });


    /**
     * 
     * Back To Top After Click To Logo
     * 
     */
    var logo = $('.logo');

        logo.on('click', function() {
            $('html,body').animate({ scrollTop: 0 }, 1000);
        });


    /**
     * 
     * Change Color Text Navigation with Scroll Page
     * 
     */
    var offset = 60,
           nav = $('#cover').offset().top - offset,
         about = $('#about_us').offset().top - offset, 
           ref = $('#references').offset().top - 30,
          gall = $('#gallery').offset().top - offset,
          cont = $('#contact').offset().top - offset;


        win.scroll( function() {
            if ( win.scrollTop() < nav ) { menu.css({"color":"#476667"}); };
            if ( win.scrollTop() >= nav ) { menu.css({"color":"#476667"}); $('.navbar').css({"color":"#c28283"}); }; 
            if ( win.scrollTop() >= about ) { menu.css({"color":"#476667"}); $('.about').css({"color":"#c28283"}); };
            if ( win.scrollTop() >= gall ) { menu.css({"color":"#476667"}); $('.gall').css({"color":"#c28283"}); };
            if ( win.scrollTop() >= ref ) { menu.css({"color":"#476667"}); $('.ref').css({"color":"#c28283"}); };
            if ( win.scrollTop() >= cont ) { menu.css({"color":"#476667"}); $('.cont').css({"color":"#c28283"}); };   
        });

    
    /**
     * 
     * Add Class After Click On Text Menu Nav
     * 
     */
    menu.removeClass('color-click');

    menu.on('click', function(event){
        event.preventDefault();
        $(this).addClass('color-click');
    }); 

                    
})(jQuery);