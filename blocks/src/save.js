import { useBlockProps, RichText } from "@wordpress/block-editor";
import classnames from "classnames";

export default function save({ attributes }) {
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
    buttonUrl,
    visibility,
    border,
    iconTarget,
    numberInput,
  } = attributes;

  const textClasses = classnames(`wHelpButtons-align-${textAlignment}`);

  const classes = classnames(`wHelpButtons wHelp-button-4 wHelp-btn-bg`);
  return (
    <>
      {buttonType === "basic-button" ? (
        <div className={`button-wrapper ${textClasses}`}>
          <a
            {...useBlockProps.save({
              className: `${classes} ${buttonSize} ${borderRadius} ${visibility} ${border}`,
            })}
            href={`https://wa.me/${numberInput}`}
            rel="noopener noreferrer"
            target={buttonLinkTarget ? "_blank" : "_self"}
          >
            {iconTarget && (
              <span className="dashicons dashicons-whatsapp"></span>
            )}
            <RichText.Content tagName="span" value={text} />
          </a>
        </div>
      ) : (
        <div className={`button-wrapper ${textClasses}`}>
          <a
            {...useBlockProps.save({
              className: `wHelpButtons wHelp-button-4 wHelp-btn-bg wHelp-show-everywhere avatar-active wHelp-btn-sm ${classes}`,
            })}
            href={`https://wa.me/${numberInput}`}
            rel="noopener noreferrer"
            target={buttonLinkTarget ? "_blank" : "_self"}
          >
            <img
              src="http://wordpresspractice.local/wp-content/plugins/chat-help/assets/image/user.webp"
              alt="user"
            />
            <div className="info-wrapper">
              <RichText.Content value={info} tagName="p" className="info" />
              <RichText.Content value={title} tagName="p" className="title" />
              <RichText.Content value={online} tagName="p" className="online" />
              <RichText.Content
                value={offline}
                tagName="p"
                className="offline"
              />
            </div>
          </a>
        </div>
      )}
    </>
  );
}
