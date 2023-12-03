import React from "react";
import { useState } from "react";
import "../App.css";
import InputPulie from "../Home/Components/InputPulie";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { setPage } from "../redux/AuthData";
import config from "../config";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Ring } from "@uiball/loaders";

function ConfirmPass() {
  const navigate = useNavigate();
  const Page = useSelector((state) => state.Page.value);
  if (Page === "") {
    return <Navigate to="/Login" />;
  }
  let isAuth = localStorage.getItem("LogStatus");
  if (isAuth === "true") {
    return <Navigate to="/" />;
  }
  const headingStyle = {
    fontSize: "24px",
    color: "black",
  };
  const [focusedInput, setFocusedInput] = useState("");
  const [ErrorPass1, setErrorPass1] = useState("");
  const [ErrorPass2, setErrorPass2] = useState("");
  const [PasswordError1, setPasswordError1] = useState("");
  const [PasswordError2, setPasswordError2] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput("");
  };

  function validatePassword(password) {
    // Check if the password has at least 8 characters
    if (password.length < 8) {
      return "Password should be at least 8 characters long";
    }

    // Check if the password contains at least one capital letter
    if (!/[A-Z]/.test(password)) {
      return "Password should contain at least one capital letter";
    }

    // Check if the password contains at least one non-capital letter
    if (!/[a-z]/.test(password)) {
      return "Password should contain at least one non-capital letter";
    }

    // Check if the password contains at least one number
    if (!/[0-9]/.test(password)) {
      return "Password should contain at least one number";
    }

    return ""; // No validation errors
  }
  const HandelClick = async () => {
    if (validatePassword(password) === "") {
      setPasswordError1("");
      setErrorPass1("");
      if (confirmPassword === password) {
        const Email = localStorage.getItem("Email");
        setIsLoading(true);
        await axios
          .post(`${config.baseURL}/UpdatepasswordMership2355423`, {
            password,
            Email,
          })
          .then((res) => {
            if (res.data.updated) {
              setIsLoading(false);
              navigate("/Login");
            } else {
              setIsLoading(false);
              setPasswordError2(" ");
              setErrorPass2("Something went wrong please try again later!");
            }
          })
          .catch((err) => {
            setIsLoading(false);
            toast.error("Something went wrong!", {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          });
      } else {
        setPasswordError2(" ");
        setErrorPass2("The passwords does not match!");
      }
    } else {
      setErrorPass1(validatePassword(password));
      setPasswordError1(" ");
    }
  };

  return (
    <React.Fragment>
      <div id="__next" data-reactroot="">
        <div className="progress-loading">
          <div className=""></div>
        </div>
        <div className="reOverlay"></div>
        <div className="mx-auto box-border sdjhf78fsd4 flex w-full max-w-[90rem] flex-1 gap-28 px-24 xl:gap-14 xl:px-16 lg:px-12 md:px-8 xs:px-5 2xs:px-3">
          <div className="relative flex w-form flex-col justify-start overflow-hidden px-0.5 py-10 xl:w-[26rem] lg:flex-1 lg:items-center">
            <div className="flex flex-1 flex-col lg:w-full lg:self-start">
              <a className="flex self-start" style={{ cursor: "pointer" }}>
                <img
                  src="https://capmership.s3.eu-north-1.amazonaws.com/smallLogo.png"
                  alt="logo"
                  className="h-13"
                  onClick={() => navigate("/Login")}
                />
              </a>
              <div className="aduyadf786 flex flex-col mt-36 max-w-xl lg:w-full lg:justify-center lg:flex-1 lg:mt-24 md:mt-18 xs:mt-14 items-start">
                <h2 className="mb-4 tp-display4 lg:text-center sm:text-center">
                  Reset Password
                </h2>
                <div className="mb-13 flex xs:flex-col xs:gap-y-2 qwe23r55">
                  <p className="tp-lead3 mr-2 text-gray-200 ">
                    You can now set a new password to your account or
                  </p>
                  <a
                    className="button group h-15 lg:h-14 xs:h-13 rounded-2xl xs:rounded-xl px-10 lg:px-9 xs:px-8 py-0 button-text !px-0 !py-0 !h-auto self-start"
                    type="submit"
                    onClick={() => navigate("/Login")}
                  >
                    <span className=" z-10 tp-h6 xs:tp-h7">Login here</span>
                  </a>
                </div>

                <div className="flex w-full flex-col gap-7">
                  <div className="grid gap-6 grid-cols-12">
                    <div className="flex flex-col col-span-12">
                      <div style={{ height: "52px" }}>
                        <InputPulie
                          errorP={PasswordError1}
                          valController={password}
                          onChangeController={(x) =>
                            setpassword(x.target.value)
                          }
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
                        />
                      </div>
                    </div>

                    <div className="flex flex-col col-span-12">
                      {ErrorPass1 !== "" ? (
                        <div
                          style={{
                            marginTop: "-15px",
                            marginLeft: "10px",
                            marginBottom: "10px",
                            color: "#FF6969",
                          }}
                        >
                          {ErrorPass1}
                        </div>
                      ) : (
                        ""
                      )}
                      <div style={{ height: "52px" }}>
                        <InputPulie
                          errorP={PasswordError2}
                          valController={confirmPassword}
                          onChangeController={(x) =>
                            setconfirmPassword(x.target.value)
                          }
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
                          placeHolder={"Confirm Password"}
                          svgLogoBack={true}
                        />
                      </div>
                    </div>
                  </div>
                  {ErrorPass2 !== "" ? (
                    <div
                      style={{
                        marginTop: "-15px",
                        marginLeft: "10px",
                        marginBottom: "-15px",
                        color: "#FF6969",
                      }}
                    >
                      {ErrorPass2}
                    </div>
                  ) : (
                    ""
                  )}
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
                      onClick={HandelClick}
                    >
                      <span className=" z-10 tp-h6 xs:tp-h7">Submit</span>
                    </button>
                  ) : (
                    ""
                  )}
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
      <ToastContainer />
    </React.Fragment>
  );
}
export default ConfirmPass;
