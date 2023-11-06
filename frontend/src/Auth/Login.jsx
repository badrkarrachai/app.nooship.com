import { useState, useEffect } from "react";
import "../App.css";
import React from "react";
import InputPulie from "../Home/Components/InputPulie";
import axios from "axios";

import { Navigate, useNavigate } from "react-router-dom";
import baseURL from "../config";
import { useDispatch, useSelector } from "react-redux";
import { setLoadingFalse } from "../redux/LoadingStataus";
import Cookies from "universal-cookie";
import { Ring } from "@uiball/loaders";

function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const cookies = new Cookies();
  let isAuth = localStorage.getItem("LogStatus");
  if (isAuth === "true") {
    return <Navigate to="/" />;
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Erroremail, setErrorEmail] = useState("");
  const [Errorpassword, setErrorPassword] = useState("");

  const handleInputChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleInputChangePassword = (event) => {
    setPassword(event.target.value);
  };
  useEffect(() => {
    const EmailLocal = localStorage.getItem("Email");
    if (EmailLocal) {
      setEmail(EmailLocal);
      localStorage.setItem("Email", "");
    }
  }, []);
  const HandelSingIn = async () => {
    const lowercaseString = email.trim().toLowerCase();
    const ReadyEmail =
      lowercaseString.charAt(0).toUpperCase() + lowercaseString.slice(1);
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ReadyEmail);

    if (email.trim() !== "" && password.trim() !== "" && isValidEmail) {
      setIsLoading(true);
      try {
        const response = await axios.post(
          `${baseURL}/login`,
          {
            ReadyEmail,
            password,
          },
          {
            withCredentials: true, // Include credentials (cookies) with the request
          }
        );
        if (response.data.logged) {
          setPassword("");
          localStorage.setItem("LogStatus", true);
          const user = response.data.user;
          cookies.set("xml", user, { path: "/", maxAge: 86400 });
          navigate("/");
        } else {
          if (response.data.error === "Email is Wrong!") {
            setErrorEmail("Email is Wrong!");
          } else if (response.data.error === "Password is Wrong!") {
            setErrorEmail("");
            setErrorPassword("Password is Wrong!");
          }
        }
      } catch (error) {
        console.error("Login failed:", error.response.data.error);
      } finally {
        setIsLoading(false); // Hide loading spinner
      }
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      HandelSingIn();
    }
  };
  const Loading = useSelector((state) => state.Loading.value);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoadingFalse());
    }, 2500);
  }, [Loading]);
  function LoadingWithProgressBar() {
    return (
      <div className="ContianerLoading12">
        <div className="hider1234">
          <div className="loeaderMership12"></div>
        </div>
      </div>
    );
  }
  return (
    <React.Fragment>
      {Loading === true ? <LoadingWithProgressBar /> : ""}
      <div id="__next" data-reactroot="">
        <div className="progress-loading">
          <div className=""></div>
        </div>
        <div className="reOverlay"></div>
        <div className="mx-auto box-border flex w-full max-w-[90rem] flex-1 gap-28 px-24 sdjhf78fsd4 xl:gap-14 xl:px-16 lg:px-12 md:px-8 xs:px-5 2xs:px-3">
          <div className="relative flex w-form flex-col justify-start overflow-hidden px-0.5 py-10 xl:w-[26rem] lg:flex-1 lg:items-center">
            <div className="flex flex-1 flex-col lg:w-full lg:self-start">
              <a className="flex self-start">
                <img
                  src="https://capmership.s3.eu-north-1.amazonaws.com/smallLogo.png"
                  alt="logo"
                  className="h-13"
                />
              </a>
              <div className="aduyadf786 flex flex-col mt-36 max-w-xl lg:w-full jsdf742d lg:justify-center lg:flex-1 lg:mt-24 md:mt-18 xs:mt-14 items-start">
                <h2 className="mb-4 tp-display4 lg:text-center sm:text-center">
                  Login
                </h2>
                <div className="mb-13 flex xs:flex-col xs:gap-y-2">
                  <p className="tp-lead3 mr-2 text-gray-200 ">
                    Haven't joined our service?
                  </p>
                  <a
                    className="button group h-15 lg:h-14 xs:h-13 rounded-2xl xs:rounded-xl px-10 lg:px-9 xs:px-8 py-0 button-text !px-0 !py-0 !h-auto self-start"
                    type="submit"
                    onClick={() => navigate("/Register")}
                  >
                    <span className=" z-10 tp-h6 xs:tp-h7">Register</span>
                  </a>
                </div>
                <div className="flex w-full flex-col gap-7">
                  <div className="grid gap-6 grid-cols-12">
                    <div
                      className="flex flex-col col-span-12"
                      style={{ gap: "1rem" }}
                    >
                      <div style={{ height: "52px" }}>
                        <InputPulie
                          valController={email}
                          onChangeController={handleInputChangeEmail}
                          errorP={Erroremail !== "" ? " " : ""}
                          svgLogo={
                            <svg
                              id="Layer_1"
                              data-name="Layer 1"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 25 25"
                              fill="#A9A9AD"
                              width="20"
                              height="20"
                            >
                              <path
                                className="cls-1"
                                d="m12.39,5.03c-2.47,0-4.93,0-7.4,0-.41,0-.87.03-1.23.2-.62.28-1.06.74-1.04,1.52.03,1.58.02,3.16,0,4.74,0,.56-.06,1.13-.15,1.68-.07.46-.45.74-.85.58-.3-.11-.68-.51-.69-.8-.06-2.13-.06-4.26,0-6.39.01-.53.24-1.09.51-1.55.71-1.24,1.94-1.68,3.24-1.69,5.01-.05,10.01-.05,15.02,0,1.36.01,2.73.3,3.49,1.66.61,1.1.85,2.3.56,3.55-.03.15-.19.3-.33.38-2.5,1.36-5.01,2.7-7.51,4.05-.71.39-1.4.81-2.1,1.22-1.01.58-1.98.51-2.99-.08-1.86-1.08-3.76-2.09-5.64-3.13-.81-.45-.96-1.02-.32-1.44.23-.15.7-.15.95-.02,2.01,1.04,4.01,2.1,5.98,3.22.41.24.68.2,1.02.01,2.03-1.11,4.05-2.23,6.07-3.33.91-.5,1.82-1.01,2.77-1.45.53-.25.62-.64.51-1.1-.32-1.42-.98-1.8-2.32-1.82-2.51-.04-5.03-.01-7.54-.01Z"
                              />
                              <path
                                className="cls-1"
                                d="m12.39,21.7c-2.54,0-5.08-.03-7.62,0-2.13.04-3.77-1.51-3.77-3.78,0-.55.03-1.1-.01-1.65-.04-.51.27-.74.65-.73.31.01.81.23.87.45.17.65.2,1.34.21,2.02.02.87.38,1.49,1.18,1.8.25.1.54.14.82.14,5.03,0,10.06-.04,15.09.03,1.73.02,2.44-1.04,2.46-2.53.03-1.7.03-3.4,0-5.1-.01-.53.18-.81.68-.87.47-.06.82.12.91.63.05.27.14.54.14.82.01,1.53.06,3.07,0,4.6-.06,1.4-.38,2.77-1.75,3.51-.61.33-1.34.59-2.02.61-2.61.07-5.22.03-7.83.03h0Z"
                              />
                            </svg>
                          }
                          placeHolder={"youremail@example.com"}
                        />
                      </div>
                      {Erroremail !== "" ? (
                        <div
                          style={{
                            marginTop: "-10px",
                            marginBottom: "-10px",
                            marginLeft: "10px",
                            color: "#FF6969",
                          }}
                        >
                          {Erroremail}
                        </div>
                      ) : (
                        ""
                      )}
                      <div style={{ height: "52px" }}>
                        <InputPulie
                          errorP={Errorpassword !== "" ? " " : ""}
                          valController={password}
                          onChangeController={handleInputChangePassword}
                          svgLogo={
                            <svg
                              id="Layer_1"
                              data-name="Layer 1"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 25 25"
                              width="21"
                              fill="#A9A9AD"
                              height="21"
                            >
                              <path d="m8.14,8.13c0-.72,0-1.42,0-2.12.02-1.44.58-2.62,1.72-3.51.84-.65,1.81-.96,2.88-.9,1.93.11,3.65,1.51,4.04,3.56.06.33.08.68.08,1.02.01.64,0,1.29,0,1.95.05,0,.1,0,.15,0,.56,0,1.12-.01,1.68,0,.99.02,1.76.43,2.24,1.32.21.38.29.8.29,1.23,0,3.39,0,6.78,0,10.17,0,1.06-.48,1.85-1.45,2.32-.34.17-.72.23-1.1.23-.85,0-1.69,0-2.54,0-.39,0-.69-.16-.85-.53-.18-.42.05-.92.49-1.05.12-.04.26-.06.39-.06.85,0,1.71,0,2.56,0,.54,0,.85-.31.85-.85,0-3.43,0-6.85,0-10.28,0-.47-.23-.78-.64-.86-.06-.01-.13-.01-.19-.01-2.05,0-4.11,0-6.16,0-.3,0-.57-.07-.75-.33-.19-.27-.2-.56-.06-.85.15-.31.42-.44.74-.45.38-.01.76,0,1.14,0,.51,0,1.03,0,1.56,0,0-.05,0-.1,0-.15,0-.69,0-1.37,0-2.06,0-1.4-1.08-2.56-2.48-2.68-.92-.07-1.71.21-2.31.91-.43.51-.67,1.1-.67,1.78,0,.95,0,1.91,0,2.86,0,.62-.34.96-.96.96-.87,0-1.74,0-2.6,0-.47,0-.8.32-.8.8,0,3.46,0,6.92,0,10.38,0,.51.32.83.84.83,2.02,0,4.04,0,6.05,0,.24,0,.47.03.66.2.25.21.36.48.27.8-.09.32-.3.52-.62.6-.09.02-.19.03-.28.03-2,0-3.99,0-5.99,0-1.05,0-1.85-.46-2.33-1.42-.17-.35-.24-.73-.24-1.12,0-3.41-.01-6.83,0-10.24,0-1.34.99-2.44,2.49-2.48.57-.01,1.14,0,1.7,0,.05,0,.1,0,.16,0Z" />
                              <path d="m11.69,18.15c0-.28,0-.55,0-.83,0-.1-.03-.16-.1-.22-.45-.33-.7-.77-.72-1.33-.03-.73.57-1.45,1.32-1.61.73-.16,1.5.27,1.81.99.33.76,0,1.55-.58,1.95-.08.06-.11.12-.11.21,0,.58.01,1.16,0,1.74,0,.41-.31.74-.72.79-.37.05-.78-.22-.87-.6-.03-.13-.03-.27-.04-.41,0-.23,0-.46,0-.7h0Z" />
                            </svg>
                          }
                          placeHolder={"Password"}
                          svgLogoBack={true}
                          keyPresssHandel={handleKeyPress}
                        />
                      </div>
                      {Errorpassword !== "" ? (
                        <div
                          style={{
                            marginTop: "-10px",
                            marginBottom: "-10px",
                            marginLeft: "10px",
                            color: "#FF6969",
                          }}
                        >
                          {Errorpassword}
                        </div>
                      ) : (
                        ""
                      )}
                      <span className="flex opacity-0 h-4 transition-all duration-200 -z-10 -mt-4 ml-1 text-error-standard tp-body2"></span>
                    </div>
                  </div>
                  {isLoading && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Ring
                        size={35}
                        lineWeight={5}
                        speed={1.5}
                        color="#6499E9"
                      />
                    </div>
                  )}
                  {isLoading === false ? (
                    <button
                      className="button group h-15 lg:h-14 xs:h-13 rounded-2xl xs:rounded-xl px-10 lg:px-9 xs:px-8 py-0 button-primary"
                      type="submit"
                      onClick={HandelSingIn}
                    >
                      <span className=" z-10 tp-h6 xs:tp-h7">Log in</span>
                    </button>
                  ) : (
                    ""
                  )}
                  <a
                    className="button group h-12 xs:h-11 rounded-2xl xs:rounded-xl px-4 py-0 button-tertiary self-start"
                    type="submit"
                    onClick={() => navigate("/ForgotPassword")}
                  >
                    <span className=" z-10 tp-h6 xs:tp-h7 !tp-h7 xs:!tp-lead2 -mb-0.5">
                      Forgot Password
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-1 items-center self-center py-10 lg:hidden imgholder"
            style={{ minWidth: "350px" }}
          >
            <img
              alt="login_image"
              className="max-h-[88vh] w-full rounded-[2.5rem] object-cover"
              src="https://capmership.s3.eu-north-1.amazonaws.com/LogInPic.jpg"
            />
          </div>
        </div>
        <div className="Toastify"></div>
      </div>
    </React.Fragment>
  );
}

export default Login;
