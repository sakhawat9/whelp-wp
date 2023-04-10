import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  RichText,
  BlockControls,
  AlignmentToolbar,
  InspectorControls,
  URLInput,
  PanelColorSettings,
  ContrastChecker,
} from "@wordpress/block-editor";
import classnames from "classnames";
import "./editor.scss";
import { IconButton, PanelBody, ToggleControl } from "@wordpress/components";

const { SelectControl, TextControl } = wp.components;

export default function Edit(props) {
  const { attributes, isSelected, setAttributes } = props;

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
    buttonUrl,
    iconTarget,
    visibility,
    border,
    buttonLinkTarget,
    buttonTextColor,
    buttonBackgroundColor,
    numberInput,
  } = attributes;

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
  const borderWidth = [
    { value: "", label: __("Default", "ta-whatshelp") },
    { value: "none", label: __("None", "ta-whatshelp") },
    { value: "solid", label: __("Solid", "ta-whatshelp") },
    { value: "dashed", label: __("Dashed", "ta-whatshelp") },
    { value: "dotted", label: __("Dotted", "ta-whatshelp") },
    { value: "double", label: __("Double", "ta-whatshelp") },
    { value: "inset", label: __("Inset", "ta-whatshelp") },
    { value: "outset", label: __("Outset", "ta-whatshelp") },
    { value: "groove", label: __("Groove", "ta-whatshelp") },
    { value: "ridge", label: __("Ridge", "ta-whatshelp") },
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
			<PanelBody title={__("WhatsApp Number", "ta-whatshelp")}
              initialOpen={false}>
				<TextControl
					label={__("Number Input", "ta-whatshelp")}
					value={numberInput}
					onChange={(val) => setAttributes({ numberInput: val })}
					placeholder={__("018(--__--)", "ta-whatshelp")}
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
              <SelectControl
                label={__("Border", "ta-whatshelp")}
                value={border}
                options={borderWidth.map(({ value, label }) => ({
                  value,
                  label,
                }))}
                onChange={(newSize) => {
                  setAttributes({ border: newSize });
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
                className: `${classes} ${buttonSize} ${borderRadius} ${visibility} ${border}`,
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
              title={__("Button Text", "ta-whatshelp")}
              initialOpen={false}
            >
              <TextControl
                label={__("Agent info", "ta-whatshelp")}
                value={info}
                onChange={(val) => setAttributes({ info: val })}
              />
              <TextControl
                label={__("Agent Title", "ta-whatshelp")}
                value={title}
                onChange={(val) => setAttributes({ title: val })}
              />
              <TextControl
                label={__("Online Text", "ta-whatshelp")}
                value={online}
                onChange={(val) => setAttributes({ online: val })}
              />
              <TextControl
                label={__("Offline Text", "ta-whatshelp")}
                value={offline}
                onChange={(val) => setAttributes({ offline: val })}
              />
            </PanelBody>
			<PanelBody title={__("WhatsApp Number", "ta-whatshelp")} initialOpen={false}>
			<TextControl
                label={__("Number Input", "ta-whatshelp")}
                value={numberInput}
                onChange={(val) => setAttributes({ numberInput: val })}
				placeholder={__("018(--__--)", "ta-whatshelp")}
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
              <SelectControl
                label={__("Border", "ta-whatshelp")}
                value={border}
                options={borderWidth.map(({ value, label }) => ({
                  value,
                  label,
                }))}
                onChange={(newSize) => {
                  setAttributes({ border: newSize });
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
                className: `wHelpButtons wHelp-button-4 wHelp-btn-bg wHelp-show-everywhere avatar-active wHelp-btn-sm ${classes}`,
              })}
            >
              <img
                src="http://wordpresspractice.local/wp-content/plugins/chat-help/assets/image/user.webp"
                alt="user"
              />
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
