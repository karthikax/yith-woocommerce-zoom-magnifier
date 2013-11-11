<?php
/**
 * Functions
 *
 * @author Your Inspiration Themes
 * @package YITH WooCommerce Zoom Magnifier
 * @version 1.0.8
 */

if ( !defined( 'YITH_WCMG' ) ) { exit; } // Exit if accessed directly

if( !function_exists( 'yith_wcmg_is_enabled' ) ) {
    /**
     * Locate the templates and return the path of the file found
     *
     * @param string $path
     * @param array $var
     * @return void
     * @since 1.0.0
     */
    function yith_wcmg_is_enabled() {
    	return get_option('yith_wcmg_enable_plugin') == 'yes';
	}
}

if( !function_exists( 'yit_shop_single_w' ) ) {
    /**
     * Return the shop_single image width
     *
     * @return integer
     * @since 1.0.0
     */
    function yit_shop_single_w() {
        global $woocommerce;
        $size = $woocommerce->get_image_size('shop_single');
        return $size['width'];
    }
}

if( !function_exists( 'yit_shop_thumbnail_w' ) ) {
    /**
     * Return the shop_thumbnail image width
     *
     * @return integer
     * @since 1.0.0
     */
    function yit_shop_thumbnail_w() {
        global $woocommerce;
        $size = $woocommerce->get_image_size('shop_thumbnail');
        return $size['width'];
    }
}
