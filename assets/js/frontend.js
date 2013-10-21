/**
 * frontend.js
 *
 * @author Your Inspiration Themes
 * @package YITH WooCommerce Zoom Magnifier
 * @version 1.0.7
 */
jQuery(document).ready(function($){

    var yith_wcmg = $('.images');
    var yith_wcmg_zoom  = $('.yith_magnifier_zoom');
    var yith_wcmg_image = $('.yith_magnifier_zoom img');

    var yith_wcmg_default_zoom = yith_wcmg.find('.yith_magnifier_zoom').attr('href');
    var yith_wcmg_default_image = yith_wcmg.find('.yith_magnifier_zoom img').attr('src');

    yith_wcmg.yith_magnifier(yith_magnifier_options);

    $( document ).on( 'found_variation', 'form.variations_form', function( event, variation ) {
        var image_magnifier = variation.image_magnifier ? variation.image_magnifier : yith_wcmg_default_zoom;
        var image_src       = variation.image_src ? variation.image_src : yith_wcmg_default_image;

        yith_wcmg_zoom.attr('href', image_magnifier);
        yith_wcmg_image.attr('src', image_src);

        if( yith_wcmg.data('yith_magnifier') ) {
            yith_wcmg.yith_magnifier('destroy');
        }

        yith_wcmg.yith_magnifier(yith_magnifier_options);
    }).on( 'reset_image', function( event ) {
            yith_wcmg_zoom.attr('href', yith_wcmg_default_zoom);
            //yith_wcmg_image.attr('src', yith_wcmg_default_image);

            if( yith_wcmg.data('yith_magnifier') ) {
                yith_wcmg.yith_magnifier('destroy');
            }

            yith_wcmg.yith_magnifier(yith_magnifier_options);
        })

    $( 'form.variations_form .variations select').trigger('change');
});

