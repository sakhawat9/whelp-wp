<?php

add_action('wp_footer', 'whatshelp_chat_popup');

function whatshelp_chat_popup()
{
  $options = get_option('whatshelp-opt');
  $sunday_from = $options['opt-availablity']['availablity-sunday']['from'];
  $sunday_to = $options['opt-availablity']['availablity-sunday']['to'];
  $monday_from = $options['opt-availablity']['availablity-monday']['from'];
  $monday_to = $options['opt-availablity']['availablity-monday']['to'];
  $tuesday_from = $options['opt-availablity']['availablity-tuesday']['from'];
  $tuesday_to = $options['opt-availablity']['availablity-tuesday']['to'];
  $wednesday_from = $options['opt-availablity']['availablity-wednesday']['from'];
  $wednesday_to = $options['opt-availablity']['availablity-wednesday']['to'];
  $thursday_from = $options['opt-availablity']['availablity-thursday']['from'];
  $thursday_to = $options['opt-availablity']['availablity-thursday']['to'];
  $friday_from = $options['opt-availablity']['availablity-friday']['from'];
  $friday_to = $options['opt-availablity']['availablity-friday']['to'];
  $saturday_from = $options['opt-availablity']['availablity-saturday']['from'];
  $saturday_to = $options['opt-availablity']['availablity-saturday']['to'];
  $sunday = ($sunday_from ? $sunday_from : "0:00") . "-" . ($sunday_to ? $sunday_to : "23:59");
  $monday = ($monday_from ? $monday_from : "0:00") . "-" . ($monday_to ? $monday_to : "23:59");
  $tuesday = ($tuesday_from ? $tuesday_from : "0:00") . "-" . ($tuesday_to ? $tuesday_to : "23:59");
  $wednesday = ($wednesday_from ? $wednesday_from : "0:00") . "-" . ($wednesday_to ? $wednesday_to : "23:59");
  $thursday = ($thursday_from ? $thursday_from : "0:00") . "-" . ($thursday_to ? $thursday_to : "23:59");
  $friday = ($friday_from ? $friday_from : "0:00") . "-" . ($friday_to ? $friday_to : "23:59");
  $saturday = ($saturday_from ? $saturday_from : "0:00") . "-" . ($saturday_to ? $saturday_to : "23:59");
  $random = rand(1, 13);
  $bubbleType = null;
  $buttonLabel = $options['bubble-text'];
  if ($options['opt-button-style'] === '1') {
    $bubbleType = '<button class="wHelp-bubble circle-bubble circle-animation-' . esc_attr($options['circle-animation']) . ' ">
      <span class="open-icon"><i class="' . esc_html($options['circle-button-icon']) . '"></i></span>
      <span class="close-icon"><i class="' . esc_html($options['circle-button-close']) . '"></i></span>
    </button>';
  } elseif ($options['opt-button-style'] === '2') {
    $bubbleType = '<button class="wHelp-bubble bubble wHelp-btn-bg">
      <div class="bubble__icon bubble-animation' . esc_attr($options['circle-animation']) . '">
      <span class="bubble__icon--open"><i class="' . esc_html($options['circle-button-icon']) . '"></i></span>
      <span class="bubble__icon--close"><i class="' . esc_html($options['circle-button-close']) . '"></i></span>
      </div>' . esc_attr($buttonLabel) . '</button>';
  } elseif ($options['opt-button-style'] === '3') {
    $bubbleType = '<button class="wHelp-bubble bubble">
      <div class="bubble__icon bubble-animation' . esc_attr($options['circle-animation']) . '">
      <span class="bubble__icon--open"><i class="' . esc_html($options['circle-button-icon']) . '"></i></span>
      <span class="bubble__icon--close"><i class="' . esc_html($options['circle-button-close']) . '"></i></span>
      </div>' . esc_attr($buttonLabel) . '</button>';
  } elseif ($options['opt-button-style'] === '4') {
    $bubbleType = '<button class="wHelp-bubble bubble wHelp-btn-rounded wHelp-btn-bg">
    <div class="bubble__icon bubble-animation' . esc_attr($options['circle-animation']) . '">
    <span class="bubble__icon--open"><i class="' . esc_html($options['circle-button-icon']) . '"></i></span>
    <span class="bubble__icon--close"><i class="' . esc_html($options['circle-button-close']) . '"></i></span>
    </div>' . esc_attr($buttonLabel) . '</button>';
  } elseif ($options['opt-button-style'] === '5') {
    $bubbleType = '<button class="wHelp-bubble bubble wHelp-btn-rounded">
  <div class="bubble__icon bubble-animation' . esc_attr($options['circle-animation']) . '">
  <span class="bubble__icon--open"><i class="' . esc_html($options['circle-button-icon']) . '"></i></span>
  <span class="bubble__icon--close"><i class="' . esc_html($options['circle-button-close']) . '"></i></span>
  </div>' . esc_attr($buttonLabel) . '</button>';
  } elseif ($options['opt-button-style'] === '6') {
    $bubbleType = '<button class="wHelp-bubble bubble wHelp-btn-bg bubble-transparent">
  <div class="bubble__icon bubble-animation' . esc_attr($options['circle-animation']) . '">
  <span class="bubble__icon--open"><i class="' . esc_html($options['circle-button-icon']) . '"></i></span>
  <span class="bubble__icon--close"><i class="' . esc_html($options['circle-button-close']) . '"></i></span>
  </div>' . esc_attr($buttonLabel) . '</button>';
  } elseif ($options['opt-button-style'] === '7') {
    $bubbleType = '<button class="wHelp-bubble bubble  bubble-transparent">
  <div class="bubble__icon bubble-animation' . esc_attr($options['circle-animation']) . '">
  <span class="bubble__icon--open"><i class="' . esc_html($options['circle-button-icon']) . '"></i></span>
  <span class="bubble__icon--close"><i class="' . esc_html($options['circle-button-close']) . '"></i></span>
  </div>' . esc_attr($buttonLabel) . '</button>';
  } elseif ($options['opt-button-style'] === '8') {
    $bubbleType = '<button class="wHelp-bubble bubble wHelp-btn-bg wHelp-btn-rounded bubble-transparent">
  <div class="bubble__icon bubble-animation' . esc_attr($options['circle-animation']) . '">
  <span class="bubble__icon--open"><i class="' . esc_html($options['circle-button-icon']) . '"></i></span>
  <span class="bubble__icon--close"><i class="' . esc_html($options['circle-button-close']) . '"></i></span>
  </div>' . esc_attr($buttonLabel) . '</button>';
  } elseif ($options['opt-button-style'] === '9') {
    $bubbleType = '<button class="wHelp-bubble bubble wHelp-btn-rounded bubble-transparent">
  <div class="bubble__icon bubble-animation' . esc_attr($options['circle-animation']) . '">
  <span class="bubble__icon--open"><i class="' . esc_html($options['circle-button-icon']) . '"></i></span>
  <span class="bubble__icon--close"><i class="' . esc_html($options['circle-button-close']) . '"></i></span>
  </div>' . esc_attr($buttonLabel) . '</button>';
  }


?>

  <div class="wHelp <?php if ($options['autoshow-popup']) : ?>wHelp-show<?php endif; ?> <?php if ($options['bubble-style'] === 'dark') : ?>dark-mode <?php elseif ($options['bubble-style'] === 'night') : ?> night-mode<?php endif; ?> <?php if ($options['bubble-position'] === 'left') { ?>wHelp-left<?php } ?>">
    <?php echo $bubbleType; ?>
    <div class="wHelp__popup animation<?php if ($options['select-animation'] === 'random') : ?><?php echo $random ?><?php else : ?><?php echo esc_attr($options['select-animation']); ?><?php endif; ?> chat-availability" data-timezone="<?php echo esc_attr($options['select-timezone']); ?>" data-availability='{ "sunday":"<?php echo esc_attr($sunday); ?>", "monday":"<?php echo esc_attr($monday); ?>", "tuesday":"<?php echo esc_attr($tuesday); ?>", "wednesday":"<?php echo esc_attr($wednesday); ?>", "thursday":"<?php echo esc_attr($thursday); ?>", "friday":"<?php echo esc_attr($friday); ?>", "saturday":"<?php echo esc_attr($saturday); ?>" }'>
      <div class="wHelp__popup--header <?php if ($options['header-content-position'] === 'center') { ?>header-center<?php } ?>">
        <div class="image">
          <img src="<?php echo esc_attr($options['agent-photo']['url']); ?>" />
        </div>
        <div class="info">
          <h4 class="info__name"><?php echo esc_html($options['agent-name']); ?></h4>
          <p class="info__title"><?php echo esc_html($options['agent-subtitle']); ?></p>
        </div>
      </div>
      <div class="wHelp__popup--content">

        <?php if ($options['opt-layout-type'] === 'form') : ?>
          <?php if ($options['gdpr-enable']) : ?>
            <div class="wHelp--checkbox">
              <input type="checkbox" class="wHelp__checkbox" />
              <label><?php echo $options['gdpr-compliance-content']; ?></label>
            </div>
          <?php endif; ?>
          <div class="user-text">
            <input id="name" type="text" placeholder="Your name?" />
            <textarea id="message" rows="5" type="text" placeholder="Message"></textarea>
          </div>
        <?php else : ?>
          <?php if ($options['gdpr-enable']) : ?>
            <div class="wHelp--checkbox">
              <input type="checkbox" class="wHelp__checkbox" />
              <label><?php echo $options['gdpr-compliance-content']; ?></label>
            </div>
          <?php endif; ?>
          <div class="current-time"></div>
          <div class="sms">
            <div class="sms__user">
              <img src="<?php echo esc_attr($options['agent-photo']['url']); ?>" />
            </div>
            <div class="sms__text">
              <p>
                <?php echo esc_html($options['agent-message']); ?>
              </p>
            </div>
          </div>
        <?php endif; ?>

        <?php if ($options['opt-layout-type'] === 'form') : ?>
          <button class="wHelp__send-message<?php if ($options['gdpr-enable']) : ?> condition__checked<?php endif; ?>" target="_blank">
            <i class="<?php echo esc_html($options['before-chat-icon']); ?>"></i><?php echo esc_html($options['chat-button-text']); ?>
            <a class="WhatsApptext" href="https://wa.me/<?php echo esc_attr($options['opt-number']); ?>?text=<?php echo esc_html('Name:', 'ta-whatshelp'); ?> nameValue. <?php echo esc_html('Message:', 'ta-whatshelp'); ?> messageValue" target="_blank"></a>
          </button>
        <?php else : ?>
          <button class="wHelp__send-message<?php if ($options['gdpr-enable']) : ?> condition__checked<?php endif; ?>" target="_blank">
            <i class="<?php echo esc_html($options['before-chat-icon']); ?>"></i><?php echo esc_html($options['chat-button-text']); ?>
            <a href="https://wa.me/<?php echo esc_attr($options['opt-number']); ?>" target="_blank"></a>
          </button>
        <?php endif; ?>
      </div>
    </div>
  </div>


<?php
}


?>