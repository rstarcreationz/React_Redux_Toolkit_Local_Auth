import React, { Suspense } from "react";
import { routes } from "../../_routes/MainRoutes";
import Footer from "../_includes/Footer";
import Header from "../_includes/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../_includes/Sidebar";

export default function TheLayout() {
  return (
    <React.Fragment>
      <Suspense>
        <section className="_dashboard_wrapper">
          <Sidebar />
          <div className="_The_content">
            <Header />
            <div className="py-5">
              <Routes>
                {routes.map((route, idx) => {
                  return (
                    route.component && (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        element={<route.component />}
                      />
                    )
                  );
                })}
                {/* <Route path="/" element={<Navigate to="dashboard" replace />} /> */}
              </Routes>
            </div>

            {/* <Footer /> */}
          </div>
        </section>
      </Suspense>
    </React.Fragment>
  );
}
