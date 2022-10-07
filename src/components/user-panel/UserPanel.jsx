import React from "react";
import UserProfile from "./UserProfile";
import './userPanel.scss'
import UserNotification from "./UserNotification";
import UserSearch from "./UserSearch";

const UserPanel = () => {
  return (
    <ul className="user-panel">
      <UserSearch/>
      <UserNotification/>
      <UserProfile/>
    </ul>
  );
};

export default UserPanel;
