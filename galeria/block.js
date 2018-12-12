var el = wp.element.createElement,
	Fragment = wp.element.Fragment,
	registerBlockType = wp.blocks.registerBlockType;

registerBlockType( 'mutelife/galeria', {
	title: 'mutelife: Galeria',
	icon: 'format-gallery',
	category: 'layout',
	attributes: {
		mediaUrls: {
			type: 'array',
		},
		mediaIds: {
			type: 'array',
		},
		mediaRatios: {
			type: 'array',
		}
	},

	edit: function( props ) {
		var focusedEditable = props.focus ? props.focus.editable || 'title' : null;
		var attributes = props.attributes;

		var classNames = [
			'mutelife-image',
			'mutelife-image',
			'mutelife-image',
			'mutelife-image',
		];

		var onSelectImages = function( media ) {
			var selectedNum = media.length;

			var mediaUrls = [];
			var mediaIds = [];
			var mediaRatios = [];

			for ( var i = 0; i < selectedNum; i++ ) {
				var mediaRatio = media[i].sizes.full.width / media[i].sizes.full.height;

				mediaUrls.push(
					media[i].url
				);

				mediaIds.push(
					media[i].id
				);

				mediaRatios.push(
					mediaRatio.toFixed(2)
				);
			}

			return props.setAttributes( {
				mediaUrls, mediaIds, mediaRatios
			} );
		}

		var isNotfortico = attributes.mediaUrls && attributes.mediaUrls.length && 4 > attributes.mediaUrls.length,
			fortico = isNotfortico ? Fragment : 'div',
			forticoClass = isNotfortico ? '' : 'fortico-horizontais';

		if ( attributes.mediaUrls && 2 === attributes.mediaUrls.length ) {
			// 2 Terços + 1 Terço
			if ( attributes.mediaRatios[0] > attributes.mediaRatios[1] ) {
				classNames = [
					'mutelife-image tercos',
					'mutelife-image terco',
				];
			}

			// 1 Terço + 2 Terços
			if ( attributes.mediaRatios[0] < attributes.mediaRatios[1] ) {
				classNames = [
					'mutelife-image terco',
					'mutelife-image tercos',
				];
			}
		// 3 Small
		} else if ( attributes.mediaUrls && 3 === attributes.mediaUrls.length ) {
			classNames = [
				'mutelife-image',
				'mutelife-image',
				'mutelife-image',
			];
		// Fortico
		} else if ( attributes.mediaUrls && 4 === attributes.mediaUrls.length ) {
			classNames = [
				'mutelife-image fortico-vertical',
				'mutelife-image fortico-horizontal',
				'mutelife-image fortico-horizontal',
				'mutelife-image fortico-horizontal',
			];
		}

		return [
			el( 'div', { className: props.className },
				! attributes.mediaUrls &&
					el( wp.editor.MediaPlaceholder, {
						className: props.className,
						icon: "format-gallery",
						labels:  {
							title: 'Galeria mutelife*',
						},
						type: "image",
						accept: "image/*",
						onSelect: onSelectImages,
						multiple: true,
					} ),
				el( 'div', { className: 'mutelife-galeria photos' },
					attributes.mediaUrls && attributes.mediaUrls[0] && 
						el( 'div', { className: classNames[0] },
							el( 'img', { src: attributes.mediaUrls[0], className: 'unveil' } )
						),
					el( fortico , { className: forticoClass }, 
						attributes.mediaUrls && attributes.mediaUrls[1] && 
							el( 'div', { className: classNames[1] },
								el( 'img', { src: attributes.mediaUrls[1], className: 'unveil' } )
							),
						attributes.mediaUrls && attributes.mediaUrls[2] && 
							el( 'div', { className: classNames[2] },
								el( 'img', { src: attributes.mediaUrls[2], className: 'unveil' } )
							),
						attributes.mediaUrls && attributes.mediaUrls[3] &&
							el( 'div', { className: classNames[3] },
								el( 'img', { src: attributes.mediaUrls[3], className: 'unveil' } )
							),
					),
				)
			)
		];
	},

	save: function( props ) {
		var attributes = props.attributes,
			isNotfortico = attributes.mediaUrls && attributes.mediaUrls.length && 4 > attributes.mediaUrls.length,
			fortico = isNotfortico ? Fragment : 'div',
			forticoClass = isNotfortico ? '' : 'fortico-horizontais',
			classNames = [
				'mutelife-image',
				'mutelife-image',
			];

		if ( attributes.mediaUrls && 2 === attributes.mediaUrls.length ) {

			// 2 Terços + 1 Terço
			if ( attributes.mediaRatios[0] > attributes.mediaRatios[1] ) {
				classNames = [
					'mutelife-image tercos',
					'mutelife-image terco',
				];
			}

			// 1 Terço + 2 Terços
			if ( attributes.mediaRatios[0] < attributes.mediaRatios[1] ) {
				classNames = [
					'mutelife-image terco',
					'mutelife-image tercos',
				];
			}
		// 3 Small
		} else if ( attributes.mediaUrls && 3 === attributes.mediaUrls.length ) {
			classNames = [
				'mutelife-image',
				'mutelife-image',
				'mutelife-image',
			];
		// Fortico
		} else if ( attributes.mediaUrls && 4 === attributes.mediaUrls.length ) {
			classNames = [
				'mutelife-image fortico-vertical',
				'mutelife-image fortico-horizontal',
				'mutelife-image fortico-horizontal',
				'mutelife-image fortico-horizontal',
			];
		}

		return (
			el( 'div', { className: props.className },
				el( 'div', { className: 'mutelife-galeria photos' },
					attributes.mediaUrls && attributes.mediaUrls[0] && 
						el( 'div', { className: classNames[0] },
							el( 'img', { src: attributes.mediaUrls[0], className: 'unveil' } )
						),
					el( fortico , { className: forticoClass }, 
						attributes.mediaUrls && attributes.mediaUrls[1] && 
							el( 'div', { className: classNames[1] },
								el( 'img', { src: attributes.mediaUrls[1], className: 'unveil' } )
							),
						attributes.mediaUrls && attributes.mediaUrls[2] && 
							el( 'div', { className: classNames[2] },
								el( 'img', { src: attributes.mediaUrls[2], className: 'unveil' } )
							),
						attributes.mediaUrls && attributes.mediaUrls[3] &&
							el( 'div', { className: classNames[3] },
								el( 'img', { src: attributes.mediaUrls[3], className: 'unveil' } )
							),
					),
				)
			)
		);
	},
} );
