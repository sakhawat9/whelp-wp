import { registerBlockType } from '@wordpress/blocks';
// import './whatshelp-main.scss';
import './whatshelp-main.scss';
import Edit from './edit';
import save from './save';

registerBlockType('create-block/whatsapp-button', {
	edit: Edit,
	save,
});
