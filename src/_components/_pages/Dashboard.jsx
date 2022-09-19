import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savedSuccess } from "../../_reduxToolkit/_slice/authSlice";

export default function Dashboard() {
  const user = useSelector((state) => state);

  return (
    <React.Fragment>
      <h1>
        Hello,{" "}
        <strong className="text-primary">{user?.loginInfo.full_name}</strong>
      </h1>
      <h5>Welcome to The Dashboard</h5>
    </React.Fragment>
  );
}
