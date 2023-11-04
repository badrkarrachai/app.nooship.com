import React, { useEffect, useState } from "react";
import Topbar from "../topbar/topbar";
import { AiOutlineClose } from "react-icons/ai";
import { FiBookmark } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import baseURL from "../../config";
import axios from "axios";
import countryData from "../../data/countries";
import { ToastContainer, toast } from "react-toastify";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { setIdReshipper } from "../../redux/ReshipperId";
import { setSTadd } from "../../redux/LoadingStataus";
import { Ring } from "@uiball/loaders";

function AddCard({
  IdReshippper,
  reshipperName,
  ReshipperImage,
  Country,
  Addr,
  PostCode,
  Status,
  Flag,
  ClimeFunction,
  ActionType,
}) {
  const navegate = useNavigate();
  const dispatch = useDispatch();
  const HandelAdressDetails = () => {
    dispatch(setIdReshipper(IdReshippper));
    navegate("/AddressDetails");
  };

  return (
    <React.Fragment>
      <article className="flex flex-col bg-base-1 p-8 rounded-2xl lg:p-6  DowntoUpFloat  shadow-card">
        <div
          style={{
            cursor: "pointer",
            width: "100%",
            height: "100%",
            position: "absolute",
            left: "0",
            top: "0",
            zIndex: "1",
          }}
          onClick={HandelAdressDetails}
        ></div>
        <header className="flex items-start justify-between">
          <div
            className="flex gap-x-5 items-center lg:flex-col lg:items-start lg:gap-y-4 respowrap aerf7234"
            onClick={HandelAdressDetails}
            style={{ cursor: "pointer", zIndex: "2" }}
          >
            <a
              target="_blank"
              onClick={HandelAdressDetails}
              style={{ cursor: "pointer" }}
            >
              <div className="flex w-25 h-25 shrink-0 rounded-full w-16 h-16">
                <img
                  src={
                    ReshipperImage === ""
                      ? "https://i.pinimg.com/originals/36/fa/7b/36fa7b46c58c94ab0e5251ccd768d669.jpg"
                      : ReshipperImage
                  }
                  alt="logo"
                  className="w-full rounded-full border border-gray-100 bg-base-1 object-contain p-[1px] duration-200 hover:border-secondary-1/70"
                />
              </div>
            </a>
            <div className="flex flex-col gap-y-2 lg:gap-y-3">
              <a
                target="_blank"
                onClick={HandelAdressDetails}
                style={{ cursor: "pointer" }}
              >
                <div>
                  <h4 className="text-text-1 hover:text-secondary-1 duration-200 tp-h5">
                    {reshipperName}
                  </h4>
                </div>
              </a>
              <div
                className="flex lg:justify-start"
                onClick={HandelAdressDetails}
                style={{ cursor: "pointer" }}
              >
                <div className="flex items-center justify-center gap-x-2 border-r border-gray-100 pr-2">
                  <img
                    src={
                      Flag !== ""
                        ? "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/4.1.4/flags/4x3/" +
                          Flag +
                          ".svg"
                        : "https://upload.wikimedia.org/wikipedia/he/8/88/Flag_of_unknown_country.svg"
                    }
                    alt=""
                    className="h-2.5 w-5"
                    style={{ width: "20px", height: "16px" }}
                  />
                  <span className="tp-lead2 text-gray-600">{Country}</span>
                </div>
                <div
                  className="ml-2 flex items-center gap-x-1"
                  onClick={HandelAdressDetails}
                  style={{ cursor: "pointer" }}
                >
                  {Status === "Available" ? (
                    <div className="green-dot"></div>
                  ) : (
                    <div className="yellow-dot"></div>
                  )}
                  <span className="tp-lead2 text-gray-600">{Status}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex items-center gap-x-3">
              <button
                onClick={() => ClimeFunction(IdReshippper)}
                style={{ zIndex: "2" }}
                className=" justify-center items-center gap-2 px-4 h-12 border-2 border-gray-100 hover:bg-base-2 active:bg-base-3 transition duration-200 px-4 h-9 px-0  px-0 w-9 h-9 rounded-xl py-0 btninvCardHover btninvCardClick"
              >
                <div style={{ marginLeft: "-8px" }}>
                  {ActionType === true ? <FiBookmark /> : <AiOutlineClose />}
                </div>
              </button>
            </div>
          </div>
        </header>
        <div
          className="mt-3 flex  gap-y-4 xl:mt-4 xl:flex-col xl:gap-y-4 ask78kae"
          onClick={HandelAdressDetails}
          style={{ cursor: "pointer", zIndex: "2" }}
        >
          <div className="group flex min-w-0 items-center justify-center gap-x-2 md:max-w-full courierright">
            <div className="flex min-w-0 flex-col">
              <span className="tp-lead1 text-gray-300">Address</span>
              <span className="tp-h7 ellipsis text-text-1 transition-all duration-300">
                {Addr}
              </span>
            </div>
          </div>
          <div className="group flex min-w-0 items-center justify-center gap-x-2 md:max-w-full">
            <div className="flex min-w-0 flex-col">
              <span className="tp-lead1 text-gray-300">Poste code</span>
              <span className="tp-h7 ellipsis text-text-1 transition-all duration-300">
                {PostCode}
              </span>
            </div>
          </div>
        </div>

        <a
          className="button group h-15 lg:h-14 xs:h-13 rounded-2xl xs:rounded-xl px-10 lg:px-9 xs:px-8 py-0 button-secondary mt-8 hidden sm:flex"
          type="submit"
          onClick={HandelAdressDetails}
          style={{ cursor: "pointer" }}
        >
          <span className=" z-10 tp-h6 xs:tp-h7">Details</span>
        </a>
      </article>
    </React.Fragment>
  );
}

