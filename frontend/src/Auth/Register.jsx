import React, { useEffect } from "react";
import { useState } from "react";
import "../App.css";

import InputPulie from "../Home/Components/InputPulie";
import { Navigate, useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux";
import { IoMdArrowBack } from "react-icons/io";
import config from "../config";
import axios from "axios";
import { useSelector } from "react-redux";
import { setVer, restVer } from "../redux/VerficationCode";
import { setPage } from "../redux/AuthData";
import { Last } from "react-bootstrap/esm/PageItem";
import { Ring } from "@uiball/loaders";
import { ToastContainer, toast } from "react-toastify";
import { setLoadingFalse } from "../redux/LoadingStataus";
import ReCAPTCHA from "react-google-recaptcha";

function TermsAndConditions({ status }) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <React.Fragment>
      <div
        style={{
          marginTop: "60px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer",
        }}
        className="aduyadf786"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => status(false)}
      >
        <IoMdArrowBack size="30px" color={isHovered ? "#00D0FF" : "Black"} />
        <div
          style={{
            color: isHovered ? "#00D0FF" : "Black",
            fontWeight: "700",
            fontSize: "14pt",
          }}
        >
          Go Back
        </div>
      </div>
      <div className="TermsContiner">
        <div className="termsInner">
          <b>1. Acceptance of Terms</b>
          <br />
          Welcome to Nooship. These Terms and Conditions govern your use of our
          reshipping services. By accessing or using the Service, you agree to
          these Terms and our Privacy Policy. If you do not agree, please do not
          use our Service.
          <br />
          <br />
          <b>2. Service Description</b>
          <br />
          2.1. Nooship is a reshipping service that allows users to purchase and
          ship products from various locations worldwide.
          <br /> 2.2. Our service connects you with reshippers who facilitate
          the purchase, consolidation, and shipment of products to your
          designated address.
          <br />
          <br />
          <b>3. User Eligibility</b>
          <br />
          3.1. You must be at least 18 years old to use our Service.
          <br /> 3.2. You are responsible for complying with all relevant
          import/export laws and regulations in your country.
          <br />
          <br />
          <b>4. Account Registration and Security</b>
          <br />
          4.1. You may need to create an account to use certain features of our
          Service.
          <br /> 4.2. You are responsible for maintaining the confidentiality of
          your account information and password.
          <br /> 4.3. You agree to notify us immediately of any unauthorized use
          of your account.
          <br />
          <br />
          <b>5. Service Fees and Payments</b>
          <br />
          5.1. Our fees for reshipping services are detailed on our website and
          may be subject to change.
          <br /> 5.2. You are responsible for all fees associated with your use
          of the Service, including product costs, shipping fees, and any
          applicable taxes.
          <br /> 5.3. Payment methods accepted are specified on our website, and
          you agree to provide accurate payment information.
          <br />
          <br />
          <b>6. Product Purchases and Inspection</b>
          <br />
          6.1. You are solely responsible for selecting and purchasing products
          to be reshipped through our Service.
          <br /> 6.2. Upon receipt of products at our facility, we may perform
          visual inspection and document any visible damage. Any discrepancies
          will be reported to you.
          <br />
          <br />
          <b>7. Shipping and Delivery</b>
          <br />
          7.1. We work with reshippers worldwide to facilitate the shipment of
          your products.
          <br /> 7.2. Delivery times and costs may vary based on the chosen
          reshipper, shipping method, and destination.
          <br /> 7.3. We will make reasonable efforts to provide you with
          tracking information and updates on the status of your shipments.
          <br />
          <br />
          <b>8. Disclaimers</b>
          <br />
          8.1. We do not guarantee the availability, accuracy, or reliability of
          our Service, including product availability, pricing, or delivery
          times.
          <br /> 8.2. We are not responsible for any damages, losses, or
          liabilities resulting from the use of our Service, including damage to
          products during transit.
          <br />
          <br />
          <b>9. Limitation of Liability</b>
          <br />
          9.1. Our liability is limited to the extent permitted by applicable
          law.
          <br /> 9.2. We are not liable for any indirect, incidental, or
          consequential damages, including lost profits, arising from your use
          of our Service.
          <br />
          <br />
          <b>10. Termination</b>
          <br />
          10.1. We may terminate or suspend your access to the Service for
          violations of these Terms.
          <br /> 10.2. You may close your account at any time by contacting us.
          <br />
          <br />
          <b>11. Changes to Terms</b>
          <br />
          11.1. We may update these Terms from time to time, and you will be
          notified of any material changes to these Terms.
          <br />
          <br />
          <b>13. Contact Information</b>
          <br />
          If you have questions or concerns about these Terms, please contact us
          at{" "}
          <a
            style={{ color: "#00D0FF" }}
            href="mailto:contact.vexiyart@gmail.com"
          >
            contact.vexiyart@gmail.com
          </a>
          .
        </div>
      </div>
    </React.Fragment>
  );
}

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isCaptchaShowen, setIsCaptchaShowen] = useState(false);
  const [isCaptchaDone, setIsCaptchaDone] = useState(false);
  const [isCaptchaError, setIsCaptchaError] = useState(false);

  let isAuth = localStorage.getItem("LogStatus");
  if (isAuth === "true") {
    return <Navigate to="/" />;
  }
  const [focusedInput, setFocusedInput] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedst, setIsCheckedst] = useState(false);

  const [TermsAndConditionsShowen, setTermsAndConditionsShowen] =
    useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailError1, setEmailError1] = useState("");

  const [passwordError, setPasswordError] = useState("");
  const [passwordError1, setPasswordError1] = useState("");

  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput("");
  };
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  function validateName(Name) {
    const nameRegex = /^[a-zA-Z]+$/; // Regular expression for letters only
    const lowercaseString = Name.trim().toLowerCase();
    const ReadyName =
      lowercaseString.charAt(0).toUpperCase() + lowercaseString.slice(1);

    if (ReadyName.trim() === "") {
      return { status: false, message: " " };
    } else if (!nameRegex.test(ReadyName)) {
      return {
        status: false,
        message: " ",
      };
    } else if (ReadyName.length < 2) {
      return {
        status: false,
        message: " ",
      };
    }

    return { status: true, message: ReadyName }; // No validation errors
  }
  function validateEmail(email1) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const lowercaseString = email1.trim().toLowerCase();
    const ReadyEmail =
      lowercaseString.charAt(0).toUpperCase() + lowercaseString.slice(1);

    if (ReadyEmail.trim() === "") {
      return { status: false, message: "Email is required" };
    } else if (!emailRegex.test(ReadyEmail)) {
      return { status: false, message: "This is not a valid email" };
    }

    return { status: true, message: ReadyEmail }; // No validation errors
  }
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
  const verCode = useSelector((state) => state.VerCode.value);
  const HandelRegister = async () => {
    let pass = true;
    if (validateName(firstName).status === false) {
      setFirstNameError(" ");
      pass = false;
    } else {
      setFirstNameError("");
    }
    if (validateName(lastName).status === false) {
      setLastNameError(" ");
      pass = false;
    } else {
      setLastNameError("");
    }
    if (validateEmail(email).status === false) {
      setEmailError(" ");
      setEmailError1(validateEmail(email).message);
      pass = false;
    } else {
      setEmailError("");
      setEmailError1("");
    }
    if (validatePassword(password) !== "") {
      setPasswordError(" ");
      setPasswordError1(validatePassword(password));
      pass = false;
    } else {
      setPasswordError("");
      setPasswordError1("");
    }
    if (confirmPassword !== password || confirmPassword === "") {
      setConfirmPasswordError(" ");
      pass = false;
    } else {
      setConfirmPasswordError("");
    }
    if (!isChecked) {
      setIsCheckedst(true);
      pass = false;
    } else {
      setIsCheckedst(false);
    }
    if (isCaptchaDone === false) {
      pass = false;
      setIsCaptchaError(true);
    } else {
      setIsCaptchaError(false);
    }
    if (pass) {
      const email2 = validateEmail(email).message.toString();
      const firstName1 = validateName(firstName).message.toString();
      const lastName1 = validateName(lastName).message.toString();
      const password1 = password;

      async function sendAndGetVer() {
        await axios
          .post(`${config.baseURL}/sendVerCodeAndGetCode`, {
            email,
            firstName1,
          })
          .then((res) => {
            if (res.data.Sent) {
              dispatch(setVer(res.data.verCode));
              return true;
            } else {
              return false;
            }
          })
          .catch((err) =>
            toast.error("Couldn't send verification code!", {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            })
          );
      }
      setIsLoading(true);
      await axios
        .post(`${config.baseURL}/email_is_excite`, { email2 })
        .then((res) => {
          if (res.data.Exist) {
            setEmailError(" ");
            setEmailError1("This email already have an account!");
            setIsLoading(false);
          } else {
            setEmailError("");
            setEmailError1("");
            if (sendAndGetVer()) {
              dispatch(setPage("Register"));
              localStorage.setItem("FirstName", firstName1);
              localStorage.setItem("LastName", lastName1);
              localStorage.setItem("Email", email2);
              localStorage.setItem("Password", password1);
              setIsLoading(false);

              navigate("/VerificationCode");
            } else {
              setIsLoading(false);
            }
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
    }
  };
  const Loading = useSelector((state) => state.Loading.value);
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
  //Recaptcha
  function onChange(value) {
    if (value !== "") {
      setIsCaptchaDone(true);
      setIsCaptchaError(false);
    } else {
      setIsCaptchaDone(false);
      setIsCaptchaError(true);
    }
  }

  useEffect(() => {
    isChecked ? setIsCaptchaShowen(true) : setIsCaptchaShowen(false);
  }, [isChecked]);
  return (
    <React.Fragment>
      {Loading === true ? <LoadingWithProgressBar /> : ""}
      <div id="__next" data-reactroot="">
        <div className="reOverlay"></div>
        <div className="mx-auto box-border flex w-full max-w-[90rem] flex-1 gap-28 px-24 xl:gap-14 sdjhf78fsd4 xl:px-16 lg:px-12 md:px-8 xs:px-5 2xs:px-3">
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
              {!TermsAndConditionsShowen && (
                <div className="aduyadf786 flex flex-col mt-36 max-w-xl lg:w-full lg:justify-center lg:flex-1 lg:mt-24 md:mt-18 xs:mt-14 items-start !mt-28 lg:!mt-22 md:!mt-16 xs:!mt-12">
                  <h2 className="mb-4 tp-display4 lg:text-center sm:text-center">
                    Join us!
                  </h2>
                  <div className="mb-12 flex xs:flex-col xs:gap-y-2 asd6723gsd">
                    <p className="tp-lead3 mr-1.5 text-center text-gray-200 j3h4fdd">
                      Already a member of our community?
                    </p>
                    <a
                      className="button group h-15 lg:h-14 xs:h-13 rounded-2xl xs:rounded-xl px-10 lg:px-9 xs:px-8 py-0 button-text !px-0 !py-0 !h-auto self-start"
                      type="submit"
                      onClick={() => navigate("/Login")}
                    >
                      <span className=" z-10 tp-h6 xs:tp-h7">Login here</span>
                    </a>
                  </div>
                  <div className="flex w-full flex-col gap-6">
                    <div className="grid gap-6 grid-cols-12 !gap-4 ">
                      <div className="flex flex-col col-span-6 sm:col-span-12">
                        <div style={{ height: "52px" }}>
                          <InputPulie
                            errorP={firstNameError}
                            placeHolder={"First Name"}
                            maxLen={"10"}
                            valController={firstName}
                            onChangeController={(x) =>
                              setFirstName(x.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="flex flex-col col-span-6 sm:col-span-12">
                        <div style={{ height: "52px" }}>
                          <InputPulie
                            errorP={lastNameError}
                            placeHolder={"Last Name"}
                            maxLen={"10"}
                            valController={lastName}
                            onChangeController={(x) =>
                              setLastName(x.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="flex flex-col col-span-12">
                        <div style={{ height: "52px" }}>
                          <InputPulie
                            errorP={emailError}
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
                            placeHolder={"Email Address"}
                            valController={email}
                            autoComplateInput="off"
                            onChangeController={(x) => setEmail(x.target.value)}
                          />
                        </div>
                        <span className="flex opacity-0 h-4 transition-all duration-200 -z-10 -mt-4 ml-1 text-error-standard tp-body2"></span>
                      </div>
                      <div className="flex flex-col col-span-12">
                        {emailError1 !== "" ? (
                          <div
                            style={{
                              marginTop: "-10px",
                              marginBottom: "10px",
                              marginLeft: "10px",
                              color: "#FF6969",
                            }}
                          >
                            {emailError1}
                          </div>
                        ) : (
                          ""
                        )}
                        <div style={{ height: "52px" }}>
                          <InputPulie
                            errorP={passwordError}
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
                            autoComplateInput="off"
                            placeHolder={"Password"}
                            svgLogoBack={true}
                            valController={password}
                            onChangeController={(x) =>
                              setPassword(x.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="flex flex-col col-span-12">
                        {passwordError1 !== "" ? (
                          <div
                            style={{
                              marginTop: "-10px",
                              marginBottom: "10px",
                              marginLeft: "10px",
                              color: "#FF6969",
                            }}
                          >
                            {passwordError1}
                          </div>
                        ) : (
                          ""
                        )}
                        <div style={{ height: "52px" }}>
                          <InputPulie
                            errorP={confirmPasswordError}
                            autoComplateInput="off"
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
                            valController={confirmPassword}
                            onChangeController={(x) =>
                              setConfirmPassword(x.target.value)
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-2 flex items-center asd6723gsd">
                      <div className="group flex gap-3 items-center cursor-pointer ">
                        <span className="box-border w-6 h-6 xs:h-5 xs:w-5 rounded-lg border-2 border-base-3 group-hover:border-gray-150 transition duration-300 flex items-center justify-center">
                          <Checkbox
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            id="checkBox1"
                          />
                        </span>
                        <span
                          className="text-gray-600 group-hover:text-gray-900 tp-lead1 transition duration-300 tp-lead3"
                          onClick={() => setIsChecked(!isChecked)}
                          style={{
                            color: isCheckedst ? "#FF6969" : "rgb(92 92 100)",
                          }}
                        >
                          I have read and agree to the
                        </span>
                      </div>
                      <button
                        className="button group h-15 lg:h-14 xs:h-13 rounded-2xl xs:rounded-xl px-10 lg:px-9 xs:px-8 py-0 button-link !px-0 !py-0 !h-auto ml-1.5"
                        type="submit"
                        onClick={() => setTermsAndConditionsShowen(true)}
                      >
                        <span className=" z-10 tp-h6 xs:tp-h7 underline decoration-2 underline-offset-2 sm:!tp-lead5">
                          Terms and Conditions
                        </span>
                      </button>
                    </div>
                    {isCaptchaShowen && (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          style={
                            isCaptchaError
                              ? { border: "2px solid", borderColor: "red" }
                              : {}
                          }
                        >
                          <ReCAPTCHA
                            sitekey="6LdhxwEpAAAAAOpfMo2kHr1g0e3rigLhBa3HnNEY"
                            onChange={onChange}
                          />
                        </div>
                      </div>
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
                        onClick={HandelRegister}
                      >
                        <span className=" z-10 tp-h6 xs:tp-h7">Sign up</span>
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              )}
              {TermsAndConditionsShowen && (
                <TermsAndConditions status={setTermsAndConditionsShowen} />
              )}
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
export default Register;
