<?php 
 /**
  * 
  * @package    Whatshelp Wp plugin
  * @version    1.0
  * @author     ThemeAtelier
  * @Websites: https://themeatelier.net/
  *
  */

add_shortcode( 'whatshelp' , 'whatshelp_custom_buttons_shortcode' );
function whatshelp_custom_buttons_shortcode( $atts ) {
		$atts = shortcode_atts( array(
        'style' => '1',
        'photo' => WHATSHELP_DIR_URL . 'assets/image/user.webp',
        'name' => esc_html__('Robert', 'ta-whatshelp'),
        'designation' => esc_html__('Sales Support', 'ta-whatshelp'),
        'label' => esc_html__('How can I help you?', 'ta-whatshelp'),
        'online' => esc_html__('I\'m avaiable', 'ta-whatshelp'),
        'offline'  => esc_html__('I\'m offline', 'ta-whatshelp'),
        'number' => esc_html__('008801813381520', 'ta-whatshelp'),
        'visibility' => 'wHelp-show-everywhere',
        'sizes' => 'wHelp-btn-md',
        'rounded' => 'wHelp-btn-rounded',
        'sunday' => esc_html__('00:00-23:59', 'ta-whatshelp'),
        'monday' => esc_html__('00:00-23:59', 'ta-whatshelp'),
        'tuesday' => esc_html__('00:00-23:59', 'ta-whatshelp'),
        'wednesday' => esc_html__('00:00-23:59', 'ta-whatshelp'),
        'thursday' => esc_html__('00:00-23:59', 'ta-whatshelp'),
        'friday' => esc_html__('00:00-23:59', 'ta-whatshelp'),
        'saturday' => esc_html__('00:00-23:59', 'ta-whatshelp'),
		), $atts );

	ob_start();

	whatshelp_buttons_template_init( $atts );

return ob_get_clean();
}