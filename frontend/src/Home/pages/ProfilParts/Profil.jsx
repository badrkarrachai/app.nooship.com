import React, { useEffect, useRef } from "react";
import { FiTrash } from "react-icons/fi";
import { IoCloudUploadOutline } from "react-icons/io5";
import { BiEditAlt } from "react-icons/bi";
import InputPulie from "../../Components/InputPulie";
import Switch from "@mui/material/Switch";
import Topbar from "../../topbar/topbar";
import { useState } from "react";
import DatePickerPulie from "../../Components/DatePickerPulie";
import Cookies from "universal-cookie";
import { ToastContainer, toast } from "react-toastify";

import axios from "axios";
import config from "../../../config";
import SelectPulie from "../../Components/SelectPulie";
import countryData from "../../../data/countries";
import { useDispatch, useSelector } from "react-redux";
import { setProfileUpdateIndecator } from "../../../redux/ProfileUpdateIndicator";
import { Ring } from "@uiball/loaders";

function Profil() {
  const [awayInputStatus, setawayInputStatus] = useState(false);
  const [user, setUser] = useState("");
  const [userImage, setUserImage] = useState("");
  const [userImageStore, setUserImageStore] = useState("");
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingImageUpload, setIsLoadingImageUpload] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [postCode, setPostCode] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [bannedSites, setBannedSites] = useState("");
  const [notes, setNotes] = useState("");
  const [userRole, setUesrRole] = useState("C");
  const [awayStatus, setAwayStatus] = useState("off");
  const [awayStart, setAwayStart] = useState(false);
  const [awayStartRester, setAwayStartRester] = useState(null);
  const [awayEnd, setAwayEnd] = useState(false);
  const [awayEndRester, setAwayEndRester] = useState(null);

  // Error states for each input field
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [companyNameError, setCompanyNameError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [addressLine1Error, setAddressLine1Error] = useState("");
  const [addressLine2Error, setAddressLine2Error] = useState("");
  const [cityError, setCityError] = useState("");
  const [postCodeError, setPostCodeError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [stateError, setStateError] = useState("");
  const [bannedSitesError, setBannedSitesError] = useState("");
  const [notesError, setNotesError] = useState("");
  const [awayStartError, setAwayStartError] = useState("");
  const [awayEndError, setAwayEndError] = useState("");

  useEffect(() => {
    setCountries(countryData);
  }, []);

  const handleawayInputStatus = (event) => {
    setawayInputStatus(event.target.checked);
    setAwayStatus(event.target.checked ? "on" : "off");
    setAwayStartRester(null);
    setAwayEndRester(null);
  };
  const cookies = new Cookies();

  const getUserData = () => {
    const userCookie = cookies.get("xml");
    if (userCookie) {
      setUser(userCookie);
      setFirstName(userCookie.First_Name);
      setLastName(userCookie.Last_Name);
      setCompanyName(userCookie.Company_Name);
      setPhoneNumber(userCookie.Phone_Number);
      setAddressLine1(userCookie.AddressLine1);
      setAddressLine2(userCookie.AddressLine2);
      setCity(userCookie.City);
      setPostCode(userCookie.PostCode);
      setCountry(userCookie.Country);
      setState(userCookie.State);
      setBannedSites(userCookie.Banned_Sites);
      setNotes(userCookie.Notes);
      setUesrRole(userCookie.Role);
      setUserImage(userCookie.Image);
      setAwayStart(userCookie.Away_Start);
      setAwayEnd(userCookie.Away_End);
      setawayInputStatus(userCookie.Away_Status === "on" ? true : false);
      setAwayStatus(userCookie.Away_Status);
    }
  };
  const ProfileUpdateIndecator = useSelector(
    (state) => state.ProfileUpdateIndecator.value
  );
  useEffect(() => {
    getUserData();
  }, [ProfileUpdateIndecator]);
  function validateName(Name, type) {
    const nameRegex = /^[a-zA-Z]+$/; // Regular expression for letters only
    const lowercaseString = Name.trim().toLowerCase();
    const ReadyName =
      lowercaseString.charAt(0).toUpperCase() + lowercaseString.slice(1);

    if (ReadyName.trim() === "") {
      return { status: false, message: type + " name is required" };
    } else if (!nameRegex.test(ReadyName)) {
      return {
        status: false,
        message: type + " is not valid",
      };
    } else if (ReadyName.length < 2) {
      return {
        status: false,
        message: type + " must be at least two characters",
      };
    }

    return { status: true, message: ReadyName }; // No validation errors
  }
  const dispatch = useDispatch();

  const CaseFixer = (text) => {
    if (text === null) {
      return "";
    }
    const lowercaseString = text.trim().toLowerCase();
    return lowercaseString.charAt(0).toUpperCase() + lowercaseString.slice(1);
  };
  const awayBacker = () => {
    const userCookie = cookies.get("xml");

    if (userCookie.Away_Status === "on") {
      return true;
    } else {
      return false;
    }
  };
  const setUpdate = async () => {
    const userCookie = cookies.get("xml");

    if (
      userCookie.First_Name !== firstName ||
      userCookie.Last_Name !== lastName ||
      userCookie.Company_Name !== companyName ||
      userCookie.Phone_Number !== phoneNumber ||
      userCookie.AddressLine1 !== addressLine1 ||
      userCookie.AddressLine2 !== addressLine2 ||
      userCookie.City !== city ||
      userCookie.PostCode !== postCode ||
      userCookie.Country !== country ||
      userCookie.State !== state ||
      userCookie.Banned_Sites !== bannedSites ||
      userCookie.Notes !== notes ||
      awayBacker() !== awayInputStatus ||
      userCookie.Away_Start !== awayStartRester ||
      userCookie.Away_End !== awayEndRester
    ) {
      let pass = true;
      if (validateName(firstName).status === false) {
        setFirstNameError(validateName(firstName, "First").message);
        pass = false;
      } else {
        setFirstNameError("");
      }
      if (validateName(lastName).status === false) {
        setLastNameError(validateName(lastName, "Last").message);
        pass = false;
      } else {
        setLastNameError("");
      }

      if (country.split(" ").join("") === "") {
        setCountryError("Country is required");
        pass = false;
      } else {
        setCountryError("");
      }

      const startDate = new Date(awayStartRester);
      const endDate = new Date(awayEndRester);
      if (awayInputStatus) {
        if (awayStartRester === null) {
          setAwayStartError("This is not a valid date");
          pass = false;
          return;
        } else {
          setAwayStartError("");
        }
        if (awayEndRester === null) {
          setAwayEndError("This is not a valid date");
          pass = false;
          return;
        } else {
          setAwayEndError("");
        }
        if (startDate < endDate) {
          setAwayStartError("");
          setAwayEndError("");
        } else {
          setAwayStartError("The start date should be less than end date!");
          setAwayEndError("The end date should be greater than start date!");
          pass = false;
        }
      }

      if (pass) {
        const firstName1 = CaseFixer(firstName);
        const lastName1 = CaseFixer(lastName);
        const companyName1 = CaseFixer(companyName);
        const addressLine11 = CaseFixer(addressLine1);
        const addressLine21 = CaseFixer(addressLine2);
        const city1 = CaseFixer(city);
        const state1 = CaseFixer(state);
        const notes1 = CaseFixer(notes);

        try {
          setIsLoading(true);

          const response = await axios.post(
            `${config.baseURL}/update_user_data_mership2023`,
            {
              firstName1,
              lastName1,
              companyName1,
              phoneNumber,
              addressLine11,
              addressLine21,
              city1,
              postCode,
              country,
              state1,
              bannedSites,
              notes1,
              awayStatus,
              awayStartRester,
              awayEndRester,
            },
            {
              withCredentials: true, // Include credentials (cookies) with the request
            }
          );
          if (response.data === "Done") {
            let userCookie = cookies.get("xml");
            userCookie.First_Name = CaseFixer(firstName);
            userCookie.Last_Name = CaseFixer(lastName);
            userCookie.Company_Name = CaseFixer(companyName);
            userCookie.Phone_Number = phoneNumber;
            userCookie.AddressLine1 = CaseFixer(addressLine1);
            userCookie.AddressLine2 = CaseFixer(addressLine2);
            userCookie.City = CaseFixer(city);
            userCookie.PostCode = postCode;
            userCookie.Country = country;
            userCookie.State = CaseFixer(state);
            userCookie.Banned_Sites = bannedSites;
            userCookie.Notes = notes;
            userCookie.Away_Status = awayStatus;
            userCookie.Away_Start = awayStartRester;
            userCookie.Away_End = awayEndRester;
            cookies.set("xml", userCookie, { path: "/" });

            dispatch(setProfileUpdateIndecator("on"));
            toast.success("Your info updated successfully", {
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
    } else {
      toast.error("Nothing is changed!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  const inputRef = useRef(null);

  const handleImageChange = async (event) => {
    const selectedImage = event.target.files[0];

    if (selectedImage && selectedImage.type === "image/jpeg") {
      if (selectedImage.size > 5 * 1024 * 1024) {
        // 2MB in bytes
        toast.error("Image size is over 5Mb!", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        event.target.value = "";
        return;
      }

      setUserImageStore(selectedImage);
      handleImageUpload(selectedImage);
    }
  };
  const handleImageUpload = async (selectedImage) => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append("newimage", selectedImage);

      const userCookie = cookies.get("xml");

      try {
        setIsLoadingImageUpload(true);
        const response = await axios.post(
          `${config.baseURL}/upload_profile_image_new`,
          formData, // Use the FormData object for sending the request
          {
            withCredentials: true,
            headers: {
              "Content-Type": "multipart/form-data", // Set the content type to "multipart/form-data"
            },
          }
        );
        if (response.data.status === "Done") {
          userCookie.Image = response.data.userImage;
          cookies.set("xml", userCookie, { path: "/" });
          setUserImage(response.data.userImage);
          dispatch(setProfileUpdateIndecator("on"));
          toast.success("Avatar uploaded successfully!", {
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
          toast.error("Couldn't update the avatar!", {
            position: "top-right",
            autoClose: 1500,
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
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } finally {
        setIsLoadingImageUpload(false);
      }
    } else {
      toast.error("You didn't select any picture to upload!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  //Delete The userPicture
  const handleImageDelete = async () => {
    const userCookie = cookies.get("xml");
    if (userCookie.Image !== "") {
      try {
        const response = await axios.get(
          `${config.baseURL}/delete_User_image`,
          {
            withCredentials: true,
          }
        );
        if (response.data.status === "Done") {
          userCookie.Image = response.data.userImage;
          cookies.set("xml", userCookie, { path: "/" });
          setUserImage(response.data.userImage);
          dispatch(setProfileUpdateIndecator("on"));
          toast.success("Avatar deleted successfully!", {
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
          toast.error("Couldn't delete the avatar!", {
            position: "top-right",
            autoClose: 1500,
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
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } else {
      toast.error("The Avatar already deleted!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <React.Fragment>
      <Topbar currentPage={"My Profile"} oldPage={""} />
      <div className="flex flex-col flex-1 min-h-screen flex flex-row flex-1 !h-full aside-container">
        <main className="flex flex-1 flex-col divide-y divide-gray-100">
          <div className="mt-2 flex items-center justify-start pb-12 sm:pb-6 respotswira">
            <div
              onClick={() => inputRef.current.click()}
              className="relative flex h-32 w-32 shrink-0 cursor-pointer justify-center overflow-hidden rounded-full border-2 border-base-1 drop-shadow-sm lg:h-24 lg:w-24 xs:h-18 xs:w-18"
            >
              {isLoadingImageUpload && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    marginTop: "50px",
                  }}
                >
                  <Ring size={35} lineWeight={5} speed={1.5} color="#6499E9" />
                </div>
              )}
              {!isLoadingImageUpload && (
                <>
                  <img
                    alt="avatar"
                    src={
                      userImage === ""
                        ? "https://i.pinimg.com/originals/36/fa/7b/36fa7b46c58c94ab0e5251ccd768d669.jpg"
                        : userImage
                    }
                    className="z-10"
                  />

                  <span
                    className="absolute z-20 flex justify-center items-center rounded-b-full h-8 bg-primary/30 bottom-0.5 w-full"
                    style={{ bottom: "0" }}
                  >
                    <BiEditAlt color="white" size={"18px"} />
                  </span>
                </>
              )}
              <span className="absolute w-full z-30 h-full bg-primary/30 justify-center items-center hidden">
                <svg
                  width="33"
                  height="33"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="animate-spin"
                >
                  <path
                    d="M0.999997 17.5671C0.999997 14.3803 1.91542 11.2611 3.63651 8.58346C5.35761 5.90584 7.81132 3.78346 10.7035 2.47077C13.5957 1.15808 16.8035 0.710787 19.9425 1.18253C23.0814 1.65428 26.0183 3.02503 28.4009 5.13045C30.7835 7.23587 32.5108 9.98661 33.3756 13.0529C34.2405 16.1191 34.2062 19.3707 33.2769 22.4179C32.3476 25.4651 30.5627 28.1785 28.1362 30.2328C25.7097 32.2871 22.7446 33.5951 19.5964 34"
                    stroke="#fff"
                    strokeOpacity="0.2"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M17.5005 0.999999C21.0783 0.999999 24.5592 2.16292 27.4185 4.3135C30.2778 6.46408 32.3606 9.48578 33.353 12.9232C34.3454 16.3606 34.1937 20.0274 32.9206 23.3711C31.6475 26.7147 29.3222 29.554 26.2949 31.4609C23.2677 33.3679 19.7026 34.2392 16.1371 33.9436C12.5715 33.6479 9.19863 32.2014 6.5268 29.8219C3.85497 27.4424 2.02896 24.2589 1.32398 20.7512C0.618992 17.2436 1.07323 13.6018 2.61824 10.3748"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </span>
            </div>
            <input
              type="file"
              accept="image/jpeg"
              style={{ display: "none" }}
              ref={inputRef}
              onChange={handleImageChange}
            />
            <div className="ml-6 flex gap-x-2 sm:ml-2">
              <button
                className="button group h-12 xs:h-11 rounded-2xl xs:rounded-xl px-4 py-0 button-tertiary"
                type="submit"
                onClick={() => inputRef.current.click()}
              >
                <IoCloudUploadOutline size={"18px"} />
                <span className=" z-10 tp-h6 xs:tp-h7 !tp-h7 xs:!tp-lead2 -mb-0.5">
                  Change avatar
                </span>
              </button>
              <button
                className="button group h-12 xs:h-11 rounded-2xl xs:rounded-xl px-0 w-12 xs:w-11 py-0 button-tertiary"
                type="submit"
                onClick={handleImageDelete}
              >
                <FiTrash />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-y-8 pt-12 pb-15 sm:pt-10">
            <div className="grid gap-6 grid-cols-12 relative gap-x-13 xl:gap-x-8 xs:gap-x-4 respoProfil">
              <div className="flex flex-col col-span-6 sm:col-span-12">
                <span className="tp-h7 mb-1 pl-1 text-gray-600">
                  First Name
                </span>
                <div style={{ height: "52px" }}>
                  <InputPulie
                    placeHolder={"First Name"}
                    valController={firstName}
                    onChangeController={(x) => setFirstName(x.target.value)}
                    errorP={firstNameError}
                    maxLen={"15"}
                  />
                </div>
                <span className="flex opacity-0 h-4 transition-all duration-200 -z-10 -mt-4 ml-1 text-error-standard tp-body2"></span>
              </div>
              <div className="flex flex-col col-span-6 sm:col-span-12">
                <span className="tp-h7 mb-1 pl-1 text-gray-600">Last Name</span>
                <div style={{ height: "52px" }}>
                  <InputPulie
                    placeHolder={"Last Name"}
                    valController={lastName}
                    onChangeController={(x) => setLastName(x.target.value)}
                    errorP={lastNameError}
                    maxLen={"15"}
                  />
                </div>
                <span className="flex opacity-0 h-4 transition-all duration-200 -z-10 -mt-4 ml-1 text-error-standard tp-body2"></span>
              </div>
              <div className="flex flex-col col-span-6 sm:col-span-12">
                <span className="tp-h7 mb-1 pl-1 text-gray-600">
                  Company Name
                </span>
                <div style={{ height: "52px" }}>
                  <InputPulie
                    placeHolder={"Company Name"}
                    valController={companyName}
                    onChangeController={(x) => setCompanyName(x.target.value)}
                    errorP={companyNameError}
                  />
                </div>
                <span className="flex opacity-0 h-4 transition-all duration-200 -z-10 -mt-4 ml-1 text-error-standard tp-body2"></span>
              </div>
              <div className="flex flex-col col-span-6 sm:col-span-12">
                <span className="tp-h7 mb-1 pl-1 text-gray-600">
                  Phone Number
                </span>
                <div style={{ height: "52px" }}>
                  <InputPulie
                    placeHolder={"Phone Number"}
                    valController={phoneNumber}
                    onChangeController={(x) => setPhoneNumber(x.target.value)}
                    errorP={phoneNumberError}
                    maxLen={"35"}
                  />
                </div>
                <span className="flex opacity-0 h-4 transition-all duration-200 -z-10 -mt-4 ml-1 text-error-standard tp-body2"></span>
              </div>
              <div className="flex flex-col col-span-6 sm:col-span-12">
                <span className="tp-h7 mb-1 pl-1 text-gray-600">
                  AddressLine 1
                </span>
                <div style={{ height: "52px" }}>
                  <InputPulie
                    placeHolder={"AddressLine 1"}
                    valController={addressLine1}
                    onChangeController={(x) => setAddressLine1(x.target.value)}
                    errorP={addressLine1Error}
                  />
                </div>
                <span className="flex opacity-0 h-4 transition-all duration-200 -z-10 -mt-4 ml-1 text-error-standard tp-body2"></span>
              </div>
              <div className="flex flex-col col-span-6 sm:col-span-12">
                <span className="tp-h7 mb-1 pl-1 text-gray-600">
                  AddressLine 2
                </span>
                <div style={{ height: "52px" }}>
                  <InputPulie
                    placeHolder={"AddressLine 2"}
                    valController={addressLine2}
                    onChangeController={(x) => setAddressLine2(x.target.value)}
                    errorP={addressLine2Error}
                  />
                </div>
                <span className="flex opacity-0 h-4 transition-all duration-200 -z-10 -mt-4 ml-1 text-error-standard tp-body2"></span>
              </div>
              <div className="flex flex-col col-span-6 sm:col-span-12">
                <span className="tp-h7 mb-1 pl-1 text-gray-600">City</span>
                <div style={{ height: "52px" }}>
                  <InputPulie
                    placeHolder={"City"}
                    valController={city}
                    onChangeController={(x) => setCity(x.target.value)}
                    errorP={cityError}
                  />
                </div>
                <span className="flex opacity-0 h-4 transition-all duration-200 -z-10 -mt-4 ml-1 text-error-standard tp-body2"></span>
              </div>
              <div className="flex flex-col col-span-6 sm:col-span-12">
                <span className="tp-h7 mb-1 pl-1 text-gray-600">PostCode</span>
                <div style={{ height: "52px" }}>
                  <InputPulie
                    placeHolder={"PostCode"}
                    valController={postCode}
                    onChangeController={(x) => setPostCode(x.target.value)}
                    errorP={postCodeError}
                    maxLen={"20"}
                  />
                </div>
                <span className="flex opacity-0 h-4 transition-all duration-200 -z-10 -mt-4 ml-1 text-error-standard tp-body2"></span>
              </div>
              <div className="flex flex-col col-span-6 sm:col-span-12">
                <span className="tp-h7 mb-1 pl-1 text-gray-600">Country</span>
                <div style={{ height: "52px" }}>
                  <SelectPulie
                    placeHolder={"Country"}
                    valController={country}
                    idSelect={"Country2"}
                    onChangeController={(x) => setCountry(x.target.value)}
                    errorP={countryError}
                    ListOfValues={countries.map((country) => (
                      <option key={country.numberCode} id={country.numberCode}>
                        {country.countryName}
                      </option>
                    ))}
                  />
                </div>
                <span className="flex opacity-0 h-4 transition-all duration-200 -z-10 -mt-4 ml-1 text-error-standard tp-body2"></span>
              </div>
              <div className="flex flex-col col-span-6 sm:col-span-12">
                <span className="tp-h7 mb-1 pl-1 text-gray-600">State</span>
                <div style={{ height: "52px" }}>
                  <InputPulie
                    placeHolder={"State"}
                    valController={state}
                    onChangeController={(x) => setState(x.target.value)}
                    errorP={stateError}
                  />
                </div>
                <span className="flex opacity-0 h-4 transition-all duration-200 -z-10 -mt-4 ml-1 text-error-standard tp-body2"></span>
              </div>
              <div className="flex flex-col col-span-6 sm:col-span-12">
                <span className="tp-h7 mb-1 pl-1 text-gray-600">
                  Banned_Sites
                </span>
                <div style={{ height: "52px" }}>
                  <InputPulie
                    placeHolder={"Banned_Sites"}
                    valController={bannedSites}
                    onChangeController={(x) => setBannedSites(x.target.value)}
                    errorP={bannedSitesError}
                  />
                </div>
                <span className="flex opacity-0 h-4 transition-all duration-200 -z-10 -mt-4 ml-1 text-error-standard tp-body2"></span>
              </div>
              <div className="flex flex-col col-span-6 sm:col-span-12">
                <span className="tp-h7 mb-1 pl-1 text-gray-600">Notes</span>
                <div style={{ height: "120px" }}>
                  <InputPulie
                    placeHolder={"Notes"}
                    lines={"4"}
                    maxLen={"500"}
                    valController={notes}
                    onChangeController={(x) => setNotes(x.target.value)}
                    errorP={notesError}
                  />
                </div>
                <span className="flex opacity-0 h-4 transition-all duration-200 -z-10 -mt-4 ml-1 text-error-standard tp-body2"></span>
              </div>
            </div>
            {userRole === "R" ? (
              <React.Fragment>
                <div
                  className="flex flex-1 items-center self-start py-4 lg:w-full respoline"
                  style={{
                    width: "100%",
                    marginTop: "-10px",
                    marginBottom: "-10px",
                  }}
                >
                  <span className="tp-lead5 shrink-0 text-gray-300 lg:hidden">
                    For Reshipper
                  </span>
                  <span className="mr-4 ml-3 h-0.5 w-full gap-x-5 bg-gray-100 lg:mx-0 "></span>
                </div>

                <span className="tp-h7 mb-1 pl-1 text-gray-600">
                  Away Status
                </span>
                <div style={{ marginTop: "-20px" }}>
                  <Switch
                    checked={awayInputStatus}
                    onChange={handleawayInputStatus}
                    id="asdfa3425"
                  />
                  <span className="tp-lead5 shrink-0 text-gray-300 lg:hidden">
                    When you expect to be unavailable for services, refer to
                    this source to include your data commencement and return
                    date.
                  </span>
                </div>
                {awayInputStatus ? (
                  <div className="grid gap-6 grid-cols-12 relative z-50 gap-x-13 xl:gap-x-8 xs:gap-x-4 respoProfil">
                    <div className="flex flex-col col-span-6 sm:col-span-12">
                      <span className="tp-h7 mb-1 pl-1 text-gray-600">
                        Away Start
                      </span>
                      <div style={{ height: "52px" }}>
                        <DatePickerPulie
                          idReciver={"asd345"}
                          placeHolder={"Away Start"}
                          errorP={awayStartError}
                          valController={awayStart}
                          onChangeController={setAwayStartRester}
                          reseter={setAwayStart}
                        />
                      </div>
                      <span className="flex opacity-0 h-4 transition-all duration-200 -z-10 -mt-4 ml-1 text-error-standard tp-body2"></span>
                    </div>
                    <div className="flex flex-col col-span-6 sm:col-span-12">
                      <span className="tp-h7 mb-1 pl-1 text-gray-600">
                        Away End
                      </span>
                      <div style={{ height: "52px" }}>
                        <DatePickerPulie
                          idReciver={"asda3j4k5"}
                          placeHolder={"Away End"}
                          errorP={awayEndError}
                          valController={awayEnd}
                          onChangeController={setAwayEndRester}
                          reseter={setAwayEnd}
                        />
                      </div>
                      <span className="flex opacity-0 h-4 transition-all duration-200 -z-10 -mt-4 ml-1 text-error-standard tp-body2"></span>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </React.Fragment>
            ) : (
              ""
            )}
            {isLoading && (
              <div
                style={{
                  marginLeft: "58px",
                  marginTop: "0px",
                }}
              >
                <Ring size={35} lineWeight={5} speed={1.5} color="#6499E9" />
              </div>
            )}
            {isLoading === false ? (
              <button
                className="button group h-12 xs:h-11 rounded-2xl xs:rounded-xl px-6 xs:px-5 py-0 button-primary self-start"
                type="submit"
                onClick={setUpdate}
              >
                <span className=" z-10 tp-h6 xs:tp-h7 !tp-h7 xs:!tp-lead2">
                  Save to my profile
                </span>
              </button>
            ) : (
              ""
            )}
          </div>
        </main>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
}
export default Profil;
