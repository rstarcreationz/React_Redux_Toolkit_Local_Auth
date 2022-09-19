import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearLoginInfo } from "../../_reduxToolkit/_slice/authSlice";

export default function Sidebar() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(clearLoginInfo());
    window.location.href = "/";
  };

  return (
    <React.Fragment>
      <div className="_The_sidebar">
        <h4>React Admin</h4>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/my-profile">Profile</Link>
          </li>
          <li onClick={() => logoutHandler()}>LogOut</li>
        </ul>
      </div>
    </React.Fragment>
  );
}
