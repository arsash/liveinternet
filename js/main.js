$(document).ready(function (){

    $('.hamburger').on('click', () => {
        $('.hamburger__nav').toggleClass('hamburger__nav--active');
        $('header').toggleClass('header-active');
    });

    $('.country').hover(function () {
            $('.country__dropdown').css({ 'display' : 'flex' })
        }, function () {
            $('.country__dropdown').css({ 'display' : 'none' })
        }
    );

    $('.all-regions').hover(function () {
        $('.all-regions__dropdown').css({ 'display' : 'flex' })
    }, function () {
        $('.all-regions__dropdown').css({ 'display' : 'none' })
    });

    $('.category').hover(function () {
        $('.category__dropdown').css({ 'display' : 'flex' })
    }, function () {
        $('.category__dropdown').css({ 'display' : 'none' })
    });

});