import React, { useState } from "react";
import { CgLock } from "react-icons/cg";
import { AiOutlineEye } from "react-icons/ai";

import InputPulie from "../../Components/InputPulie";
import Topbar from "../../topbar/topbar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import config from "../../../config";
import { useNavigate } from "react-router-dom";
import { Ring } from "@uiball/loaders";

function ChangePassword() {
  const [isLoading, setIsLoading] = useState(false);
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
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const navegate = useNavigate();
  const SubmitNewPassword = async () => {
    let pass = true;
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      pass = false;
    } else {
      setConfirmPasswordError("");
    }
    if (validatePassword(password) !== "") {
      setPasswordError(validatePassword(password));
      pass = false;
    } else {
      setPasswordError("");
    }

    if (pass) {
      try {
        setIsLoading(true);
        const response = await axios.post(
          `${config.baseURL}/update_user_password`,
          { password },
          {
            withCredentials: true, // Include credentials (cookies) with the request
          }
        );
        if (response.data === "Done") {
          navegate("/");
          toast.success("Password changed successfully", {
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
          toast.error("Couldn't change the password!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      } catch (error) {
        toast.error("Something went wrong!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } finally {
        setIsLoading(false); // Hide loading spinner
      }
    }
  };
  return (
    <React.Fragment>
      <Topbar currentPage={"Change Password"} oldPage={""} />
      <section className="flex min-w-0 flex-1 flex-col ">
        <div className="flex flex-col flex-1 min-h-screen app-container ">
          <main
            className="relative mt-32 flex flex-row items-center justify-center px-22 lg:px-16 md:mt-10 md:flex-col-reverse sm:px-8 xs:px-3 respochange firstHolderclassName1234"
            style={{ gap: "90px" }}
          >
            <div className="flex flex-col justify-center lg:mr-24 md:mt-5 md:mr-0 sm:w-full SecondclassName234">
              <h1 className="tp-display3 mb-8 text-text-1 sm:hidden">
                Change Password
              </h1>
              <span className="tp-lead3 mb-10 text-gray-800">
                Enter your password information.
              </span>
              <div className="grid gap-6 grid-cols-12">
                <div className="flex flex-col col-span-9 col-span-full">
                  <div style={{ height: "52px" }}>
                    <InputPulie
                      svgLogo={<CgLock size={"20px"} color="#A9A9AD" />}
                      placeHolder={"New Password"}
                      svgLogoBack={true}
                      errorP={passwordError}
                      autoComplateInput="off"
                      valController={password}
                      onChangeController={(x) => setPassword(x.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col col-span-9 col-span-full">
                  <div style={{ height: "52px" }}>
                    <InputPulie
                      svgLogo={<CgLock size={"20px"} color="#A9A9AD" />}
                      placeHolder={"Re-enter new password"}
                      svgLogoBack={true}
                      errorP={confirmPasswordError}
                      autoComplateInput="off"
                      valController={confirmPassword}
                      onChangeController={(x) =>
                        setConfirmPassword(x.target.value)
                      }
                    />
                  </div>
                  <span className="flex opacity-0 h-4 transition-all duration-200 -z-10 -mt-4 ml-1 text-error-standard tp-body2"></span>
                </div>
              </div>
              {isLoading && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "1.75rem",
                  }}
                >
                  <Ring size={35} lineWeight={5} speed={1.5} color="#6499E9" />
                </div>
              )}
              {isLoading === false ? (
                <button
                  className="button group h-15 lg:h-14 xs:h-13 rounded-2xl xs:rounded-xl px-10 lg:px-9 xs:px-8 py-0 button-primary mt-6"
                  type="submit"
                  onClick={SubmitNewPassword}
                >
                  <span className=" z-10 tp-h6 xs:tp-h7">Submit</span>
                </button>
              ) : (
                ""
              )}
            </div>
            <img
              alt=""
              src="https://capmership.s3.eu-north-1.amazonaws.com/lock.png"
              className="w-1/4 max-w-[19.5rem] lg:w-1/3 md:w-2/5 sm:w-3/5 hidelock"
            />
          </main>
        </div>
      </section>
      <ToastContainer />
    </React.Fragment>
  );
}
export default ChangePassword;
