<?php
/**
 * Plugin Name:       mutelife Galeria
 * Plugin URI:        https://mutelife.com/
 * Description:       Automatically generate beautiful galleries with Gutenberg blocks!
 * Version:           3.0.0
 * Requires at least: 6.8
 * Requires PHP:      7.4
 * Author:            Filipe Varela
 * Author URI:        https://keoshi.com/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       mutelife-galeria
 *
 * @package mutelife-galeria
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mutelife_galeria_block_init() {
	wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
}
add_action( 'init', 'mutelife_galeria_block_init' );
