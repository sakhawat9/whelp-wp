import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  RichText,
  BlockControls,
  AlignmentToolbar,
  InspectorControls,
  PanelColorSettings,
  ContrastChecker,
  MediaUpload,
} from "@wordpress/block-editor";
import classnames from "classnames";
import "./editor.scss";
import { PanelBody, ToggleControl, Button, TimePicker, ComboboxControl } from "@wordpress/components";
import { useState } from '@wordpress/element';

const { SelectControl, TextControl } = wp.components;

const timezones = [
	{
		value: 'Africa/Abidjan',
		label: __('Africa/Abidjan', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Accra',
		label: __('Africa/Accra', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Addis_Ababa',
		label: __('Africa/Addis_Ababa', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Algiers',
		label: __('Africa/Algiers', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Asmara',
		label: __('Africa/Asmara', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Asmera',
		label: __('Africa/Asmera', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Bamako',
		label: __('Africa/Bamako', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Bangui',
		label: __('Africa/Bangui', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Banjul',
		label: __('Africa/Banjul', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Bissau',
		label: __('Africa/Bissau', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Blantyre',
		label: __('Africa/Blantyre', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Brazzaville',
		label: __('Africa/Brazzaville', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Bujumbura',
		label: __('Africa/Bujumbura', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Cairo',
		label: __('Africa/Cairo', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Casablanca',
		label: __('Africa/Casablanca', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Ceuta',
		label: __('Africa/Ceuta', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Conakry',
		label: __('Africa/Conakry', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Dakar',
		label: __('Africa/Dakar', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Dar_es_Salaam',
		label: __('Africa/Dar_es_Salaam', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Djibouti',
		label: __('Africa/Djibouti', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Douala',
		label: __('Africa/Douala', 'ta-whatshelp'),
	},
	{
		value: 'Africa/El_Aaiun',
		label: __('Africa/El_Aaiun', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Freetown',
		label: __('Africa/Freetown', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Gaborone',
		label: __('Africa/Gaborone', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Harare',
		label: __('Africa/Harare', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Johannesburg',
		label: __('Africa/Johannesburg', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Juba',
		label: __('Africa/Juba', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Kampala',
		label: __('Africa/Kampala', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Khartoum',
		label: __('Africa/Khartoum', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Kigali',
		label: __('Africa/Kigali', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Kinshasa',
		label: __('Africa/Kinshasa', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Lagos',
		label: __('Africa/Lagos', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Libreville',
		label: __('Africa/Libreville', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Lome',
		label: __('Africa/Lome', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Luanda',
		label: __('Africa/Luanda', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Lubumbashi',
		label: __('Africa/Lubumbashi', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Lusaka',
		label: __('Africa/Lusaka', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Malabo',
		label: __('Africa/Malabo', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Maputo',
		label: __('Africa/Maputo', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Maseru',
		label: __('Africa/Maseru', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Mbabane',
		label: __('Africa/Mbabane', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Mogadishu',
		label: __('Africa/Mogadishu', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Monrovia',
		label: __('Africa/Monrovia', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Nairobi',
		label: __('Africa/Nairobi', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Ndjamena',
		label: __('Africa/Ndjamena', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Niamey',
		label: __('Africa/Niamey', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Nouakchott',
		label: __('Africa/Nouakchott', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Ouagadougou',
		label: __('Africa/Ouagadougou', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Porto-Novo',
		label: __('Africa/Porto-Novo', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Sao_Tome',
		label: __('Africa/Sao_Tome', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Timbuktu',
		label: __('Africa/Timbuktu', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Tripoli',
		label: __('Africa/Tripoli', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Tunis',
		label: __('Africa/Tunis', 'ta-whatshelp'),
	},
	{
		value: 'Africa/Windhoek',
		label: __('Africa/Windhoek', 'ta-whatshelp'),
	},
	{
		value: 'America/Adak',
		label: __('America/Adak', 'ta-whatshelp'),
	},
	{
		value: 'America/Anchorage',
		label: __('America/Anchorage', 'ta-whatshelp'),
	},
	{
		value: 'America/Anguilla',
		label: __('America/Anguilla', 'ta-whatshelp'),
	},
	{
		value: 'America/Antigua',
		label: __('America/Antigua', 'ta-whatshelp'),
	},
	{
		value: 'America/Araguaina',
		label: __('America/Araguaina', 'ta-whatshelp'),
	},
	{
		value: 'America/Argentina/Buenos_Aires',
		label: __('America/Argentina/Buenos_Aires', 'ta-whatshelp'),
	},
	{
		value: 'America/Argentina/Catamarca',
		label: __('America/Argentina/Catamarca', 'ta-whatshelp'),
	},
	{
		value: 'America/Argentina/ComodRivadavia',
		label: __('America/Argentina/ComodRivadavia', 'ta-whatshelp'),
	},
	{
		value: 'America/Argentina/Cordoba',
		label: __('America/Argentina/Cordoba', 'ta-whatshelp'),
	},
	{
		value: 'America/Argentina/Jujuy',
		label: __('America/Argentina/Jujuy', 'ta-whatshelp'),
	},
	{
		value: 'America/Argentina/La_Rioja',
		label: __('America/Argentina/La_Rioja', 'ta-whatshelp'),
	},
	{
		value: 'America/Argentina/Mendoza',
		label: __('America/Argentina/Mendoza', 'ta-whatshelp'),
	},
	{
		value: 'America/Argentina/Rio_Gallegos',
		label: __('America/Argentina/Rio_Gallegos', 'ta-whatshelp'),
	},
	{
		value: 'America/Argentina/Salta',
		label: __('America/Argentina/Salta', 'ta-whatshelp'),
	},
	{
		value: 'America/Argentina/San_Juan',
		label: __('America/Argentina/San_Juan', 'ta-whatshelp'),
	},
	{
		value: 'America/Argentina/San_Luis',
		label: __('America/Argentina/San_Luis', 'ta-whatshelp'),
	},
	{
		value: 'America/Argentina/Tucuman',
		label: __('America/Argentina/Tucuman', 'ta-whatshelp'),
	},
	{
		value: 'America/Argentina/Ushuaia',
		label: __('America/Argentina/Ushuaia', 'ta-whatshelp'),
	},
	{
		value: 'America/Aruba',
		label: __('America/Aruba', 'ta-whatshelp'),
	},
	{
		value: 'America/Asuncion',
		label: __('America/Asuncion', 'ta-whatshelp'),
	},
	{
		value: 'America/Atikokan',
		label: __('America/Atikokan', 'ta-whatshelp'),
	},
	{
		value: 'America/Atka',
		label: __('America/Atka', 'ta-whatshelp'),
	},
	{
		value: 'America/Bahia',
		label: __('America/Bahia', 'ta-whatshelp'),
	},
	{
		value: 'America/Bahia_Banderas',
		label: __('America/Bahia_Banderas', 'ta-whatshelp'),
	},
	{
		value: 'America/Barbados',
		label: __('America/Barbados', 'ta-whatshelp'),
	},
	{
		value: 'America/Belem',
		label: __('America/Belem', 'ta-whatshelp'),
	},
	{
		value: 'America/Belize',
		label: __('America/Belize', 'ta-whatshelp'),
	},
	{
		value: 'America/Blanc-Sablon',
		label: __('America/Blanc-Sablon', 'ta-whatshelp'),
	},
	{
		value: 'America/Boa_Vista',
		label: __('America/Boa_Vista', 'ta-whatshelp'),
	},
	{
		value: 'America/Bogota',
		label: __('America/Bogota', 'ta-whatshelp'),
	},
	{
		value: 'America/Boise',
		label: __('America/Boise', 'ta-whatshelp'),
	},
	{
		value: 'America/Buenos_Aires',
		label: __('America/Buenos_Aires', 'ta-whatshelp'),
	},
	{
		value: 'America/Cambridge_Bay',
		label: __('America/Cambridge_Bay', 'ta-whatshelp'),
	},
	{
		value: 'America/Campo_Grande',
		label: __('America/Campo_Grande', 'ta-whatshelp'),
	},
	{
		value: 'America/Cancun',
		label: __('America/Cancun', 'ta-whatshelp'),
	},
	{
		value: 'America/Caracas',
		label: __('America/Caracas', 'ta-whatshelp'),
	},
	{
		value: 'America/Catamarca',
		label: __('America/Catamarca', 'ta-whatshelp'),
	},
	{
		value: 'America/Cayenne',
		label: __('America/Cayenne', 'ta-whatshelp'),
	},
	{
		value: 'America/Cayman',
		label: __('America/Cayman', 'ta-whatshelp'),
	},
	{
		value: 'America/Chicago',
		label: __('America/Chicago', 'ta-whatshelp'),
	},
	{
		value: 'America/Chihuahua',
		label: __('America/Chihuahua', 'ta-whatshelp'),
	},
	{
		value: 'America/Coral_Harbour',
		label: __('America/Coral_Harbour', 'ta-whatshelp'),
	},
	{
		value: 'America/Cordoba',
		label: __('America/Cordoba', 'ta-whatshelp'),
	},
	{
		value: 'America/Costa_Rica',
		label: __('America/Costa_Rica', 'ta-whatshelp'),
	},
	{
		value: 'America/Creston',
		label: __('America/Creston', 'ta-whatshelp'),
	},
	{
		value: 'America/Cuiaba',
		label: __('America/Cuiaba', 'ta-whatshelp'),
	},
	{
		value: 'America/Curacao',
		label: __('America/Curacao', 'ta-whatshelp'),
	},
	{
		value: 'America/Danmarkshavn',
		label: __('America/Danmarkshavn', 'ta-whatshelp'),
	},
	{
		value: 'America/Dawson',
		label: __('America/Dawson', 'ta-whatshelp'),
	},
	{
		value: 'America/Dawson_Creek',
		label: __('America/Dawson_Creek', 'ta-whatshelp'),
	},
	{
		value: 'America/Denver',
		label: __('America/Denver', 'ta-whatshelp'),
	},
	{
		value: 'America/Detroit',
		label: __('America/Detroit', 'ta-whatshelp'),
	},
	{
		value: 'America/Dominica',
		label: __('America/Dominica', 'ta-whatshelp'),
	},
	{
		value: 'America/Edmonton',
		label: __('America/Edmonton', 'ta-whatshelp'),
	},
	{
		value: 'America/Eirunepe',
		label: __('America/Eirunepe', 'ta-whatshelp'),
	},
	{
		value: 'America/El_Salvador',
		label: __('America/El_Salvador', 'ta-whatshelp'),
	},
	{
		value: 'America/Ensenada',
		label: __('America/Ensenada', 'ta-whatshelp'),
	},
	{
		value: 'America/Fort_Nelson',
		label: __('America/Fort_Nelson', 'ta-whatshelp'),
	},
	{
		value: 'America/Fort_Wayne',
		label: __('America/Fort_Wayne', 'ta-whatshelp'),
	},
	{
		value: 'America/Fortaleza',
		label: __('America/Fortaleza', 'ta-whatshelp'),
	},
	{
		value: 'America/Glace_Bay',
		label: __('America/Glace_Bay', 'ta-whatshelp'),
	},
	{
		value: 'America/Godthab',
		label: __('America/Godthab', 'ta-whatshelp'),
	},
	{
		value: 'America/Goose_Bay',
		label: __('America/Goose_Bay', 'ta-whatshelp'),
	},
	{
		value: 'America/Grand_Turk',
		label: __('America/Grand_Turk', 'ta-whatshelp'),
	},
	{
		value: 'America/Grenada',
		label: __('America/Grenada', 'ta-whatshelp'),
	},
	{
		value: 'America/Guadeloupe',
		label: __('America/Guadeloupe', 'ta-whatshelp'),
	},
	{
		value: 'America/Guatemala',
		label: __('America/Guatemala', 'ta-whatshelp'),
	},
	{
		value: 'America/Guayaquil',
		label: __('America/Guayaquil', 'ta-whatshelp'),
	},
	{
		value: 'America/Guyana',
		label: __('America/Guyana', 'ta-whatshelp'),
	},
	{
		value: 'America/Halifax',
		label: __('America/Halifax', 'ta-whatshelp'),
	},
	{
		value: 'America/Havana',
		label: __('America/Havana', 'ta-whatshelp'),
	},
	{
		value: 'America/Hermosillo',
		label: __('America/Hermosillo', 'ta-whatshelp'),
	},
	{
		value: 'America/Indiana/Indianapolis',
		label: __('America/Indiana/Indianapolis', 'ta-whatshelp'),
	},
	{
		value: 'America/Indiana/Knox',
		label: __('America/Indiana/Knox', 'ta-whatshelp'),
	},
	{
		value: 'America/Indiana/Marengo',
		label: __('America/Indiana/Marengo', 'ta-whatshelp'),
	},
	{
		value: 'America/Indiana/Petersburg',
		label: __('America/Indiana/Petersburg', 'ta-whatshelp'),
	},
	{
		value: 'America/Indiana/Tell_City',
		label: __('America/Indiana/Tell_City', 'ta-whatshelp'),
	},
	{
		value: 'America/Indiana/Vevay',
		label: __('America/Indiana/Vevay', 'ta-whatshelp'),
	},
	{
		value: 'America/Indiana/Vincennes',
		label: __('America/Indiana/Vincennes', 'ta-whatshelp'),
	},
	{
		value: 'America/Indiana/Winamac',
		label: __('America/Indiana/Winamac', 'ta-whatshelp'),
	},
	{
		value: 'America/Indianapolis',
		label: __('America/Indianapolis', 'ta-whatshelp'),
	},
	{
		value: 'America/Inuvik',
		label: __('America/Inuvik', 'ta-whatshelp'),
	},
	{
		value: 'America/Iqaluit',
		label: __('America/Iqaluit', 'ta-whatshelp'),
	},
	{
		value: 'America/Jamaica',
		label: __('America/Jamaica', 'ta-whatshelp'),
	},
	{
		value: 'America/Jujuy',
		label: __('America/Jujuy', 'ta-whatshelp'),
	},
	{
		value: 'America/Juneau',
		label: __('America/Juneau', 'ta-whatshelp'),
	},
	{
		value: 'America/Kentucky/Louisville',
		label: __('America/Kentucky/Louisville', 'ta-whatshelp'),
	},
	{
		value: 'America/Kentucky/Monticello',
		label: __('America/Kentucky/Monticello', 'ta-whatshelp'),
	},
	{
		value: 'America/Knox_IN',
		label: __('America/Knox_IN', 'ta-whatshelp'),
	},
	{
		value: 'America/Kralendijk',
		label: __('America/Kralendijk', 'ta-whatshelp'),
	},
	{
		value: 'America/La_Paz',
		label: __('America/La_Paz', 'ta-whatshelp'),
	},
	{
		value: 'America/Lima',
		label: __('America/Lima', 'ta-whatshelp'),
	},
	{
		value: 'America/Los_Angeles',
		label: __('America/Los_Angeles', 'ta-whatshelp'),
	},
	{
		value: 'America/Louisville',
		label: __('America/Louisville', 'ta-whatshelp'),
	},
	{
		value: 'America/Lower_Princes',
		label: __('America/Lower_Princes', 'ta-whatshelp'),
	},
	{
		value: 'America/Maceio',
		label: __('America/Maceio', 'ta-whatshelp'),
	},
	{
		value: 'America/Managua',
		label: __('America/Managua', 'ta-whatshelp'),
	},
	{
		value: 'America/Manaus',
		label: __('America/Manaus', 'ta-whatshelp'),
	},
	{
		value: 'America/Marigot',
		label: __('America/Marigot', 'ta-whatshelp'),
	},
	{
		value: 'America/Martinique',
		label: __('America/Martinique', 'ta-whatshelp'),
	},
	{
		value: 'America/Matamoros',
		label: __('America/Matamoros', 'ta-whatshelp'),
	},
	{
		value: 'America/Mazatlan',
		label: __('America/Mazatlan', 'ta-whatshelp'),
	},
	{
		value: 'America/Mendoza',
		label: __('America/Mendoza', 'ta-whatshelp'),
	},
	{
		value: 'America/Menominee',
		label: __('America/Menominee', 'ta-whatshelp'),
	},
	{
		value: 'America/Merida',
		label: __('America/Merida', 'ta-whatshelp'),
	},
	{
		value: 'America/Metlakatla',
		label: __('America/Metlakatla', 'ta-whatshelp'),
	},
	{
		value: 'America/Mexico_City',
		label: __('America/Mexico_City', 'ta-whatshelp'),
	},
	{
		value: 'America/Miquelon',
		label: __('America/Miquelon', 'ta-whatshelp'),
	},
	{
		value: 'America/Moncton',
		label: __('America/Moncton', 'ta-whatshelp'),
	},
	{
		value: 'America/Monterrey',
		label: __('America/Monterrey', 'ta-whatshelp'),
	},
	{
		value: 'America/Montevideo',
		label: __('America/Montevideo', 'ta-whatshelp'),
	},
	{
		value: 'America/Montreal',
		label: __('America/Montreal', 'ta-whatshelp'),
	},
	{
		value: 'America/Montserrat',
		label: __('America/Montserrat', 'ta-whatshelp'),
	},
	{
		value: 'America/Nassau',
		label: __('America/Nassau', 'ta-whatshelp'),
	},
	{
		value: 'America/New_York',
		label: __('America/New_York', 'ta-whatshelp'),
	},
	{
		value: 'America/Nipigon',
		label: __('America/Nipigon', 'ta-whatshelp'),
	},
	{
		value: 'America/Nome',
		label: __('America/Nome', 'ta-whatshelp'),
	},
	{
		value: 'America/Noronha',
		label: __('America/Noronha', 'ta-whatshelp'),
	},
	{
		value: 'America/North_Dakota/Beulah',
		label: __('America/North_Dakota/Beulah', 'ta-whatshelp'),
	},
	{
		value: 'America/North_Dakota/Center',
		label: __('America/North_Dakota/Center', 'ta-whatshelp'),
	},
	{
		value: 'America/North_Dakota/New_Salem',
		label: __('America/North_Dakota/New_Salem', 'ta-whatshelp'),
	},
	{
		value: 'America/Ojinaga',
		label: __('America/Ojinaga', 'ta-whatshelp'),
	},
	{
		value: 'America/Panama',
		label: __('America/Panama', 'ta-whatshelp'),
	},
	{
		value: 'America/Pangnirtung',
		label: __('America/Pangnirtung', 'ta-whatshelp'),
	},
	{
		value: 'America/Paramaribo',
		label: __('America/Paramaribo', 'ta-whatshelp'),
	},
	{
		value: 'America/Phoenix',
		label: __('America/Phoenix', 'ta-whatshelp'),
	},
	{
		value: 'America/Port-au-Prince',
		label: __('America/Port-au-Prince', 'ta-whatshelp'),
	},
	{
		value: 'America/Port_of_Spain',
		label: __('America/Port_of_Spain', 'ta-whatshelp'),
	},
	{
		value: 'America/Porto_Acre',
		label: __('America/Porto_Acre', 'ta-whatshelp'),
	},
	{
		value: 'America/Porto_Velho',
		label: __('America/Porto_Velho', 'ta-whatshelp'),
	},
	{
		value: 'America/Puerto_Rico',
		label: __('America/Puerto_Rico', 'ta-whatshelp'),
	},
	{
		value: 'America/Punta_Arenas',
		label: __('America/Punta_Arenas', 'ta-whatshelp'),
	},
	{
		value: 'America/Rainy_River',
		label: __('America/Rainy_River', 'ta-whatshelp'),
	},
	{
		value: 'America/Rankin_Inlet',
		label: __('America/Rankin_Inlet', 'ta-whatshelp'),
	},
	{
		value: 'America/Recife',
		label: __('America/Recife', 'ta-whatshelp'),
	},
	{
		value: 'America/Regina',
		label: __('America/Regina', 'ta-whatshelp'),
	},
	{
		value: 'America/Resolute',
		label: __('America/Resolute', 'ta-whatshelp'),
	},
	{
		value: 'America/Rio_Branco',
		label: __('America/Rio_Branco', 'ta-whatshelp'),
	},
	{
		value: 'America/Rosario',
		label: __('America/Rosario', 'ta-whatshelp'),
	},
	{
		value: 'America/Santa_Isabel',
		label: __('America/Santa_Isabel', 'ta-whatshelp'),
	},
	{
		value: 'America/Santarem',
		label: __('America/Santarem', 'ta-whatshelp'),
	},
	{
		value: 'America/Santiago',
		label: __('America/Santiago', 'ta-whatshelp'),
	},
	{
		value: 'America/Santo_Domingo',
		label: __('America/Santo_Domingo', 'ta-whatshelp'),
	},
	{
		value: 'America/Sao_Paulo',
		label: __('America/Sao_Paulo', 'ta-whatshelp'),
	},
	{
		value: 'America/Scoresbysund',
		label: __('America/Scoresbysund', 'ta-whatshelp'),
	},
	{
		value: 'America/Shiprock',
		label: __('America/Shiprock', 'ta-whatshelp'),
	},
	{
		value: 'America/Sitka',
		label: __('America/Sitka', 'ta-whatshelp'),
	},
	{
		value: 'America/St_Barthelemy',
		label: __('America/St_Barthelemy', 'ta-whatshelp'),
	},
	{
		value: 'America/St_Johns',
		label: __('America/St_Johns', 'ta-whatshelp'),
	},
	{
		value: 'America/St_Kitts',
		label: __('America/St_Kitts', 'ta-whatshelp'),
	},
	{
		value: 'America/St_Lucia',
		label: __('America/St_Lucia', 'ta-whatshelp'),
	},
	{
		value: 'America/St_Thomas',
		label: __('America/St_Thomas', 'ta-whatshelp'),
	},
	{
		value: 'America/St_Vincent',
		label: __('America/St_Vincent', 'ta-whatshelp'),
	},
	{
		value: 'America/Swift_Current',
		label: __('America/Swift_Current', 'ta-whatshelp'),
	},
	{
		value: 'America/Tegucigalpa',
		label: __('America/Tegucigalpa', 'ta-whatshelp'),
	},
	{
		value: 'America/Thule',
		label: __('America/Thule', 'ta-whatshelp'),
	},
	{
		value: 'America/Thunder_Bay',
		label: __('America/Thunder_Bay', 'ta-whatshelp'),
	},
	{
		value: 'America/Tijuana',
		label: __('America/Tijuana', 'ta-whatshelp'),
	},
	{
		value: 'America/Toronto',
		label: __('America/Toronto', 'ta-whatshelp'),
	},
	{
		value: 'America/Tortola',
		label: __('America/Tortola', 'ta-whatshelp'),
	},
	{
		value: 'America/Vancouver',
		label: __('America/Vancouver', 'ta-whatshelp'),
	},
	{
		value: 'America/Virgin',
		label: __('America/Virgin', 'ta-whatshelp'),
	},
	{
		value: 'America/Whitehorse',
		label: __('America/Whitehorse', 'ta-whatshelp'),
	},
	{
		value: 'America/Winnipeg',
		label: __('America/Winnipeg', 'ta-whatshelp'),
	},
	{
		value: 'America/Yakutat',
		label: __('America/Yakutat', 'ta-whatshelp'),
	},
	{
		value: 'America/Yellowknife',
		label: __('America/Yellowknife', 'ta-whatshelp'),
	},
	{
		value: 'Antarctica/Casey',
		label: __('Antarctica/Casey', 'ta-whatshelp'),
	},
	{
		value: 'Antarctica/Davis',
		label: __('Antarctica/Davis', 'ta-whatshelp'),
	},
	{
		value: 'Antarctica/DumontDUrville',
		label: __('Antarctica/DumontDUrville', 'ta-whatshelp'),
	},
	{
		value: 'Antarctica/Macquarie',
		label: __('Antarctica/Macquarie', 'ta-whatshelp'),
	},
	{
		value: 'Antarctica/Mawson',
		label: __('Antarctica/Mawson', 'ta-whatshelp'),
	},
	{
		value: 'Antarctica/McMurdo',
		label: __('Antarctica/McMurdo', 'ta-whatshelp'),
	},
	{
		value: 'Antarctica/Palmer',
		label: __('Antarctica/Palmer', 'ta-whatshelp'),
	},
	{
		value: 'Antarctica/Rothera',
		label: __('Antarctica/Rothera', 'ta-whatshelp'),
	},
	{
		value: 'Antarctica/South_Pole',
		label: __('Antarctica/South_Pole', 'ta-whatshelp'),
	},
	{
		value: 'Antarctica/Syowa',
		label: __('Antarctica/Syowa', 'ta-whatshelp'),
	},
	{
		value: 'Antarctica/Troll',
		label: __('Antarctica/Troll', 'ta-whatshelp'),
	},
	{
		value: 'Antarctica/Vostok',
		label: __('Antarctica/Vostok', 'ta-whatshelp'),
	},
	{
		value: 'Arctic/Longyearbyen',
		label: __('Arctic/Longyearbyen', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Aden',
		label: __('Asia/Aden', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Almaty',
		label: __('Asia/Almaty', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Amman',
		label: __('Asia/Amman', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Anadyr',
		label: __('Asia/Anadyr', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Aqtau',
		label: __('Asia/Aqtau', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Aqtobe',
		label: __('Asia/Aqtobe', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Ashgabat',
		label: __('Asia/Ashgabat', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Ashkhabad',
		label: __('Asia/Ashkhabad', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Atyrau',
		label: __('Asia/Atyrau', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Baghdad',
		label: __('Asia/Baghdad', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Bahrain',
		label: __('Asia/Bahrain', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Baku',
		label: __('Asia/Baku', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Bangkok',
		label: __('Asia/Bangkok', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Barnaul',
		label: __('Asia/Barnaul', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Beirut',
		label: __('Asia/Beirut', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Bishkek',
		label: __('Asia/Bishkek', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Brunei',
		label: __('Asia/Brunei', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Calcutta',
		label: __('Asia/Calcutta', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Chita',
		label: __('Asia/Chita', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Choibalsan',
		label: __('Asia/Choibalsan', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Chongqing',
		label: __('Asia/Chongqing', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Chungking',
		label: __('Asia/Chungking', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Colombo',
		label: __('Asia/Colombo', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Dacca',
		label: __('Asia/Dacca', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Damascus',
		label: __('Asia/Damascus', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Dhaka',
		label: __('Asia/Dhaka', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Dili',
		label: __('Asia/Dili', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Dubai',
		label: __('Asia/Dubai', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Dushanbe',
		label: __('Asia/Dushanbe', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Famagusta',
		label: __('Asia/Famagusta', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Gaza',
		label: __('Asia/Gaza', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Harbin',
		label: __('Asia/Harbin', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Hebron',
		label: __('Asia/Hebron', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Ho_Chi_Minh',
		label: __('Asia/Ho_Chi_Minh', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Hong_Kong',
		label: __('Asia/Hong_Kong', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Hovd',
		label: __('Asia/Hovd', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Irkutsk',
		label: __('Asia/Irkutsk', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Istanbul',
		label: __('Asia/Istanbul', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Jakarta',
		label: __('Asia/Jakarta', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Jayapura',
		label: __('Asia/Jayapura', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Jerusalem',
		label: __('Asia/Jerusalem', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Kabul',
		label: __('Asia/Kabul', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Kamchatka',
		label: __('Asia/Kamchatka', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Karachi',
		label: __('Asia/Karachi', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Kashgar',
		label: __('Asia/Kashgar', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Kathmandu',
		label: __('Asia/Kathmandu', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Katmandu',
		label: __('Asia/Katmandu', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Khandyga',
		label: __('Asia/Khandyga', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Kolkata',
		label: __('Asia/Kolkata', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Krasnoyarsk',
		label: __('Asia/Krasnoyarsk', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Kuala_Lumpur',
		label: __('Asia/Kuala_Lumpur', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Kuching',
		label: __('Asia/Kuching', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Kuwait',
		label: __('Asia/Kuwait', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Macao',
		label: __('Asia/Macao', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Macau',
		label: __('Asia/Macau', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Magadan',
		label: __('Asia/Magadan', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Makassar',
		label: __('Asia/Makassar', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Manila',
		label: __('Asia/Manila', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Muscat',
		label: __('Asia/Muscat', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Nicosia',
		label: __('Asia/Nicosia', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Novokuznetsk',
		label: __('Asia/Novokuznetsk', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Novosibirsk',
		label: __('Asia/Novosibirsk', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Omsk',
		label: __('Asia/Omsk', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Oral',
		label: __('Asia/Oral', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Phnom_Penh',
		label: __('Asia/Phnom_Penh', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Pontianak',
		label: __('Asia/Pontianak', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Pyongyang',
		label: __('Asia/Pyongyang', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Qatar',
		label: __('Asia/Qatar', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Qyzylorda',
		label: __('Asia/Qyzylorda', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Rangoon',
		label: __('Asia/Rangoon', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Riyadh',
		label: __('Asia/Riyadh', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Saigon',
		label: __('Asia/Saigon', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Sakhalin',
		label: __('Asia/Sakhalin', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Samarkand',
		label: __('Asia/Samarkand', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Seoul',
		label: __('Asia/Seoul', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Shanghai',
		label: __('Asia/Shanghai', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Singapore',
		label: __('Asia/Singapore', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Srednekolymsk',
		label: __('Asia/Srednekolymsk', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Taipei',
		label: __('Asia/Taipei', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Tashkent',
		label: __('Asia/Tashkent', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Tbilisi',
		label: __('Asia/Tbilisi', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Tehran',
		label: __('Asia/Tehran', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Tel_Aviv',
		label: __('Asia/Tel_Aviv', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Thimbu',
		label: __('Asia/Thimbu', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Thimphu',
		label: __('Asia/Thimphu', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Tokyo',
		label: __('Asia/Tokyo', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Tomsk',
		label: __('Asia/Tomsk', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Ujung_Pandang',
		label: __('Asia/Ujung_Pandang', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Ulaanbaatar',
		label: __('Asia/Ulaanbaatar', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Ulan_Bator',
		label: __('Asia/Ulan_Bator', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Urumqi',
		label: __('Asia/Urumqi', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Ust-Nera',
		label: __('Asia/Ust-Nera', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Vientiane',
		label: __('Asia/Vientiane', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Vladivostok',
		label: __('Asia/Vladivostok', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Yakutsk',
		label: __('Asia/Yakutsk', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Yangon',
		label: __('Asia/Yangon', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Yekaterinburg',
		label: __('Asia/Yekaterinburg', 'ta-whatshelp'),
	},
	{
		value: 'Asia/Yerevan',
		label: __('Asia/Yerevan', 'ta-whatshelp'),
	},
	{
		value: 'Atlantic/Azores',
		label: __('Atlantic/Azores', 'ta-whatshelp'),
	},
	{
		value: 'Atlantic/Bermuda',
		label: __('Atlantic/Bermuda', 'ta-whatshelp'),
	},
	{
		value: 'Atlantic/Canary',
		label: __('Atlantic/Canary', 'ta-whatshelp'),
	},
	{
		value: 'Atlantic/Cape_Verde',
		label: __('Atlantic/Cape_Verde', 'ta-whatshelp'),
	},
	{
		value: 'Atlantic/Faeroe',
		label: __('Atlantic/Faeroe', 'ta-whatshelp'),
	},
	{
		value: 'Atlantic/Faroe',
		label: __('Atlantic/Faroe', 'ta-whatshelp'),
	},
	{
		value: 'Atlantic/Jan_Mayen',
		label: __('Atlantic/Jan_Mayen', 'ta-whatshelp'),
	},
	{
		value: 'Atlantic/Madeira',
		label: __('Atlantic/Madeira', 'ta-whatshelp'),
	},
	{
		value: 'Atlantic/Reykjavik',
		label: __('Atlantic/Reykjavik', 'ta-whatshelp'),
	},
	{
		value: 'Atlantic/South_Georgia',
		label: __('Atlantic/South_Georgia', 'ta-whatshelp'),
	},
	{
		value: 'Atlantic/St_Helena',
		label: __('Atlantic/St_Helena', 'ta-whatshelp'),
	},
	{
		value: 'Atlantic/Stanley',
		label: __('Atlantic/Stanley', 'ta-whatshelp'),
	},
	{
		value: 'Australia/ACT',
		label: __('Australia/ACT', 'ta-whatshelp'),
	},
	{
		value: 'Australia/Adelaide',
		label: __('Australia/Adelaide', 'ta-whatshelp'),
	},
	{
		value: 'Australia/Brisbane',
		label: __('Australia/Brisbane', 'ta-whatshelp'),
	},
	{
		value: 'Australia/Broken_Hill',
		label: __('Australia/Broken_Hill', 'ta-whatshelp'),
	},
	{
		value: 'Australia/Canberra',
		label: __('Australia/Canberra', 'ta-whatshelp'),
	},
	{
		value: 'Australia/Currie',
		label: __('Australia/Currie', 'ta-whatshelp'),
	},
	{
		value: 'Australia/Darwin',
		label: __('Australia/Darwin', 'ta-whatshelp'),
	},
	{
		value: 'Australia/Eucla',
		label: __('Australia/Eucla', 'ta-whatshelp'),
	},
	{
		value: 'Australia/Hobart',
		label: __('Australia/Hobart', 'ta-whatshelp'),
	},
	{
		value: 'Australia/LHI',
		label: __('Australia/LHI', 'ta-whatshelp'),
	},
	{
		value: 'Australia/Lindeman',
		label: __('Australia/Lindeman', 'ta-whatshelp'),
	},
	{
		value: 'Australia/Lord_Howe',
		label: __('Australia/Lord_Howe', 'ta-whatshelp'),
	},
	{
		value: 'Australia/Melbourne',
		label: __('Australia/Melbourne', 'ta-whatshelp'),
	},
	{
		value: 'Australia/NSW',
		label: __('Australia/NSW', 'ta-whatshelp'),
	},
	{
		value: 'Australia/North',
		label: __('Australia/North', 'ta-whatshelp'),
	},
	{
		value: 'Australia/Perth',
		label: __('Australia/Perth', 'ta-whatshelp'),
	},
	{
		value: 'Australia/Queensland',
		label: __('Australia/Queensland', 'ta-whatshelp'),
	},
	{
		value: 'Australia/South',
		label: __('Australia/South', 'ta-whatshelp'),
	},
	{
		value: 'Australia/Sydney',
		label: __('Australia/Sydney', 'ta-whatshelp'),
	},
	{
		value: 'Australia/Tasmania',
		label: __('Australia/Tasmania', 'ta-whatshelp'),
	},
	{
		value: 'Australia/Victoria',
		label: __('Australia/Victoria', 'ta-whatshelp'),
	},
	{
		value: 'Australia/West',
		label: __('Australia/West', 'ta-whatshelp'),
	},
	{
		value: 'Australia/Yancowinna',
		label: __('Australia/Yancowinna', 'ta-whatshelp'),
	},
	{
		value: 'Brazil/Acre',
		label: __('Brazil/Acre', 'ta-whatshelp'),
	},
	{
		value: 'Brazil/DeNoronha',
		label: __('Brazil/DeNoronha', 'ta-whatshelp'),
	},
	{
		value: 'Brazil/East',
		label: __('Brazil/East', 'ta-whatshelp'),
	},
	{
		value: 'Brazil/West',
		label: __('Brazil/West', 'ta-whatshelp'),
	},
	{
		value: 'CET',
		label: __('CET', 'ta-whatshelp'),
	},
	{
		value: 'CST6CDT',
		label: __('CST6CDT', 'ta-whatshelp'),
	},
	{
		value: 'Canada/Atlantic',
		label: __('Canada/Atlantic', 'ta-whatshelp'),
	},
	{
		value: 'Canada/Central',
		label: __('Canada/Central', 'ta-whatshelp'),
	},
	{
		value: 'Canada/Eastern',
		label: __('Canada/Eastern', 'ta-whatshelp'),
	},
	{
		value: 'Canada/Mountain',
		label: __('Canada/Mountain', 'ta-whatshelp'),
	},
	{
		value: 'Canada/Newfoundland',
		label: __('Canada/Newfoundland', 'ta-whatshelp'),
	},
	{
		value: 'Canada/Pacific',
		label: __('Canada/Pacific', 'ta-whatshelp'),
	},
	{
		value: 'Canada/Saskatchewan',
		label: __('Canada/Saskatchewan', 'ta-whatshelp'),
	},
	{
		value: 'Canada/Yukon',
		label: __('Canada/Yukon', 'ta-whatshelp'),
	},
	{
		value: 'Chile/Continental',
		label: __('Chile/Continental', 'ta-whatshelp'),
	},
	{
		value: 'Chile/EasterIsland',
		label: __('Chile/EasterIsland', 'ta-whatshelp'),
	},
	{
		value: 'Cuba',
		label: __('Cuba', 'ta-whatshelp'),
	},
	{
		value: 'EET',
		label: __('EET', 'ta-whatshelp'),
	},
	{
		value: 'EST',
		label: __('EST', 'ta-whatshelp'),
	},
	{
		value: 'EST5EDT',
		label: __('EST5EDT', 'ta-whatshelp'),
	},
	{
		value: 'Egypt',
		label: __('Egypt', 'ta-whatshelp'),
	},
	{
		value: 'Eire',
		label: __('Eire', 'ta-whatshelp'),
	},
	{
		value: 'Etc/GMT',
		label: __('Etc/GMT', 'ta-whatshelp'),
	},
	{
		value: 'Etc/GMT+0',
		label: __('Etc/GMT+0', 'ta-whatshelp'),
	},
	{
		value: 'Etc/GMT+1',
		label: __('Etc/GMT+1', 'ta-whatshelp'),
	},
	{
		value: 'Etc/GMT+10',
		label: __('Etc/GMT+10', 'ta-whatshelp'),
	},
	{
		value: 'Etc/GMT+11',
		label: __('Etc/GMT+11', 'ta-whatshelp'),
	},
	{
		value: 'Etc/GMT+12',
		label: __('Etc/GMT+12', 'ta-whatshelp'),
	},
	{
		value: 'Etc/GMT+2',
		label: __('Etc/GMT+2', 'ta-whatshelp'),
	},
	{
		value: 'Etc/GMT+3',
		label: __('Etc/GMT+3', 'ta-whatshelp'),
	},
	{
		value: 'Etc/GMT+4',
		label: __('Etc/GMT+4', 'ta-whatshelp'),
	},
	{
		value: 'Etc/GMT+5',
		label: __('Etc/GMT+5', 'ta-whatshelp'),
	},
	{
		value: 'Etc/GMT+6',
		label: __('Etc/GMT+6', 'ta-whatshelp'),
	},
	{
		value: 'Etc/GMT+7',
		label: __('Etc/GMT+7', 'ta-whatshelp'),
	},
	{
		value: 'Etc/GMT+8',
		label: __('Etc/GMT+8', 'ta-whatshelp'),
	},
	{
		value: 'Etc/GMT+9',
		label: __('Etc/GMT+9', 'ta-whatshelp'),
	},
	{
		value: 'Etc/GMT-0',
		label: __('Etc/GMT-0', 'ta-whatshelp'),
	},
	{
		value: 'Etc/GMT-1',
		label: __('Etc/GMT-1', 'ta-whatshelp'),
	},
	{
		value: 'Etc/GMT-10',
		label: __('Etc/GMT-10', 'ta-whatshelp'),
	},
	{
		value: 'Etc/GMT-11',
		label: __('Etc/GMT-11', 'ta-whatshelp'),
	},
	{
		value: 'Etc/GMT-12',
		label: __('Etc/GMT-12', 'ta-whatshelp'),
	},
	{
		value: 'Etc/GMT-13',
		label: __('Etc/GMT-13', 'ta-whatshelp'),
	},
	{
		value: 'Etc/GMT-14',
		label: __('Etc/GMT-14', 'ta-whatshelp'),
	},
	{
		value: 'Etc/GMT-2',
		label: __('Etc/GMT-2', 'ta-whatshelp'),
	},
	{
		value: 'Etc/GMT-3',
		label: __('Etc/GMT-3', 'ta-whatshelp'),
	},
	{
		value: 'Etc/GMT-4',
		label: __('Etc/GMT-4', 'ta-whatshelp'),
	},
	{
		value: 'Etc/GMT-5',
		label: __('Etc/GMT-5', 'ta-whatshelp'),
	},
	{
		value: 'Etc/GMT-6',
		label: __('Etc/GMT-6', 'ta-whatshelp'),
	},
	{
		value: 'Etc/GMT-7',
		label: __('Etc/GMT-7', 'ta-whatshelp'),
	},
	{
		value: 'Etc/GMT-8',
		label: __('Etc/GMT-8', 'ta-whatshelp'),
	},
	{
		value: 'Etc/GMT-9',
		label: __('Etc/GMT-9', 'ta-whatshelp'),
	},
	{
		value: 'Etc/GMT0',
		label: __('Etc/GMT0', 'ta-whatshelp'),
	},
	{
		value: 'Etc/Greenwich',
		label: __('Etc/Greenwich', 'ta-whatshelp'),
	},
	{
		value: 'Etc/UCT',
		label: __('Etc/UCT', 'ta-whatshelp'),
	},
	{
		value: 'Etc/UTC',
		label: __('Etc/UTC', 'ta-whatshelp'),
	},
	{
		value: 'Etc/Universal',
		label: __('Etc/Universal', 'ta-whatshelp'),
	},
	{
		value: 'Etc/Zulu',
		label: __('Etc/Zulu', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Amsterdam',
		label: __('Europe/Amsterdam', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Andorra',
		label: __('Europe/Andorra', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Astrakhan',
		label: __('Europe/Astrakhan', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Athens',
		label: __('Europe/Athens', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Belfast',
		label: __('Europe/Belfast', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Belgrade',
		label: __('Europe/Belgrade', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Berlin',
		label: __('Europe/Berlin', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Bratislava',
		label: __('Europe/Bratislava', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Brussels',
		label: __('Europe/Brussels', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Bucharest',
		label: __('Europe/Bucharest', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Budapest',
		label: __('Europe/Budapest', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Busingen',
		label: __('Europe/Busingen', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Chisinau',
		label: __('Europe/Chisinau', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Copenhagen',
		label: __('Europe/Copenhagen', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Dublin',
		label: __('Europe/Dublin', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Gibraltar',
		label: __('Europe/Gibraltar', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Guernsey',
		label: __('Europe/Guernsey', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Helsinki',
		label: __('Europe/Helsinki', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Isle_of_Man',
		label: __('Europe/Isle_of_Man', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Istanbul',
		label: __('Europe/Istanbul', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Jersey',
		label: __('Europe/Jersey', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Kaliningrad',
		label: __('Europe/Kaliningrad', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Kiev',
		label: __('Europe/Kiev', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Kirov',
		label: __('Europe/Kirov', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Lisbon',
		label: __('Europe/Lisbon', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Ljubljana',
		label: __('Europe/Ljubljana', 'ta-whatshelp'),
	},
	{
		value: 'Europe/London',
		label: __('Europe/London', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Luxembourg',
		label: __('Europe/Luxembourg', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Madrid',
		label: __('Europe/Madrid', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Malta',
		label: __('Europe/Malta', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Mariehamn',
		label: __('Europe/Mariehamn', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Minsk',
		label: __('Europe/Minsk', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Monaco',
		label: __('Europe/Monaco', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Moscow',
		label: __('Europe/Moscow', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Nicosia',
		label: __('Europe/Nicosia', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Oslo',
		label: __('Europe/Oslo', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Paris',
		label: __('Europe/Paris', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Podgorica',
		label: __('Europe/Podgorica', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Prague',
		label: __('Europe/Prague', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Riga',
		label: __('Europe/Riga', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Rome',
		label: __('Europe/Rome', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Samara',
		label: __('Europe/Samara', 'ta-whatshelp'),
	},
	{
		value: 'Europe/San_Marino',
		label: __('Europe/San_Marino', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Sarajevo',
		label: __('Europe/Sarajevo', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Saratov',
		label: __('Europe/Saratov', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Simferopol',
		label: __('Europe/Simferopol', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Skopje',
		label: __('Europe/Skopje', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Sofia',
		label: __('Europe/Sofia', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Stockholm',
		label: __('Europe/Stockholm', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Tallinn',
		label: __('Europe/Tallinn', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Tirane',
		label: __('Europe/Tirane', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Tiraspol',
		label: __('Europe/Tiraspol', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Ulyanovsk',
		label: __('Europe/Ulyanovsk', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Uzhgorod',
		label: __('Europe/Uzhgorod', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Vaduz',
		label: __('Europe/Vaduz', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Vatican',
		label: __('Europe/Vatican', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Vienna',
		label: __('Europe/Vienna', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Vilnius',
		label: __('Europe/Vilnius', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Volgograd',
		label: __('Europe/Volgograd', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Warsaw',
		label: __('Europe/Warsaw', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Zagreb',
		label: __('Europe/Zagreb', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Zaporozhye',
		label: __('Europe/Zaporozhye', 'ta-whatshelp'),
	},
	{
		value: 'Europe/Zurich',
		label: __('Europe/Zurich', 'ta-whatshelp'),
	},
	{
		value: 'GB',
		label: __('GB', 'ta-whatshelp'),
	},
	{
		value: 'GB-Eire',
		label: __('GB-Eire', 'ta-whatshelp'),
	},
	{
		value: 'GMT',
		label: __('GMT', 'ta-whatshelp'),
	},
	{
		value: 'GMT+0',
		label: __('GMT+0', 'ta-whatshelp'),
	},
	{
		value: 'GMT-0',
		label: __('GMT-0', 'ta-whatshelp'),
	},
	{
		value: 'GMT0',
		label: __('GMT0', 'ta-whatshelp'),
	},
	{
		value: 'Greenwich',
		label: __('Greenwich', 'ta-whatshelp'),
	},
	{
		value: 'HST',
		label: __('HST', 'ta-whatshelp'),
	},
	{
		value: 'Hongkong',
		label: __('Hongkong', 'ta-whatshelp'),
	},
	{
		value: 'Iceland',
		label: __('Iceland', 'ta-whatshelp'),
	},
	{
		value: 'Indian/Antananarivo',
		label: __('Indian/Antananarivo', 'ta-whatshelp'),
	},
	{
		value: 'Indian/Chagos',
		label: __('Indian/Chagos', 'ta-whatshelp'),
	},
	{
		value: 'Indian/Christmas',
		label: __('Indian/Christmas', 'ta-whatshelp'),
	},
	{
		value: 'Indian/Cocos',
		label: __('Indian/Cocos', 'ta-whatshelp'),
	},
	{
		value: 'Indian/Comoro',
		label: __('Indian/Comoro', 'ta-whatshelp'),
	},
	{
		value: 'Indian/Kerguelen',
		label: __('Indian/Kerguelen', 'ta-whatshelp'),
	},
	{
		value: 'Indian/Mahe',
		label: __('Indian/Mahe', 'ta-whatshelp'),
	},
	{
		value: 'Indian/Maldives',
		label: __('Indian/Maldives', 'ta-whatshelp'),
	},
	{
		value: 'Indian/Mauritius',
		label: __('Indian/Mauritius', 'ta-whatshelp'),
	},
	{
		value: 'Indian/Mayotte',
		label: __('Indian/Mayotte', 'ta-whatshelp'),
	},
	{
		value: 'Indian/Reunion',
		label: __('Indian/Reunion', 'ta-whatshelp'),
	},
	{
		value: 'Iran',
		label: __('Iran', 'ta-whatshelp'),
	},
	{
		value: 'Israel',
		label: __('Israel', 'ta-whatshelp'),
	},
	{
		value: 'Jamaica',
		label: __('Jamaica', 'ta-whatshelp'),
	},
	{
		value: 'Japan',
		label: __('Japan', 'ta-whatshelp'),
	},
	{
		value: 'Kwajalein',
		label: __('Kwajalein', 'ta-whatshelp'),
	},
	{
		value: 'Libya',
		label: __('Libya', 'ta-whatshelp'),
	},
	{
		value: 'MET',
		label: __('MET', 'ta-whatshelp'),
	},
	{
		value: 'MST',
		label: __('MST', 'ta-whatshelp'),
	},
	{
		value: 'MST7MDT',
		label: __('MST7MDT', 'ta-whatshelp'),
	},
	{
		value: 'Mexico/BajaNorte',
		label: __('Mexico/BajaNorte', 'ta-whatshelp'),
	},
	{
		value: 'Mexico/BajaSur',
		label: __('Mexico/BajaSur', 'ta-whatshelp'),
	},
	{
		value: 'Mexico/General',
		label: __('Mexico/General', 'ta-whatshelp'),
	},
	{
		value: 'NZ',
		label: __('NZ', 'ta-whatshelp'),
	},
	{
		value: 'NZ-CHAT',
		label: __('NZ-CHAT', 'ta-whatshelp'),
	},
	{
		value: 'Navajo',
		label: __('Navajo', 'ta-whatshelp'),
	},
	{
		value: 'PRC',
		label: __('PRC', 'ta-whatshelp'),
	},
	{
		value: 'PST8PDT',
		label: __('PST8PDT', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Apia',
		label: __('Pacific/Apia', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Auckland',
		label: __('Pacific/Auckland', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Bougainville',
		label: __('Pacific/Bougainville', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Chatham',
		label: __('Pacific/Chatham', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Chuuk',
		label: __('Pacific/Chuuk', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Easter',
		label: __('Pacific/Easter', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Efate',
		label: __('Pacific/Efate', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Enderbury',
		label: __('Pacific/Enderbury', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Fakaofo',
		label: __('Pacific/Fakaofo', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Fiji',
		label: __('Pacific/Fiji', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Funafuti',
		label: __('Pacific/Funafuti', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Galapagos',
		label: __('Pacific/Galapagos', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Gambier',
		label: __('Pacific/Gambier', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Guadalcanal',
		label: __('Pacific/Guadalcanal', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Guam',
		label: __('Pacific/Guam', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Honolulu',
		label: __('Pacific/Honolulu', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Johnston',
		label: __('Pacific/Johnston', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Kiritimati',
		label: __('Pacific/Kiritimati', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Kosrae',
		label: __('Pacific/Kosrae', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Kwajalein',
		label: __('Pacific/Kwajalein', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Majuro',
		label: __('Pacific/Majuro', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Marquesas',
		label: __('Pacific/Marquesas', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Midway',
		label: __('Pacific/Midway', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Nauru',
		label: __('Pacific/Nauru', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Niue',
		label: __('Pacific/Niue', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Norfolk',
		label: __('Pacific/Norfolk', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Noumea',
		label: __('Pacific/Noumea', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Pago_Pago',
		label: __('Pacific/Pago_Pago', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Palau',
		label: __('Pacific/Palau', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Pitcairn',
		label: __('Pacific/Pitcairn', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Pohnpei',
		label: __('Pacific/Pohnpei', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Ponape',
		label: __('Pacific/Ponape', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Port_Moresby',
		label: __('Pacific/Port_Moresby', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Rarotonga',
		label: __('Pacific/Rarotonga', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Saipan',
		label: __('Pacific/Saipan', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Samoa',
		label: __('Pacific/Samoa', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Tahiti',
		label: __('Pacific/Tahiti', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Tarawa',
		label: __('Pacific/Tarawa', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Tongatapu',
		label: __('Pacific/Tongatapu', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Truk',
		label: __('Pacific/Truk', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Wake',
		label: __('Pacific/Wake', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Wallis',
		label: __('Pacific/Wallis', 'ta-whatshelp'),
	},
	{
		value: 'Pacific/Yap',
		label: __('Pacific/Yap', 'ta-whatshelp'),
	},
	{
		value: 'Poland',
		label: __('Poland', 'ta-whatshelp'),
	},
	{
		value: 'Portugal',
		label: __('Portugal', 'ta-whatshelp'),
	},
	{
		value: 'ROC',
		label: __('ROC', 'ta-whatshelp'),
	},
	{
		value: 'ROK',
		label: __('ROK', 'ta-whatshelp'),
	},
	{
		value: 'Singapore',
		label: __('Singapore', 'ta-whatshelp'),
	},
	{
		value: 'Turkey',
		label: __('Turkey', 'ta-whatshelp'),
	},
	{
		value: 'UCT',
		label: __('UCT', 'ta-whatshelp'),
	},
	{
		value: 'US/Alaska',
		label: __('US/Alaska', 'ta-whatshelp'),
	},
	{
		value: 'US/Aleutian',
		label: __('US/Aleutian', 'ta-whatshelp'),
	},
	{
		value: 'US/Arizona',
		label: __('US/Arizona', 'ta-whatshelp'),
	},
	{
		value: 'US/Central',
		label: __('US/Central', 'ta-whatshelp'),
	},
	{
		value: 'US/East-Indiana',
		label: __('US/East-Indiana', 'ta-whatshelp'),
	},
	{
		value: 'US/Eastern',
		label: __('US/Eastern', 'ta-whatshelp'),
	},
	{
		value: 'US/Hawaii',
		label: __('US/Hawaii', 'ta-whatshelp'),
	},
	{
		value: 'US/Indiana-Starke',
		label: __('US/Indiana-Starke', 'ta-whatshelp'),
	},
	{
		value: 'US/Michigan',
		label: __('US/Michigan', 'ta-whatshelp'),
	},
	{
		value: 'US/Mountain',
		label: __('US/Mountain', 'ta-whatshelp'),
	},
	{
		value: 'US/Pacific',
		label: __('US/Pacific', 'ta-whatshelp'),
	},
	{
		value: 'US/Pacific-New',
		label: __('US/Pacific-New', 'ta-whatshelp'),
	},
	{
		value: 'US/Samoa',
		label: __('US/Samoa', 'ta-whatshelp'),
	},
	{
		value: 'UTC',
		label: __('UTC', 'ta-whatshelp'),
	},
	{
		value: 'Universal',
		label: __('Universal', 'ta-whatshelp'),
	},
	{
		value: 'W-SU',
		label: __('W-SU', 'ta-whatshelp'),
	},
	{
		value: 'WET',
		label: __('WET', 'ta-whatshelp'),
	},
	{
		value: 'Zulu',
		label: __('Zulu', 'ta-whatshelp'),
	},
];

export default function Edit(props) {
  const { attributes, setAttributes } = props;

  const {
    buttonSize,
    buttonType,
    borderRadius,
    text,
    info,
    title,
    online,
    offline,
    textAlignment,
    iconTarget,
    visibility,
    buttonLinkTarget,
    buttonTextColor,
    buttonBackgroundColor,
    numberInput,
    imageUrl,
    timeZone,
    mondayStart,
    mondayEnd,
    tuesdayStart,
    tuesdayEnd,
    wednesdayStart,
    wednesdayEnd,
    thursdayStart,
    thursdayEnd,
    fridayStart,
    fridayEnd,
    saturdayStart,
    saturdayEnd,
    sundayStart,
    sundayEnd
  } = attributes;

  const [filteredOptions, setFilteredOptions] = useState(timezones);

	function onInputChange(value) {
		setFilteredOptions(
			timezones.filter((timezone) =>
			timezone.label.toLowerCase().includes(value.toLowerCase())
			)
		);
	}

	function onFontSizeChange(value) {
		setAttributes({ timeZone: value });
	}
  const onSelectImage = (image) => {
    setAttributes({
      imageUrl: image.url,
    });
  };
  const onChangeAlignment = (newAlignment) => {
    setAttributes({ textAlignment: newAlignment });
  };
  const onChangeText = (newText) => {
    setAttributes({ text: newText });
  };
  const advancedBtnInfo = (newInfo) => {
    setAttributes({ info: newInfo });
  };
  const advancedBtnTitle = (newTitle) => {
    setAttributes({ title: newTitle });
  };
  const advancedBtnOnlineBadge = (newOnline) => {
    setAttributes({ online: newOnline });
  };
  const onIconTarget = (onIconTargets) => {
    setAttributes({ iconTarget: onIconTargets });
  };
  const onButtonLinkTarget = (newLinkTarget) => {
    setAttributes({ buttonLinkTarget: newLinkTarget });
  };
  const onChangeButtonBackgroundColor = (newBgColor) => {
    setAttributes({ buttonBackgroundColor: newBgColor });
  };
  const onChangeButtonTextColor = (newTextColor) => {
    setAttributes({ buttonTextColor: newTextColor });
  };

  const textClasses = classnames(`wHelpButtons-align-${textAlignment}`);

  const basicBtn = classnames(`wHelp-button-4 vc-btn-bg`);
  const classes = classnames(`wHelpButtons wHelp-button-4 wHelp-btn-bg`);

  const buttonSizeOptions = [
    { value: "size-small", label: __("Small", "ta-whatshelp") },
    { value: "size-medium", label: __("Medium", "ta-whatshelp") },
    { value: "size-large", label: __("Large", "ta-whatshelp") },
  ];
  const buttonTypeOptions = [
    { value: "basic-button", label: __("Basic Button", "ta-whatshelp") },
    { value: "advance-button", label: __("Advance Button", "ta-whatshelp") },
  ];
  const borderRadiusOptions = [
    { value: "border-squared", label: __("Border Squared", "ta-whatshelp") },
    { value: "border-rounded", label: __("Border Rounded", "ta-whatshelp") },
  ];
  const visibilityOn = [
    { value: "", label: __("Everywhere", "ta-whatshelp") },
    { value: "wHelp-desktop-only", label: __("Desktop only", "ta-whatshelp") },
    { value: "wHelp-tablet-only", label: __("Tablets only", "ta-whatshelp") },
    {
      value: "wHelp-mobile-tablet-only",
      label: __("Mobile and tablets", "ta-whatshelp"),
    },
    { value: "wHelp-mobile-only", label: __("Mobile only", "ta-whatshelp") },
  ];

  return (
    <>
      <InspectorControls>
        <PanelBody>
          <SelectControl
            label={__("Button Type", "ta-whatshelp")}
            value={buttonType}
            options={buttonTypeOptions.map(({ value, label }) => ({
              value,
              label,
            }))}
            onChange={(newButton) => {
              setAttributes({ buttonType: newButton });
            }}
          />
        </PanelBody>
      </InspectorControls>
      {buttonType === "basic-button" ? (
        <>
          <InspectorControls>
            <PanelBody
              title={__("WhatsApp Number", "ta-whatshelp")}
              initialOpen={false}
            >
              <TextControl
                label={__("Number", "ta-whatshelp")}
                value={numberInput}
                onChange={(val) => setAttributes({ numberInput: val })}
                help={__("Add your contact number including country code eg: +880123456789", "ta-whatshelp")}
              />
              <ToggleControl
                label={__("Open link in new window", "ta-whatshelp")}
                checked={buttonLinkTarget}
                onChange={onButtonLinkTarget}
              />
            </PanelBody>
            <PanelBody
              title={__("Button Style", "ta-whatshelp")}
              initialOpen={false}
            >
              <TextControl
                label={__("Button Text", "ta-whatshelp")}
                value={text}
                onChange={(val) => setAttributes({ text: val })}
              />
              <SelectControl
                label={__("Button Size", "ta-whatshelp")}
                value={buttonSize}
                options={buttonSizeOptions.map(({ value, label }) => ({
                  value,
                  label,
                }))}
                onChange={(newSize) => {
                  setAttributes({ buttonSize: newSize });
                }}
              />
              <SelectControl
                label={__("Border Radius", "ta-whatshelp")}
                value={borderRadius}
                options={borderRadiusOptions.map(({ value, label }) => ({
                  value,
                  label,
                }))}
                onChange={(newSize) => {
                  setAttributes({ borderRadius: newSize });
                }}
              />
              <SelectControl
                label={__("Visibility on", "ta-whatshelp")}
                value={visibility}
                options={visibilityOn.map(({ value, label }) => ({
                  value,
                  label,
                }))}
                onChange={(newSize) => {
                  setAttributes({ visibility: newSize });
                }}
              />
            </PanelBody>
            <PanelBody title={__("Icon", "ta-whatshelp")} initialOpen={false}>
              <ToggleControl
                label={__("Add Icon", "ta-whatshelp")}
                checked={iconTarget}
                onChange={onIconTarget}
              />
            </PanelBody>
          </InspectorControls>
          <BlockControls>
            <AlignmentToolbar
              value={textAlignment}
              onChange={onChangeAlignment}
            />
          </BlockControls>
          <div className={`button-wrapper ${textClasses}`}>
            <a
              {...useBlockProps({
                className: `${basicBtn} ${buttonSize} ${borderRadius} ${visibility}`,
              })}
            >
              {iconTarget && (
                <span className="dashicons dashicons-whatsapp"></span>
              )}
              <RichText
                onChange={onChangeText}
                value={text}
                placeholder={__("How can I help you?", "ta-whatshelp")}
                tagName="span"
                allowedFormats={[]}
              />
            </a>
          </div>
        </>
      ) : (
        <>
          <InspectorControls>
            <PanelBody
              title={__("General Settings", "ta-whatshelp")}
              initialOpen={false}
            >
              <TextControl
                label={__("Number", "ta-whatshelp")}
                value={numberInput}
                onChange={(val) => setAttributes({ numberInput: val })}
                help={__("Add your contact number including country code eg: +880123456789", "ta-whatshelp")}
              />
              <ToggleControl
                label={__("Open link in new window", "ta-whatshelp")}
                checked={buttonLinkTarget}
                onChange={onButtonLinkTarget}
              />
              <MediaUpload
                label={__("Agent Image", "ta-whatshelp")}
                onSelect={onSelectImage}
                allowedTypes={["image"]}
                render={({ open }) => (
                  <Button
                    onClick={open}
                    style={{ marginBottom: "20px", fontSize: "16px" }}
                  >
                    <span style={{ marginRight: "5px" }} className="dashicons dashicons-cloud-upload"></span>{" "}
                    Agent photo
                  </Button>
                )}
              />
              <TextControl
                label={__("Agent Info", "ta-whatshelp")}
                value={info}
                onChange={(val) => setAttributes({ info: val })}
                help={__("Write agent name & agent title", "ta-whatshelp")}
              />
              <TextControl
                label={__("Button Label", "ta-whatshelp")}
                value={title}
                onChange={(val) => setAttributes({ title: val })}
                help={__("Add custom button label", "ta-whatshelp")}
              />
              <TextControl
                label={__("Online Badge Text", "ta-whatshelp")}
                value={online}
                onChange={(val) => setAttributes({ online: val })}
                help={__("Add custom badget text when user in online.", "ta-whatshelp")}
              />
              <TextControl
                label={__("Offline Badge Text", "ta-whatshelp")}
                value={offline}
                onChange={(val) => setAttributes({ offline: val })}
                help={__("Add custom badget text when user in offline.", "ta-whatshelp")}
              />
            </PanelBody>
            <PanelBody
							title={__('Chat Settings', 'ta-whatshelp')}
							initialOpen={false}
						>
						  <ComboboxControl
								label={__('Timezone', 'ta-whatshelp')}
								value={timeZone}
								options={filteredOptions}
								onChange={onFontSizeChange}
								onInputChange={onInputChange}
                help={__("When using the date and time from the user browser you can transform it to your current timezone (in case your user is in a different timezone)", "ta-whatshelp")}
							/>
              <PanelBody
                title={__("Monthday", "ta-whatshelp")}
                initialOpen={false}
              >
                <TextControl
                  label={__("Start Time", "ta-whatshelp")}
                  value={mondayStart}
                  onChange={(val) => setAttributes({ mondayStart: val })}
                  placeholder={__("00:00", "ta-whatshelp")}
                />
                <TextControl
                  label={__("End Time", "ta-whatshelp")}
                  value={mondayEnd}
                  onChange={(val) => setAttributes({ mondayEnd: val })}
                  placeholder={__("24:00", "ta-whatshelp")}
                />
              </PanelBody>
              <PanelBody
                title={__("Tuesday", "ta-whatshelp")}
                initialOpen={false}
              >
                <TextControl
                  label={__("Start Time", "ta-whatshelp")}
                  value={tuesdayStart}
                  onChange={(val) => setAttributes({ tuesdayStart: val })}
                  placeholder={__("00:00", "ta-whatshelp")}
                />
                <TextControl
                  label={__("End Time", "ta-whatshelp")}
                  value={tuesdayEnd}
                  onChange={(val) => setAttributes({ tuesdayEnd: val })}
                  placeholder={__("24:00", "ta-whatshelp")}
                />
              </PanelBody>
              <PanelBody
                title={__("Wednesday", "ta-whatshelp")}
                initialOpen={false}
              >
                <TextControl
                  label={__("Start Time", "ta-whatshelp")}
                  value={wednesdayStart}
                  onChange={(val) => setAttributes({ wednesdayStart: val })}
                  placeholder={__("00:00", "ta-whatshelp")}
                />
                <TextControl
                  label={__("End Time", "ta-whatshelp")}
                  value={wednesdayEnd}
                  onChange={(val) => setAttributes({ wednesdayEnd: val })}
                  placeholder={__("24:00", "ta-whatshelp")}
                />
              </PanelBody>
              <PanelBody
                title={__("Thursday", "ta-whatshelp")}
                initialOpen={false}
              >
                <TextControl
                  label={__("Start Time", "ta-whatshelp")}
                  value={thursdayStart}
                  onChange={(val) => setAttributes({ thursdayStart: val })}
                  placeholder={__("00:00", "ta-whatshelp")}
                />
                <TextControl
                  label={__("End Time", "ta-whatshelp")}
                  value={thursdayEnd}
                  onChange={(val) => setAttributes({ thursdayEnd: val })}
                  placeholder={__("24:00", "ta-whatshelp")}
                />
              </PanelBody>
              <PanelBody
                title={__("Friday", "ta-whatshelp")}
                initialOpen={false}
              >
                <TextControl
                  label={__("Start Time", "ta-whatshelp")}
                  value={fridayStart}
                  onChange={(val) => setAttributes({ fridayStart: val })}
                  placeholder={__("00:00", "ta-whatshelp")}
                />
                <TextControl
                  label={__("End Time", "ta-whatshelp")}
                  value={fridayEnd}
                  onChange={(val) => setAttributes({ fridayEnd: val })}
                  placeholder={__("24:00", "ta-whatshelp")}
                />
              </PanelBody>
              <PanelBody
                title={__("Saturday", "ta-whatshelp")}
                initialOpen={false}
              >
                <TextControl
                  label={__("Start Time", "ta-whatshelp")}
                  value={saturdayStart}
                  onChange={(val) => setAttributes({ saturdayStart: val })}
                  placeholder={__("00:00", "ta-whatshelp")}
                />
                <TextControl
                  label={__("End Time", "ta-whatshelp")}
                  value={saturdayEnd}
                  onChange={(val) => setAttributes({ saturdayEnd: val })}
                  placeholder={__("24:00", "ta-whatshelp")}
                />
              </PanelBody>
              <PanelBody
                title={__("Sunday", "ta-whatshelp")}
                initialOpen={false}
              >
                <TextControl
                  label={__("Start Time", "ta-whatshelp")}
                  value={sundayStart}
                  onChange={(val) => setAttributes({ sundayStart: val })}
                  placeholder={__("00:00", "ta-whatshelp")}
                />
                <TextControl
                  label={__("End Time", "ta-whatshelp")}
                  value={sundayEnd}
                  onChange={(val) => setAttributes({ sundayEnd: val })}
                  placeholder={__("24:00", "ta-whatshelp")}
                />
              </PanelBody>
						</PanelBody>
            <PanelBody
              title={__("Appearance settings", "ta-whatshelp")}
              initialOpen={false}
            >
              <SelectControl
                label={__("Visibility on", "ta-whatshelp")}
                value={visibility}
                options={visibilityOn.map(({ value, label }) => ({
                  value,
                  label,
                }))}
                onChange={(newSize) => {
                  setAttributes({ visibility: newSize });
                }}
              />
              <SelectControl
                label={__("Size", "ta-whatshelp")}
                value={buttonSize}
                options={buttonSizeOptions.map(({ value, label }) => ({
                  value,
                  label,
                }))}
                onChange={(newSize) => {
                  setAttributes({ buttonSize: newSize });
                }}
              />
              <SelectControl
                label={__("Border Radius", "ta-whatshelp")}
                value={borderRadius}
                options={borderRadiusOptions.map(({ value, label }) => ({
                  value,
                  label,
                }))}
                onChange={(newSize) => {
                  setAttributes({ borderRadius: newSize });
                }}
              />
              <PanelColorSettings
                initialOpen
                disableCustomColors={false}
                colorSettings={[
                  {
                    value: buttonBackgroundColor,
                    onChange: onChangeButtonBackgroundColor,
                    label: __("Button Background Color", "ta-whatshelp"),
                  },
                  {
                    value: buttonTextColor,
                    onChange: onChangeButtonTextColor,
                    label: __("Button Text Color", "ta-whatshelp"),
                  },
                ]}
              >
                <ContrastChecker
                  textColor={buttonTextColor}
                  backgroundColor={buttonBackgroundColor}
                />
              </PanelColorSettings>
            </PanelBody>
          </InspectorControls>
          <BlockControls>
            <AlignmentToolbar
              value={textAlignment}
              onChange={onChangeAlignment}
            />
          </BlockControls>
          <div className={`button-wrapper ${textClasses}`}>
            <a
              {...useBlockProps({
                className: `avatar-active ${classes} ${buttonSize} ${borderRadius} ${visibility}`,
              })}
              data-btnavailablety={`{ "monday":"${mondayStart}-${mondayEnd}", "tuesday":"${tuesdayStart}-${tuesdayEnd}", "wednesday":"${wednesdayStart}-${wednesdayEnd}", "thursday":"${thursdayStart}-${thursdayEnd}", "friday":"${fridayStart}-${fridayEnd}", "saturday":"${saturdayStart}-${saturdayEnd}", "sunday":"${sundayStart}-${sundayEnd}" }`}
              data-timezone={timeZone}
            >
              <img src={imageUrl} alt="agent" />
              <div className="info-wrapper">
                <RichText
                  onChange={advancedBtnInfo}
                  value={info}
                  placeholder={__("Robert / Sales Support", "ta-whatshelp")}
                  tagName="p"
                  allowedFormats={[]}
                  className="info"
                />
                <RichText
                  onChange={advancedBtnTitle}
                  value={title}
                  placeholder={__("How can I help you?", "ta-whatshelp")}
                  tagName="p"
                  allowedFormats={[]}
                  className="title"
                />
                <RichText
                  style={{
                    backgroundColor: buttonBackgroundColor,
                    color: buttonTextColor,
                  }}
                  onChange={advancedBtnOnlineBadge}
                  value={online}
                  placeholder={__("I am online", "ta-whatshelp")}
                  tagName="p"
                  allowedFormats={[]}
                  className="online"
                />
                <RichText
                  style={{
                    backgroundColor: buttonBackgroundColor,
                    color: buttonTextColor,
                  }}
                  onChange={advancedBtnOnlineBadge}
                  value={offline}
                  placeholder={__("I'm not available", "ta-whatshelp")}
                  tagName="p"
                  allowedFormats={[]}
                  className="offline"
                />
              </div>
            </a>
          </div>
        </>
      )}
    </>
  );
}
