import React from "react";
import PropTypes from "prop-types";

export default function NotificationItem({ type, value, html }) {
  if (value) {
    return (<li data-notification-type={type}>{value}</li>);
  } else {
    return (
      <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
    );
  }
}

NotificationItem.defaultProps = {
  type: "default",
  value: "",
  html: {},
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
};
