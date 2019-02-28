/**
 * Block: mutelife-galeria
 */

//  Import CSS.
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { BlockControls, InspectorControls, MediaPlaceholder, MediaUpload } = wp.editor;
const { Fragment } = wp.element;
const { IconButton, Toolbar } = wp.components;

/**
 * Register the Gutenberg Block
 */
registerBlockType( 'mutelife/galeria', {
	title: __( 'mutelife: Galeria' ),
	icon: 'format-gallery',
	category: 'layout',
	description: __('Automatically generate beautiful galleries.'),
	keywords: [
		__( 'gallery' ),
		__( 'layout' ),
		__( 'image' ),
	],

	attributes: {
		images: {
			type: 'array',
			default: [],
		},
	},

	/**
	 * Edit function
	 */
	edit: function( { className, attributes, setAttributes, isSelected } ) {

		const { images } = attributes

		let imageClassNames = [
			'mutelife-image',
			'mutelife-image',
			'mutelife-image',
			'mutelife-image',
		]

		const renderBlockControls = () => {
			return (
				<BlockControls>
					{ !! images.length && (
						<Toolbar>
							<MediaUpload
								onSelect={ onSelectImages }
								allowedTypes={ [ 'image' ] }
								multiple
								gallery
								value={ images.map( img => img.id ) }
								render={ ( { open } ) => (
									<IconButton
										className="components-toolbar__control"
										label={ __( 'Edit Gallery' ) }
										icon="edit"
										onClick={ open }
									/>
								) }
							/>
						</Toolbar>
					) }
				</BlockControls>
			)
		}

		const emptyGallery = ( object ) => {
			for ( var key in object ) {
				if ( object.hasOwnProperty( key ) )
					return false;
			}

			return true;
		}

		const renderGallery = () => {
			if ( emptyGallery( images ) ) {
				return (
					<MediaPlaceholder
						allowedTypes = { [ 'image' ] }
						multiple = { true }
						labels = { { title: 'mutelife Galeria' } }
						onSelect={ onSelectImages }
					/>
				)
			}

			switch ( images.length ) {
				case 2 :
					if ( images[0].ratio > images[1].ratio ) {
						imageClassNames = [
							'mutelife-image tercos',
							'mutelife-image terco',
						]
					}
					if ( images[0].ratio < images[1].ratio ) {
						imageClassNames = [
							'mutelife-image terco',
							'mutelife-image tercos',
						]
					}
					break;

				case 3 :
					imageClassNames = [
						'mutelife-image',
						'mutelife-image middle',
						'mutelife-image',
					]
					break;

				case 4 :
					imageClassNames = [
						'mutelife-image fortico-vertical',
						'mutelife-image fortico-horizontal',
						'mutelife-image fortico-horizontal',
						'mutelife-image fortico-horizontal',
					]
					break;

			}

			return (
				<Fragment>
					{ 4 === images.length ? getFortico() : getRegular() }
				</Fragment>
			)

		}

		const getRegular = () => {
			let imagesFinal = []

			Object.values( images ).map( ( image, i ) => {

				imagesFinal.push(
					<div className={ imageClassNames[i] } key={i}>
						<img
							src={ image.url }
							alt={ image.alt }
							className="unveil"
						/>
					</div>
				)
			} )

			return imagesFinal
		}

		const getFortico = () => {
			let forticoVertical = [];
			let forticoHorizontais = [];
			let forticoHorizontal = [];

			Object.values( images ).map( ( image, i ) => {

				if ( 0 === i ) {
					forticoVertical.push(
						<div className={ imageClassNames[i] } key={i}>
							<img
								src={ image.url }
								alt={ image.alt }
								className="unveil"
							/>
						</div>
					)
				} else {
					forticoHorizontais.push(
						<div className={ imageClassNames[i] } key={i}>
							<img
								src={ image.url }
								alt={ image.alt }
								className="unveil"
							/>
						</div>
					)
				}

				forticoHorizontal = (
					<div className="fortico-horizontais">
						{ forticoHorizontais }
					</div>
				)
			} )

			return [
				forticoVertical,
				forticoHorizontal,
			]
		}

		const onSelectImages = ( selectedImages ) => {
			const newImages = [];

			for ( let [index, image] of selectedImages.entries() ) {
				const newImageRatio = image.sizes.full.width / image.sizes.full.height

				const newImageProps = {
					id: image.id,
					url: image.url,
					alt: image.alt,
					caption: image.caption,
					ratio: newImageRatio.toFixed(2),
				}

				newImages.push( newImageProps )
			}

			setAttributes( {
				images: newImages,
			} )
		}

		return (
			<div className="wp-block-mutelife-galeria">
				{ renderBlockControls() }
				<div className="mutelife-galeria photos">
					{ renderGallery() }
				</div>
			</div>
		)
	},

	/**
	 * Save function
	 */
	save: function( { className, attributes } ) {

		const { images } = attributes;

		let imageClassNames = [
			'mutelife-image',
			'mutelife-image',
			'mutelife-image',
			'mutelife-image',
		]

		const renderGallery = () => {
			switch ( images.length ) {
				case 2 :
					if ( images[0].ratio > images[1].ratio ) {
						imageClassNames = [
							'mutelife-image tercos',
							'mutelife-image terco',
						]
					}
					if ( images[0].ratio < images[1].ratio ) {
						imageClassNames = [
							'mutelife-image terco',
							'mutelife-image tercos',
						]
					}
					break;

				case 3 :
					imageClassNames = [
						'mutelife-image',
						'mutelife-image middle',
						'mutelife-image',
					]
					break;

				case 4 :
					imageClassNames = [
						'mutelife-image fortico-vertical',
						'mutelife-image fortico-horizontal',
						'mutelife-image fortico-horizontal',
						'mutelife-image fortico-horizontal',
					]
					break;
			}

			return (
				<Fragment>
					{ 4 === images.length ? getFortico() : getRegular() }
				</Fragment>
			)
		}

		const getRegular = () => {
			let imagesFinal = []

			Object.values( images ).map( ( image, i ) => {

				imagesFinal.push(
					<div className={ imageClassNames[i] } key={i}>
						<img
							src={ image.url }
							alt={ image.alt }
							className="unveil"
						/>
					</div>
				)
			} )

			return imagesFinal
		}

		const getFortico = () => {
			let forticoVertical = [];
			let forticoHorizontais = [];
			let forticoHorizontal = [];

			Object.values( images ).map( ( image, i ) => {

				if ( 0 === i ) {
					forticoVertical.push(
						<div className={ imageClassNames[i] } key={i}>
							<img
								src={ image.url }
								alt={ image.alt }
								className="unveil"
							/>
						</div>
					)
				} else {
					forticoHorizontais.push(
						<div className={ imageClassNames[i] } key={i}>
							<img
								src={ image.url }
								alt={ image.alt }
								className="unveil"
							/>
						</div>
					)
				}

				forticoHorizontal = (
					<div className="fortico-horizontais">
						{ forticoHorizontais }
					</div>
				)
			} )

			return [
				forticoVertical,
				forticoHorizontal,
			]
		}

		return (
			<div className="wp-block-mutelife-galeria">
				<div className="mutelife-galeria photos">
					{ renderGallery() }
				</div>
			</div>
		)
	},
} );
