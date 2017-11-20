$(document).ready(function () {

    /*VARIABLES*/

    var nav = $('.navbar__menu--js');
    var icon = $('.js-nav-icon i');
    var b = $('body');

    var actions = {
        openMenu: function () {
            icon.removeClass('fa fa-bars');
            icon.addClass('fa fa-times');
            b.addClass('nav-open');
        },
        closeMenu: function () {
            b.removeClass('nav-open');
            icon.removeClass('fa fa-times');
            icon.addClass('fa fa-bars');
        }
    };

    /*MOBILE NAVIGATION*/

    $('.js-nav-icon').click(function (e) {
        e.stopPropagation();
        if (icon.hasClass('fa fa-bars')) {
            actions.openMenu();
        } else {
            actions.closeMenu();
        }
    });

    /*CLOSE MENU ON click*/

    $(b).click(function (e) {
        if (b.hasClass('nav-open')) {
            e.stopPropagation();
            actions.closeMenu();
        }
    });
    $(".menu-item").on('click', function (e) {
        e.stopPropagation();
    });

    /*BUTTON ANIMATION*/

    $(".iphone-btn").delay(2300).animate({
        bottom: "+=-3"
    }, 300);
    $(".iphone-btn").delay(300).animate({
        top: "+=-3"
    }, 100);
});




/********************************/


/* $(document).on("click", "ul:not('.menu-item')", function (e) {
       if (body.hasClass('nav-open')) {
           e.stopPropagation();
           e.preventDefault();
           body.removeClass('nav-open');
           icon.removeClass('fa fa-times');
           icon.addClass('fa fa-bars');
           console.log('you have clicked the body and closed ithe menu');
       }
   });*/


/********************************/



/*$(document).ready(function () {
    var actions = {
        toggleMenu: function () {
            $('body').addClass('nav-open');
            $('header').css("left", "-350px");
        },
        closeMenu: function () {
            $('body').removeClass('nav-open');
            $('header').css("left", "0px");
        }
    };

    $('body').on('click', '[data-action]', function () {
        var action = $(this).data('action');
        if (action in actions) {
            actions[action].apply(this, arguments);
        }
    });

    $('html').on('touchstart', 'body.nav-open', function (e) {
        if (!$(e.target).is('a')) {
            actions.closeMenu();
        }
    });

    $('html').on('click', 'body.nav-open', function (e) {
        if (!$(e.target).is('a')) {
            actions.closeMenu();
        }
    });
});*/


/********************************/


/*$(function () {
    var header = $('header');
    $(window).scroll(function () {
        if ($(window).scrollTop() <= 125) {
            header.css({
                'top': '0px'
            });
        } else {
            header.css({
                'top': '-125px'
            });
        }
    });

});*/
