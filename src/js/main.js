$(document).ready(function() {
    var $panel_cover = $('.panel-cover'),
        $panel_main = $('.panel-main'),
        top = $(".fixed-btn"),
        navbar_collapse = $("#btn-navbar-collapse"),
        SetPostsPosition = function(animate) {
            $panel_cover.addClass('col-md-4');
            if (animate) {
                $panel_main.addClass('smooth').css('width', '30%');
            } else {
                $panel_main.css('width', '30%');
            }
        }

    $('a.blog-button').click(function() {
        if (location.hash && location.hash == "#blog") return;
        if ($panel_cover.hasClass('panel-cover--collapsed')) return;
        $('.main-post-list').removeClass('hidden');
        if ($panel_cover.width() < 960) {
            $panel_cover.addClass('panel-cover--collapsed');
            $('.content-wrapper').addClass('animated slideInRight');
        } else {
            SetPostsPosition(true);
        }
    });

    if (window.location.hash && window.location.hash == "#blog") {
        SetPostsPosition();
        $('.main-post-list').removeClass('hidden');
    }

    if (window.location.pathname.substring(0, 5) == "/tag/") {
        SetPostsPosition();
    }

    //scroll to top
    $(window).scroll(function() {
        var $scrollTop = $(this).scrollTop();
        if (200 < $scrollTop) {
            top.fadeIn();
            navbar_collapse.addClass('invert');
        } else {
            top.fadeOut();
            navbar_collapse.removeClass('invert');
        }
    });

    //navbar click
    navbar_collapse.click(function() {
        slideout.toggle();
    });

    //add link _blank
    $(document.links).filter(function() {
        return this.hostname != window.location.hostname;
    }).attr({
        rel: 'nofollow',
        target: '_blank'
    });

    //slideout
    var slideout = new Slideout({
        'panel': document.getElementById('panel'),
        'menu': document.getElementById('menu'),
        'padding': 256,
        'tolerance': 70
    });

    //faskclick
    FastClick.attach(document.body);
});
