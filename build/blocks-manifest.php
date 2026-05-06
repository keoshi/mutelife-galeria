<?php
// This file is generated. Do not modify it manually.
return array(
	'mutelife-galeria' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'mutelife/galeria',
		'version' => '3.0.0',
		'title' => 'mutelife Galeria',
		'category' => 'media',
		'icon' => 'format-gallery',
		'description' => 'Flexible image galleries with uniform row heights, regardless of aspect ratio.',
		'keywords' => array(
			'gallery',
			'images',
			'photos'
		),
		'example' => array(
			
		),
		'attributes' => array(
			'images' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'layout' => array(
				'type' => 'string',
				'default' => 'auto'
			),
			'align' => array(
				'type' => 'string',
				'default' => 'wide'
			)
		),
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'full'
			)
		),
		'textdomain' => 'mutelife-galeria',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	)
);
