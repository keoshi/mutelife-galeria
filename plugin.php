<?php

/**
 * Plugin Name: mutelife Galeria
 * Plugin URI: https://mutelife.com/
 * Description: Automatically generate beautiful galleries with Gutenberg blocks!
 * Version: 2.0
 * Author: Filipe Varela
 * Author URI: https://keoshi.com/
 *
 * @package mutelife-galeria
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
