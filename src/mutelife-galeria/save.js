import { useBlockProps } from '@wordpress/block-editor';

import Gallery from './gallery';

export default function save( { attributes } ) {
	const { images, layout } = attributes;
	const blockProps = useBlockProps.save( {
		className: `layout-${ layout }`,
	} );

	return (
		<div { ...blockProps }>
			<Gallery images={ images } layout={ layout } />
		</div>
	);
}
