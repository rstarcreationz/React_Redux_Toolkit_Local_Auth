import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./_components/_pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./_components/_pages/Register";
import TheLayout from "./_components/_view/TheLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PrivateRoutes } from "./_routes/PrivateRoute";
import { PublicRoute } from "./_routes/PublicRoute";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}
          {/* <Route path="*" element={<TheLayout />} /> */}

          <Route
            path="/"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />

          <Route
            path="*"
            element={
              <PrivateRoutes>
                <TheLayout />
              </PrivateRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
