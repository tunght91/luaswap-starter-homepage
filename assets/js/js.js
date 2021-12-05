'use strict'

jQuery(document).ready(function ($) {
    $('.partner-box').slick({
        dots: true,
        rows: 2,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.nav-icon').on('click', function () {
        let element = $(this).closest('.nav-wrap').find('.navigation');
        if (element.hasClass('show')) {
            element.removeClass("show");
        } else {
            element.addClass("show");
        }

    })
    $('.is-child').on('click', function (e) {
        e.preventDefault();
        $(this).find('> ul').toggleClass('dropdown');
    })

    $('.project-box').slick({
        dots: true,
        rows: 1,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(document).mouseup(function (e) {
        var container = $(".navigation.show");
        var icon = $('.icon-mobile');

        // if the target of the click isn't the container nor a descendant of the container
        if (icon.is(e.target) === false && !container.is(e.target) && container.has(e.target).length === 0) {
            if (container.hasClass('show')) {
                container.removeClass("show");
            } else {
                container.addClass("show");
            }
        }
    });

    $("#subscribe-form").submit(function (event) {
        event.preventDefault(); //prevent default action 
        var post_url = $(this).attr("action"); //get form action url
        var form_data = $(this).serialize(); //Encode form elements for submission
        var loading = '<img src="assets/images/loading.svg" alt="loading">'
        $('#subscribe-form button').attr('disabled', 'disabled');
        $('#subscribe-form button').html(loading);
        $.post(post_url, form_data, function (response) {
            $('#subscribe-form button').removeAttr('disabled');
            $('#subscribe-form button').html('Subscribe');
            $(".result").html(response.message);
            $(".result").animate({
                display: 'block'
            }, 3000, "linear", function () {
                $(this).html('')
            });
        });
    });
});