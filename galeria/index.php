<?php

defined( 'ABSPATH' ) || exit;

function mutelife_galeria_js() {
	wp_enqueue_script(
		'mutelife-galeria',
		plugins_url( 'block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'block.js' )
	);
}
add_action( 'enqueue_block_editor_assets', 'mutelife_galeria_js' );

function mutelife_galeria_css() {
	wp_enqueue_style(
		'mutelife-galeria',
		plugins_url( 'style.css', __FILE__ ),
		array( 'wp-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);
}
add_action( 'enqueue_block_assets', 'mutelife_galeria_css' );
