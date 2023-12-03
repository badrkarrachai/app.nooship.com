import React, { useEffect } from "react";
import { PiWarning } from "react-icons/pi";
import InputPulie from "../Components/InputPulie";
import Topbar from "../topbar/topbar";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import config from "../../config";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";

function AddressDetails() {
  const [reshipper, setReshipper] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [image, setImage] = useState("");

  const [postCode, setPostCode] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [bannedSites, setBannedSites] = useState("");
  const [notes, setNotes] = useState("");
  const ReshipperId = useSelector((state) => state.ReshipperId.value);
  const [away, setaway] = useState(false);
  const [awaySt, setAwaySt] = useState("");
  const [awayEnd, setAwayEndaway] = useState("");
  const DateFix = (x) => {
    const date = new Date(x);
    return date.toLocaleDateString();
  };

  async function getReshipperAdd() {
    try {
      if (ReshipperId !== "") {
        localStorage.setItem("Reshipper", ReshipperId);
      }
      let ReshipperIdv = localStorage.getItem("Reshipper");
      const response = await axios.post(
        `${config.baseURL}/get_Spesific_Reshipper`,
        { ReshipperIdv },
        {
          withCredentials: true, // Include credentials (cookies) with the request
        }
      );
      if (response.data.address.length !== 0) {
        setFirstName(response.data.address[0].First_Name);
        setLastName(response.data.address[0].Last_Name);
        setCompanyName(response.data.address[0].Company_Name);
        setPhoneNumber(response.data.address[0].Phone_Number);
        setImage(response.data.address[0].Image);
        setAddressLine1(response.data.address[0].AddressLine1);
        setAddressLine2(response.data.address[0].AddressLine2);
        setCity(response.data.address[0].City);
        setPostCode(response.data.address[0].PostCode);
        setCountry(response.data.address[0].Country);
        setState(response.data.address[0].State);
        setBannedSites(response.data.address[0].Banned_Sites);
        setNotes(response.data.address[0].Notes);
        if (response.data.address[0].Away_Status === "off") {
          setaway(false);
        } else {
          setaway(true);
        }
        setAwaySt(DateFix(response.data.address[0].Away_Start));
        setAwayEndaway(DateFix(response.data.address[0].Away_End));
        const us = response.data.address[0];
        delete us.Image;
        delete us.Away_Status;
        delete us.Away_Start;
        delete us.Away_End;

        setReshipper(us);
      }
    } catch (error) {
      console.error("Getting addresses failed:", error.response.data.error);
    }
  }
  useEffect(() => {
    getReshipperAdd();
  }, [ReshipperId]);
  return (
    <React.Fragment>
      <Topbar currentPage={"Address Details"} oldPage={"Addresses"} />
      <div className="flex flex-col flex-1 min-h-screen flex flex-row flex-1 !h-full aside-container">
        <main className="flex flex-1 flex-col divide-y divide-gray-100">
          <div
            className="mt-2 flex items-center justify-start pb-12 sm:pb-6 respotswira"
            style={{ paddingBottom: "1.5rem", columnGap: "7%" }}
          >
            <div className="relative flex h-32 w-32 shrink-0  justify-center overflow-hidden rounded-full border-2 border-base-1 drop-shadow-sm lg:h-24 lg:w-24 xs:h-18 xs:w-18">
              <img
                alt="avatar"
                src={
                  image === ""
                    ? "https://i.pinimg.com/originals/36/fa/7b/36fa7b46c58c94ab0e5251ccd768d669.jpg"
                    : image
                }
                className="z-10"
              />

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
            {away && (
              <div
                style={{ backgroundColor: "#FBD85D", padding: "20px" }}
                className="group flex z-0 rounded-2xl xs:rounded-xl box-border wfull   duration-300 relative px-6 hover:bg-gray-50 gap-3 h-14 lg:h-13 xs:h-12 !h-13 lg:!h-12 xs:!h-11 !px-4&nbsp;!rounded-xl dsfg3456"
              >
                <div
                  className="relative flex flex-1 items-center "
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <h2
                    style={{
                      fontWeight: "900",
                      fontSize: "14pt",
                      marginBottom: "10px",
                      display: "flex",
                      columnGap: "8px",
                      alignItems: "center",
                    }}
                  >
                    <PiWarning size={"25px"} />
                    Address Information
                  </h2>
                  <p>
                    This reshipper will be away between <b>{awaySt}</b> and{" "}
                    <b>{awayEnd}</b>.
                    <b>
                      {" "}
                      They will not be able to receive parcels during this time.
                    </b>
                  </p>
                </div>
              </div>
            )}
            <input
              type="file"
              accept="image/png,image/jpeg"
              className="hidden"
            />
          </div>
          <div
            className="flex flex-col gap-y-8 pt-12 pb-15 sm:pt-10"
            style={{ paddingTop: "1.5rem" }}
          >
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
                    isInputDisabled={true}
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
                    isInputDisabled={true}
                    onChangeController={(x) => setLastName(x.target.value)}
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
                    isInputDisabled={true}
                    onChangeController={(x) => setCompanyName(x.target.value)}
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
                    isInputDisabled={true}
                    onChangeController={(x) => setPhoneNumber(x.target.value)}
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
                    isInputDisabled={true}
                    valController={addressLine1}
                    onChangeController={(x) => setAddressLine1(x.target.value)}
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
                    isInputDisabled={true}
                    valController={addressLine2}
                    onChangeController={(x) => setAddressLine2(x.target.value)}
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
                    isInputDisabled={true}
                    onChangeController={(x) => setCity(x.target.value)}
                  />
                </div>
                <span className="flex opacity-0 h-4 transition-all duration-200 -z-10 -mt-4 ml-1 text-error-standard tp-body2"></span>
              </div>
              <div className="flex flex-col col-span-6 sm:col-span-12">
                <span className="tp-h7 mb-1 pl-1 text-gray-600">PostCode</span>
                <div style={{ height: "52px" }}>
                  <InputPulie
                    placeHolder={"PostCode"}
                    isInputDisabled={true}
                    valController={postCode}
                    onChangeController={(x) => setPostCode(x.target.value)}
                  />
                </div>
                <span className="flex opacity-0 h-4 transition-all duration-200 -z-10 -mt-4 ml-1 text-error-standard tp-body2"></span>
              </div>
              <div className="flex flex-col col-span-6 sm:col-span-12">
                <span className="tp-h7 mb-1 pl-1 text-gray-600">Country</span>
                <div style={{ height: "52px" }}>
                  <InputPulie
                    placeHolder={"Country"}
                    isInputDisabled={true}
                    valController={country}
                    onChangeController={(x) => setCountry(x.target.value)}
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
                    isInputDisabled={true}
                    onChangeController={(x) => setState(x.target.value)}
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
                    isInputDisabled={true}
                    valController={bannedSites}
                    onChangeController={(x) => setBannedSites(x.target.value)}
                  />
                </div>
                <span className="flex opacity-0 h-4 transition-all duration-200 -z-10 -mt-4 ml-1 text-error-standard tp-body2"></span>
              </div>
              <div className="flex flex-col col-span-6 sm:col-span-12">
                <span className="tp-h7 mb-1 pl-1 text-gray-600">Notes</span>
                <div style={{ height: "120px" }}>
                  <InputPulie
                    placeHolder={"Notes"}
                    isInputDisabled={true}
                    lines={"4"}
                    maxLen={"500"}
                    valController={notes}
                    onChangeController={(x) => setNotes(x.target.value)}
                  />
                </div>
                <span className="flex opacity-0 h-4 transition-all duration-200 -z-10 -mt-4 ml-1 text-error-standard tp-body2"></span>
              </div>
            </div>
            <CopyToClipboard
              text={JSON.stringify(reshipper)}
              onCopy={() => {
                toast.success("Address copied successfully!", {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
              }}
            >
              <button
                className="button group h-12 xs:h-11 rounded-2xl xs:rounded-xl px-6 xs:px-5 py-0 button-primary self-start"
                type="submit"
              >
                <span className=" z-10 tp-h6 xs:tp-h7 !tp-h7 xs:!tp-lead2">
                  Copy to clipboard
                </span>
              </button>
            </CopyToClipboard>
          </div>
        </main>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
}
export default AddressDetails;
