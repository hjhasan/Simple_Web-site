$(document).ready(function () {

    "use strict";
    $('#slider-carousel').carouFredSel({

        responsive: true,
        width: '100%',
        cirular: true,
        scroll: {
            items: 1,
            duration: 500,
            pauseOnHover: true
        },
        auto: true,
        items: {
            visible: {
                min: 1,
                max: 1
            },
            height: "variable"
        },
        pagination: {
            container: ".sliderpager",
            pageAnchourBuilder: false;
        }

    });



});