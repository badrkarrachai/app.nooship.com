import React, { useEffect } from "react";
import { useState } from "react";
import "../App.css";
import InputPulie from "../Home/Components/InputPulie";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../redux/AuthData";
import baseURL from "../config";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function VerificationCode() {
  const navigate = useNavigate();
  const [verCode, setVerCode] = useState("");
  const Page = useSelector((state) => state.Page.value);
  if (Page === "") {
    return <Navigate to="/Login" />;
  }
  const dispatch = useDispatch();
  const [verficationCode, setVerficationCode] = useState("");
  const [ErrorVerCode, setErrorVerCode] = useState("");
  const [ErrorVerCode1, setErrorVerCode1] = useState("");
  const newVer = useSelector((state) => state.VerCode.value);
  useEffect(() => {
    setVerCode(newVer);
  }, [newVer]);
  let isAuth = localStorage.getItem("LogStatus");

  if (isAuth === "true") {
    return <Navigate to="/" />;
  }
  const headingStyle = {
    fontSize: "24px",
    color: "black",
  };
  const [focusedInput, setFocusedInput] = useState("");
  const [countResendCode, setcountResendCode] = useState(1);
  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput("");
  };

  const HandelClick = async () => {
    if (verCode == verficationCode && verCode.split(" ").join("") !== "") {
      if (Page === "Register") {
        setErrorVerCode("");
        dispatch(setPage("VerCode"));
        const FirstName = localStorage.getItem("FirstName");
        const LastName = localStorage.getItem("LastName");
        const Email = localStorage.getItem("Email");
        const Password = localStorage.getItem("Password");
        localStorage.setItem("FirstName", "");
        localStorage.setItem("LastName", "");
        localStorage.setItem("Password", "");
        async function CreateAccount() {
          await axios
            .post(`${baseURL}/CreateAccountMership239`, {
              FirstName,
              LastName,
              Email,
              Password,
            })
            .then((res) => {
              if (res.data.Inserted) {
                return true;
              } else {
                return false;
              }
            })
            .catch((err) => {
              return false;
            });
        }
        if (CreateAccount()) {
          navigate("/Login");
        } else {
          setErrorVerCode(" ");
          setErrorVerCode1("Something went wrong please try again later!");
        }
      } else if (Page === "ForgotPass") {
        dispatch(setPage("VerCode"));
        setErrorVerCode("");
        navigate("/ConfirmPassword");
      }
    } else {
      setErrorVerCode(" ");
      setErrorVerCode1("Verification code is wrong!");
    }
  };
  const ResendClick = async () => {
    const firstName1 = localStorage.getItem("FirstName");
    const email = localStorage.getItem("Email");

    if (
      firstName1.split(" ").join("") !== "" &&
      email.split(" ").join("") !== ""
    ) {
      await axios
        .post(`${baseURL}/sendVerCodeAndGetCode`, { email, firstName1 })
        .then((res) => {
          if (res.data.Sent) {
            setVerCode(res.data.verCode);
            setcountResendCode(countResendCode + 1);
            toast.success("Verification code sent successfully!", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          } else {
            toast.error("We couldn't send the verification code!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }
        })
        .catch((err) => {
          toast.error("Something went wrong!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        });
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
              <div className=" aduyadf786 flex flex-col mt-36 max-w-xl lg:w-full lg:justify-center lg:flex-1 lg:mt-24 md:mt-18 xs:mt-14 items-start">
                <h2 className="mb-4 tp-display4 lg:text-center sm:text-center">
                  Verification Code
                </h2>
                <div className="mb-13 flex xs:flex-col xs:gap-y-2 asd6723gsd">
                  <p className="tp-lead3 mr-2 text-gray-200 ">
                    Check your email for the verification code or
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
                          errorP={ErrorVerCode}
                          placeHolder={"your verification code here"}
                          valController={verficationCode}
                          onChangeController={(x) =>
                            setVerficationCode(x.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  {ErrorVerCode1 !== "" ? (
                    <div
                      style={{
                        marginTop: "-10px",
                        marginLeft: "10px",
                        color: "#FF6969",
                      }}
                    >
                      {ErrorVerCode1}
                    </div>
                  ) : (
                    ""
                  )}
                  <button
                    className="button group h-15 lg:h-14 xs:h-13 rounded-2xl xs:rounded-xl px-10 lg:px-9 xs:px-8 py-0 button-primary"
                    type="submit"
                    onClick={HandelClick}
                  >
                    <span className=" z-10 tp-h6 xs:tp-h7">Verify</span>
                  </button>
                  {countResendCode < 5 ? (
                    <div className="resendCode">
                      Not received your code?{" "}
                      <div
                        style={{
                          color: "#63E0FF",
                          marginLeft: "10px",
                          cursor: "pointer",
                        }}
                        onClick={ResendClick}
                      >
                        Resend code{" "}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-1 items-center self-center py-10 lg:hidden sdkjf783"
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
export default VerificationCode;
