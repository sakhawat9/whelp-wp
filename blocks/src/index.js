import { registerBlockType } from '@wordpress/blocks';
import '../../../assets/sass/whatshelp-main.scss';
import Edit from './edit';
import save from './save';

registerBlockType('create-block/whatsapp-button', {
	edit: Edit,
	save,
});
