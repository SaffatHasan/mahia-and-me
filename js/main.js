
(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

    
    
    /*==================================================================
    [ Simple slide100 ]*/

    $('.simpleslide100').each(function(){
        var delay = 7000;
        var speed = 1000;
        var backgroundImages = $(this).find('.simpleslide100-item');
        var currentIndex = 0;

        $(backgroundImages).hide();
        $(backgroundImages[currentIndex]).show();
        console.log(`${window.innerWidth}`);

        $('.simpleslide100-item').each(() => console.log(`${backgroundImages[currentIndex].offsetWidth}`));

        setInterval(function(){
            // Increment
            currentIndex = (currentIndex + 1) % backgroundImages.length;
            
            // Skip images too big for current window
            // TODO: This is an infinite loop when window.Width < slide.Width for all slides
            // TODO: $(...).clientWidth is always null / 0
            while (window.innerWidth < $(backgroundImages[currentIndex]).clientWidth) {
                currentIndex = (currentIndex + 1) % backgroundImages.length;
            }



            $(backgroundImages).fadeOut(speed);
            $(backgroundImages[currentIndex]).fadeIn(speed);
            console.log(`${window.innerWidth}`);
            console.log(`${backgroundImages[currentIndex].offsetWidth}`);

        },delay);
    });


})(jQuery);