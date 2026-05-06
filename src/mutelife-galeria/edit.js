import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	BlockControls,
	InspectorControls,
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import {
	ToolbarGroup,
	ToolbarButton,
	PanelBody,
	ToggleControl,
} from '@wordpress/components';

import Gallery from './gallery';
import './editor.scss';

const pickImage = ( img ) => {
	const full = img.sizes?.full ?? {};
	return {
		id: img.id,
		url: img.url,
		alt: img.alt ?? '',
		caption: img.caption ?? '',
		width: Number( full.width ?? img.width ?? 0 ),
		height: Number( full.height ?? img.height ?? 0 ),
	};
};

export default function Edit( { attributes, setAttributes } ) {
	const { images, layout } = attributes;
	const blockProps = useBlockProps( {
		className: `layout-${ layout }`,
	} );

	const onSelectImages = ( selected ) => {
		const next = { images: selected.map( pickImage ) };
		// Default fortico ON the first time a 4-image gallery is inserted.
		if ( ! images.length && selected.length === 4 ) {
			next.layout = 'fortico';
		}
		setAttributes( next );
	};

	if ( ! images.length ) {
		return (
			<div { ...blockProps }>
				<MediaPlaceholder
					allowedTypes={ [ 'image' ] }
					multiple
					gallery
					labels={ {
						title: __( 'mutelife Galeria', 'mutelife-galeria' ),
					} }
					onSelect={ onSelectImages }
				/>
			</div>
		);
	}

	const showFortiCOToggle = images.length === 4;

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ onSelectImages }
							allowedTypes={ [ 'image' ] }
							multiple
							gallery
							value={ images.map( ( i ) => i.id ) }
							render={ ( { open } ) => (
								<ToolbarButton
									label={ __(
										'Edit gallery',
										'mutelife-galeria'
									) }
									icon="edit"
									onClick={ open }
								/>
							) }
						/>
					</MediaUploadCheck>
				</ToolbarGroup>
			</BlockControls>
			{ showFortiCOToggle && (
				<InspectorControls>
					<PanelBody
						title={ __( 'Layout', 'mutelife-galeria' ) }
						initialOpen
					>
						<ToggleControl
							label={ __( 'Fortico', 'mutelife-galeria' ) }
							help={ __(
								'1 tall image on the left, 3 stacked images on the right.',
								'mutelife-galeria'
							) }
							checked={ layout === 'fortico' }
							onChange={ ( on ) =>
								setAttributes( {
									layout: on ? 'fortico' : 'auto',
								} )
							}
							__nextHasNoMarginBottom
						/>
					</PanelBody>
				</InspectorControls>
			) }
			<div { ...blockProps }>
				<Gallery images={ images } layout={ layout } />
			</div>
		</>
	);
}
