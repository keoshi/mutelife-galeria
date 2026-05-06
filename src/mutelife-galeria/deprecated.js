/**
 * v2 (cgb-scripts) deprecated entry.
 *
 * Recognises galleries saved by the previous plugin and converts them to the
 * new attribute shape on next edit/save. Untouched posts continue to render
 * via the legacy CSS selectors in style.scss without ever migrating.
 */

const v2Attributes = {
	images: {
		type: 'array',
		default: [],
	},
	align: {
		type: 'string',
		default: 'wide',
	},
};

const v2Supports = {
	align: [ 'wide', 'full' ],
};

const classNamesFor = ( images ) => {
	switch ( images.length ) {
		case 2: {
			const a = parseFloat( images[ 0 ].ratio );
			const b = parseFloat( images[ 1 ].ratio );
			if ( a > b ) {
				return [ 'mutelife-image tercos', 'mutelife-image terco' ];
			}
			if ( a < b ) {
				return [ 'mutelife-image terco', 'mutelife-image tercos' ];
			}
			return [ 'mutelife-image', 'mutelife-image' ];
		}
		case 3:
			return [
				'mutelife-image',
				'mutelife-image middle',
				'mutelife-image',
			];
		case 4:
			return [
				'mutelife-image fortico-vertical',
				'mutelife-image fortico-horizontal',
				'mutelife-image fortico-horizontal',
				'mutelife-image fortico-horizontal',
			];
		default:
			return images.map( () => 'mutelife-image' );
	}
};

const v2Save = ( { attributes } ) => {
	const { images } = attributes;
	const classes = classNamesFor( images );

	if ( images.length === 4 ) {
		return (
			<div className="wp-block-mutelife-galeria">
				<div className="mutelife-galeria photos">
					<div className={ classes[ 0 ] } key={ 0 }>
						<img
							src={ images[ 0 ].url }
							alt={ images[ 0 ].alt }
							className="unveil"
						/>
					</div>
					<div className="fortico-horizontais">
						{ images.slice( 1 ).map( ( image, i ) => (
							<div className={ classes[ i + 1 ] } key={ i + 1 }>
								<img
									src={ image.url }
									alt={ image.alt }
									className="unveil"
								/>
							</div>
						) ) }
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="wp-block-mutelife-galeria">
			<div className="mutelife-galeria photos">
				{ images.map( ( image, i ) => (
					<div className={ classes[ i ] } key={ i }>
						<img
							src={ image.url }
							alt={ image.alt }
							className="unveil"
						/>
					</div>
				) ) }
			</div>
		</div>
	);
};

const v2Migrate = ( attributes ) => {
	const { images = [] } = attributes;
	const newImages = images.map( ( img ) => {
		const ratio = parseFloat( img.ratio ) || 1;
		return {
			id: img.id,
			url: img.url,
			alt: img.alt || '',
			caption: img.caption || '',
			width: Math.round( ratio * 1000 ),
			height: 1000,
		};
	} );
	return {
		...attributes,
		images: newImages,
		layout: newImages.length === 4 ? 'fortico' : 'auto',
		align: attributes.align || 'wide',
	};
};

export default [
	{
		attributes: v2Attributes,
		supports: v2Supports,
		save: v2Save,
		migrate: v2Migrate,
	},
];