function SortedbyCard({ remove }) {
  return (
    <div className="justforRemove" onClick={remove}>
      <div className="cardProfil">
        <div className="OutsideofFloating1">
          <div className="couvertureProfil">
            <button
              className="button group h-12 xs:h-11 rounded-2xl xs:rounded-xl px-4 py-0 button-text group w-full shrink-0 !justify-start !gap-x-2.5 !rounded-xl !p-3.5 transition-all duration-300 hover:bg-gray-50 hovergrayCard"
              type="submit"
            >
              <span className=" z-10 tp-h6 xs:tp-h7 tp-hnn xs:!tp-lead2 -mb-0.5 !text-text-2 !-mb-0 group-hover:!text-gray-800 transition duration-300">
                Receiver Name
              </span>
            </button>
            <button
              className="button group h-12 xs:h-11 rounded-2xl xs:rounded-xl px-4 py-0 button-text group w-full shrink-0 !justify-start !gap-x-2.5 !rounded-xl !p-3.5 transition-all duration-300 hover:bg-gray-50 hovergrayCard"
              type="submit"
            >
              <span className=" z-10 tp-h6 xs:tp-h7 tp-hnn xs:!tp-lead2 -mb-0.5 !text-text-2 !-mb-0 group-hover:!text-gray-800 transition duration-300">
                Address
              </span>
            </button>
            <button
              className="button group h-12 xs:h-11 rounded-2xl xs:rounded-xl px-4 py-0 button-text group w-full shrink-0 !justify-start !gap-x-2.5 !rounded-xl !p-3.5 transition-all duration-300 hover:bg-gray-50 hovergrayCard"
              type="submit"
            >
              <span className=" z-10 tp-h6 xs:tp-h7 tp-hnn xs:!tp-lead2 -mb-0.5 !text-text-2 !-mb-0 group-hover:!text-gray-800 transition duration-300">
                Package Fee
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Addresses() {
  const [sortbyCardStatut, setSortbyCardStatut] = useState(false);
  const [pageStatus, setPageStatus] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [expectedSetect, setExpectedSetect] = useState("animated-divToFist");
  const [countries, setCountries] = useState([]);
  const ToggleSortbyStatut = () => {
    setSortbyCardStatut(!sortbyCardStatut);
  };
  const ToggleSortbyStatutFs = () => {
    setSortbyCardStatut(false);
  };
  const ToReshipped = () => {
    setExpectedSetect("animated-div");
    setPageStatus(false);
    getAddClim();
    setDelayedAddresses([]);
    setDelayedAddresses1([]);
  };
  const ToInventory = () => {
    setExpectedSetect("animated-divToFist");
    setPageStatus(true);
    getAdd();
    setDelayedAddresses([]);
    setDelayedAddresses1([]);
  };
  const [addresses, setAddresses] = useState([]);
  const [Climedaddresses, setClimedaddresses] = useState([]);
  async function getAdd() {
    try {
      setIsLoading(true);
      const response = await axios.get(`${baseURL}/get_unclimedaddress`, {
        withCredentials: true, // Include credentials (cookies) with the request
      });
      setDelayedAddresses([]);
      setAddresses([]);
      setAddresses(response.data.addresses);
    } catch (error) {
      console.error("Getting addresses failed:", error.response.data.error);
    } finally {
      setIsLoading(false); // Hide loading spinner
    }
  }
  async function getAddClim() {
    try {
      setIsLoading(true);
      const response = await axios.get(`${baseURL}/get_climedaddress`, {
        withCredentials: true, // Include credentials (cookies) with the request
      });
      setDelayedAddresses1([]);
      setClimedaddresses([]);
      setClimedaddresses(response.data.addresses);
    } catch (error) {
      console.error("Getting addresses failed:", error.response.data.error);
    } finally {
      setIsLoading(false); // Hide loading spinner
    }
  }
  useEffect(() => {
    getAdd();
    getAddClim();
    setCountries(countryData);
  }, []);
  const dispatch = useDispatch();
  async function ClimeAdrress(IdRishipper) {
    try {
      const response = await axios.post(
        `${baseURL}/ClaimeAddressMership`,
        { IdRishipper },
        {
          withCredentials: true, // Include credentials (cookies) with the request
        }
      );
      if (response.data === "claimed") {
        setDelayedAddresses([]);
        getAdd();
        dispatch(setSTadd());
        toast.success("Address claimed successfully!", {
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
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      console.error("Getting addresses failed:", error.response.data.error);
    }
  }
  async function UnclimeAdress(IdRishipper) {
    try {
      const response = await axios.post(
        `${baseURL}/RemoveSpesificAddressFromCliemed`,
        { IdRishipper },
        {
          withCredentials: true, // Include credentials (cookies) with the request
        }
      );
      if (response.data === "Unclaimed") {
        dispatch(setSTadd());
        setDelayedAddresses1([]);

        getAddClim();
        toast.success("Address unclaimed successfully!", {
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
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      console.error("Getting addresses failed:", error.response.data.error);
    }
  }
  const getCountryCode = (x) => {
    try {
      return countries
        .filter((country) => {
          if (country.countryName === x) {
            return country;
          }
        })[0]
        .countryShortcode.toLowerCase();
    } catch (err) {
      return "";
    }
  };

  const [delayedAddresses, setDelayedAddresses] = useState([]);
  const [delayedAddresses1, setDelayedAddresses1] = useState([]);

  useEffect(() => {
    renderDelayedAddresses(addresses, 300); // Adjust the delay (in milliseconds) as needed
  }, [addresses]);
  useEffect(() => {
    renderDelayedAddresses1(Climedaddresses, 300); // Adjust the delay (in milliseconds) as needed
  }, [Climedaddresses]);
  // Function to introduce a delay before rendering each card
  const renderDelayedAddresses = (addresses, delay) => {
    addresses.forEach((Address, index) => {
      setTimeout(() => {
        setDelayedAddresses((prev) => [...prev, Address]);
      }, index * delay);
    });
  };
  const renderDelayedAddresses1 = (addresses, delay) => {
    addresses.forEach((Address, index) => {
      setTimeout(() => {
        setDelayedAddresses1((prev) => [...prev, Address]);
      }, index * delay);
    });
  };

  return (
    <React.Fragment>
      {sortbyCardStatut && (
        <div onClick={ToggleSortbyStatut} className="justforRemove1">
          <div className="sortByCardHolder">
            <SortedbyCard remove={ToggleSortbyStatutFs} />
          </div>
        </div>
      )}
      <Topbar currentPage={"Addresses"} oldPage={""} />
      <div className="DashParent1">
        <div
          onClick={ToggleSortbyStatutFs}
          className="mb-8 flex justify-between gap-x-2 lg:flex-col lg:gap-y-3 slide-inFromRight respoinv1"
        >
          <div className="flex p-1 rounded-2xl bg-gray-50 h-15 lg:h-14 xs:h-13 box-border relative w-[18.75rem] lg:w-full respo2  addreseslink">
            <span className="absolute top-1 left-0 w-10 rounded-2xl bg-base-1"></span>
            <div
              className={
                "flex relative z-10 flex-1 gap-x-3 justify-center items-center px-3 lg:px-2 cursor-pointer rounded-2xl xs:rounded-[14px] asd23gDF433 bg-base-1 " +
                expectedSetect
              }
              id="myDiv"
            ></div>
            <Link
              onClick={ToInventory}
              className="flex relative z-10 flex-1 gap-x-3 justify-center items-center px-3 lg:px-2 cursor-pointer rounded-2xl xs:rounded-[14px] "
            >
              <span className="tp-lead4 lg:tp-lead5 xs:tp-lead1 text-center ">
                Unclaimed
              </span>
            </Link>
            <div
              onClick={ToReshipped}
              className="flex relative z-10 flex-1 gap-x-3 justify-center items-center px-3 lg:px-2 cursor-pointer rounded-2xl xs:rounded-[14px] "
            >
              <span className="tp-lead4 lg:tp-lead5 xs:tp-lead1 text-center">
                Claimed
              </span>
            </div>
          </div>
          {/* <div className="flex flex-1 gap-x-2">
            <div className="relative flex-1" style={{ height: "60px" }}>
              <InputPulie
                placeHolder={
                  "Search in expected delivery using name of parcel!"
                }
                bgColor={"#F4F4F4"}
                svgLogo={
                  <RiSearchLine
                    size={"1.4rem"}
                    color="#A9A9AD"
                    style={{ marginRight: "5px" }}
                  />
                }
              />
            </div>
          </div> */}
        </div>
        <div className="mt-4 flex gap-y-3 lg:mt-2 lg:flex-col lg:gap-y-0 lg:py-0 slide-inFromRight resposortby">
          <div
            onClick={ToggleSortbyStatutFs}
            className="flex flex-1 items-center self-start py-4 lg:w-full respoline"
          >
            <span className="tp-lead5 shrink-0 text-gray-300 lg:hidden">
              {pageStatus ? delayedAddresses.length : delayedAddresses1.length}{" "}
              Results Found!
            </span>
            <span className="mr-4 ml-3 h-0.5 w-full gap-x-5 bg-gray-100 lg:mx-0 "></span>
          </div>
          <div className="group transition-all duration-30 shrink-0 self-center css-b62m3t-container">
            <span
              id="react-select-118-live-region"
              className="css-7pg0cj-a11yText"
            ></span>
            <span
              aria-live="polite"
              aria-atomic="false"
              aria-relevant="additions text"
              className="css-7pg0cj-a11yText"
            ></span>
            {/* <div
              onClick={ToggleSortbyStatut}
              className="flex items-center px-6 md:!px-3 group cursor-pointer h-14 lg:h-13 xs:h-12 box-border rounded-2xl xs:rounded-[14px] border-2 border-gray-150 transition duration-300 hover:bg-gray-50 !h-13 lg:!h-12 xs:!h-11 !px-4 !rounded-xl border-none css-0 grayHover respoline"
            >
              <HiMiniArrowsUpDown size={"18px"} color="#A9A9AD" />
              <div className="text-gray-300 mx-3 justify-start items-center grid css-0">
                <div
                  className="clear-both overflow-hidden !ml-0 !text-gray-300 whitespace-nowrap tp-lead4 xs:tp-lead5 group group-hover:!text-gray-400 transition duration-300 !tp-lead5 !tp-lead5 lg:!tp-lead1 xs:!tp-body2 css-1jqq78o-placeholder"
                  id="react-select-118-placeholder"
                >
                  Sort by
                </div>
              </div>
              <div className=" css-1wy0on6">
                <div
                  className="flex items-center justify-center !p-0 css-1xc3v61-indicatorContainer"
                  aria-hidden="true"
                >
                  <IoIosArrowDown color="#A9A9AD" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
        {isLoading && (
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
        {pageStatus && (
          <div>
            {addresses.length === 0 && isLoading === false ? (
              <div className="grid gap-6 grid-cols-12 w-full gap-6 centerNotPanel">
                <div
                  className="mt-16 mb-28 flex flex-col items-center justify-center "
                  style={{ display: "flex", marginTop: "10rem" }}
                >
                  <HiClipboardDocumentList size={"9rem"} color="#E8E8E9" />
                  <span className="tp-display1 mt-3">List is Empty</span>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="mt-6 flex flex-col lg:mt-4">
              <div
                className="flex flex-1 flex-col skdjf87"
                style={{
                  display: addresses.length === 0 ? "none" : "flex",
                }}
              >
                <div className="grid grid-cols-2 gap-6 lg:grid-cols-1 respoAddCardAdd ">
                  {delayedAddresses.map((Address) => (
                    <AddCard
                      key={Address.Id}
                      IdReshippper={Address.Id}
                      reshipperName={
                        Address.First_Name + " " + Address.Last_Name
                      }
                      ReshipperImage={Address.Image}
                      Country={Address.Country}
                      Addr={Address.AddressLine1}
                      PostCode={Address.PostCode}
                      Status={
                        Address.Away_Status === "off"
                          ? "Available"
                          : "Will be away"
                      }
                      Flag={getCountryCode(Address.Country)}
                      ClimeFunction={ClimeAdrress}
                      ActionType={pageStatus}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {!pageStatus && (
          <>
            {Climedaddresses.length === 0 && isLoading === false ? (
              <div className="grid gap-6 grid-cols-12 w-full gap-6 centerNotPanel">
                <div
                  className="mt-16 mb-28 flex flex-col items-center justify-center "
                  style={{ display: "flex", marginTop: "10rem" }}
                >
                  <HiClipboardDocumentList size={"9rem"} color="#E8E8E9" />
                  <span className="tp-display1 mt-3">List is Empty</span>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="mt-6 flex flex-col lg:mt-4">
              <div
                className="flex flex-1 flex-col skdjf87"
                style={{
                  display: Climedaddresses.length === 0 ? "none" : "flex",
                }}
              >
                <div className="grid grid-cols-2 gap-6 lg:grid-cols-1 respoAddCardAdd ">
                  {delayedAddresses1.map((Address) => (
                    <AddCard
                      key={Address.Id}
                      IdReshippper={Address.Id}
                      reshipperName={
                        Address.First_Name + " " + Address.Last_Name
                      }
                      ReshipperImage={Address.Image}
                      Country={Address.Country}
                      Addr={Address.AddressLine1}
                      PostCode={Address.PostCode}
                      Status={
                        Address.Away_Status === "off"
                          ? "Available"
                          : "Will be away"
                      }
                      Flag={getCountryCode(Address.Country)}
                      ClimeFunction={UnclimeAdress}
                      ActionType={pageStatus}
                    />
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <ToastContainer />
    </React.Fragment>
  );
}
export default Addresses;
