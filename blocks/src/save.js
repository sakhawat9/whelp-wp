import { useBlockProps, RichText } from "@wordpress/block-editor";
import classnames from "classnames";
const agentImage = require('./images/shakib-al-hasan.jpg');
console.log(agentImage);
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

  const textClasses = classnames(`wHelpButtons-align-${textAlignment}`);

  const basicBtn = classnames(`wHelp-button-4 vc-btn-bg`);
  const classes = classnames(`wHelpButtons wHelp-button-4 wHelp-btn-bg`);
  return (
    <>
      {buttonType === "basic-button" ? (
        <div className={`button-wrapper ${textClasses}`}>
          <a
            {...useBlockProps.save({
              className: `${basicBtn} ${buttonSize} ${borderRadius} ${visibility} ${border}`,
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
              className: `${classes} ${buttonSize} ${borderRadius} ${visibility}`,
            })}
            data-btnavailablety={`{ "monday":"${mondayStart}-${mondayEnd}", "tuesday":"${tuesdayStart}-${tuesdayEnd}", "wednesday":"${wednesdayStart}-${wednesdayEnd}", "thursday":"${thursdayStart}-${thursdayEnd}", "friday":"${fridayStart}-${fridayEnd}", "saturday":"${saturdayStart}-${saturdayEnd}", "sunday":"${sundayStart}-${sundayEnd}" }`}
            data-timezone={timeZone}
            href={`https://wa.me/${numberInput}`}
            rel="noopener noreferrer"
            target={buttonLinkTarget ? "_blank" : "_self"}
          >
            <img src={imageUrl ? imageUrl : agentImage} alt="agent" />
            <div className="info-wrapper">
              <RichText.Content value={info} tagName="p" className="info" />
              <RichText.Content value={title} tagName="p" className="title" />
              <RichText.Content
                value={online}
                tagName="p"
                className="online"
              />
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
