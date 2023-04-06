<?php

namespace Whatshelpelementor\Widgets;

use Elementor\Widget_Base;
use Elementor\Controls_Manager;

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}
/**
 *
 * Laamya elementor about page section widget.
 *
 * @since 1.0
 */
class Whatshelp_Buttons extends Widget_Base
{

    public function get_name()
    {
        return 'whatshelp-buttons';
    }

    public function get_title()
    {
        return esc_html__('Whatshelp buttons', 'ta-whatshelp');
    }

    public function get_icon()
    {
        return 'eicon-headphones';
    }

    public function get_categories()
    {
        return ['whatshelp-elements'];
    }

    protected function _register_controls()
    {


        // ----------------------------------------  Whatshelp Buttons Settings ------------------------------

        $this->start_controls_section(
            'whatshelp__general__settings',
            [
                'label' => esc_html__('General settings', 'ta-whatshelp'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'number',
            [
                'label'     => esc_html__('Number', 'ta-whatshelp'),
                'description' => esc_html__('Add your contact number including country code. eg: +880123456189', 'ta-whatshelp'),
                'label_block' => false,
                'type'      => Controls_Manager::TEXT,
            ]
        );

        $this->add_control(
            'style',
            [
                'label' => esc_html__('Style', 'ta-whatshelp'),
                'type'  => Controls_Manager::SELECT,
                'label_block' => false,
                'default' => '1',
                'options' => array(
                    '1'  => esc_html__('Advanced button', 'ta-whatshelp'),
                    '2'  => esc_html__('Basic button', 'ta-whatshelp'),
                )

            ]
        );

        $this->add_control(
            'agent__photo',
            [
                'label' => esc_html__('Agent photo', 'ta-whatshelp'),
                'description' => esc_html__('Add agent photo to show in button.', 'ta-whatshelp'),
                'type'  => Controls_Manager::MEDIA,
                'label_block' => true,
                'default' => [
                    'url' => WHATSHELP_DIR_URL . 'assets/image/user.webp',
                ],
                'condition' => [
                    'style' => '1',
                ],
            ]
        );

        $this->add_control(
            'agent__name',
            [
                'label' => esc_html__('Agent name', 'ta-whatshelp'),
                'description' => esc_html__('Write agent name to show in button.', 'ta-whatshelp'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => esc_html__('Robert', 'ta-whatshelp'),
                'condition' => [
                    'style' => '1',
                ],
            ]
        );

        $this->add_control(
            'agent__designation',
            [
                'label' => esc_html__('Agent designation', 'ta-whatshelp'),
                'description' => esc_html__('Write agent designation to show in button.', 'ta-whatshelp'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => esc_html__('Sales Support', 'ta-whatshelp'),
                'condition' => [
                    'style' => '1',
                ],
            ]
        );

        $this->add_control(
            'custom__button__label',
            [
                'label' => esc_html__('Button label', 'ta-whatshelp'),
                'description' => esc_html__('Add custom button label.', 'ta-whatshelp'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => true,
                'default' => esc_html__('How can I help you?', 'ta-whatshelp'),
            ]
        );

        $this->add_control(
            'online__text',
            [
                'label' => esc_html__('Online badget text', 'ta-whatshelp'),
                'description' => esc_html__('Add custom badget text when user in online.', 'ta-whatshelp'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => esc_html__('I\'m avaiable', 'ta-whatshelp'),
                'condition' => [
                    'style' => '1',
                ],
            ]
        );

        $this->add_control(
            'offline__text',
            [
                'label' => esc_html__('Offline badget text', 'ta-whatshelp'),
                'description' => esc_html__('Add custom badget text when user in offline.', 'ta-whatshelp'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => esc_html__('I\'m offline', 'ta-whatshelp'),
                'condition' => [
                    'style' => '1',
                ],
            ]
        );

        $this->end_controls_section(); // End section top content


        $this->start_controls_section(
            'whatshelp__availablity__manager',
            [
                'label' => esc_html__('Chat settings', 'ta-whatshelp'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
                'condition' => [
                    'style' => '1',
                ],
            ]
        );



        $this->add_control(
            'timezone',
            [
                'label' => esc_html__('Timezone', 'ta-whatshelp'),
                'description' => esc_html__('When using the date and time from the user browser you can transform it to your current timezone (in case your user is in a different timezone)', 'ta-whatshelp'),
                'type'  => Controls_Manager::SELECT2,
                'label_block' => true,
                'multiple' => false,
                'default' => '1',
                'options' => array(
                    '1' => esc_html__('Select timezone', 'ta-whatshelp'),
                    'Africa/Abidjan' => esc_html__('Africa/Abidjan', 'ta-whatshelp'),
                    'Africa/Accra' => esc_html__('Africa/Accra', 'ta-whatshelp'),
                    'Africa/Addis_Ababa' => esc_html__('Africa/Addis_Ababa', 'ta-whatshelp'),
                    'Africa/Algiers' => esc_html__('Africa/Algiers', 'ta-whatshelp'),
                    'Africa/Asmara' => esc_html__('Africa/Asmara', 'ta-whatshelp'),
                    'Africa/Asmera' => esc_html__('Africa/Asmera', 'ta-whatshelp'),
                    'Africa/Bamako' => esc_html__('Africa/Bamako', 'ta-whatshelp'),
                    'Africa/Bangui' => esc_html__('Africa/Bangui', 'ta-whatshelp'),
                    'Africa/Banjul' => esc_html__('Africa/Banjul', 'ta-whatshelp'),
                    'Africa/Bissau' => esc_html__('Africa/Bissau', 'ta-whatshelp'),
                    'Africa/Blantyre' => esc_html__('Africa/Blantyre', 'ta-whatshelp'),
                    'Africa/Brazzaville' => esc_html__('Africa/Brazzaville', 'ta-whatshelp'),
                    'Africa/Bujumbura' => esc_html__('Africa/Bujumbura', 'ta-whatshelp'),
                    'Africa/Cairo' => esc_html__('Africa/Cairo', 'ta-whatshelp'),
                    'Africa/Casablanca' => esc_html__('Africa/Casablanca', 'ta-whatshelp'),
                    'Africa/Ceuta' => esc_html__('Africa/Ceuta', 'ta-whatshelp'),
                    'Africa/Conakry' => esc_html__('Africa/Conakry', 'ta-whatshelp'),
                    'Africa/Dakar' => esc_html__('Africa/Dakar', 'ta-whatshelp'),
                    'Africa/Dar_es_Salaam' => esc_html__('Africa/Dar_es_Salaam', 'ta-whatshelp'),
                    'Africa/Djibouti' => esc_html__('Africa/Djibouti', 'ta-whatshelp'),
                    'Africa/Douala' => esc_html__('Africa/Douala', 'ta-whatshelp'),
                    'Africa/El_Aaiun' => esc_html__('Africa/El_Aaiun', 'ta-whatshelp'),
                    'Africa/Freetown' => esc_html__('Africa/Freetown', 'ta-whatshelp'),
                    'Africa/Gaborone' => esc_html__('Africa/Gaborone', 'ta-whatshelp'),
                    'Africa/Harare' => esc_html__('Africa/Harare', 'ta-whatshelp'),
                    'Africa/Johannesburg' => esc_html__('Africa/Johannesburg', 'ta-whatshelp'),
                    'Africa/Juba' => esc_html__('Africa/Juba', 'ta-whatshelp'),
                    'Africa/Kampala' => esc_html__('Africa/Kampala', 'ta-whatshelp'),
                    'Africa/Khartoum' => esc_html__('Africa/Khartoum', 'ta-whatshelp'),
                    'Africa/Kigali' => esc_html__('Africa/Kigali', 'ta-whatshelp'),
                    'Africa/Kinshasa' => esc_html__('Africa/Kinshasa', 'ta-whatshelp'),
                    'Africa/Lagos' => esc_html__('Africa/Lagos', 'ta-whatshelp'),
                    'Africa/Libreville' => esc_html__('Africa/Libreville', 'ta-whatshelp'),
                    'Africa/Lome' => esc_html__('Africa/Lome', 'ta-whatshelp'),
                    'Africa/Luanda' => esc_html__('Africa/Luanda', 'ta-whatshelp'),
                    'Africa/Lubumbashi' => esc_html__('Africa/Lubumbashi', 'ta-whatshelp'),
                    'Africa/Lusaka' => esc_html__('Africa/Lusaka', 'ta-whatshelp'),
                    'Africa/Malabo' => esc_html__('Africa/Malabo', 'ta-whatshelp'),
                    'Africa/Maputo' => esc_html__('Africa/Maputo', 'ta-whatshelp'),
                    'Africa/Maseru' => esc_html__('Africa/Maseru', 'ta-whatshelp'),
                    'Africa/Mbabane' => esc_html__('Africa/Mbabane', 'ta-whatshelp'),
                    'Africa/Mogadishu' => esc_html__('Africa/Mogadishu', 'ta-whatshelp'),
                    'Africa/Monrovia' => esc_html__('Africa/Monrovia', 'ta-whatshelp'),
                    'Africa/Nairobi' => esc_html__('Africa/Nairobi', 'ta-whatshelp'),
                    'Africa/Ndjamena' => esc_html__('Africa/Ndjamena', 'ta-whatshelp'),
                    'Africa/Niamey' => esc_html__('Africa/Niamey', 'ta-whatshelp'),
                    'Africa/Nouakchott' => esc_html__('Africa/Nouakchott', 'ta-whatshelp'),
                    'Africa/Ouagadougou' => esc_html__('Africa/Ouagadougou', 'ta-whatshelp'),
                    'Africa/Porto-Novo' => esc_html__('Africa/Porto-Novo', 'ta-whatshelp'),
                    'Africa/Sao_Tome' => esc_html__('Africa/Sao_Tome', 'ta-whatshelp'),
                    'Africa/Timbuktu' => esc_html__('Africa/Timbuktu', 'ta-whatshelp'),
                    'Africa/Tripoli' => esc_html__('Africa/Tripoli', 'ta-whatshelp'),
                    'Africa/Tunis' => esc_html__('Africa/Tunis', 'ta-whatshelp'),
                    'Africa/Windhoek' => esc_html__('Africa/Windhoek', 'ta-whatshelp'),
                    'America/Adak' => esc_html__('America/Adak', 'ta-whatshelp'),
                    'America/Anchorage' => esc_html__('America/Anchorage', 'ta-whatshelp'),
                    'America/Anguilla' => esc_html__('America/Anguilla', 'ta-whatshelp'),
                    'America/Antigua' => esc_html__('America/Antigua', 'ta-whatshelp'),
                    'America/Araguaina' => esc_html__('America/Araguaina', 'ta-whatshelp'),
                    'America/Argentina/Buenos_Aires' => esc_html__('America/Argentina/Buenos_Aires', 'ta-whatshelp'),
                    'America/Argentina/Catamarca' => esc_html__('America/Argentina/Catamarca', 'ta-whatshelp'),
                    'America/Argentina/ComodRivadavia' => esc_html__('America/Argentina/ComodRivadavia', 'ta-whatshelp'),
                    'America/Argentina/Cordoba' => esc_html__('America/Argentina/Cordoba', 'ta-whatshelp'),
                    'America/Argentina/Jujuy' => esc_html__('America/Argentina/Jujuy', 'ta-whatshelp'),
                    'America/Argentina/La_Rioja' => esc_html__('America/Argentina/La_Rioja', 'ta-whatshelp'),
                    'America/Argentina/Mendoza' => esc_html__('America/Argentina/Mendoza', 'ta-whatshelp'),
                    'America/Argentina/Rio_Gallegos' => esc_html__('America/Argentina/Rio_Gallegos', 'ta-whatshelp'),
                    'America/Argentina/Salta' => esc_html__('America/Argentina/Salta', 'ta-whatshelp'),
                    'America/Argentina/San_Juan' => esc_html__('America/Argentina/San_Juan', 'ta-whatshelp'),
                    'America/Argentina/San_Luis' => esc_html__('America/Argentina/San_Luis', 'ta-whatshelp'),
                    'America/Argentina/Tucuman' => esc_html__('America/Argentina/Tucuman', 'ta-whatshelp'),
                    'America/Argentina/Ushuaia' => esc_html__('America/Argentina/Ushuaia', 'ta-whatshelp'),
                    'America/Aruba' => esc_html__('America/Aruba', 'ta-whatshelp'),
                    'America/Asuncion' => esc_html__('America/Asuncion', 'ta-whatshelp'),
                    'America/Atikokan' => esc_html__('America/Atikokan', 'ta-whatshelp'),
                    'America/Atka' => esc_html__('America/Atka', 'ta-whatshelp'),
                    'America/Bahia' => esc_html__('America/Bahia', 'ta-whatshelp'),
                    'America/Bahia_Banderas' => esc_html__('America/Bahia_Banderas', 'ta-whatshelp'),
                    'America/Barbados' => esc_html__('America/Barbados', 'ta-whatshelp'),
                    'America/Belem' => esc_html__('America/Belem', 'ta-whatshelp'),
                    'America/Belize' => esc_html__('America/Belize', 'ta-whatshelp'),
                    'America/Blanc-Sablon' => esc_html__('America/Blanc-Sablon', 'ta-whatshelp'),
                    'America/Boa_Vista' => esc_html__('America/Boa_Vista', 'ta-whatshelp'),
                    'America/Bogota' => esc_html__('America/Bogota', 'ta-whatshelp'),
                    'America/Boise' => esc_html__('America/Boise', 'ta-whatshelp'),
                    'America/Buenos_Aires' => esc_html__('America/Buenos_Aires', 'ta-whatshelp'),
                    'America/Cambridge_Bay' => esc_html__('America/Cambridge_Bay', 'ta-whatshelp'),
                    'America/Campo_Grande' => esc_html__('America/Campo_Grande', 'ta-whatshelp'),
                    'America/Cancun' => esc_html__('America/Cancun', 'ta-whatshelp'),
                    'America/Caracas' => esc_html__('America/Caracas', 'ta-whatshelp'),
                    'America/Catamarca' => esc_html__('America/Catamarca', 'ta-whatshelp'),
                    'America/Cayenne' => esc_html__('America/Cayenne', 'ta-whatshelp'),
                    'America/Cayman' => esc_html__('America/Cayman', 'ta-whatshelp'),
                    'America/Chicago' => esc_html__('America/Chicago', 'ta-whatshelp'),
                    'America/Chihuahua' => esc_html__('America/Chihuahua', 'ta-whatshelp'),
                    'America/Coral_Harbour' => esc_html__('America/Coral_Harbour', 'ta-whatshelp'),
                    'America/Cordoba' => esc_html__('America/Cordoba', 'ta-whatshelp'),
                    'America/Costa_Rica' => esc_html__('America/Costa_Rica', 'ta-whatshelp'),
                    'America/Creston' => esc_html__('America/Creston', 'ta-whatshelp'),
                    'America/Cuiaba' => esc_html__('America/Cuiaba', 'ta-whatshelp'),
                    'America/Curacao' => esc_html__('America/Curacao', 'ta-whatshelp'),
                    'America/Danmarkshavn' => esc_html__('America/Danmarkshavn', 'ta-whatshelp'),
                    'America/Dawson' => esc_html__('America/Dawson', 'ta-whatshelp'),
                    'America/Araguaina' => esc_html__('America/Araguaina', 'ta-whatshelp'),
                    'America/Denver' => esc_html__('America/Denver', 'ta-whatshelp'),
                    'America/Araguaina' => esc_html__('America/Araguaina', 'ta-whatshelp'),
                    'America/Dominica' => esc_html__('America/Dominica', 'ta-whatshelp'),
                    'America/Edmonton' => esc_html__('America/Edmonton', 'ta-whatshelp'),
                    'America/Eirunepe' => esc_html__('America/Eirunepe', 'ta-whatshelp'),
                    'America/El_Salvador' => esc_html__('America/El_Salvador', 'ta-whatshelp'),
                    'America/Ensenada' => esc_html__('America/Ensenada', 'ta-whatshelp'),
                    'America/Fort_Nelson' => esc_html__('America/Fort_Nelson', 'ta-whatshelp'),
                    'America/Fort_Wayne' => esc_html__('America/Fort_Wayne', 'ta-whatshelp'),
                    'America/Fortaleza' => esc_html__('America/Fortaleza', 'ta-whatshelp'),
                    'America/Glace_Bay' => esc_html__('America/Glace_Bay', 'ta-whatshelp'),
                    'America/Godthab' => esc_html__('America/Godthab', 'ta-whatshelp'),
                    'America/Goose_Bay' => esc_html__('America/Goose_Bay', 'ta-whatshelp'),
                    'America/Grand_Turk' => esc_html__('America/Grand_Turk', 'ta-whatshelp'),
                    'America/Grenada' => esc_html__('America/Grenada', 'ta-whatshelp'),
                    'America/Guadeloupe' => esc_html__('America/Guadeloupe', 'ta-whatshelp'),
                    'America/Guatemala' => esc_html__('America/Guatemala', 'ta-whatshelp'),
                    'America/Guayaquil' => esc_html__('America/Guayaquil', 'ta-whatshelp'),
                    'America/Guyana' => esc_html__('America/Guyana', 'ta-whatshelp'),
                    'America/Halifax' => esc_html__('America/Halifax', 'ta-whatshelp'),
                    'America/Havana' => esc_html__('America/Havana', 'ta-whatshelp'),
                    'America/Hermosillo' => esc_html__('America/Hermosillo', 'ta-whatshelp'),
                    'America/Indiana/Indianapolis' => esc_html__('Indiana/Indianapolis', 'ta-whatshelp'),
                    'America/Indiana/Knox' => esc_html__('America/Indiana/Knox', 'ta-whatshelp'),
                    'America/Indiana/Marengo' => esc_html__('America/Indiana/Marengo', 'ta-whatshelp'),
                    'America/Indiana/Petersburg' => esc_html__('America/Indiana/Petersburg', 'ta-whatshelp'),
                    'America/Indiana/Tell_City' => esc_html__('America/Indiana/Tell_City', 'ta-whatshelp'),
                    'America/Indiana/Vevay' => esc_html__('America/Indiana/Vevay', 'ta-whatshelp'),
                    'America/Indiana/Vincennes' => esc_html__('America/Indiana/Vincennes', 'ta-whatshelp'),
                    'America/Indiana/Winamac' => esc_html__('America/Indiana/Winamac', 'ta-whatshelp'),
                    'America/Indianapolis' => esc_html__('America/Indianapolis', 'ta-whatshelp'),
                    'America/Inuvik' => esc_html__('America/Inuvik', 'ta-whatshelp'),
                    'America/Iqaluit' => esc_html__('America/Iqaluit', 'ta-whatshelp'),
                    'America/Jamaica' => esc_html__('America/Jamaica', 'ta-whatshelp'),
                    'America/Jujuy' => esc_html__('America/Jujuy', 'ta-whatshelp'),
                    'America/Juneau' => esc_html__('America/Juneau', 'ta-whatshelp'),
                    'America/Kentucky/Louisville' => esc_html__('America/Kentucky/Louisville', 'ta-whatshelp'),
                    'America/Kentucky/Monticello' => esc_html__('America/Kentucky/Monticello', 'ta-whatshelp'),
                    'America/Knox_IN' => esc_html__('America/Knox_IN', 'ta-whatshelp'),
                    'America/Kralendijk' => esc_html__('America/Kralendijk', 'ta-whatshelp'),
                    'America/La_Paz' => esc_html__('America/La_Paz', 'ta-whatshelp'),
                    'America/Lima' => esc_html__('America/Lima', 'ta-whatshelp'),
                    'America/Los_Angeles' => esc_html__('America/Los_Angeles', 'ta-whatshelp'),
                    'America/Louisville' => esc_html__('America/Louisville', 'ta-whatshelp'),
                    'America/Lower_Princes' => esc_html__('America/Lower_Princes', 'ta-whatshelp'),
                    'America/Maceio' => esc_html__('America/Maceio', 'ta-whatshelp'),
                    'America/Managua' => esc_html__('America/Managua', 'ta-whatshelp'),
                    'America/Manaus' => esc_html__('America/Manaus', 'ta-whatshelp'),
                    'America/Marigot' => esc_html__('America/Marigot', 'ta-whatshelp'),
                    'America/Martinique' => esc_html__('America/Martinique', 'ta-whatshelp'),
                    'America/Matamoros' => esc_html__('America/Matamoros', 'ta-whatshelp'),
                    'America/Mazatlan' => esc_html__('America/Mazatlan', 'ta-whatshelp'),
                    'America/Mendoza' => esc_html__('America/Mendoza', 'ta-whatshelp'),
                    'America/Menominee' => esc_html__('America/Menominee', 'ta-whatshelp'),
                    'America/Merida' => esc_html__('America/Merida', 'ta-whatshelp'),
                    'America/Metlakatla' => esc_html__('America/Metlakatla', 'ta-whatshelp'),
                    'America/Mexico_City' => esc_html__('America/Mexico_City', 'ta-whatshelp'),
                    'America/Miquelon' => esc_html__('America/Miquelon', 'ta-whatshelp'),
                    'America/Moncton' => esc_html__('America/Moncton', 'ta-whatshelp'),
                    'America/Monterrey' => esc_html__('America/Monterrey', 'ta-whatshelp'),
                    'America/Montevideo' => esc_html__('America/Montevideo', 'ta-whatshelp'),
                    'America/Montreal' => esc_html__('America/Montreal', 'ta-whatshelp'),
                    'America/Montserrat' => esc_html__('America/Montserrat', 'ta-whatshelp'),
                    'America/Nassau' => esc_html__('America/Nassau', 'ta-whatshelp'),
                    'America/New_York' => esc_html__('America/New_York', 'ta-whatshelp'),
                    'America/Nipigon' => esc_html__('America/Nipigon', 'ta-whatshelp'),
                    'America/Nome' => esc_html__('America/Nome', 'ta-whatshelp'),
                    'America/Noronha' => esc_html__('America/Noronha', 'ta-whatshelp'),
                    'America/North_Dakota/Beulah' => esc_html__('America/North_Dakota/Beulah', 'ta-whatshelp'),
                    'America/North_Dakota/Center' => esc_html__('America/North_Dakota/Center', 'ta-whatshelp'),
                    'America/North_Dakota/New_Salem' => esc_html__('America/North_Dakota/New_Salem', 'ta-whatshelp'),
                    'America/Ojinaga' => esc_html__('America/Ojinaga', 'ta-whatshelp'),
                    'America/Panama' => esc_html__('America/Panama', 'ta-whatshelp'),
                    'America/Pangnirtung' => esc_html__('America/Pangnirtung', 'ta-whatshelp'),
                    'America/Paramaribo' => esc_html__('America/Paramaribo', 'ta-whatshelp'),
                    'America/Phoenix' => esc_html__('America/Phoenix', 'ta-whatshelp'),
                    'America/Port-au-Prince' => esc_html__('America/Port-au-Prince', 'ta-whatshelp'),
                    'America/Port_of_Spain' => esc_html__('America/Port_of_Spain', 'ta-whatshelp'),
                    'America/Porto_Acre' => esc_html__('America/Porto_Acre', 'ta-whatshelp'),
                    'America/Porto_Velho' => esc_html__('America/Porto_Velho', 'ta-whatshelp'),
                    'America/Puerto_Rico' => esc_html__('America/Puerto_Rico', 'ta-whatshelp'),
                    'America/Punta_Arenas' => esc_html__('America/Punta_Arenas', 'ta-whatshelp'),
                    'America/Rainy_River' => esc_html__('America/Rainy_River', 'ta-whatshelp'),
                    'America/Rankin_Inlet' => esc_html__('America/Rankin_Inlet', 'ta-whatshelp'),
                    'America/Recife' => esc_html__('America/Recife', 'ta-whatshelp'),
                    'America/Regina' => esc_html__('America/Regina', 'ta-whatshelp'),
                    'America/Resolute' => esc_html__('America/Resolute', 'ta-whatshelp'),
                    'America/Rio_Branco' => esc_html__('America/Rio_Branco', 'ta-whatshelp'),
                    'America/Rosario' => esc_html__('America/Rosario', 'ta-whatshelp'),
                    'America/Santa_Isabel' => esc_html__('America/Santa_Isabel', 'ta-whatshelp'),
                    'America/Santarem' => esc_html__('America/Santarem', 'ta-whatshelp'),
                    'America/Santiago' => esc_html__('America/Santiago', 'ta-whatshelp'),
                    'America/Santo_Domingo' => esc_html__('America/Santo_Domingo', 'ta-whatshelp'),
                    'America/Sao_Paulo' => esc_html__('America/Sao_Paulo', 'ta-whatshelp'),
                    'America/Scoresbysund' => esc_html__('America/Scoresbysund', 'ta-whatshelp'),
                    'America/Shiprock' => esc_html__('America/Shiprock', 'ta-whatshelp'),
                    'America/Sitka' => esc_html__('America/Sitka', 'ta-whatshelp'),
                    'America/St_Barthelemy' => esc_html__('America/St_Barthelemy', 'ta-whatshelp'),
                    'America/St_Johns' => esc_html__('America/St_Johns', 'ta-whatshelp'),
                    'America/St_Kitts' => esc_html__('America/St_Kitts', 'ta-whatshelp'),
                    'America/St_Lucia' => esc_html__('America/St_Lucia', 'ta-whatshelp'),
                    'America/St_Thomas' => esc_html__('America/St_Thomas', 'ta-whatshelp'),
                    'America/St_Vincent' => esc_html__('America/St_Vincent', 'ta-whatshelp'),
                    'America/Swift_Current' => esc_html__('America/Swift_Current', 'ta-whatshelp'),
                    'America/Tegucigalpa' => esc_html__('America/Tegucigalpa', 'ta-whatshelp'),
                    'America/Thule' => esc_html__('America/Thule', 'ta-whatshelp'),
                    'America/Thunder_Bay' => esc_html__('America/Thunder_Bay', 'ta-whatshelp'),
                    'America/Tijuana' => esc_html__('America/Tijuana', 'ta-whatshelp'),
                    'America/Toronto' => esc_html__('America/Toronto', 'ta-whatshelp'),
                    'America/Tortola' => esc_html__('America/Tortola', 'ta-whatshelp'),
                    'America/Vancouver' => esc_html__('America/Vancouver', 'ta-whatshelp'),
                    'America/Virgin' => esc_html__('America/Virgin', 'ta-whatshelp'),
                    'America/Whitehorse' => esc_html__('America/Whitehorse', 'ta-whatshelp'),
                    'America/Winnipeg' => esc_html__('America/Winnipeg', 'ta-whatshelp'),
                    'America/Yakutat' => esc_html__('America/Yakutat', 'ta-whatshelp'),
                    'America/Yellowknife' => esc_html__('America/Yellowknife', 'ta-whatshelp'),
                    'Antarctica/Casey' => esc_html__('Antarctica/Casey', 'ta-whatshelp'),
                    'Antarctica/Davis' => esc_html__('Antarctica/Davis', 'ta-whatshelp'),
                    'Antarctica/DumontDUrville' => esc_html__('Antarctica/DumontDUrville', 'ta-whatshelp'),
                    'Antarctica/Macquarie' => esc_html__('Antarctica/Macquarie', 'ta-whatshelp'),
                    'Antarctica/Mawson' => esc_html__('Antarctica/Mawson', 'ta-whatshelp'),
                    'Antarctica/McMurdo' => esc_html__('Antarctica/McMurdo', 'ta-whatshelp'),
                    'Antarctica/Palmer' => esc_html__('Antarctica/Palmer', 'ta-whatshelp'),
                    'Antarctica/Rothera' => esc_html__('Antarctica/Rothera', 'ta-whatshelp'),
                    'Antarctica/South_Pole' => esc_html__('Antarctica/South_Pole', 'ta-whatshelp'),
                    'Antarctica/Syowa' => esc_html__('Antarctica/Syowa', 'ta-whatshelp'),
                    'Antarctica/Troll' => esc_html__('Antarctica/Troll', 'ta-whatshelp'),
                    'Antarctica/Vostok' => esc_html__('Antarctica/Vostok', 'ta-whatshelp'),
                    'Arctic/Longyearbyen' => esc_html__('Arctic/Longyearbyen', 'ta-whatshelp'),
                    'Asia/Aden' => esc_html__('Asia/Aden', 'ta-whatshelp'),
                    'Asia/Almaty' => esc_html__('Asia/Almaty', 'ta-whatshelp'),
                    'Asia/Amman' => esc_html__('Asia/Amman', 'ta-whatshelp'),
                    'Asia/Anadyr' => esc_html__('Asia/Anadyr', 'ta-whatshelp'),
                    'Asia/Aqtau' => esc_html__('Asia/Aqtau', 'ta-whatshelp'),
                    'Asia/Aqtobe' => esc_html__('Asia/Aqtobe', 'ta-whatshelp'),
                    'Asia/Ashgabat' => esc_html__('Asia/Ashgabat', 'ta-whatshelp'),
                    'Asia/Ashkhabad' => esc_html__('Asia/Ashkhabad', 'ta-whatshelp'),
                    'Asia/Atyrau' => esc_html__('Asia/Atyrau', 'ta-whatshelp'),
                    'Asia/Baghdad' => esc_html__('Asia/Baghdad', 'ta-whatshelp'),
                    'Asia/Bahrain' => esc_html__('Asia/Bahrain', 'ta-whatshelp'),
                    'Asia/Baku' => esc_html__('Asia/Baku', 'ta-whatshelp'),
                    'Asia/Bangkok' => esc_html__('Asia/Bangkok', 'ta-whatshelp'),
                    'Asia/Barnaul' => esc_html__('Asia/Barnaul', 'ta-whatshelp'),
                    'Asia/Beirut' => esc_html__('Asia/Beirut', 'ta-whatshelp'),
                    'Asia/Bishkek' => esc_html__('Asia/Bishkek', 'ta-whatshelp'),
                    'Asia/Brunei' => esc_html__('Asia/Brunei', 'ta-whatshelp'),
                    'Asia/Calcutta' => esc_html__('Asia/Calcutta', 'ta-whatshelp'),
                    'Asia/Chita' => esc_html__('Asia/Chita', 'ta-whatshelp'),
                    'Asia/Choibalsan' => esc_html__('Asia/Choibalsan', 'ta-whatshelp'),
                    'Asia/Chongqing' => esc_html__('Asia/Chongqing', 'ta-whatshelp'),
                    'Asia/Chungking' => esc_html__('Asia/Chungking', 'ta-whatshelp'),
                    'Asia/Colombo' => esc_html__('Asia/Colombo', 'ta-whatshelp'),
                    'Asia/Dacca' => esc_html__('Asia/Dacca', 'ta-whatshelp'),
                    'Asia/Damascus' => esc_html__('Asia/Damascus', 'ta-whatshelp'),
                    'Asia/Dhaka' => esc_html__('Asia/Dhaka', 'ta-whatshelp'),
                    'Asia/Dili' => esc_html__('Asia/Dili', 'ta-whatshelp'),
                    'Asia/Dubai' => esc_html__('Asia/Dubai', 'ta-whatshelp'),
                    'Asia/Dushanbe' => esc_html__('Asia/Dushanbe', 'ta-whatshelp'),
                    'Asia/Famagusta' => esc_html__('Asia/Famagusta', 'ta-whatshelp'),
                    'Asia/Gaza' => esc_html__('Asia/Gaza', 'ta-whatshelp'),
                    'Asia/Harbin' => esc_html__('Asia/Harbin', 'ta-whatshelp'),
                    'Asia/Hebron' => esc_html__('Asia/Hebron', 'ta-whatshelp'),
                    'Asia/Ho_Chi_Minh' => esc_html__('Asia/Ho_Chi_Minh', 'ta-whatshelp'),
                    'Asia/Hong_Kong' => esc_html__('Asia/Hong_Kong', 'ta-whatshelp'),
                    'Asia/Hovd' => esc_html__('Asia/Hovd', 'ta-whatshelp'),
                    'Asia/Irkutsk' => esc_html__('Asia/Irkutsk', 'ta-whatshelp'),
                    'Asia/Istanbul' => esc_html__('Asia/Istanbul', 'ta-whatshelp'),
                    'Asia/Jakarta' => esc_html__('Asia/Jakarta', 'ta-whatshelp'),
                    'Asia/Jayapura' => esc_html__('Asia/Jayapura', 'ta-whatshelp'),
                    'Asia/Jerusalem' => esc_html__('Asia/Jerusalem', 'ta-whatshelp'),
                    'Asia/Kabul' => esc_html__('Asia/Kabul', 'ta-whatshelp'),
                    'Asia/Kamchatka' => esc_html__('Asia/Kamchatka', 'ta-whatshelp'),
                    'Asia/Karachi' => esc_html__('Asia/Karachi', 'ta-whatshelp'),
                    'Asia/Kashgar' => esc_html__('Asia/Kashgar', 'ta-whatshelp'),
                    'Asia/Kathmandu' => esc_html__('Asia/Kathmandu', 'ta-whatshelp'),
                    'Asia/Katmandu' => esc_html__('Asia/Katmandu', 'ta-whatshelp'),
                    'Asia/Khandyga' => esc_html__('Asia/Khandyga', 'ta-whatshelp'),
                    'Asia/Kolkata' => esc_html__('Asia/Kolkata', 'ta-whatshelp'),
                    'Asia/Krasnoyarsk' => esc_html__('Asia/Krasnoyarsk', 'ta-whatshelp'),
                    'Asia/Kuala_Lumpur' => esc_html__('Asia/Kuala_Lumpur', 'ta-whatshelp'),
                    'Asia/Kuching' => esc_html__('Asia/Kuching', 'ta-whatshelp'),
                    'Asia/Kuwait' => esc_html__('Asia/Kuwait', 'ta-whatshelp'),
                    'Asia/Macao' => esc_html__('Asia/Macao', 'ta-whatshelp'),
                    'Asia/Macau' => esc_html__('Asia/Macau', 'ta-whatshelp'),
                    'Asia/Magadan' => esc_html__('Asia/Magadan', 'ta-whatshelp'),
                    'Asia/Makassar' => esc_html__('Asia/Makassar', 'ta-whatshelp'),
                    'Asia/Manila' => esc_html__('Asia/Manila', 'ta-whatshelp'),
                    'Asia/Muscat' => esc_html__('Asia/Muscat', 'ta-whatshelp'),
                    'Asia/Nicosia' => esc_html__('Asia/Nicosia', 'ta-whatshelp'),
                    'Asia/Novokuznetsk' => esc_html__('Asia/Novokuznetsk', 'ta-whatshelp'),
                    'Asia/Novosibirsk' => esc_html__('Asia/Novosibirsk', 'ta-whatshelp'),
                    'Asia/Omsk' => esc_html__('Asia/Omsk', 'ta-whatshelp'),
                    'Asia/Oral' => esc_html__('Asia/Oral', 'ta-whatshelp'),
                    'Asia/Phnom_Penh' => esc_html__('Asia/Phnom_Penh', 'ta-whatshelp'),
                    'Asia/Pontianak' => esc_html__('Asia/Pontianak', 'ta-whatshelp'),
                    'Asia/Pyongyang' => esc_html__('Asia/Pyongyang', 'ta-whatshelp'),
                    'Asia/Qatar' => esc_html__('Asia/Qatar', 'ta-whatshelp'),
                    'Asia/Qyzylorda' => esc_html__('Asia/Qyzylorda', 'ta-whatshelp'),
                    'Asia/Rangoon' => esc_html__('Asia/Rangoon', 'ta-whatshelp'),
                    'Asia/Riyadh' => esc_html__('Asia/Riyadh', 'ta-whatshelp'),
                    'Asia/Saigon' => esc_html__('Asia/Saigon', 'ta-whatshelp'),
                    'Asia/Sakhalin' => esc_html__('Asia/Sakhalin', 'ta-whatshelp'),
                    'Asia/Samarkand' => esc_html__('Asia/Samarkand', 'ta-whatshelp'),
                    'Asia/Seoul' => esc_html__('Asia/Seoul', 'ta-whatshelp'),
                    'Asia/Shanghai' => esc_html__('Asia/Shanghai', 'ta-whatshelp'),
                    'Asia/Singapore' => esc_html__('Asia/Singapore', 'ta-whatshelp'),
                    'Asia/Srednekolymsk' => esc_html__('Asia/Srednekolymsk', 'ta-whatshelp'),
                    'Asia/Taipei' => esc_html__('Asia/Taipei', 'ta-whatshelp'),
                    'Asia/Tashkent' => esc_html__('Asia/Tashkent', 'ta-whatshelp'),
                    'Asia/Tbilisi' => esc_html__('Asia/Tbilisi', 'ta-whatshelp'),
                    'Asia/Tehran' => esc_html__('Asia/Tehran', 'ta-whatshelp'),
                    'Asia/Tel_Aviv' => esc_html__('Asia/Tel_Aviv', 'ta-whatshelp'),
                    'Asia/Thimbu' => esc_html__('Asia/Thimbu', 'ta-whatshelp'),
                    'Asia/Thimphu' => esc_html__('Asia/Thimphu', 'ta-whatshelp'),
                    'Asia/Tokyo' => esc_html__('Asia/Tokyo', 'ta-whatshelp'),
                    'Asia/Tomsk' => esc_html__('Asia/Tomsk', 'ta-whatshelp'),
                    'Asia/Ujung_Pandang' => esc_html__('Asia/Ujung_Pandang', 'ta-whatshelp'),
                    'Asia/Ulaanbaatar' => esc_html__('Asia/Ulaanbaatar', 'ta-whatshelp'),
                    'Asia/Ulan_Bator' => esc_html__('Asia/Ulan_Bator', 'ta-whatshelp'),
                    'Asia/Urumqi' => esc_html__('Asia/Urumqi', 'ta-whatshelp'),
                    'Asia/Ust-Nera' => esc_html__('Asia/Ust-Nera', 'ta-whatshelp'),
                    'Asia/Vientiane' => esc_html__('Asia/Vientiane', 'ta-whatshelp'),
                    'Asia/Vladivostok' => esc_html__('Asia/Vladivostok', 'ta-whatshelp'),
                    'Asia/Yakutsk' => esc_html__('Asia/Yakutsk', 'ta-whatshelp'),
                    'Asia/Yangon' => esc_html__('Asia/Yangon', 'ta-whatshelp'),
                    'Asia/Yekaterinburg' => esc_html__('Asia/Yekaterinburg', 'ta-whatshelp'),
                    'Asia/Yerevan' => esc_html__('Asia/Yerevan', 'ta-whatshelp'),
                    'Atlantic/Azores' => esc_html__('Atlantic/Azores', 'ta-whatshelp'),
                    'Atlantic/Bermuda' => esc_html__('Atlantic/Bermuda', 'ta-whatshelp'),
                    'Atlantic/Canary' => esc_html__('Atlantic/Canary', 'ta-whatshelp'),
                    'Atlantic/Cape_Verde' => esc_html__('Atlantic/Cape_Verde', 'ta-whatshelp'),
                    'Atlantic/Faeroe' => esc_html__('Atlantic/Faeroe', 'ta-whatshelp'),
                    'Atlantic/Faroe' => esc_html__('Atlantic/Faroe', 'ta-whatshelp'),
                    'Atlantic/Jan_Mayen' => esc_html__('Atlantic/Jan_Mayen', 'ta-whatshelp'),
                    'Atlantic/Madeira' => esc_html__('Atlantic/Madeira', 'ta-whatshelp'),
                    'Atlantic/Reykjavik' => esc_html__('Atlantic/Reykjavik', 'ta-whatshelp'),
                    'Atlantic/South_Georgia' => esc_html__('Atlantic/South_Georgia', 'ta-whatshelp'),
                    'Atlantic/St_Helena' => esc_html__('Atlantic/St_Helena', 'ta-whatshelp'),
                    'Atlantic/Stanley' => esc_html__('Atlantic/Stanley', 'ta-whatshelp'),
                    'Australia/ACT' => esc_html__('Australia/ACT', 'ta-whatshelp'),
                    'Australia/Adelaide' => esc_html__('Australia/Adelaide', 'ta-whatshelp'),
                    'Australia/Brisbane' => esc_html__('Australia/Brisbane', 'ta-whatshelp'),
                    'Australia/Broken_Hill' => esc_html__('Asia/Broken_Hill', 'ta-whatshelp'),
                    'Australia/Canberra' => esc_html__('Australia/Canberra', 'ta-whatshelp'),
                    'Australia/Currie' => esc_html__('Australia/Currie', 'ta-whatshelp'),
                    'Australia/Darwin' => esc_html__('Australia/Darwin', 'ta-whatshelp'),
                    'Australia/Eucla' => esc_html__('Australia/Eucla', 'ta-whatshelp'),
                    'Australia/Hobart' => esc_html__('Australia/Hobart', 'ta-whatshelp'),
                    'Australia/LHI' => esc_html__('Australia/LHI', 'ta-whatshelp'),
                    'Australia/Lindeman' => esc_html__('Australia/Lindeman', 'ta-whatshelp'),
                    'Australia/Lord_Howe' => esc_html__('Australia/Lord_Howe', 'ta-whatshelp'),
                    'Australia/Melbourne' => esc_html__('Australia/Melbourne', 'ta-whatshelp'),
                    'Australia/NSW' => esc_html__('Australia/NSW', 'ta-whatshelp'),
                    'Australia/North' => esc_html__('Australia/North', 'ta-whatshelp'),
                    'Australia/Perth' => esc_html__('Australia/Perth', 'ta-whatshelp'),
                    'Australia/Queensland' => esc_html__('Australia/Queensland', 'ta-whatshelp'),
                    'Australia/South' => esc_html__('Australia/South', 'ta-whatshelp'),
                    'Australia/Sydney' => esc_html__('Australia/Sydney', 'ta-whatshelp'),
                    'Australia/Tasmania' => esc_html__('Australia/Tasmania', 'ta-whatshelp'),
                    'Australia/Victoria' => esc_html__('Australia/Victoria', 'ta-whatshelp'),
                    'Australia/West' => esc_html__('Australia/West', 'ta-whatshelp'),
                    'Australia/Yancowinna' => esc_html__('Australia/Yancowinna', 'ta-whatshelp'),
                    'Brazil/Acre' => esc_html__('Brazil/Acre', 'ta-whatshelp'),
                    'Brazil/DeNoronha' => esc_html__('Brazil/DeNoronha', 'ta-whatshelp'),
                    'Brazil/East' => esc_html__('Brazil/East', 'ta-whatshelp'),
                    'Brazil/West' => esc_html__('Brazil/West', 'ta-whatshelp'),
                    'CET' => esc_html__('CET', 'ta-whatshelp'),
                    'CST6CDT' => esc_html__('CST6CDT', 'ta-whatshelp'),
                    'Canada/Atlantic' => esc_html__('Canada/Atlantic', 'ta-whatshelp'),
                    'Canada/Central' => esc_html__('Canada/Central', 'ta-whatshelp'),
                    'Canada/Eastern' => esc_html__('Canada/Eastern', 'ta-whatshelp'),
                    'Canada/Mountain' => esc_html__('Canada/Mountain', 'ta-whatshelp'),
                    'Canada/Newfoundland' => esc_html__('Canada/Newfoundland', 'ta-whatshelp'),
                    'Canada/Pacific' => esc_html__('Canada/Pacific', 'ta-whatshelp'),
                    'Canada/Saskatchewan' => esc_html__('Canada/Saskatchewan', 'ta-whatshelp'),
                    'Canada/Yukon' => esc_html__('Canada/Yukon', 'ta-whatshelp'),
                    'Chile/Continental' => esc_html__('Chile/Continental', 'ta-whatshelp'),
                    'Chile/EasterIsland' => esc_html__('Chile/EasterIsland', 'ta-whatshelp'),
                    'Cuba' => esc_html__('Cuba', 'ta-whatshelp'),
                    'EET' => esc_html__('EET', 'ta-whatshelp'),
                    'EST' => esc_html__('EST', 'ta-whatshelp'),
                    'EST5EDT' => esc_html__('EST5EDT', 'ta-whatshelp'),
                    'Egypt' => esc_html__('Egypt', 'ta-whatshelp'),
                    'Eire' => esc_html__('Eire', 'ta-whatshelp'),
                    'Etc/GMT' => esc_html__('Etc/GMT', 'ta-whatshelp'),
                    'Etc/GMT+0' => esc_html__('Etc/GMT+0', 'ta-whatshelp'),
                    'Etc/GMT+1' => esc_html__('Etc/GMT+1', 'ta-whatshelp'),
                    'Etc/GMT+10' => esc_html__('Etc/GMT+10', 'ta-whatshelp'),
                    'Etc/GMT+11' => esc_html__('Etc/GMT+11', 'ta-whatshelp'),
                    'Etc/GMT+12' => esc_html__('Etc/GMT+12', 'ta-whatshelp'),
                    'Etc/GMT+2' => esc_html__('Etc/GMT+2', 'ta-whatshelp'),
                    'Etc/GMT+3' => esc_html__('Etc/GMT+3', 'ta-whatshelp'),
                    'Etc/GMT+4' => esc_html__('Etc/GMT+4', 'ta-whatshelp'),
                    'Etc/GMT+5' => esc_html__('Etc/GMT+5', 'ta-whatshelp'),
                    'Etc/GMT+6' => esc_html__('Etc/GMT+6', 'ta-whatshelp'),
                    'Etc/GMT+7' => esc_html__('Etc/GMT+7', 'ta-whatshelp'),
                    'Etc/GMT+8' => esc_html__('Etc/GMT+8', 'ta-whatshelp'),
                    'Etc/GMT+9' => esc_html__('Etc/GMT+9', 'ta-whatshelp'),
                    'Etc/GMT-0' => esc_html__('Etc/GMT-0', 'ta-whatshelp'),
                    'Etc/GMT-1' => esc_html__('Etc/GMT-1', 'ta-whatshelp'),
                    'Etc/GMT-10' => esc_html__('Etc/GMT-10', 'ta-whatshelp'),
                    'Etc/GMT-11' => esc_html__('Etc/GMT-11', 'ta-whatshelp'),
                    'Etc/GMT-12' => esc_html__('Etc/GMT-12', 'ta-whatshelp'),
                    'Etc/GMT-13' => esc_html__('Etc/GMT-13', 'ta-whatshelp'),
                    'Etc/GMT-14' => esc_html__('Etc/GMT-14', 'ta-whatshelp'),
                    'Etc/GMT-2' => esc_html__('Etc/GMT-2', 'ta-whatshelp'),
                    'Etc/GMT-3' => esc_html__('Etc/GMT-3', 'ta-whatshelp'),
                    'Etc/GMT-4' => esc_html__('Etc/GMT-4', 'ta-whatshelp'),
                    'Etc/GMT-5' => esc_html__('Etc/GMT-5', 'ta-whatshelp'),
                    'Etc/GMT-6' => esc_html__('Etc/GMT-6', 'ta-whatshelp'),
                    'Etc/GMT-7' => esc_html__('Etc/GMT-7', 'ta-whatshelp'),
                    'Etc/GMT-8' => esc_html__('Etc/GMT-8', 'ta-whatshelp'),
                    'Etc/GMT-9' => esc_html__('Etc/GMT-9', 'ta-whatshelp'),
                    'Etc/GMT0' => esc_html__('Etc/GMT0', 'ta-whatshelp'),
                    'Etc/Greenwich' => esc_html__('Etc/Greenwich', 'ta-whatshelp'),
                    'Etc/UCT' => esc_html__('Etc/UCT', 'ta-whatshelp'),
                    'Etc/UTC' => esc_html__('Etc/UTC', 'ta-whatshelp'),
                    'Etc/Universal' => esc_html__('Etc/Universal', 'ta-whatshelp'),
                    'Etc/Zulu' => esc_html__('Etc/Zulu', 'ta-whatshelp'),
                    'Europe/Amsterdam' => esc_html__('Europe/Amsterdam', 'ta-whatshelp'),
                    'Europe/Andorra' => esc_html__('Europe/Andorra', 'ta-whatshelp'),
                    'Europe/Astrakhan' => esc_html__('Europe/Astrakhan', 'ta-whatshelp'),
                    'Europe/Athens' => esc_html__('Europe/Athens', 'ta-whatshelp'),
                    'Europe/Belfast' => esc_html__('Europe/Belfast', 'ta-whatshelp'),
                    'Europe/Belgrade' => esc_html__('Europe/Belgrade', 'ta-whatshelp'),
                    'Europe/Berlin' => esc_html__('Europe/Berlin', 'ta-whatshelp'),
                    'Europe/Bratislava' => esc_html__('Europe/Bratislava', 'ta-whatshelp'),
                    'Europe/Brussels' => esc_html__('Europe/Brussels', 'ta-whatshelp'),
                    'Europe/Bucharest' => esc_html__('Europe/Bucharest', 'ta-whatshelp'),
                    'Europe/Budapest' => esc_html__('Europe/Budapest', 'ta-whatshelp'),
                    'Europe/Busingen' => esc_html__('Europe/Busingen', 'ta-whatshelp'),
                    'Europe/Chisinau' => esc_html__('Europe/Chisinau', 'ta-whatshelp'),
                    'Europe/Copenhagen' => esc_html__('Europe/Copenhagen', 'ta-whatshelp'),
                    'Europe/Dublin' => esc_html__('Europe/Dublin', 'ta-whatshelp'),
                    'Europe/Gibraltar' => esc_html__('Europe/Gibraltar', 'ta-whatshelp'),
                    'Europe/Guernsey' => esc_html__('Europe/Guernsey', 'ta-whatshelp'),
                    'Europe/Helsinki' => esc_html__('Europe/Helsinki', 'ta-whatshelp'),
                    'Europe/Isle_of_Man' => esc_html__('Europe/Isle_of_Man', 'ta-whatshelp'),
                    'Europe/Istanbul' => esc_html__('Europe/Istanbul', 'ta-whatshelp'),
                    'Europe/Jersey' => esc_html__('Europe/Jersey', 'ta-whatshelp'),
                    'Europe/Kaliningrad' => esc_html__('Europe/Kaliningrad', 'ta-whatshelp'),
                    'Europe/Kiev' => esc_html__('Europe/Kiev', 'ta-whatshelp'),
                    'Europe/Kirov' => esc_html__('Europe/Kirov', 'ta-whatshelp'),
                    'Europe/Lisbon' => esc_html__('Europe/Lisbon', 'ta-whatshelp'),
                    'Europe/Ljubljana' => esc_html__('Europe/Ljubljana', 'ta-whatshelp'),
                    'Europe/London' => esc_html__('Europe/London', 'ta-whatshelp'),
                    'Europe/Luxembourg' => esc_html__('Europe/Luxembourg', 'ta-whatshelp'),
                    'Europe/Madrid' => esc_html__('Europe/Madrid', 'ta-whatshelp'),
                    'Europe/Malta' => esc_html__('Europe/Malta', 'ta-whatshelp'),
                    'Europe/Mariehamn' => esc_html__('Europe/Mariehamn', 'ta-whatshelp'),
                    'Europe/Minsk' => esc_html__('Europe/Minsk', 'ta-whatshelp'),
                    'Europe/Monaco' => esc_html__('Europe/Monaco', 'ta-whatshelp'),
                    'Europe/Moscow' => esc_html__('Europe/Moscow', 'ta-whatshelp'),
                    'Europe/Nicosia' => esc_html__('Europe/Nicosia', 'ta-whatshelp'),
                    'Europe/Oslo' => esc_html__('Europe/Oslo', 'ta-whatshelp'),
                    'Europe/Paris' => esc_html__('Europe/Paris', 'ta-whatshelp'),
                    'Europe/Podgorica' => esc_html__('Europe/Podgorica', 'ta-whatshelp'),
                    'Europe/Prague' => esc_html__('Europe/Prague', 'ta-whatshelp'),
                    'Europe/Riga' => esc_html__('Europe/Riga', 'ta-whatshelp'),
                    'Europe/Rome' => esc_html__('Europe/Rome', 'ta-whatshelp'),
                    'Europe/Samara' => esc_html__('Europe/Samara', 'ta-whatshelp'),
                    'Europe/San_Marino' => esc_html__('Europe/San_Marino', 'ta-whatshelp'),
                    'Europe/Sarajevo' => esc_html__('Europe/Sarajevo', 'ta-whatshelp'),
                    'Europe/Saratov' => esc_html__('Europe/Saratov', 'ta-whatshelp'),
                    'Europe/Simferopol' => esc_html__('Europe/Simferopol', 'ta-whatshelp'),
                    'Europe/Skopje' => esc_html__('Europe/Skopje', 'ta-whatshelp'),
                    'Europe/Sofia' => esc_html__('Europe/Sofia', 'ta-whatshelp'),
                    'Europe/Stockholm' => esc_html__('Europe/Stockholm', 'ta-whatshelp'),
                    'Europe/Tallinn' => esc_html__('Europe/Tallinn', 'ta-whatshelp'),
                    'Europe/Tirane' => esc_html__('Europe/Tirane', 'ta-whatshelp'),
                    'Europe/Tiraspol' => esc_html__('Europe/Tiraspol', 'ta-whatshelp'),
                    'Europe/Ulyanovsk' => esc_html__('Europe/Ulyanovsk', 'ta-whatshelp'),
                    'Europe/Uzhgorod' => esc_html__('Europe/Uzhgorod', 'ta-whatshelp'),
                    'Europe/Vaduz' => esc_html__('Europe/Vaduz', 'ta-whatshelp'),
                    'Europe/Vatican' => esc_html__('Europe/Vatican', 'ta-whatshelp'),
                    'Europe/Vienna' => esc_html__('Europe/Vienna', 'ta-whatshelp'),
                    'Europe/Vilnius' => esc_html__('Europe/Vilnius', 'ta-whatshelp'),
                    'Europe/Volgograd' => esc_html__('Europe/Volgograd', 'ta-whatshelp'),
                    'Europe/Warsaw' => esc_html__('Europe/Warsaw', 'ta-whatshelp'),
                    'Europe/Zagreb' => esc_html__('Europe/Zagreb', 'ta-whatshelp'),
                    'Europe/Zaporozhye' => esc_html__('Europe/Zaporozhye', 'ta-whatshelp'),
                    'Europe/Zurich' => esc_html__('Europe/Zurich', 'ta-whatshelp'),
                    'GB' => esc_html__('GB', 'ta-whatshelp'),
                    'GB-Eire' => esc_html__('GB-Eire', 'ta-whatshelp'),
                    'GMT' => esc_html__('GMT', 'ta-whatshelp'),
                    'GMT+0' => esc_html__('GMT+0', 'ta-whatshelp'),
                    'GMT-0' => esc_html__('GMT-0', 'ta-whatshelp'),
                    'GMT0' => esc_html__('GMT0', 'ta-whatshelp'),
                    'Greenwich' => esc_html__('Greenwich', 'ta-whatshelp'),
                    'HST' => esc_html__('HST', 'ta-whatshelp'),
                    'Hongkong' => esc_html__('Hongkong', 'ta-whatshelp'),
                    'Iceland' => esc_html__('Iceland', 'ta-whatshelp'),
                    'Indian/Antananarivo' => esc_html__('Indian/Antananarivo', 'ta-whatshelp'),
                    'Indian/Chagos' => esc_html__('Indian/Chagos', 'ta-whatshelp'),
                    'Indian/Christmas' => esc_html__('Indian/Christmas', 'ta-whatshelp'),
                    'Indian/Cocos' => esc_html__('Indian/Cocos', 'ta-whatshelp'),
                    'Indian/Comoro' => esc_html__('Indian/Comoro', 'ta-whatshelp'),
                    'Indian/Kerguelen' => esc_html__('Indian/Kerguelen', 'ta-whatshelp'),
                    'Indian/Mahe' => esc_html__('Indian/Mahe', 'ta-whatshelp'),
                    'Indian/Maldives' => esc_html__('Indian/Maldives', 'ta-whatshelp'),
                    'Indian/Mauritius' => esc_html__('Indian/Mauritius', 'ta-whatshelp'),
                    'Indian/Mayotte' => esc_html__('Indian/Mayotte', 'ta-whatshelp'),
                    'Indian/Reunion' => esc_html__('Indian/Reunion', 'ta-whatshelp'),
                    'Iran' => esc_html__('Iran', 'ta-whatshelp'),
                    'Israel' => esc_html__('Israel', 'ta-whatshelp'),
                    'Jamaica' => esc_html__('Jamaica', 'ta-whatshelp'),
                    'Japan' => esc_html__('Japan', 'ta-whatshelp'),
                    'Kwajalein' => esc_html__('Kwajalein', 'ta-whatshelp'),
                    'Libya' => esc_html__('Libya', 'ta-whatshelp'),
                    'MET' => esc_html__('MET', 'ta-whatshelp'),
                    'MST' => esc_html__('MST', 'ta-whatshelp'),
                    'MST7MDT' => esc_html__('MST7MDT', 'ta-whatshelp'),
                    'Mexico/BajaNorte' => esc_html__('Mexico/BajaNorte', 'ta-whatshelp'),
                    'Mexico/BajaSur' => esc_html__('Mexico/BajaSur', 'ta-whatshelp'),
                    'Mexico/General' => esc_html__('Mexico/General', 'ta-whatshelp'),
                    'NZ' => esc_html__('NZ', 'ta-whatshelp'),
                    'NZ-CHAT' => esc_html__('NZ-CHAT', 'ta-whatshelp'),
                    'Navajo' => esc_html__('Navajo', 'ta-whatshelp'),
                    'PRC' => esc_html__('PRC', 'ta-whatshelp'),
                    'PST8PDT' => esc_html__('PST8PDT', 'ta-whatshelp'),
                    'Pacific/Apia' => esc_html__('Pacific/Apia', 'ta-whatshelp'),
                    'Pacific/Auckland' => esc_html__('Pacific/Auckland', 'ta-whatshelp'),
                    'Pacific/Bougainville' => esc_html__('Pacific/Bougainville', 'ta-whatshelp'),
                    'Pacific/Chatham' => esc_html__('Pacific/Chatham', 'ta-whatshelp'),
                    'Pacific/Chuuk' => esc_html__('Pacific/Chuuk', 'ta-whatshelp'),
                    'Pacific/Easter' => esc_html__('Pacific/Easter', 'ta-whatshelp'),
                    'Pacific/Efate' => esc_html__('Pacific/Efate', 'ta-whatshelp'),
                    'Pacific/Enderbury' => esc_html__('Pacific/Enderbury', 'ta-whatshelp'),
                    'Pacific/Fakaofo' => esc_html__('Pacific/Fakaofo', 'ta-whatshelp'),
                    'Pacific/Fiji' => esc_html__('Pacific/Fiji', 'ta-whatshelp'),
                    'Pacific/Funafuti' => esc_html__('Pacific/Funafuti', 'ta-whatshelp'),
                    'Pacific/Galapagos' => esc_html__('Pacific/Galapagos', 'ta-whatshelp'),
                    'Pacific/Gambier' => esc_html__('Pacific/Gambier', 'ta-whatshelp'),
                    'Pacific/Guadalcanal' => esc_html__('Pacific/Guadalcanal', 'ta-whatshelp'),
                    'Pacific/Guam' => esc_html__('Pacific/Guam', 'ta-whatshelp'),
                    'Pacific/Honolulu' => esc_html__('Pacific/Honolulu', 'ta-whatshelp'),
                    'Pacific/Johnston' => esc_html__('Pacific/Johnston', 'ta-whatshelp'),
                    'Pacific/Kiritimati' => esc_html__('Pacific/Kiritimati', 'ta-whatshelp'),
                    'Pacific/Kosrae' => esc_html__('Pacific/Kosrae', 'ta-whatshelp'),
                    'Pacific/Kwajalein' => esc_html__('Pacific/Kwajalein', 'ta-whatshelp'),
                    'Pacific/Majuro' => esc_html__('Pacific/Majuro', 'ta-whatshelp'),
                    'Pacific/Marquesas' => esc_html__('Pacific/Marquesas', 'ta-whatshelp'),
                    'Pacific/Midway' => esc_html__('Pacific/Midway', 'ta-whatshelp'),
                    'Pacific/Nauru' => esc_html__('Pacific/Nauru', 'ta-whatshelp'),
                    'Pacific/Niue' => esc_html__('Pacific/Niue', 'ta-whatshelp'),
                    'Pacific/Norfolk' => esc_html__('Pacific/Norfolk', 'ta-whatshelp'),
                    'Pacific/Noumea' => esc_html__('Pacific/Noumea', 'ta-whatshelp'),
                    'Pacific/Pago_Pago' => esc_html__('Pacific/Pago_Pago', 'ta-whatshelp'),
                    'Pacific/Palau' => esc_html__('Pacific/Palau', 'ta-whatshelp'),
                    'Pacific/Pitcairn' => esc_html__('Pacific/Pitcairn', 'ta-whatshelp'),
                    'Pacific/Pohnpei' => esc_html__('Pacific/Pohnpei', 'ta-whatshelp'),
                    'Pacific/Ponape' => esc_html__('Pacific/Ponape', 'ta-whatshelp'),
                    'Pacific/Port_Moresby' => esc_html__('Pacific/Port_Moresby', 'ta-whatshelp'),
                    'Pacific/Rarotonga' => esc_html__('Pacific/Rarotonga', 'ta-whatshelp'),
                    'Pacific/Saipan' => esc_html__('Pacific/Saipan', 'ta-whatshelp'),
                    'Pacific/Samoa' => esc_html__('Pacific/Samoa', 'ta-whatshelp'),
                    'Pacific/Tahiti' => esc_html__('Pacific/Tahiti', 'ta-whatshelp'),
                    'Pacific/Tarawa' => esc_html__('Pacific/Tarawa', 'ta-whatshelp'),
                    'Pacific/Tongatapu' => esc_html__('Pacific/Tongatapu', 'ta-whatshelp'),
                    'Pacific/Truk' => esc_html__('Pacific/Truk', 'ta-whatshelp'),
                    'Pacific/Wake' => esc_html__('Pacific/Wake', 'ta-whatshelp'),
                    'Pacific/Wallis' => esc_html__('Pacific/Wallis', 'ta-whatshelp'),
                    'Pacific/Yap' => esc_html__('Pacific/Yap', 'ta-whatshelp'),
                    'Poland' => esc_html__('Poland', 'ta-whatshelp'),
                    'Portugal' => esc_html__('Portugal', 'ta-whatshelp'),
                    'ROC' => esc_html__('ROC', 'ta-whatshelp'),
                    'ROK' => esc_html__('ROK', 'ta-whatshelp'),
                    'Singapore' => esc_html__('Singapore', 'ta-whatshelp'),
                    'Turkey' => esc_html__('Turkey', 'ta-whatshelp'),
                    'UCT' => esc_html__('UCT', 'ta-whatshelp'),
                    'US/Alaska' => esc_html__('US/Alaska', 'ta-whatshelp'),
                    'US/Aleutian' => esc_html__('US/Aleutian', 'ta-whatshelp'),
                    'US/Arizona' => esc_html__('US/Arizona', 'ta-whatshelp'),
                    'US/Central' => esc_html__('US/Central', 'ta-whatshelp'),
                    'US/East-Indiana' => esc_html__('US/East-Indiana', 'ta-whatshelp'),
                    'US/Eastern' => esc_html__('US/Eastern', 'ta-whatshelp'),
                    'US/Hawaii' => esc_html__('US/Hawaii', 'ta-whatshelp'),
                    'US/Indiana-Starke' => esc_html__('US/Indiana-Starke', 'ta-whatshelp'),
                    'US/Michigan' => esc_html__('US/Michigan', 'ta-whatshelp'),
                    'US/Mountain' => esc_html__('US/Mountain', 'ta-whatshelp'),
                    'US/Pacific' => esc_html__('US/Pacific', 'ta-whatshelp'),
                    'US/Pacific-New' => esc_html__('US/Pacific-New', 'ta-whatshelp'),
                    'US/Samoa' => esc_html__('US/Samoa', 'ta-whatshelp'),
                    'UTC' => esc_html__('UTC', 'ta-whatshelp'),
                    'Universal' => esc_html__('Universal', 'ta-whatshelp'),
                    'W-SU' => esc_html__('W-SU', 'ta-whatshelp'),
                    'WET' => esc_html__('WET', 'ta-whatshelp'),
                )
            ]
        );


        // start sunday popover
        $this->add_control(
            'popover-sunday',
            [
                'label' => esc_html__('Sunday', 'ta-chat'),
                'type' => \Elementor\Controls_Manager::POPOVER_TOGGLE,
            ]
        );


        $this->start_popover();
        $this->add_control(
            'sunday__start',
            [
                'label' => esc_html__('Start time', 'ta-whatshelp'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '00:00',
                'condition' => [
                    'popover-sunday' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'sunday__end',
            [
                'label' => esc_html__('End time', 'ta-whatshelp'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '23:59',
                'condition' => [
                    'popover-sunday' => 'yes',
                ],
            ]
        );

        $this->end_popover();
        // end sunday popover

        // start monday popover
        $this->add_control(
            'popover-monday',
            [
                'label' => esc_html__('Monday', 'ta-chat'),
                'type' => \Elementor\Controls_Manager::POPOVER_TOGGLE,
            ]
        );

        $this->start_popover();
        $this->add_control(
            'monday__start',
            [
                'label' => esc_html__('Start time', 'ta-whatshelp'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '00:00',
                'condition' => [
                    'popover-monday' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'monday__end',
            [
                'label' => esc_html__('End time', 'ta-whatshelp'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '23:59',
                'condition' => [
                    'popover-monday' => 'yes',
                ],
            ]
        );

        $this->end_popover();
        // end monday popover

        // start tuesday popover
        $this->add_control(
            'popover-tuesday',
            [
                'label' => esc_html__('Tuesday', 'ta-chat'),
                'type' => \Elementor\Controls_Manager::POPOVER_TOGGLE,
            ]
        );

        $this->start_popover();
        $this->add_control(
            'tuesday__start',
            [
                'label' => esc_html__('Start time', 'ta-whatshelp'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '00:00',
                'condition' => [
                    'popover-tuesday' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'tuesday__end',
            [
                'label' => esc_html__('End time', 'ta-whatshelp'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '23:59',
                'condition' => [
                    'popover-tuesday' => 'yes',
                ],
            ]
        );

        $this->end_popover();
        // end tuesday popover

        // start wednesday popover
        $this->add_control(
            'popover-wednesday',
            [
                'label' => esc_html__('Wednesday', 'ta-chat'),
                'type' => \Elementor\Controls_Manager::POPOVER_TOGGLE,
            ]
        );

        $this->start_popover();
        $this->add_control(
            'wednesday__start',
            [
                'label' => esc_html__('Start time', 'ta-whatshelp'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '00:00',
                'condition' => [
                    'popover-wednesday' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'wednesday__end',
            [
                'label' => esc_html__('End time', 'ta-whatshelp'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '23:59',
                'condition' => [
                    'popover-wednesday' => 'yes',
                ],
            ]
        );

        $this->end_popover();
        // end wednesday popover

        // start sunday popover
        $this->add_control(
            'popover-thursday',
            [
                'label' => esc_html__('Thursday', 'ta-chat'),
                'type' => \Elementor\Controls_Manager::POPOVER_TOGGLE,
            ]
        );

        $this->start_popover();
        $this->add_control(
            'thursday__start',
            [
                'label' => esc_html__('Start time', 'ta-whatshelp'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '00:00',
                'condition' => [
                    'popover-thursday' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'thursday__end',
            [
                'label' => esc_html__('End time', 'ta-whatshelp'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '23:59',
                'condition' => [
                    'popover-thursday' => 'yes',
                ],
            ]
        );

        $this->end_popover();
        // end thursday popover

        // start sunday popover
        $this->add_control(
            'popover-friday',
            [
                'label' => esc_html__('Friday', 'ta-chat'),
                'type' => \Elementor\Controls_Manager::POPOVER_TOGGLE,
            ]
        );

        $this->start_popover();
        $this->add_control(
            'friday__start',
            [
                'label' => esc_html__('Start time', 'ta-whatshelp'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '00:00',
                'condition' => [
                    'popover-friday' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'friday__end',
            [
                'label' => esc_html__('End time', 'ta-whatshelp'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '23:59',
                'condition' => [
                    'popover-friday' => 'yes',
                ],
            ]
        );

        $this->end_popover();
        // end friday popover

        $this->add_control(
            'popover-saturday',
            [
                'label' => esc_html__('Saturday', 'ta-chat'),
                'type' => \Elementor\Controls_Manager::POPOVER_TOGGLE,
            ]
        );

        $this->start_popover();
        $this->add_control(
            'saturday__start',
            [
                'label' => esc_html__('Start time', 'ta-whatshelp'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '00:00',
                'condition' => [
                    'popover-saturday' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'saturday__end',
            [
                'label' => esc_html__('End time', 'ta-whatshelp'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '23:59',
                'condition' => [
                    'popover-saturday' => 'yes',
                ],
            ]
        );
        $this->end_popover();

        $this->end_controls_section(); // End section top content

        $this->start_controls_section(
            'whatshelp__appearance',
            [
                'label' => esc_html__('Appearance settings', 'ta-whatshelp'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'visibility',
            [
                'label' => esc_html__('Visibility on', 'ta-whatshelp'),
                'type'  => Controls_Manager::SELECT2,
                'label_block' => false,
                'default' => 'wHelp-show-everywhere',
                'options' => array(
                    'wHelp-show-everywhere'  => esc_html__('Everywhere', 'ta-whatshelp'),
                    'wHelp-desktop-only'  => esc_html__('Desktops only', 'ta-whatshelp'),
                    'wHelp-tablet-only'  => esc_html__('Tablets only', 'ta-whatshelp'),
                    'wHelp-mobile-tablet-only'  => esc_html__('Mobile and tablets', 'ta-whatshelp'),
                    'wHelp-mobile-only'  => esc_html__('Mobile only', 'ta-whatshelp'),
                )

            ]
        );

        $this->add_control(
            'button__sizes',
            [
                'label' => esc_html__('Size', 'ta-whatshelp'),
                'type'  => Controls_Manager::SELECT,
                'label_block' => false,
                'default' => 'wHelp-btn-md',
                'options' => array(
                    'wHelp-btn-sm' => esc_html__('Small', 'ta-whatshelp'),
                    'wHelp-btn-md' => esc_html__('Medium', 'ta-whatshelp'),
                    'wHelp-btn-lg' => esc_html__('Large', 'ta-whatshelp'),
                )
            ]
        );

        $this->add_control(
            'bg__color',
            [
                'label' => esc_html__('Backgound color', 'ta-whatshelp'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#289951',
                'selectors' => [
                    '{{WRAPPER}} [class*="wHelp-button-"].wHelp-btn-bg' => 'background-color: {{VALUE}}'
                ],
            ]
        );

        $this->add_control(
            'bg__color__hover',
            [
                'label' => esc_html__('Hover backgound color', 'ta-whatshelp'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#20663a',
                'selectors' => [
                    '{{WRAPPER}} [class*="wHelp-button-"].wHelp-btn-bg:hover' => 'background-color: {{VALUE}}'
                ],
            ]
        );

        $this->add_control(
            'text__color',
            [
                'label' => esc_html__('Text color', 'ta-whatshelp'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#ffffff',
                'selectors' => [
                    '{{WRAPPER}} [class*="wHelp-button-"].wHelp-btn-bg' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_control(
            'text__color__hover',
            [
                'label' => esc_html__('Hover text color', 'ta-whatshelp'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#ffffff',
                'selectors' => [
                    '{{WRAPPER}} [class*="wHelp-button-"].wHelp-btn-bg:hover' => 'color: {{VALUE}}',
                ],
            ]
        );


        $this->add_group_control(
            \Elementor\Group_Control_Border::get_type(),
            [
                'name' => 'border',
                'label' => esc_html__('Border', 'ta-whatshelp'),
                'selector' => '{{WRAPPER}} .wHelpButtons, {{WRAPPER}} .wHelp-button-2',
                'fields_options' => [
                    'border' => [
                        'label' => esc_html__('Border', 'ta-whatshelp'),
                        'default' => 'solid',
                    ],
                    'width' => [
                        'default' => [
                            'top' => '1',
                            'right' => '1',
                            'bottom' => '1',
                            'left' => '1',
                            'isLinked' => false,
                        ],
                    ],
                    'color' => [
                        'default' => '#289951',
                    ],
                ],
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Border::get_type(),
            [
                'name' => 'border__hover',
                'label' => esc_html__('Hover border', 'ta-whatshelp'),
                'default' => '#20663a',
                'selector' => '{{WRAPPER}} .wHelpButtons:hover, {{WRAPPER}} .wHelp-button-2:hover',
                'fields_options' => [
                    'border' => [
                        'label' => esc_html__('Hover border', 'ta-whatshelp'),
                        'default' => 'solid',
                    ],
                    'width' => [
                        'default' => [
                            'top' => '1',
                            'right' => '1',
                            'bottom' => '1',
                            'left' => '1',
                            'isLinked' => false,
                        ],
                    ],
                    'color' => [
                        'default' => '#20663a',
                    ],
                ],
            ]
        );

        $this->add_control(
            'button__icon',
            [
                'label' => esc_html__('Change icon', 'ta-whatshelp'),
                'type' => \Elementor\Controls_Manager::ICONS,
                'default' => [
                    'value' => 'fas fa-phone-alt',
                ],
                'condition' => [
                    'style' => '2',
                ],
                'recommended' => [
                    'fa-solid' => [
                        'envelope',
                        'envelope-open',
                        'facebook-messenger',
                    ],
                    'fa-regular' => [
                        'envelope',
                        'envelope-open',
                    ],

                ],
            ]
        );

        $this->add_control(
            'icon__color',
            [
                'label' => esc_html__('Icon color', 'ta-whatshelp'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#289951',
                'selectors' => [
                    '{{WRAPPER}} [class*="wHelp-button-"].wHelp-btn-bg i' => 'color: {{VALUE}}',
                ],
                'condition' => [
                    'style' => '2',
                ],
            ]
        );

        $this->add_control(
            'icon__color__hover',
            [
                'label' => esc_html__('Icon hover color', 'ta-whatshelp'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#20663a',
                'selectors' => [
                    '{{WRAPPER}} [class*="wHelp-button-"].wHelp-btn-bg:hover i' => 'color: {{VALUE}}',
                ],
                'condition' => [
                    'style' => '2',
                ],
            ]
        );

        $this->add_control(
            'show__icon__bg__color',
            [
                'label' => esc_html__('Want bg in icon?', 'ta-whatshelp'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__('Yes', 'ta-whatshelp'),
                'label_off' => esc_html__('No', 'ta-whatshelp'),
                'return_value' => 'wHelp-button-3',
                'condition' => [
                    'style' => '2',
                ],
            ]
        );

        $this->add_control(
            'icon__bg__color',
            [
                'label' => esc_html__('Icon bg color', 'ta-whatshelp'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#fff',
                'selectors' => [
                    '{{WRAPPER}} [class*="wHelp-button-"].wHelp-button-3.wHelp-btn-bg i' => 'background-color: {{VALUE}}',
                ],
                'condition' => [
                    'style' => '2',
                    'show__icon__bg__color' => 'wHelp-button-3',
                ],
            ]
        );

        $this->add_control(
            'icon__bg__color__hover',
            [
                'label' => esc_html__('Icon hover bg color', 'ta-whatshelp'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#ffffff',
                'selectors' => [
                    '{{WRAPPER}} [class*="wHelp-button-"].wHelp-button-3.wHelp-btn-bg:hover i' => 'background-color: {{VALUE}}',
                ],
                'condition' => [
                    'style' => '2',
                    'show__icon__bg__color' => 'wHelp-button-3',
                ],
            ]
        );

        $this->add_control(
            'rounded',
            [
                'label' => esc_html__('Rounded?', 'ta-whatshelp'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__('Yes', 'ta-whatshelp'),
                'label_off' => esc_html__('No', 'ta-whatshelp'),
                'return_value' => 'wHelp-btn-rounded',
            ]
        );

        $this->add_control(
            'text_align',
            [
                'label' => esc_html__('Alignment', 'ta-whatshelp'),
                'type' => \Elementor\Controls_Manager::CHOOSE,
                'options' => [
                    'left' => [
                        'title' => esc_html__('Left', 'ta-whatshelp'),
                        'icon' => 'eicon-text-align-left',
                    ],
                    'center' => [
                        'title' => esc_html__('Center', 'ta-whatshelp'),
                        'icon' => 'eicon-text-align-center',
                    ],
                    'right' => [
                        'title' => esc_html__('Right', 'ta-whatshelp'),
                        'icon' => 'eicon-text-align-right',
                    ],
                ],
                'default' => 'left',
                'toggle' => true,
                'selectors' => [
                    '{{WRAPPER}} .button-wrapper' => 'text-align: {{VALUE}};',
                ],
            ]
        );

        $this->end_controls_section(); // End section top content


    }

    protected function render()
    {
        $settings = $this->get_settings_for_display();
        // button settings
        $style = $settings['style'];
        $number =  $settings['number'];
        $timezone =  $settings['timezone'];
        $visibility = $settings['visibility'];
        $icon = $settings['button__icon']['value'];
        $rounded = $settings['rounded'];
        $icon__bg = $settings['show__icon__bg__color'];
        $sizes = $settings['button__sizes'];
        $photo = $settings['agent__photo']['url'];
        $name = $settings['agent__name'];
        $designation = $settings['agent__designation'];
        $labelText = $settings['custom__button__label'];
        $onlineText = $settings['online__text'];
        $offlineText = $settings['offline__text'];
        // availablity

        $sunday = ($settings['sunday__start'] ? $settings['sunday__start'] : "0:00") . "-" . ($settings['sunday__end'] ? $settings['sunday__end'] : "23:59");
        $monday = ($settings['monday__start'] ? $settings['monday__start'] : "0:00") . "-" . ($settings['monday__end'] ? $settings['monday__end'] : "23:59");
        $tuesday = ($settings['tuesday__start'] ? $settings['tuesday__start'] : "0:00") . "-" . ($settings['tuesday__end'] ? $settings['tuesday__end'] : "23:59");
        $wednesday = ($settings['wednesday__start'] ? $settings['wednesday__start'] : "0:00") . "-" . ($settings['wednesday__end'] ? $settings['wednesday__end'] : "23:59");
        $thursday = ($settings['thursday__start'] ? $settings['thursday__start'] : "0:00") . "-" . ($settings['thursday__end'] ? $settings['thursday__end'] : "23:59");
        $friday = ($settings['friday__start'] ? $settings['friday__start'] : "0:00") . "-" . ($settings['friday__end'] ? $settings['friday__end'] : "23:59");
        $saturday = ($settings['saturday__start'] ? $settings['saturday__start'] : "0:00") . "-" . ($settings['saturday__end'] ? $settings['saturday__end'] : "23:59");
        $wHelpIcon = $icon ? $icon : "fas fa-phone-alt";

?>
        <?php if ($style == '1') : ?>
            <div class="button-wrapper">

                <button <?php if ($timezone) { ?> data-timezone="<?php esc_attr($timezone); ?>" <?php } ?> class="wHelpButtons wHelp-button-4 wHelp-btn-bg <?php echo esc_attr($visibility); ?> <?php echo esc_attr($rounded); ?> avatar-active <?php echo esc_attr($sizes); ?>" data-btnavailablety='{ "sunday":"<?php echo esc_attr($sunday); ?>", "monday":"<?php echo esc_attr($monday); ?>", "tuesday":"<?php echo esc_attr($tuesday); ?>", "wednesday":"<?php echo esc_attr($wednesday); ?>", "thursday":"<?php echo esc_attr($thursday); ?>", "friday":"<?php echo esc_attr($friday); ?>", "saturday":"<?php echo esc_attr($saturday); ?>" }'>
                    <?php if ($photo) { ?>
                        <img src="<?php echo esc_attr($photo); ?>" />
                    <?php } ?>
                    <div class="info-wrapper">
                        <?php if ($name || $designation) { ?>
                            <p class="info"><?php if ($name) { ?><?php echo esc_html($name); ?><?php } ?>
                                <?php if ($designation) { ?>/ <?php echo esc_html($designation); ?><?php } ?></p>
                        <?php } ?>
                        <?php if ($labelText) { ?>
                            <p class="title"><?php echo esc_html($labelText); ?></p>
                        <?php } ?>
                        <?php if ($onlineText) { ?>
                            <p class="online"><?php echo esc_html($onlineText); ?></p>
                        <?php } ?>
                        <?php if ($offlineText) { ?>
                            <p class="offline"><?php echo esc_html($offlineText); ?></p>
                        <?php } ?>
                    </div>
            </div>
            <a href="https://wa.me/<?php echo esc_attr($number); ?>" target="_blank"></a>
            </button>
        <?php else : ?>
            <div class="button-wrapper">
                <a href="https://wa.me/<?php echo esc_attr($number); ?>" class="wHelp-button-2 <?php echo esc_attr($icon__bg); ?> wHelp-btn-bg <?php echo esc_attr($visibility); ?> <?php echo esc_attr($rounded); ?> <?php echo esc_attr($sizes); ?>">
                    <i class="<?php echo esc_attr($wHelpIcon); ?>"></i>
                    <?php if ($labelText) { ?><span><?php echo esc_html($labelText); ?></span><?php } ?>
                </a>
            </div>
        <?php endif; ?>
<?php }
}
