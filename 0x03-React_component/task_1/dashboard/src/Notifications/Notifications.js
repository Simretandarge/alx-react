import React from "react";
import "./Notifications.css";
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";
import closeButton from "../assets/close-icon.png";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

export default function Notifications({ displayDrawer, listNotifications }) {
  return (
    <>
      <div className="menuItem">Your notifications</div>

      { displayDrawer ? 
        (<div className="Notifications">
          <button
            style={{
              right: 45,
              border: "none",
              position: "absolute",
              background: "transparent",
            }}
            aria-label="close"
            onClick={() => console.log("Close button has been clicked")}
          >
            <img src={closeButton} alt="close button icon" />
          </button>
          <p>Here is the list of notifications</p>
          <ul>

            {listNotifications.length === 0 ? (<NotificationItem value='No new notification for now' type='no-new' />) : <></>}
            {listNotifications.map((not) => (<NotificationItem key={not.id} type={not.type} value={not.value} html={not.html} />))}
          </ul>
        </div>) 
        : <></>
      }
    </>
  );
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};
