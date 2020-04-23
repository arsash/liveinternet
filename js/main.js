$(document).ready(function (){

    $('.hamburger').on('click', () => {
        $('.hamburger__nav').toggleClass('hamburger__nav--active');

        $('header').toggleClass('header-active');
    })

});