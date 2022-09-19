import React from "react";

const Dashboard = React.lazy(() => import("../_components/_pages/Dashboard"));
const Profile = React.lazy(() => import("../_components/_pages/MyProfile"));

export const routes = [
  { path: "/dashboard", exact: true, name: "Dashboard", component: Dashboard },
  { path: "/my-profile", exact: true, name: "Profile", component: Profile },
];
