import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<p {...useBlockProps()}>
			{__(
				'Copyright Date Block – hello from the editor con nestor de cabeza',
				'copyright-date-block'
			)}
		</p>
	);
}
