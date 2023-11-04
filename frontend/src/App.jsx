import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./Auth/AuthProvider";
import { useDispatch } from "react-redux";
import { setLoading } from "./redux/LoadingStataus";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

// Lazy-loaded components
const Home = lazy(() => import("./Home/Home"));
const Dashboard = lazy(() => import("./Home/pages/Dashboard"));
const Inventory = lazy(() => import("./Home/pages/Inventory"));
const ExpectedDelivery = lazy(() => import("./Home/pages/ExpectedDelivery"));
const Addresses = lazy(() => import("./Home/pages/Addresses"));
const Payments = lazy(() => import("./Home/pages/Payments"));
const Profil = lazy(() => import("./Home/pages/ProfilParts/Profil"));
const ChangePassword = lazy(() =>
  import("./Home/pages/ProfilParts/ChangePassword")
);
const Login = lazy(() => import("./Auth/Login.jsx"));
const Register = lazy(() => import("./Auth/Register"));
const ForgotPass = lazy(() => import("./Auth/ForgotPass"));
const ConfirmPass = lazy(() => import("./Auth/ConfirmPass"));
const VerificationCode = lazy(() => import("./Auth/VerificationCode"));
const AddressDetails = lazy(() => import("./Home/pages/AddressDetails"));

disableReactDevTools();

function App() {
  const dispatch = useDispatch();

  function RunLoad() {
    useEffect(() => {
      dispatch(setLoading());
    });
    return <div></div>;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/Login"
          element={
            <Suspense fallback={<RunLoad />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/Register"
          element={
            <Suspense fallback={<RunLoad />}>
              <Register />
            </Suspense>
          }
        />
        <Route
          path="/ForgotPassword"
          element={
            <Suspense fallback={<RunLoad />}>
              <ForgotPass />
            </Suspense>
          }
        />
        <Route
          path="/ConfirmPassword"
          element={
            <Suspense fallback={<RunLoad />}>
              <ConfirmPass />
            </Suspense>
          }
        />
        <Route
          path="/VerificationCode"
          element={
            <Suspense fallback={<RunLoad />}>
              <VerificationCode />
            </Suspense>
          }
        />

        <Route element={<AuthProvider />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<RunLoad />}>
                <Home />
              </Suspense>
            }
          >
            <Route
              index
              element={
                <Suspense fallback={<RunLoad />}>
                  <Dashboard />
                </Suspense>
              }
            />
            <Route
              path="/Inventory"
              element={
                <Suspense fallback={<RunLoad />}>
                  <Inventory />
                </Suspense>
              }
            />
            <Route
              path="/ExpectedDelivery"
              element={
                <Suspense fallback={<RunLoad />}>
                  <ExpectedDelivery />
                </Suspense>
              }
            />
            <Route
              path="/Addresses"
              element={
                <Suspense fallback={<RunLoad />}>
                  <Addresses />
                </Suspense>
              }
            />
            <Route
              path="/Payments"
              element={
                <Suspense fallback={<RunLoad />}>
                  <Payments />
                </Suspense>
              }
            />
            <Route
              path="/Profil"
              element={
                <Suspense fallback={<RunLoad />}>
                  <Profil />
                </Suspense>
              }
            />
            <Route
              path="/AddressDetails"
              element={
                <Suspense fallback={<RunLoad />}>
                  <AddressDetails />
                </Suspense>
              }
            />
            <Route
              path="/ChangePassword"
              element={
                <Suspense fallback={<RunLoad />}>
                  <ChangePassword />
                </Suspense>
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
