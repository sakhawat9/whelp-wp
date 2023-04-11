/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);








const agentImage = __webpack_require__(/*! ./images/user.jpg */ "./src/images/user.jpg");
const {
  SelectControl,
  TextControl
} = wp.components;
const timezones = [{
  value: 'Africa/Abidjan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Abidjan', 'ta-whatshelp')
}, {
  value: 'Africa/Accra',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Accra', 'ta-whatshelp')
}, {
  value: 'Africa/Addis_Ababa',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Addis_Ababa', 'ta-whatshelp')
}, {
  value: 'Africa/Algiers',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Algiers', 'ta-whatshelp')
}, {
  value: 'Africa/Asmara',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Asmara', 'ta-whatshelp')
}, {
  value: 'Africa/Asmera',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Asmera', 'ta-whatshelp')
}, {
  value: 'Africa/Bamako',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Bamako', 'ta-whatshelp')
}, {
  value: 'Africa/Bangui',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Bangui', 'ta-whatshelp')
}, {
  value: 'Africa/Banjul',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Banjul', 'ta-whatshelp')
}, {
  value: 'Africa/Bissau',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Bissau', 'ta-whatshelp')
}, {
  value: 'Africa/Blantyre',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Blantyre', 'ta-whatshelp')
}, {
  value: 'Africa/Brazzaville',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Brazzaville', 'ta-whatshelp')
}, {
  value: 'Africa/Bujumbura',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Bujumbura', 'ta-whatshelp')
}, {
  value: 'Africa/Cairo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Cairo', 'ta-whatshelp')
}, {
  value: 'Africa/Casablanca',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Casablanca', 'ta-whatshelp')
}, {
  value: 'Africa/Ceuta',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Ceuta', 'ta-whatshelp')
}, {
  value: 'Africa/Conakry',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Conakry', 'ta-whatshelp')
}, {
  value: 'Africa/Dakar',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Dakar', 'ta-whatshelp')
}, {
  value: 'Africa/Dar_es_Salaam',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Dar_es_Salaam', 'ta-whatshelp')
}, {
  value: 'Africa/Djibouti',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Djibouti', 'ta-whatshelp')
}, {
  value: 'Africa/Douala',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Douala', 'ta-whatshelp')
}, {
  value: 'Africa/El_Aaiun',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/El_Aaiun', 'ta-whatshelp')
}, {
  value: 'Africa/Freetown',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Freetown', 'ta-whatshelp')
}, {
  value: 'Africa/Gaborone',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Gaborone', 'ta-whatshelp')
}, {
  value: 'Africa/Harare',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Harare', 'ta-whatshelp')
}, {
  value: 'Africa/Johannesburg',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Johannesburg', 'ta-whatshelp')
}, {
  value: 'Africa/Juba',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Juba', 'ta-whatshelp')
}, {
  value: 'Africa/Kampala',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Kampala', 'ta-whatshelp')
}, {
  value: 'Africa/Khartoum',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Khartoum', 'ta-whatshelp')
}, {
  value: 'Africa/Kigali',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Kigali', 'ta-whatshelp')
}, {
  value: 'Africa/Kinshasa',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Kinshasa', 'ta-whatshelp')
}, {
  value: 'Africa/Lagos',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Lagos', 'ta-whatshelp')
}, {
  value: 'Africa/Libreville',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Libreville', 'ta-whatshelp')
}, {
  value: 'Africa/Lome',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Lome', 'ta-whatshelp')
}, {
  value: 'Africa/Luanda',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Luanda', 'ta-whatshelp')
}, {
  value: 'Africa/Lubumbashi',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Lubumbashi', 'ta-whatshelp')
}, {
  value: 'Africa/Lusaka',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Lusaka', 'ta-whatshelp')
}, {
  value: 'Africa/Malabo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Malabo', 'ta-whatshelp')
}, {
  value: 'Africa/Maputo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Maputo', 'ta-whatshelp')
}, {
  value: 'Africa/Maseru',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Maseru', 'ta-whatshelp')
}, {
  value: 'Africa/Mbabane',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Mbabane', 'ta-whatshelp')
}, {
  value: 'Africa/Mogadishu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Mogadishu', 'ta-whatshelp')
}, {
  value: 'Africa/Monrovia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Monrovia', 'ta-whatshelp')
}, {
  value: 'Africa/Nairobi',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Nairobi', 'ta-whatshelp')
}, {
  value: 'Africa/Ndjamena',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Ndjamena', 'ta-whatshelp')
}, {
  value: 'Africa/Niamey',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Niamey', 'ta-whatshelp')
}, {
  value: 'Africa/Nouakchott',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Nouakchott', 'ta-whatshelp')
}, {
  value: 'Africa/Ouagadougou',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Ouagadougou', 'ta-whatshelp')
}, {
  value: 'Africa/Porto-Novo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Porto-Novo', 'ta-whatshelp')
}, {
  value: 'Africa/Sao_Tome',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Sao_Tome', 'ta-whatshelp')
}, {
  value: 'Africa/Timbuktu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Timbuktu', 'ta-whatshelp')
}, {
  value: 'Africa/Tripoli',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Tripoli', 'ta-whatshelp')
}, {
  value: 'Africa/Tunis',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Tunis', 'ta-whatshelp')
}, {
  value: 'Africa/Windhoek',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Windhoek', 'ta-whatshelp')
}, {
  value: 'America/Adak',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Adak', 'ta-whatshelp')
}, {
  value: 'America/Anchorage',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Anchorage', 'ta-whatshelp')
}, {
  value: 'America/Anguilla',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Anguilla', 'ta-whatshelp')
}, {
  value: 'America/Antigua',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Antigua', 'ta-whatshelp')
}, {
  value: 'America/Araguaina',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Araguaina', 'ta-whatshelp')
}, {
  value: 'America/Argentina/Buenos_Aires',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/Buenos_Aires', 'ta-whatshelp')
}, {
  value: 'America/Argentina/Catamarca',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/Catamarca', 'ta-whatshelp')
}, {
  value: 'America/Argentina/ComodRivadavia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/ComodRivadavia', 'ta-whatshelp')
}, {
  value: 'America/Argentina/Cordoba',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/Cordoba', 'ta-whatshelp')
}, {
  value: 'America/Argentina/Jujuy',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/Jujuy', 'ta-whatshelp')
}, {
  value: 'America/Argentina/La_Rioja',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/La_Rioja', 'ta-whatshelp')
}, {
  value: 'America/Argentina/Mendoza',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/Mendoza', 'ta-whatshelp')
}, {
  value: 'America/Argentina/Rio_Gallegos',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/Rio_Gallegos', 'ta-whatshelp')
}, {
  value: 'America/Argentina/Salta',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/Salta', 'ta-whatshelp')
}, {
  value: 'America/Argentina/San_Juan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/San_Juan', 'ta-whatshelp')
}, {
  value: 'America/Argentina/San_Luis',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/San_Luis', 'ta-whatshelp')
}, {
  value: 'America/Argentina/Tucuman',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/Tucuman', 'ta-whatshelp')
}, {
  value: 'America/Argentina/Ushuaia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/Ushuaia', 'ta-whatshelp')
}, {
  value: 'America/Aruba',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Aruba', 'ta-whatshelp')
}, {
  value: 'America/Asuncion',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Asuncion', 'ta-whatshelp')
}, {
  value: 'America/Atikokan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Atikokan', 'ta-whatshelp')
}, {
  value: 'America/Atka',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Atka', 'ta-whatshelp')
}, {
  value: 'America/Bahia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Bahia', 'ta-whatshelp')
}, {
  value: 'America/Bahia_Banderas',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Bahia_Banderas', 'ta-whatshelp')
}, {
  value: 'America/Barbados',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Barbados', 'ta-whatshelp')
}, {
  value: 'America/Belem',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Belem', 'ta-whatshelp')
}, {
  value: 'America/Belize',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Belize', 'ta-whatshelp')
}, {
  value: 'America/Blanc-Sablon',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Blanc-Sablon', 'ta-whatshelp')
}, {
  value: 'America/Boa_Vista',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Boa_Vista', 'ta-whatshelp')
}, {
  value: 'America/Bogota',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Bogota', 'ta-whatshelp')
}, {
  value: 'America/Boise',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Boise', 'ta-whatshelp')
}, {
  value: 'America/Buenos_Aires',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Buenos_Aires', 'ta-whatshelp')
}, {
  value: 'America/Cambridge_Bay',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Cambridge_Bay', 'ta-whatshelp')
}, {
  value: 'America/Campo_Grande',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Campo_Grande', 'ta-whatshelp')
}, {
  value: 'America/Cancun',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Cancun', 'ta-whatshelp')
}, {
  value: 'America/Caracas',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Caracas', 'ta-whatshelp')
}, {
  value: 'America/Catamarca',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Catamarca', 'ta-whatshelp')
}, {
  value: 'America/Cayenne',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Cayenne', 'ta-whatshelp')
}, {
  value: 'America/Cayman',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Cayman', 'ta-whatshelp')
}, {
  value: 'America/Chicago',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Chicago', 'ta-whatshelp')
}, {
  value: 'America/Chihuahua',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Chihuahua', 'ta-whatshelp')
}, {
  value: 'America/Coral_Harbour',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Coral_Harbour', 'ta-whatshelp')
}, {
  value: 'America/Cordoba',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Cordoba', 'ta-whatshelp')
}, {
  value: 'America/Costa_Rica',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Costa_Rica', 'ta-whatshelp')
}, {
  value: 'America/Creston',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Creston', 'ta-whatshelp')
}, {
  value: 'America/Cuiaba',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Cuiaba', 'ta-whatshelp')
}, {
  value: 'America/Curacao',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Curacao', 'ta-whatshelp')
}, {
  value: 'America/Danmarkshavn',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Danmarkshavn', 'ta-whatshelp')
}, {
  value: 'America/Dawson',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Dawson', 'ta-whatshelp')
}, {
  value: 'America/Dawson_Creek',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Dawson_Creek', 'ta-whatshelp')
}, {
  value: 'America/Denver',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Denver', 'ta-whatshelp')
}, {
  value: 'America/Detroit',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Detroit', 'ta-whatshelp')
}, {
  value: 'America/Dominica',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Dominica', 'ta-whatshelp')
}, {
  value: 'America/Edmonton',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Edmonton', 'ta-whatshelp')
}, {
  value: 'America/Eirunepe',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Eirunepe', 'ta-whatshelp')
}, {
  value: 'America/El_Salvador',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/El_Salvador', 'ta-whatshelp')
}, {
  value: 'America/Ensenada',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Ensenada', 'ta-whatshelp')
}, {
  value: 'America/Fort_Nelson',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Fort_Nelson', 'ta-whatshelp')
}, {
  value: 'America/Fort_Wayne',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Fort_Wayne', 'ta-whatshelp')
}, {
  value: 'America/Fortaleza',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Fortaleza', 'ta-whatshelp')
}, {
  value: 'America/Glace_Bay',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Glace_Bay', 'ta-whatshelp')
}, {
  value: 'America/Godthab',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Godthab', 'ta-whatshelp')
}, {
  value: 'America/Goose_Bay',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Goose_Bay', 'ta-whatshelp')
}, {
  value: 'America/Grand_Turk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Grand_Turk', 'ta-whatshelp')
}, {
  value: 'America/Grenada',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Grenada', 'ta-whatshelp')
}, {
  value: 'America/Guadeloupe',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Guadeloupe', 'ta-whatshelp')
}, {
  value: 'America/Guatemala',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Guatemala', 'ta-whatshelp')
}, {
  value: 'America/Guayaquil',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Guayaquil', 'ta-whatshelp')
}, {
  value: 'America/Guyana',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Guyana', 'ta-whatshelp')
}, {
  value: 'America/Halifax',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Halifax', 'ta-whatshelp')
}, {
  value: 'America/Havana',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Havana', 'ta-whatshelp')
}, {
  value: 'America/Hermosillo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Hermosillo', 'ta-whatshelp')
}, {
  value: 'America/Indiana/Indianapolis',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Indiana/Indianapolis', 'ta-whatshelp')
}, {
  value: 'America/Indiana/Knox',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Indiana/Knox', 'ta-whatshelp')
}, {
  value: 'America/Indiana/Marengo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Indiana/Marengo', 'ta-whatshelp')
}, {
  value: 'America/Indiana/Petersburg',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Indiana/Petersburg', 'ta-whatshelp')
}, {
  value: 'America/Indiana/Tell_City',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Indiana/Tell_City', 'ta-whatshelp')
}, {
  value: 'America/Indiana/Vevay',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Indiana/Vevay', 'ta-whatshelp')
}, {
  value: 'America/Indiana/Vincennes',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Indiana/Vincennes', 'ta-whatshelp')
}, {
  value: 'America/Indiana/Winamac',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Indiana/Winamac', 'ta-whatshelp')
}, {
  value: 'America/Indianapolis',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Indianapolis', 'ta-whatshelp')
}, {
  value: 'America/Inuvik',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Inuvik', 'ta-whatshelp')
}, {
  value: 'America/Iqaluit',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Iqaluit', 'ta-whatshelp')
}, {
  value: 'America/Jamaica',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Jamaica', 'ta-whatshelp')
}, {
  value: 'America/Jujuy',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Jujuy', 'ta-whatshelp')
}, {
  value: 'America/Juneau',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Juneau', 'ta-whatshelp')
}, {
  value: 'America/Kentucky/Louisville',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Kentucky/Louisville', 'ta-whatshelp')
}, {
  value: 'America/Kentucky/Monticello',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Kentucky/Monticello', 'ta-whatshelp')
}, {
  value: 'America/Knox_IN',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Knox_IN', 'ta-whatshelp')
}, {
  value: 'America/Kralendijk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Kralendijk', 'ta-whatshelp')
}, {
  value: 'America/La_Paz',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/La_Paz', 'ta-whatshelp')
}, {
  value: 'America/Lima',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Lima', 'ta-whatshelp')
}, {
  value: 'America/Los_Angeles',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Los_Angeles', 'ta-whatshelp')
}, {
  value: 'America/Louisville',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Louisville', 'ta-whatshelp')
}, {
  value: 'America/Lower_Princes',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Lower_Princes', 'ta-whatshelp')
}, {
  value: 'America/Maceio',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Maceio', 'ta-whatshelp')
}, {
  value: 'America/Managua',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Managua', 'ta-whatshelp')
}, {
  value: 'America/Manaus',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Manaus', 'ta-whatshelp')
}, {
  value: 'America/Marigot',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Marigot', 'ta-whatshelp')
}, {
  value: 'America/Martinique',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Martinique', 'ta-whatshelp')
}, {
  value: 'America/Matamoros',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Matamoros', 'ta-whatshelp')
}, {
  value: 'America/Mazatlan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Mazatlan', 'ta-whatshelp')
}, {
  value: 'America/Mendoza',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Mendoza', 'ta-whatshelp')
}, {
  value: 'America/Menominee',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Menominee', 'ta-whatshelp')
}, {
  value: 'America/Merida',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Merida', 'ta-whatshelp')
}, {
  value: 'America/Metlakatla',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Metlakatla', 'ta-whatshelp')
}, {
  value: 'America/Mexico_City',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Mexico_City', 'ta-whatshelp')
}, {
  value: 'America/Miquelon',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Miquelon', 'ta-whatshelp')
}, {
  value: 'America/Moncton',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Moncton', 'ta-whatshelp')
}, {
  value: 'America/Monterrey',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Monterrey', 'ta-whatshelp')
}, {
  value: 'America/Montevideo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Montevideo', 'ta-whatshelp')
}, {
  value: 'America/Montreal',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Montreal', 'ta-whatshelp')
}, {
  value: 'America/Montserrat',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Montserrat', 'ta-whatshelp')
}, {
  value: 'America/Nassau',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Nassau', 'ta-whatshelp')
}, {
  value: 'America/New_York',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/New_York', 'ta-whatshelp')
}, {
  value: 'America/Nipigon',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Nipigon', 'ta-whatshelp')
}, {
  value: 'America/Nome',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Nome', 'ta-whatshelp')
}, {
  value: 'America/Noronha',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Noronha', 'ta-whatshelp')
}, {
  value: 'America/North_Dakota/Beulah',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/North_Dakota/Beulah', 'ta-whatshelp')
}, {
  value: 'America/North_Dakota/Center',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/North_Dakota/Center', 'ta-whatshelp')
}, {
  value: 'America/North_Dakota/New_Salem',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/North_Dakota/New_Salem', 'ta-whatshelp')
}, {
  value: 'America/Ojinaga',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Ojinaga', 'ta-whatshelp')
}, {
  value: 'America/Panama',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Panama', 'ta-whatshelp')
}, {
  value: 'America/Pangnirtung',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Pangnirtung', 'ta-whatshelp')
}, {
  value: 'America/Paramaribo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Paramaribo', 'ta-whatshelp')
}, {
  value: 'America/Phoenix',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Phoenix', 'ta-whatshelp')
}, {
  value: 'America/Port-au-Prince',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Port-au-Prince', 'ta-whatshelp')
}, {
  value: 'America/Port_of_Spain',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Port_of_Spain', 'ta-whatshelp')
}, {
  value: 'America/Porto_Acre',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Porto_Acre', 'ta-whatshelp')
}, {
  value: 'America/Porto_Velho',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Porto_Velho', 'ta-whatshelp')
}, {
  value: 'America/Puerto_Rico',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Puerto_Rico', 'ta-whatshelp')
}, {
  value: 'America/Punta_Arenas',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Punta_Arenas', 'ta-whatshelp')
}, {
  value: 'America/Rainy_River',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Rainy_River', 'ta-whatshelp')
}, {
  value: 'America/Rankin_Inlet',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Rankin_Inlet', 'ta-whatshelp')
}, {
  value: 'America/Recife',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Recife', 'ta-whatshelp')
}, {
  value: 'America/Regina',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Regina', 'ta-whatshelp')
}, {
  value: 'America/Resolute',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Resolute', 'ta-whatshelp')
}, {
  value: 'America/Rio_Branco',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Rio_Branco', 'ta-whatshelp')
}, {
  value: 'America/Rosario',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Rosario', 'ta-whatshelp')
}, {
  value: 'America/Santa_Isabel',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Santa_Isabel', 'ta-whatshelp')
}, {
  value: 'America/Santarem',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Santarem', 'ta-whatshelp')
}, {
  value: 'America/Santiago',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Santiago', 'ta-whatshelp')
}, {
  value: 'America/Santo_Domingo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Santo_Domingo', 'ta-whatshelp')
}, {
  value: 'America/Sao_Paulo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Sao_Paulo', 'ta-whatshelp')
}, {
  value: 'America/Scoresbysund',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Scoresbysund', 'ta-whatshelp')
}, {
  value: 'America/Shiprock',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Shiprock', 'ta-whatshelp')
}, {
  value: 'America/Sitka',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Sitka', 'ta-whatshelp')
}, {
  value: 'America/St_Barthelemy',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/St_Barthelemy', 'ta-whatshelp')
}, {
  value: 'America/St_Johns',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/St_Johns', 'ta-whatshelp')
}, {
  value: 'America/St_Kitts',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/St_Kitts', 'ta-whatshelp')
}, {
  value: 'America/St_Lucia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/St_Lucia', 'ta-whatshelp')
}, {
  value: 'America/St_Thomas',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/St_Thomas', 'ta-whatshelp')
}, {
  value: 'America/St_Vincent',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/St_Vincent', 'ta-whatshelp')
}, {
  value: 'America/Swift_Current',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Swift_Current', 'ta-whatshelp')
}, {
  value: 'America/Tegucigalpa',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Tegucigalpa', 'ta-whatshelp')
}, {
  value: 'America/Thule',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Thule', 'ta-whatshelp')
}, {
  value: 'America/Thunder_Bay',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Thunder_Bay', 'ta-whatshelp')
}, {
  value: 'America/Tijuana',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Tijuana', 'ta-whatshelp')
}, {
  value: 'America/Toronto',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Toronto', 'ta-whatshelp')
}, {
  value: 'America/Tortola',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Tortola', 'ta-whatshelp')
}, {
  value: 'America/Vancouver',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Vancouver', 'ta-whatshelp')
}, {
  value: 'America/Virgin',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Virgin', 'ta-whatshelp')
}, {
  value: 'America/Whitehorse',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Whitehorse', 'ta-whatshelp')
}, {
  value: 'America/Winnipeg',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Winnipeg', 'ta-whatshelp')
}, {
  value: 'America/Yakutat',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Yakutat', 'ta-whatshelp')
}, {
  value: 'America/Yellowknife',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Yellowknife', 'ta-whatshelp')
}, {
  value: 'Antarctica/Casey',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/Casey', 'ta-whatshelp')
}, {
  value: 'Antarctica/Davis',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/Davis', 'ta-whatshelp')
}, {
  value: 'Antarctica/DumontDUrville',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/DumontDUrville', 'ta-whatshelp')
}, {
  value: 'Antarctica/Macquarie',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/Macquarie', 'ta-whatshelp')
}, {
  value: 'Antarctica/Mawson',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/Mawson', 'ta-whatshelp')
}, {
  value: 'Antarctica/McMurdo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/McMurdo', 'ta-whatshelp')
}, {
  value: 'Antarctica/Palmer',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/Palmer', 'ta-whatshelp')
}, {
  value: 'Antarctica/Rothera',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/Rothera', 'ta-whatshelp')
}, {
  value: 'Antarctica/South_Pole',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/South_Pole', 'ta-whatshelp')
}, {
  value: 'Antarctica/Syowa',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/Syowa', 'ta-whatshelp')
}, {
  value: 'Antarctica/Troll',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/Troll', 'ta-whatshelp')
}, {
  value: 'Antarctica/Vostok',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/Vostok', 'ta-whatshelp')
}, {
  value: 'Arctic/Longyearbyen',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Arctic/Longyearbyen', 'ta-whatshelp')
}, {
  value: 'Asia/Aden',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Aden', 'ta-whatshelp')
}, {
  value: 'Asia/Almaty',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Almaty', 'ta-whatshelp')
}, {
  value: 'Asia/Amman',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Amman', 'ta-whatshelp')
}, {
  value: 'Asia/Anadyr',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Anadyr', 'ta-whatshelp')
}, {
  value: 'Asia/Aqtau',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Aqtau', 'ta-whatshelp')
}, {
  value: 'Asia/Aqtobe',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Aqtobe', 'ta-whatshelp')
}, {
  value: 'Asia/Ashgabat',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Ashgabat', 'ta-whatshelp')
}, {
  value: 'Asia/Ashkhabad',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Ashkhabad', 'ta-whatshelp')
}, {
  value: 'Asia/Atyrau',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Atyrau', 'ta-whatshelp')
}, {
  value: 'Asia/Baghdad',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Baghdad', 'ta-whatshelp')
}, {
  value: 'Asia/Bahrain',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Bahrain', 'ta-whatshelp')
}, {
  value: 'Asia/Baku',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Baku', 'ta-whatshelp')
}, {
  value: 'Asia/Bangkok',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Bangkok', 'ta-whatshelp')
}, {
  value: 'Asia/Barnaul',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Barnaul', 'ta-whatshelp')
}, {
  value: 'Asia/Beirut',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Beirut', 'ta-whatshelp')
}, {
  value: 'Asia/Bishkek',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Bishkek', 'ta-whatshelp')
}, {
  value: 'Asia/Brunei',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Brunei', 'ta-whatshelp')
}, {
  value: 'Asia/Calcutta',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Calcutta', 'ta-whatshelp')
}, {
  value: 'Asia/Chita',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Chita', 'ta-whatshelp')
}, {
  value: 'Asia/Choibalsan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Choibalsan', 'ta-whatshelp')
}, {
  value: 'Asia/Chongqing',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Chongqing', 'ta-whatshelp')
}, {
  value: 'Asia/Chungking',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Chungking', 'ta-whatshelp')
}, {
  value: 'Asia/Colombo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Colombo', 'ta-whatshelp')
}, {
  value: 'Asia/Dacca',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Dacca', 'ta-whatshelp')
}, {
  value: 'Asia/Damascus',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Damascus', 'ta-whatshelp')
}, {
  value: 'Asia/Dhaka',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Dhaka', 'ta-whatshelp')
}, {
  value: 'Asia/Dili',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Dili', 'ta-whatshelp')
}, {
  value: 'Asia/Dubai',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Dubai', 'ta-whatshelp')
}, {
  value: 'Asia/Dushanbe',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Dushanbe', 'ta-whatshelp')
}, {
  value: 'Asia/Famagusta',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Famagusta', 'ta-whatshelp')
}, {
  value: 'Asia/Gaza',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Gaza', 'ta-whatshelp')
}, {
  value: 'Asia/Harbin',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Harbin', 'ta-whatshelp')
}, {
  value: 'Asia/Hebron',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Hebron', 'ta-whatshelp')
}, {
  value: 'Asia/Ho_Chi_Minh',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Ho_Chi_Minh', 'ta-whatshelp')
}, {
  value: 'Asia/Hong_Kong',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Hong_Kong', 'ta-whatshelp')
}, {
  value: 'Asia/Hovd',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Hovd', 'ta-whatshelp')
}, {
  value: 'Asia/Irkutsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Irkutsk', 'ta-whatshelp')
}, {
  value: 'Asia/Istanbul',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Istanbul', 'ta-whatshelp')
}, {
  value: 'Asia/Jakarta',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Jakarta', 'ta-whatshelp')
}, {
  value: 'Asia/Jayapura',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Jayapura', 'ta-whatshelp')
}, {
  value: 'Asia/Jerusalem',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Jerusalem', 'ta-whatshelp')
}, {
  value: 'Asia/Kabul',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Kabul', 'ta-whatshelp')
}, {
  value: 'Asia/Kamchatka',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Kamchatka', 'ta-whatshelp')
}, {
  value: 'Asia/Karachi',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Karachi', 'ta-whatshelp')
}, {
  value: 'Asia/Kashgar',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Kashgar', 'ta-whatshelp')
}, {
  value: 'Asia/Kathmandu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Kathmandu', 'ta-whatshelp')
}, {
  value: 'Asia/Katmandu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Katmandu', 'ta-whatshelp')
}, {
  value: 'Asia/Khandyga',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Khandyga', 'ta-whatshelp')
}, {
  value: 'Asia/Kolkata',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Kolkata', 'ta-whatshelp')
}, {
  value: 'Asia/Krasnoyarsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Krasnoyarsk', 'ta-whatshelp')
}, {
  value: 'Asia/Kuala_Lumpur',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Kuala_Lumpur', 'ta-whatshelp')
}, {
  value: 'Asia/Kuching',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Kuching', 'ta-whatshelp')
}, {
  value: 'Asia/Kuwait',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Kuwait', 'ta-whatshelp')
}, {
  value: 'Asia/Macao',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Macao', 'ta-whatshelp')
}, {
  value: 'Asia/Macau',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Macau', 'ta-whatshelp')
}, {
  value: 'Asia/Magadan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Magadan', 'ta-whatshelp')
}, {
  value: 'Asia/Makassar',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Makassar', 'ta-whatshelp')
}, {
  value: 'Asia/Manila',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Manila', 'ta-whatshelp')
}, {
  value: 'Asia/Muscat',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Muscat', 'ta-whatshelp')
}, {
  value: 'Asia/Nicosia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Nicosia', 'ta-whatshelp')
}, {
  value: 'Asia/Novokuznetsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Novokuznetsk', 'ta-whatshelp')
}, {
  value: 'Asia/Novosibirsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Novosibirsk', 'ta-whatshelp')
}, {
  value: 'Asia/Omsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Omsk', 'ta-whatshelp')
}, {
  value: 'Asia/Oral',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Oral', 'ta-whatshelp')
}, {
  value: 'Asia/Phnom_Penh',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Phnom_Penh', 'ta-whatshelp')
}, {
  value: 'Asia/Pontianak',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Pontianak', 'ta-whatshelp')
}, {
  value: 'Asia/Pyongyang',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Pyongyang', 'ta-whatshelp')
}, {
  value: 'Asia/Qatar',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Qatar', 'ta-whatshelp')
}, {
  value: 'Asia/Qyzylorda',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Qyzylorda', 'ta-whatshelp')
}, {
  value: 'Asia/Rangoon',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Rangoon', 'ta-whatshelp')
}, {
  value: 'Asia/Riyadh',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Riyadh', 'ta-whatshelp')
}, {
  value: 'Asia/Saigon',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Saigon', 'ta-whatshelp')
}, {
  value: 'Asia/Sakhalin',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Sakhalin', 'ta-whatshelp')
}, {
  value: 'Asia/Samarkand',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Samarkand', 'ta-whatshelp')
}, {
  value: 'Asia/Seoul',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Seoul', 'ta-whatshelp')
}, {
  value: 'Asia/Shanghai',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Shanghai', 'ta-whatshelp')
}, {
  value: 'Asia/Singapore',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Singapore', 'ta-whatshelp')
}, {
  value: 'Asia/Srednekolymsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Srednekolymsk', 'ta-whatshelp')
}, {
  value: 'Asia/Taipei',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Taipei', 'ta-whatshelp')
}, {
  value: 'Asia/Tashkent',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Tashkent', 'ta-whatshelp')
}, {
  value: 'Asia/Tbilisi',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Tbilisi', 'ta-whatshelp')
}, {
  value: 'Asia/Tehran',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Tehran', 'ta-whatshelp')
}, {
  value: 'Asia/Tel_Aviv',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Tel_Aviv', 'ta-whatshelp')
}, {
  value: 'Asia/Thimbu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Thimbu', 'ta-whatshelp')
}, {
  value: 'Asia/Thimphu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Thimphu', 'ta-whatshelp')
}, {
  value: 'Asia/Tokyo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Tokyo', 'ta-whatshelp')
}, {
  value: 'Asia/Tomsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Tomsk', 'ta-whatshelp')
}, {
  value: 'Asia/Ujung_Pandang',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Ujung_Pandang', 'ta-whatshelp')
}, {
  value: 'Asia/Ulaanbaatar',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Ulaanbaatar', 'ta-whatshelp')
}, {
  value: 'Asia/Ulan_Bator',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Ulan_Bator', 'ta-whatshelp')
}, {
  value: 'Asia/Urumqi',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Urumqi', 'ta-whatshelp')
}, {
  value: 'Asia/Ust-Nera',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Ust-Nera', 'ta-whatshelp')
}, {
  value: 'Asia/Vientiane',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Vientiane', 'ta-whatshelp')
}, {
  value: 'Asia/Vladivostok',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Vladivostok', 'ta-whatshelp')
}, {
  value: 'Asia/Yakutsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Yakutsk', 'ta-whatshelp')
}, {
  value: 'Asia/Yangon',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Yangon', 'ta-whatshelp')
}, {
  value: 'Asia/Yekaterinburg',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Yekaterinburg', 'ta-whatshelp')
}, {
  value: 'Asia/Yerevan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Yerevan', 'ta-whatshelp')
}, {
  value: 'Atlantic/Azores',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Azores', 'ta-whatshelp')
}, {
  value: 'Atlantic/Bermuda',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Bermuda', 'ta-whatshelp')
}, {
  value: 'Atlantic/Canary',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Canary', 'ta-whatshelp')
}, {
  value: 'Atlantic/Cape_Verde',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Cape_Verde', 'ta-whatshelp')
}, {
  value: 'Atlantic/Faeroe',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Faeroe', 'ta-whatshelp')
}, {
  value: 'Atlantic/Faroe',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Faroe', 'ta-whatshelp')
}, {
  value: 'Atlantic/Jan_Mayen',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Jan_Mayen', 'ta-whatshelp')
}, {
  value: 'Atlantic/Madeira',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Madeira', 'ta-whatshelp')
}, {
  value: 'Atlantic/Reykjavik',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Reykjavik', 'ta-whatshelp')
}, {
  value: 'Atlantic/South_Georgia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/South_Georgia', 'ta-whatshelp')
}, {
  value: 'Atlantic/St_Helena',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/St_Helena', 'ta-whatshelp')
}, {
  value: 'Atlantic/Stanley',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Stanley', 'ta-whatshelp')
}, {
  value: 'Australia/ACT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/ACT', 'ta-whatshelp')
}, {
  value: 'Australia/Adelaide',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Adelaide', 'ta-whatshelp')
}, {
  value: 'Australia/Brisbane',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Brisbane', 'ta-whatshelp')
}, {
  value: 'Australia/Broken_Hill',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Broken_Hill', 'ta-whatshelp')
}, {
  value: 'Australia/Canberra',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Canberra', 'ta-whatshelp')
}, {
  value: 'Australia/Currie',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Currie', 'ta-whatshelp')
}, {
  value: 'Australia/Darwin',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Darwin', 'ta-whatshelp')
}, {
  value: 'Australia/Eucla',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Eucla', 'ta-whatshelp')
}, {
  value: 'Australia/Hobart',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Hobart', 'ta-whatshelp')
}, {
  value: 'Australia/LHI',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/LHI', 'ta-whatshelp')
}, {
  value: 'Australia/Lindeman',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Lindeman', 'ta-whatshelp')
}, {
  value: 'Australia/Lord_Howe',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Lord_Howe', 'ta-whatshelp')
}, {
  value: 'Australia/Melbourne',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Melbourne', 'ta-whatshelp')
}, {
  value: 'Australia/NSW',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/NSW', 'ta-whatshelp')
}, {
  value: 'Australia/North',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/North', 'ta-whatshelp')
}, {
  value: 'Australia/Perth',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Perth', 'ta-whatshelp')
}, {
  value: 'Australia/Queensland',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Queensland', 'ta-whatshelp')
}, {
  value: 'Australia/South',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/South', 'ta-whatshelp')
}, {
  value: 'Australia/Sydney',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Sydney', 'ta-whatshelp')
}, {
  value: 'Australia/Tasmania',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Tasmania', 'ta-whatshelp')
}, {
  value: 'Australia/Victoria',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Victoria', 'ta-whatshelp')
}, {
  value: 'Australia/West',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/West', 'ta-whatshelp')
}, {
  value: 'Australia/Yancowinna',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Yancowinna', 'ta-whatshelp')
}, {
  value: 'Brazil/Acre',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Brazil/Acre', 'ta-whatshelp')
}, {
  value: 'Brazil/DeNoronha',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Brazil/DeNoronha', 'ta-whatshelp')
}, {
  value: 'Brazil/East',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Brazil/East', 'ta-whatshelp')
}, {
  value: 'Brazil/West',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Brazil/West', 'ta-whatshelp')
}, {
  value: 'CET',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('CET', 'ta-whatshelp')
}, {
  value: 'CST6CDT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('CST6CDT', 'ta-whatshelp')
}, {
  value: 'Canada/Atlantic',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Canada/Atlantic', 'ta-whatshelp')
}, {
  value: 'Canada/Central',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Canada/Central', 'ta-whatshelp')
}, {
  value: 'Canada/Eastern',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Canada/Eastern', 'ta-whatshelp')
}, {
  value: 'Canada/Mountain',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Canada/Mountain', 'ta-whatshelp')
}, {
  value: 'Canada/Newfoundland',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Canada/Newfoundland', 'ta-whatshelp')
}, {
  value: 'Canada/Pacific',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Canada/Pacific', 'ta-whatshelp')
}, {
  value: 'Canada/Saskatchewan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Canada/Saskatchewan', 'ta-whatshelp')
}, {
  value: 'Canada/Yukon',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Canada/Yukon', 'ta-whatshelp')
}, {
  value: 'Chile/Continental',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Chile/Continental', 'ta-whatshelp')
}, {
  value: 'Chile/EasterIsland',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Chile/EasterIsland', 'ta-whatshelp')
}, {
  value: 'Cuba',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Cuba', 'ta-whatshelp')
}, {
  value: 'EET',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('EET', 'ta-whatshelp')
}, {
  value: 'EST',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('EST', 'ta-whatshelp')
}, {
  value: 'EST5EDT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('EST5EDT', 'ta-whatshelp')
}, {
  value: 'Egypt',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Egypt', 'ta-whatshelp')
}, {
  value: 'Eire',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Eire', 'ta-whatshelp')
}, {
  value: 'Etc/GMT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT', 'ta-whatshelp')
}, {
  value: 'Etc/GMT+0',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+0', 'ta-whatshelp')
}, {
  value: 'Etc/GMT+1',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+1', 'ta-whatshelp')
}, {
  value: 'Etc/GMT+10',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+10', 'ta-whatshelp')
}, {
  value: 'Etc/GMT+11',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+11', 'ta-whatshelp')
}, {
  value: 'Etc/GMT+12',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+12', 'ta-whatshelp')
}, {
  value: 'Etc/GMT+2',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+2', 'ta-whatshelp')
}, {
  value: 'Etc/GMT+3',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+3', 'ta-whatshelp')
}, {
  value: 'Etc/GMT+4',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+4', 'ta-whatshelp')
}, {
  value: 'Etc/GMT+5',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+5', 'ta-whatshelp')
}, {
  value: 'Etc/GMT+6',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+6', 'ta-whatshelp')
}, {
  value: 'Etc/GMT+7',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+7', 'ta-whatshelp')
}, {
  value: 'Etc/GMT+8',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+8', 'ta-whatshelp')
}, {
  value: 'Etc/GMT+9',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+9', 'ta-whatshelp')
}, {
  value: 'Etc/GMT-0',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-0', 'ta-whatshelp')
}, {
  value: 'Etc/GMT-1',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-1', 'ta-whatshelp')
}, {
  value: 'Etc/GMT-10',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-10', 'ta-whatshelp')
}, {
  value: 'Etc/GMT-11',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-11', 'ta-whatshelp')
}, {
  value: 'Etc/GMT-12',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-12', 'ta-whatshelp')
}, {
  value: 'Etc/GMT-13',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-13', 'ta-whatshelp')
}, {
  value: 'Etc/GMT-14',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-14', 'ta-whatshelp')
}, {
  value: 'Etc/GMT-2',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-2', 'ta-whatshelp')
}, {
  value: 'Etc/GMT-3',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-3', 'ta-whatshelp')
}, {
  value: 'Etc/GMT-4',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-4', 'ta-whatshelp')
}, {
  value: 'Etc/GMT-5',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-5', 'ta-whatshelp')
}, {
  value: 'Etc/GMT-6',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-6', 'ta-whatshelp')
}, {
  value: 'Etc/GMT-7',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-7', 'ta-whatshelp')
}, {
  value: 'Etc/GMT-8',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-8', 'ta-whatshelp')
}, {
  value: 'Etc/GMT-9',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-9', 'ta-whatshelp')
}, {
  value: 'Etc/GMT0',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT0', 'ta-whatshelp')
}, {
  value: 'Etc/Greenwich',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/Greenwich', 'ta-whatshelp')
}, {
  value: 'Etc/UCT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/UCT', 'ta-whatshelp')
}, {
  value: 'Etc/UTC',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/UTC', 'ta-whatshelp')
}, {
  value: 'Etc/Universal',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/Universal', 'ta-whatshelp')
}, {
  value: 'Etc/Zulu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/Zulu', 'ta-whatshelp')
}, {
  value: 'Europe/Amsterdam',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Amsterdam', 'ta-whatshelp')
}, {
  value: 'Europe/Andorra',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Andorra', 'ta-whatshelp')
}, {
  value: 'Europe/Astrakhan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Astrakhan', 'ta-whatshelp')
}, {
  value: 'Europe/Athens',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Athens', 'ta-whatshelp')
}, {
  value: 'Europe/Belfast',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Belfast', 'ta-whatshelp')
}, {
  value: 'Europe/Belgrade',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Belgrade', 'ta-whatshelp')
}, {
  value: 'Europe/Berlin',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Berlin', 'ta-whatshelp')
}, {
  value: 'Europe/Bratislava',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Bratislava', 'ta-whatshelp')
}, {
  value: 'Europe/Brussels',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Brussels', 'ta-whatshelp')
}, {
  value: 'Europe/Bucharest',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Bucharest', 'ta-whatshelp')
}, {
  value: 'Europe/Budapest',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Budapest', 'ta-whatshelp')
}, {
  value: 'Europe/Busingen',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Busingen', 'ta-whatshelp')
}, {
  value: 'Europe/Chisinau',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Chisinau', 'ta-whatshelp')
}, {
  value: 'Europe/Copenhagen',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Copenhagen', 'ta-whatshelp')
}, {
  value: 'Europe/Dublin',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Dublin', 'ta-whatshelp')
}, {
  value: 'Europe/Gibraltar',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Gibraltar', 'ta-whatshelp')
}, {
  value: 'Europe/Guernsey',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Guernsey', 'ta-whatshelp')
}, {
  value: 'Europe/Helsinki',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Helsinki', 'ta-whatshelp')
}, {
  value: 'Europe/Isle_of_Man',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Isle_of_Man', 'ta-whatshelp')
}, {
  value: 'Europe/Istanbul',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Istanbul', 'ta-whatshelp')
}, {
  value: 'Europe/Jersey',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Jersey', 'ta-whatshelp')
}, {
  value: 'Europe/Kaliningrad',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Kaliningrad', 'ta-whatshelp')
}, {
  value: 'Europe/Kiev',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Kiev', 'ta-whatshelp')
}, {
  value: 'Europe/Kirov',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Kirov', 'ta-whatshelp')
}, {
  value: 'Europe/Lisbon',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Lisbon', 'ta-whatshelp')
}, {
  value: 'Europe/Ljubljana',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Ljubljana', 'ta-whatshelp')
}, {
  value: 'Europe/London',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/London', 'ta-whatshelp')
}, {
  value: 'Europe/Luxembourg',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Luxembourg', 'ta-whatshelp')
}, {
  value: 'Europe/Madrid',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Madrid', 'ta-whatshelp')
}, {
  value: 'Europe/Malta',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Malta', 'ta-whatshelp')
}, {
  value: 'Europe/Mariehamn',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Mariehamn', 'ta-whatshelp')
}, {
  value: 'Europe/Minsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Minsk', 'ta-whatshelp')
}, {
  value: 'Europe/Monaco',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Monaco', 'ta-whatshelp')
}, {
  value: 'Europe/Moscow',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Moscow', 'ta-whatshelp')
}, {
  value: 'Europe/Nicosia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Nicosia', 'ta-whatshelp')
}, {
  value: 'Europe/Oslo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Oslo', 'ta-whatshelp')
}, {
  value: 'Europe/Paris',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Paris', 'ta-whatshelp')
}, {
  value: 'Europe/Podgorica',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Podgorica', 'ta-whatshelp')
}, {
  value: 'Europe/Prague',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Prague', 'ta-whatshelp')
}, {
  value: 'Europe/Riga',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Riga', 'ta-whatshelp')
}, {
  value: 'Europe/Rome',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Rome', 'ta-whatshelp')
}, {
  value: 'Europe/Samara',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Samara', 'ta-whatshelp')
}, {
  value: 'Europe/San_Marino',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/San_Marino', 'ta-whatshelp')
}, {
  value: 'Europe/Sarajevo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Sarajevo', 'ta-whatshelp')
}, {
  value: 'Europe/Saratov',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Saratov', 'ta-whatshelp')
}, {
  value: 'Europe/Simferopol',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Simferopol', 'ta-whatshelp')
}, {
  value: 'Europe/Skopje',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Skopje', 'ta-whatshelp')
}, {
  value: 'Europe/Sofia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Sofia', 'ta-whatshelp')
}, {
  value: 'Europe/Stockholm',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Stockholm', 'ta-whatshelp')
}, {
  value: 'Europe/Tallinn',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Tallinn', 'ta-whatshelp')
}, {
  value: 'Europe/Tirane',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Tirane', 'ta-whatshelp')
}, {
  value: 'Europe/Tiraspol',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Tiraspol', 'ta-whatshelp')
}, {
  value: 'Europe/Ulyanovsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Ulyanovsk', 'ta-whatshelp')
}, {
  value: 'Europe/Uzhgorod',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Uzhgorod', 'ta-whatshelp')
}, {
  value: 'Europe/Vaduz',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Vaduz', 'ta-whatshelp')
}, {
  value: 'Europe/Vatican',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Vatican', 'ta-whatshelp')
}, {
  value: 'Europe/Vienna',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Vienna', 'ta-whatshelp')
}, {
  value: 'Europe/Vilnius',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Vilnius', 'ta-whatshelp')
}, {
  value: 'Europe/Volgograd',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Volgograd', 'ta-whatshelp')
}, {
  value: 'Europe/Warsaw',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Warsaw', 'ta-whatshelp')
}, {
  value: 'Europe/Zagreb',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Zagreb', 'ta-whatshelp')
}, {
  value: 'Europe/Zaporozhye',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Zaporozhye', 'ta-whatshelp')
}, {
  value: 'Europe/Zurich',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Zurich', 'ta-whatshelp')
}, {
  value: 'GB',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('GB', 'ta-whatshelp')
}, {
  value: 'GB-Eire',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('GB-Eire', 'ta-whatshelp')
}, {
  value: 'GMT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('GMT', 'ta-whatshelp')
}, {
  value: 'GMT+0',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('GMT+0', 'ta-whatshelp')
}, {
  value: 'GMT-0',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('GMT-0', 'ta-whatshelp')
}, {
  value: 'GMT0',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('GMT0', 'ta-whatshelp')
}, {
  value: 'Greenwich',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Greenwich', 'ta-whatshelp')
}, {
  value: 'HST',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('HST', 'ta-whatshelp')
}, {
  value: 'Hongkong',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hongkong', 'ta-whatshelp')
}, {
  value: 'Iceland',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Iceland', 'ta-whatshelp')
}, {
  value: 'Indian/Antananarivo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Antananarivo', 'ta-whatshelp')
}, {
  value: 'Indian/Chagos',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Chagos', 'ta-whatshelp')
}, {
  value: 'Indian/Christmas',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Christmas', 'ta-whatshelp')
}, {
  value: 'Indian/Cocos',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Cocos', 'ta-whatshelp')
}, {
  value: 'Indian/Comoro',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Comoro', 'ta-whatshelp')
}, {
  value: 'Indian/Kerguelen',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Kerguelen', 'ta-whatshelp')
}, {
  value: 'Indian/Mahe',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Mahe', 'ta-whatshelp')
}, {
  value: 'Indian/Maldives',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Maldives', 'ta-whatshelp')
}, {
  value: 'Indian/Mauritius',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Mauritius', 'ta-whatshelp')
}, {
  value: 'Indian/Mayotte',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Mayotte', 'ta-whatshelp')
}, {
  value: 'Indian/Reunion',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Reunion', 'ta-whatshelp')
}, {
  value: 'Iran',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Iran', 'ta-whatshelp')
}, {
  value: 'Israel',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Israel', 'ta-whatshelp')
}, {
  value: 'Jamaica',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Jamaica', 'ta-whatshelp')
}, {
  value: 'Japan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Japan', 'ta-whatshelp')
}, {
  value: 'Kwajalein',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Kwajalein', 'ta-whatshelp')
}, {
  value: 'Libya',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Libya', 'ta-whatshelp')
}, {
  value: 'MET',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('MET', 'ta-whatshelp')
}, {
  value: 'MST',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('MST', 'ta-whatshelp')
}, {
  value: 'MST7MDT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('MST7MDT', 'ta-whatshelp')
}, {
  value: 'Mexico/BajaNorte',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Mexico/BajaNorte', 'ta-whatshelp')
}, {
  value: 'Mexico/BajaSur',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Mexico/BajaSur', 'ta-whatshelp')
}, {
  value: 'Mexico/General',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Mexico/General', 'ta-whatshelp')
}, {
  value: 'NZ',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('NZ', 'ta-whatshelp')
}, {
  value: 'NZ-CHAT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('NZ-CHAT', 'ta-whatshelp')
}, {
  value: 'Navajo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Navajo', 'ta-whatshelp')
}, {
  value: 'PRC',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('PRC', 'ta-whatshelp')
}, {
  value: 'PST8PDT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('PST8PDT', 'ta-whatshelp')
}, {
  value: 'Pacific/Apia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Apia', 'ta-whatshelp')
}, {
  value: 'Pacific/Auckland',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Auckland', 'ta-whatshelp')
}, {
  value: 'Pacific/Bougainville',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Bougainville', 'ta-whatshelp')
}, {
  value: 'Pacific/Chatham',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Chatham', 'ta-whatshelp')
}, {
  value: 'Pacific/Chuuk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Chuuk', 'ta-whatshelp')
}, {
  value: 'Pacific/Easter',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Easter', 'ta-whatshelp')
}, {
  value: 'Pacific/Efate',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Efate', 'ta-whatshelp')
}, {
  value: 'Pacific/Enderbury',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Enderbury', 'ta-whatshelp')
}, {
  value: 'Pacific/Fakaofo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Fakaofo', 'ta-whatshelp')
}, {
  value: 'Pacific/Fiji',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Fiji', 'ta-whatshelp')
}, {
  value: 'Pacific/Funafuti',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Funafuti', 'ta-whatshelp')
}, {
  value: 'Pacific/Galapagos',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Galapagos', 'ta-whatshelp')
}, {
  value: 'Pacific/Gambier',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Gambier', 'ta-whatshelp')
}, {
  value: 'Pacific/Guadalcanal',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Guadalcanal', 'ta-whatshelp')
}, {
  value: 'Pacific/Guam',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Guam', 'ta-whatshelp')
}, {
  value: 'Pacific/Honolulu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Honolulu', 'ta-whatshelp')
}, {
  value: 'Pacific/Johnston',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Johnston', 'ta-whatshelp')
}, {
  value: 'Pacific/Kiritimati',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Kiritimati', 'ta-whatshelp')
}, {
  value: 'Pacific/Kosrae',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Kosrae', 'ta-whatshelp')
}, {
  value: 'Pacific/Kwajalein',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Kwajalein', 'ta-whatshelp')
}, {
  value: 'Pacific/Majuro',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Majuro', 'ta-whatshelp')
}, {
  value: 'Pacific/Marquesas',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Marquesas', 'ta-whatshelp')
}, {
  value: 'Pacific/Midway',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Midway', 'ta-whatshelp')
}, {
  value: 'Pacific/Nauru',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Nauru', 'ta-whatshelp')
}, {
  value: 'Pacific/Niue',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Niue', 'ta-whatshelp')
}, {
  value: 'Pacific/Norfolk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Norfolk', 'ta-whatshelp')
}, {
  value: 'Pacific/Noumea',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Noumea', 'ta-whatshelp')
}, {
  value: 'Pacific/Pago_Pago',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Pago_Pago', 'ta-whatshelp')
}, {
  value: 'Pacific/Palau',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Palau', 'ta-whatshelp')
}, {
  value: 'Pacific/Pitcairn',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Pitcairn', 'ta-whatshelp')
}, {
  value: 'Pacific/Pohnpei',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Pohnpei', 'ta-whatshelp')
}, {
  value: 'Pacific/Ponape',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Ponape', 'ta-whatshelp')
}, {
  value: 'Pacific/Port_Moresby',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Port_Moresby', 'ta-whatshelp')
}, {
  value: 'Pacific/Rarotonga',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Rarotonga', 'ta-whatshelp')
}, {
  value: 'Pacific/Saipan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Saipan', 'ta-whatshelp')
}, {
  value: 'Pacific/Samoa',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Samoa', 'ta-whatshelp')
}, {
  value: 'Pacific/Tahiti',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Tahiti', 'ta-whatshelp')
}, {
  value: 'Pacific/Tarawa',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Tarawa', 'ta-whatshelp')
}, {
  value: 'Pacific/Tongatapu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Tongatapu', 'ta-whatshelp')
}, {
  value: 'Pacific/Truk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Truk', 'ta-whatshelp')
}, {
  value: 'Pacific/Wake',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Wake', 'ta-whatshelp')
}, {
  value: 'Pacific/Wallis',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Wallis', 'ta-whatshelp')
}, {
  value: 'Pacific/Yap',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Yap', 'ta-whatshelp')
}, {
  value: 'Poland',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Poland', 'ta-whatshelp')
}, {
  value: 'Portugal',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Portugal', 'ta-whatshelp')
}, {
  value: 'ROC',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('ROC', 'ta-whatshelp')
}, {
  value: 'ROK',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('ROK', 'ta-whatshelp')
}, {
  value: 'Singapore',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Singapore', 'ta-whatshelp')
}, {
  value: 'Turkey',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Turkey', 'ta-whatshelp')
}, {
  value: 'UCT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('UCT', 'ta-whatshelp')
}, {
  value: 'US/Alaska',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Alaska', 'ta-whatshelp')
}, {
  value: 'US/Aleutian',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Aleutian', 'ta-whatshelp')
}, {
  value: 'US/Arizona',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Arizona', 'ta-whatshelp')
}, {
  value: 'US/Central',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Central', 'ta-whatshelp')
}, {
  value: 'US/East-Indiana',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/East-Indiana', 'ta-whatshelp')
}, {
  value: 'US/Eastern',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Eastern', 'ta-whatshelp')
}, {
  value: 'US/Hawaii',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Hawaii', 'ta-whatshelp')
}, {
  value: 'US/Indiana-Starke',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Indiana-Starke', 'ta-whatshelp')
}, {
  value: 'US/Michigan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Michigan', 'ta-whatshelp')
}, {
  value: 'US/Mountain',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Mountain', 'ta-whatshelp')
}, {
  value: 'US/Pacific',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Pacific', 'ta-whatshelp')
}, {
  value: 'US/Pacific-New',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Pacific-New', 'ta-whatshelp')
}, {
  value: 'US/Samoa',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Samoa', 'ta-whatshelp')
}, {
  value: 'UTC',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('UTC', 'ta-whatshelp')
}, {
  value: 'Universal',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Universal', 'ta-whatshelp')
}, {
  value: 'W-SU',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('W-SU', 'ta-whatshelp')
}, {
  value: 'WET',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('WET', 'ta-whatshelp')
}, {
  value: 'Zulu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Zulu', 'ta-whatshelp')
}];
function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props;
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
  const [filteredOptions, setFilteredOptions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(timezones);
  function onInputChange(value) {
    setFilteredOptions(timezones.filter(timezone => timezone.label.toLowerCase().includes(value.toLowerCase())));
  }
  function onFontSizeChange(value) {
    setAttributes({
      timeZone: value
    });
  }
  const onSelectImage = image => {
    setAttributes({
      imageUrl: image.url
    });
  };
  const onChangeAlignment = newAlignment => {
    setAttributes({
      textAlignment: newAlignment
    });
  };
  const onChangeText = newText => {
    setAttributes({
      text: newText
    });
  };
  const advancedBtnInfo = newInfo => {
    setAttributes({
      info: newInfo
    });
  };
  const advancedBtnTitle = newTitle => {
    setAttributes({
      title: newTitle
    });
  };
  const advancedBtnOnlineBadge = newOnline => {
    setAttributes({
      online: newOnline
    });
  };
  const onIconTarget = onIconTargets => {
    setAttributes({
      iconTarget: onIconTargets
    });
  };
  const onButtonLinkTarget = newLinkTarget => {
    setAttributes({
      buttonLinkTarget: newLinkTarget
    });
  };
  const textClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()(`wHelpButtons-align-${textAlignment}`);
  const basicBtn = classnames__WEBPACK_IMPORTED_MODULE_4___default()(`wHelp-button-4 wHelp-btn-bg`);
  const classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(`wHelpButtons wHelp-button-4 wHelp-btn-bg`);
  const buttonSizeOptions = [{
    value: "size-small",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Small", "ta-whatshelp")
  }, {
    value: "size-medium",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Medium", "ta-whatshelp")
  }, {
    value: "size-large",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Large", "ta-whatshelp")
  }];
  const buttonTypeOptions = [{
    value: "basic-button",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Basic Button", "ta-whatshelp")
  }, {
    value: "advance-button",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Advance Button", "ta-whatshelp")
  }];
  const borderRadiusOptions = [{
    value: "border-squared",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Border Squared", "ta-whatshelp")
  }, {
    value: "border-rounded",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Border Rounded", "ta-whatshelp")
  }];
  const visibilityOn = [{
    value: "",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Everywhere", "ta-whatshelp")
  }, {
    value: "wHelp-desktop-only",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Desktop only", "ta-whatshelp")
  }, {
    value: "wHelp-tablet-only",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Tablets only", "ta-whatshelp")
  }, {
    value: "wHelp-mobile-tablet-only",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Mobile and tablets", "ta-whatshelp")
  }, {
    value: "wHelp-mobile-only",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Mobile only", "ta-whatshelp")
  }];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Button Type", "ta-whatshelp"),
    value: buttonType,
    options: buttonTypeOptions.map(_ref => {
      let {
        value,
        label
      } = _ref;
      return {
        value,
        label
      };
    }),
    onChange: newButton => {
      setAttributes({
        buttonType: newButton
      });
    }
  }))), buttonType === "basic-button" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("WhatsApp Number", "ta-whatshelp"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Number", "ta-whatshelp"),
    value: numberInput,
    onChange: val => setAttributes({
      numberInput: val
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Add your contact number including country code eg: +880123456789", "ta-whatshelp")
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Open link in new window", "ta-whatshelp"),
    checked: buttonLinkTarget,
    onChange: onButtonLinkTarget
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Button Style", "ta-whatshelp"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Button Text", "ta-whatshelp"),
    value: text,
    onChange: val => setAttributes({
      text: val
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Button Size", "ta-whatshelp"),
    value: buttonSize,
    options: buttonSizeOptions.map(_ref2 => {
      let {
        value,
        label
      } = _ref2;
      return {
        value,
        label
      };
    }),
    onChange: newSize => {
      setAttributes({
        buttonSize: newSize
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Border Radius", "ta-whatshelp"),
    value: borderRadius,
    options: borderRadiusOptions.map(_ref3 => {
      let {
        value,
        label
      } = _ref3;
      return {
        value,
        label
      };
    }),
    onChange: newSize => {
      setAttributes({
        borderRadius: newSize
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Visibility on", "ta-whatshelp"),
    value: visibility,
    options: visibilityOn.map(_ref4 => {
      let {
        value,
        label
      } = _ref4;
      return {
        value,
        label
      };
    }),
    onChange: newSize => {
      setAttributes({
        visibility: newSize
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Icon", "ta-whatshelp"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Add Icon", "ta-whatshelp"),
    checked: iconTarget,
    onChange: onIconTarget
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.AlignmentToolbar, {
    value: textAlignment,
    onChange: onChangeAlignment
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `button-wrapper ${textClasses}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    className: `${basicBtn} ${buttonSize} ${borderRadius} ${visibility}`
  }), iconTarget && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "dashicons dashicons-whatsapp"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    onChange: onChangeText,
    value: text,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("How can I help you?", "ta-whatshelp"),
    tagName: "span",
    allowedFormats: []
  })))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("General Settings", "ta-whatshelp"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Number", "ta-whatshelp"),
    value: numberInput,
    onChange: val => setAttributes({
      numberInput: val
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Add your contact number including country code eg: +880123456789", "ta-whatshelp")
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Open link in new window", "ta-whatshelp"),
    checked: buttonLinkTarget,
    onChange: onButtonLinkTarget
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Agent Image", "ta-whatshelp"),
    onSelect: onSelectImage,
    allowedTypes: ["image"],
    render: _ref5 => {
      let {
        open
      } = _ref5;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
        onClick: open,
        style: {
          marginBottom: "20px",
          fontSize: "16px"
        }
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
        style: {
          marginRight: "5px"
        },
        className: "dashicons dashicons-cloud-upload"
      }), " ", "Agent photo");
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Agent Info", "ta-whatshelp"),
    value: info,
    onChange: val => setAttributes({
      info: val
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Write agent name & agent title", "ta-whatshelp")
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Button Label", "ta-whatshelp"),
    value: title,
    onChange: val => setAttributes({
      title: val
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Add custom button label", "ta-whatshelp")
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Online Badge Text", "ta-whatshelp"),
    value: online,
    onChange: val => setAttributes({
      online: val
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Add custom badget text when user in online.", "ta-whatshelp")
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Offline Badge Text", "ta-whatshelp"),
    value: offline,
    onChange: val => setAttributes({
      offline: val
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Add custom badget text when user in offline.", "ta-whatshelp")
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Chat Settings', 'ta-whatshelp'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ComboboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Timezone', 'ta-whatshelp'),
    value: timeZone,
    options: filteredOptions,
    onChange: onFontSizeChange,
    onInputChange: onInputChange,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("When using the date and time from the user browser you can transform it to your current timezone (in case your user is in a different timezone)", "ta-whatshelp")
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Monthday", "ta-whatshelp"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Start Time", "ta-whatshelp"),
    value: mondayStart,
    onChange: val => setAttributes({
      mondayStart: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("00:00", "ta-whatshelp")
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("End Time", "ta-whatshelp"),
    value: mondayEnd,
    onChange: val => setAttributes({
      mondayEnd: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("24:00", "ta-whatshelp")
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Tuesday", "ta-whatshelp"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Start Time", "ta-whatshelp"),
    value: tuesdayStart,
    onChange: val => setAttributes({
      tuesdayStart: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("00:00", "ta-whatshelp")
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("End Time", "ta-whatshelp"),
    value: tuesdayEnd,
    onChange: val => setAttributes({
      tuesdayEnd: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("24:00", "ta-whatshelp")
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Wednesday", "ta-whatshelp"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Start Time", "ta-whatshelp"),
    value: wednesdayStart,
    onChange: val => setAttributes({
      wednesdayStart: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("00:00", "ta-whatshelp")
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("End Time", "ta-whatshelp"),
    value: wednesdayEnd,
    onChange: val => setAttributes({
      wednesdayEnd: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("24:00", "ta-whatshelp")
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Thursday", "ta-whatshelp"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Start Time", "ta-whatshelp"),
    value: thursdayStart,
    onChange: val => setAttributes({
      thursdayStart: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("00:00", "ta-whatshelp")
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("End Time", "ta-whatshelp"),
    value: thursdayEnd,
    onChange: val => setAttributes({
      thursdayEnd: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("24:00", "ta-whatshelp")
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Friday", "ta-whatshelp"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Start Time", "ta-whatshelp"),
    value: fridayStart,
    onChange: val => setAttributes({
      fridayStart: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("00:00", "ta-whatshelp")
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("End Time", "ta-whatshelp"),
    value: fridayEnd,
    onChange: val => setAttributes({
      fridayEnd: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("24:00", "ta-whatshelp")
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Saturday", "ta-whatshelp"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Start Time", "ta-whatshelp"),
    value: saturdayStart,
    onChange: val => setAttributes({
      saturdayStart: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("00:00", "ta-whatshelp")
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("End Time", "ta-whatshelp"),
    value: saturdayEnd,
    onChange: val => setAttributes({
      saturdayEnd: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("24:00", "ta-whatshelp")
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Sunday", "ta-whatshelp"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Start Time", "ta-whatshelp"),
    value: sundayStart,
    onChange: val => setAttributes({
      sundayStart: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("00:00", "ta-whatshelp")
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("End Time", "ta-whatshelp"),
    value: sundayEnd,
    onChange: val => setAttributes({
      sundayEnd: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("24:00", "ta-whatshelp")
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Appearance settings", "ta-whatshelp"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Visibility on", "ta-whatshelp"),
    value: visibility,
    options: visibilityOn.map(_ref6 => {
      let {
        value,
        label
      } = _ref6;
      return {
        value,
        label
      };
    }),
    onChange: newSize => {
      setAttributes({
        visibility: newSize
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Size", "ta-whatshelp"),
    value: buttonSize,
    options: buttonSizeOptions.map(_ref7 => {
      let {
        value,
        label
      } = _ref7;
      return {
        value,
        label
      };
    }),
    onChange: newSize => {
      setAttributes({
        buttonSize: newSize
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Border Radius", "ta-whatshelp"),
    value: borderRadius,
    options: borderRadiusOptions.map(_ref8 => {
      let {
        value,
        label
      } = _ref8;
      return {
        value,
        label
      };
    }),
    onChange: newSize => {
      setAttributes({
        borderRadius: newSize
      });
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.AlignmentToolbar, {
    value: textAlignment,
    onChange: onChangeAlignment
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `button-wrapper ${textClasses}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    className: `avatar-active ${classes} ${buttonSize} ${borderRadius} ${visibility}`
  }), {
    "data-btnavailablety": `{ "monday":"${mondayStart}-${mondayEnd}", "tuesday":"${tuesdayStart}-${tuesdayEnd}", "wednesday":"${wednesdayStart}-${wednesdayEnd}", "thursday":"${thursdayStart}-${thursdayEnd}", "friday":"${fridayStart}-${fridayEnd}", "saturday":"${saturdayStart}-${saturdayEnd}", "sunday":"${sundayStart}-${sundayEnd}" }`,
    "data-timezone": timeZone
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    src: imageUrl ? imageUrl : agentImage,
    alt: "agent"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "info-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    onChange: advancedBtnInfo,
    value: info,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Robert / Sales Support", "ta-whatshelp"),
    tagName: "p",
    allowedFormats: [],
    className: "info"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    onChange: advancedBtnTitle,
    value: title,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("How can I help you?", "ta-whatshelp"),
    tagName: "p",
    allowedFormats: [],
    className: "title"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    onChange: advancedBtnOnlineBadge,
    value: online,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("I am online", "ta-whatshelp"),
    tagName: "p",
    allowedFormats: [],
    className: "online"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    onChange: advancedBtnOnlineBadge,
    value: offline,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("I'm not available", "ta-whatshelp"),
    tagName: "p",
    allowedFormats: [],
    className: "offline"
  }))))));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('create-block/whatsapp-button', {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);




const agentImage = __webpack_require__(/*! ./images/user.jpg */ "./src/images/user.jpg");
console.log(agentImage);
function save(_ref) {
  let {
    attributes
  } = _ref;
  const {
    buttonSize,
    borderRadius,
    buttonType,
    text,
    info,
    title,
    online,
    offline,
    textAlignment,
    buttonLinkTarget,
    visibility,
    border,
    iconTarget,
    imageUrl,
    numberInput,
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
  const textClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()(`wHelpButtons-align-${textAlignment}`);
  const basicBtn = classnames__WEBPACK_IMPORTED_MODULE_3___default()(`wHelp-button-4 wHelp-btn-bg`);
  const classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()(`wHelpButtons wHelp-button-4 wHelp-btn-bg`);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, buttonType === "basic-button" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `button-wrapper ${textClasses}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: `${basicBtn} ${buttonSize} ${borderRadius} ${visibility} ${border}`
  }), {
    href: `https://wa.me/${numberInput}`,
    rel: "noopener noreferrer",
    target: buttonLinkTarget ? "_blank" : "_self"
  }), iconTarget && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "dashicons dashicons-whatsapp"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "span",
    value: text
  }))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `button-wrapper ${textClasses}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: `${classes} ${buttonSize} ${borderRadius} ${visibility}`
  }), {
    "data-btnavailablety": `{ "monday":"${mondayStart}-${mondayEnd}", "tuesday":"${tuesdayStart}-${tuesdayEnd}", "wednesday":"${wednesdayStart}-${wednesdayEnd}", "thursday":"${thursdayStart}-${thursdayEnd}", "friday":"${fridayStart}-${fridayEnd}", "saturday":"${saturdayStart}-${saturdayEnd}", "sunday":"${sundayStart}-${sundayEnd}" }`,
    "data-timezone": timeZone,
    href: `https://wa.me/${numberInput}`,
    rel: "noopener noreferrer",
    target: buttonLinkTarget ? "_blank" : "_self"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    src: imageUrl ? imageUrl : agentImage,
    alt: "agent"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "info-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    value: info,
    tagName: "p",
    className: "info"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    value: title,
    tagName: "p",
    className: "title"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    value: online,
    tagName: "p",
    className: "online"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    value: offline,
    tagName: "p",
    className: "offline"
  })))));
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/images/user.jpg":
/*!*****************************!*\
  !*** ./src/images/user.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/user.65223f50.jpg";

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwhatsapp_button"] = self["webpackChunkwhatsapp_button"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map