const renderImage = ( image, i, extraClass = '' ) => {
	const w = Number( image.width ) || 1;
	const h = Number( image.height ) || 1;
	const ratio = w / h;
	const className = extraClass
		? `mutelife-image ${ extraClass }`
		: 'mutelife-image';

	return (
		<figure
			key={ image.id ?? i }
			className={ className }
			style={ {
				flexGrow: ratio,
				aspectRatio: `${ w } / ${ h }`,
			} }
		>
			<img
				src={ image.url }
				alt={ image.alt || '' }
				width={ w }
				height={ h }
				loading="lazy"
			/>
		</figure>
	);
};

const FortiCO = ( { images } ) => {
	const lead = images[ 0 ];
	const leadW = Number( lead.width ) || 1;
	const leadH = Number( lead.height ) || 1;

	return (
		<>
			<figure
				key={ lead.id ?? 0 }
				className="mutelife-image fortico-vertical"
				style={ { aspectRatio: `${ leadW } / ${ leadH }` } }
			>
				<img
					src={ lead.url }
					alt={ lead.alt || '' }
					width={ leadW }
					height={ leadH }
					loading="lazy"
				/>
			</figure>
			<div className="fortico-stack">
				{ images.slice( 1 ).map( ( image, i ) => (
					<figure
						key={ image.id ?? i + 1 }
						className="mutelife-image"
					>
						<img
							src={ image.url }
							alt={ image.alt || '' }
							width={ image.width }
							height={ image.height }
							loading="lazy"
						/>
					</figure>
				) ) }
			</div>
		</>
	);
};

export default function Gallery( { images, layout = 'auto' } ) {
	if ( layout === 'fortico' && images.length === 4 ) {
		return <FortiCO images={ images } />;
	}

	// Auto (default) — also the fallback when fortico is set with the wrong count.
	return images.map( ( image, i ) => renderImage( image, i ) );
}
