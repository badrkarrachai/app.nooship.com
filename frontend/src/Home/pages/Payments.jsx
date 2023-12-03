import React, { useEffect, useState } from "react";
import Topbar from "../topbar/topbar";
import { LuWallet2 } from "react-icons/lu";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import InputPulie from "../Components/InputPulie";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { BsExclamationCircle } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import config from "../../config";
import countryData from "../../data/countries";
import { Buffer } from "buffer";
import Cookies from "universal-cookie";
import { useDispatch, useSelector } from "react-redux";
import { setUserRole } from "../../redux/UserBasicData";
import { setBalance } from "../../redux/Balance";
import { Ring } from "@uiball/loaders";

function PaymentsCard({
  parcelName,
  Adrress,
  ReceiverName,
  Quantity,
  DatePayment,
  payPrice,
  Flag,
  image,
  SenderName,
  userRole,
  afterFees,
}) {
  return (
    <React.Fragment>
      <a className="flex relative flex-col pt-4 pb-6 transition-all duration-30012 bg-base-1 rounded-2xl shadow-card DowntoUpFloat">
        <div className="flex items-center justify-between gap-2 pr-6 pl-8 sm:flex-col sm:items-start sm:gap-y-4 xs:pl-6">
          <div className="relative flex min-w-0 items-center justify-start gap-3 sm:flex-col sm:items-start sm:gap-4">
            <img
              alt=""
              src={
                image === ""
                  ? "https://i.pinimg.com/originals/36/fa/7b/36fa7b46c58c94ab0e5251ccd768d669.jpg"
                  : image
              }
              className="h-12 w-12 rounded-full border border-gray-100 object-contain p-[1px]"
            />
            <h3 className="tp-h5 ellipsis sm:ellipsis-none">{parcelName}</h3>
          </div>
          <div className="flex gap-x-3">
            <button
              style={{ zIndex: "2" }}
              onClick={() =>
                window.open(
                  "https://discord.gg/U3WzTm2FHR",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className=" justify-center items-center gap-2 px-4 h-12 border-2 border-gray-100 hover:bg-base-2 active:bg-base-3 transition duration-200 px-4 h-9 px-0  px-0 w-9 h-9 rounded-xl py-0 btninvCardHover btninvCardClick"
            >
              <div style={{ marginLeft: "-8px" }}>
                <BsExclamationCircle />
              </div>
            </button>
          </div>
        </div>
        <span className="mt-4 mb-5 flex w-full self-center border-b-2 border-gray-100"></span>
        <div className="flex flex-col pr-6 pl-8 xs:pl-6">
          <div className="flex flex-1 items-start gap-16 lg:grid lg:grid-cols-2 lg:gap-6 xs:gap-4 askjdhi87">
            <div className="flex min-w-0 items-center gap-x-3 gap-y-1">
              <div className="group flex min-w-0 flex-col">
                <span className="tp-lead1 text-gray-300 transition duration-300">
                  Address
                </span>
                <div className="flex items-center justify-start gap-x-2">
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
                  <span className="tp-h7 text-text-2 transition duration-300 ellipsis">
                    {Adrress}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex min-w-0 items-center gap-x-3 gap-y-1">
              <div className="group flex min-w-0 flex-col">
                <span className="tp-lead1 text-gray-300 transition duration-300">
                  {userRole === "C" ? "Receiver Name" : "Sender Name"}
                </span>
                <div className="flex items-center justify-start gap-x-2">
                  <span className="tp-h7 text-text-2 transition duration-300 ellipsis">
                    {userRole === "C" ? ReceiverName : SenderName}
                  </span>
                </div>
              </div>
            </div>
            <div className="group flex min-w-0 flex-col">
              <span className="tp-lead1 text-gray-300 transition duration-300">
                Quantity
              </span>
              <div className="flex items-center justify-start gap-x-2">
                <span className="tp-h7 text-text-2 transition duration-300 ellipsis">
                  {Quantity} Package
                </span>
              </div>
            </div>
            <div className="group flex min-w-0 flex-col">
              <span className="tp-lead1 text-gray-300 transition duration-300">
                Date of transaction
              </span>
              <div className="flex items-center justify-start gap-x-2">
                <span className="tp-h7 text-text-2 transition duration-300 ellipsis">
                  {DatePayment}
                </span>
              </div>
            </div>
            {userRole === "C" ? (
              <div className="group flex min-w-0 flex-col">
                <span className="tp-lead1 text-gray-300 transition duration-300">
                  Total price
                </span>
                <div className="flex items-center justify-start gap-x-2">
                  <span className="tp-h7 text-text-2 transition duration-300 ellipsis">
                    {payPrice}$
                  </span>
                </div>
              </div>
            ) : (
              ""
            )}
            {userRole === "R" ? (
              <div className="group flex min-w-0 flex-col">
                <span className="tp-lead1 text-gray-300 transition duration-300">
                  Total price
                </span>
                <div className="flex items-center justify-start gap-x-2">
                  <span className="tp-h7 text-text-2 transition duration-300 ellipsis">
                    {afterFees}$
                  </span>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </a>
    </React.Fragment>
  );
}

function Payments() {
  const [Price, setPrice] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading1, setIsLoading1] = useState(false);

  const handleInputChange = (event) => {
    const inputText = event.target.value;

    // Use a regular expression to remove non-numeric and non-dot characters
    const numericValue = inputText.replace(/[^0-9.]/g, "");

    // Check if the numeric value is within the range [1, 1000000]
    if (numericValue === "" || (numericValue >= 1 && numericValue <= 1000000)) {
      // Update the state with the numeric value
      setPrice(
        numericValue === ""
          ? ""
          : numericValue.includes(".")
          ? numericValue
          : parseFloat(numericValue, 10)
      );
    }
  };
  const [payments, setPayments] = useState([]);
  const [delayedCard, setDelayedCard] = useState([]);

  const getPayments = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${config.baseURL}/get_all_payments_mership`,
        {
          withCredentials: true, // Include credentials (cookies) with the request
        }
      );
      if (response.data !== "Something went wrong!") {
        setDelayedCard([]);
        setPayments(response.data.payments);
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
  };

  const Balance = useSelector((state) => state.Balance.value);
  const dispatch = useDispatch();
  const getBlance = async () => {
    try {
      const response = await axios.get(
        `${config.baseURL}/get_user_balance_mership`,
        {
          withCredentials: true, // Include credentials (cookies) with the request
        }
      );
      if (response.data !== "Something went wrong!") {
        dispatch(setBalance(response.data.balance));
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
    }
  };
  const [countries, setCountries] = useState([]);
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
  const UserRole = useSelector((state) => state.UserRole.value);
  const cookies = new Cookies();
  const UpdateBalance = useSelector((state) => state.UpdateBalance.value);
  useEffect(() => {
    const userCookie = cookies.get("xml");
    if (userCookie) {
      dispatch(setUserRole(userCookie.Role));
    }
    getBlance();
    setCountries(countryData);
    getPayments();
    if (UpdateBalance === true) {
      dispatch(setUpdateBalance(false));
    }
  }, [UpdateBalance]);

  const dateFix = (datePayment) => {
    const dateObject = new Date(datePayment);

    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Month is zero-based
    const day = String(dateObject.getDate()).padStart(2, "0");
    const hours = String(dateObject.getHours()).padStart(2, "0");
    const minutes = String(dateObject.getMinutes()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;

    return formattedDate;
  };
  const renderDelayedCards = (cards, delay) => {
    cards.forEach((card, index) => {
      setTimeout(() => {
        setDelayedCard((prev) => [...prev, card]);
      }, index * delay);
    });
  };

  useEffect(() => {
    renderDelayedCards(payments, 300); // Adjust the delay (in milliseconds) as needed
  }, [payments]);

  const calculateDynamicHeight = () => {
    const itemHeight = 220; // Adjust this value based on your design
    const gap = 6;
    const numItems = delayedCard.length;
    return numItems * itemHeight + (numItems - 1) * gap;
  };

  const chargeMethod1 = async () => {
    try {
      setIsLoading1(true);
      const response = await axios.post(
        `${config.baseURL}/checout_balance`,
        { Price },
        {
          withCredentials: true, // Include credentials (cookies) with the request
        }
      );
      if (response.data.charged === true) {
        window.open(
          response.data.message.hosted_url,
          "_blank",
          "noopener,noreferrer"
        );
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
      setIsLoading1(false); // Hide loading spinner
    }
  };
  return (
    <React.Fragment>
      <Topbar currentPage={"Payments"} oldPage={""} />
      <div className="flex flex-col flex-1 min-h-screen gap-18 pb-10 app-container ">
        <div className="slide-inFromRight relative mt-8 flex items-stretch rounded-2xl bg-base-1 p-12 shadow-card xl:p-8 lg:left-[-6%] lg:mt-0 lg:w-[112%] lg:flex-col lg:bg-transparent lg:px-0 lg:shadow-none forrespo2342">
          <div className="relative mr-7 flex flex-1 flex-col items-center justify-center overflow-hidden rounded-[2rem] py-7 drop-shadow-[0px_10px_20px_rgba(106,0,196,0.3)] xl:mr-2 xl:flex-[1.2] lg:mx-[10vw] lg:mb-10 xs:mx-8 forrespocenter123">
            <img
              style={{ zIndex: "-1" }}
              className="absolute top-0 z-0 h-full w-full object-cover"
              src="https://capmership.s3.eu-north-1.amazonaws.com/purple-bg.jpg"
              alt=""
            />

            <LuWallet2 size={"35px"} color="white" />
            <div style={{ height: "6px" }}></div>
            <span className="tp-display3 relative z-10 !text-base-1">
              ${Balance}
            </span>
            <span className="tp-lead4 relative z-10 mt-3 text-base-1 opacity-60">
              Total Balance
            </span>
          </div>
          <div className="flex flex-1 flex-col items-stretch border-gray-100 px-10 xl:px-8 lg:border-t-2 lg:p-8 forrespoFirst">
            <span className="tp-lead6 self-center rounded-full bg-gray-50 px-4.5 py-1.5 text-gray-300">
              Method 1
            </span>
            <span className="tp-display1 mt-2 mb-6 self-center">
              Charge Wallet
            </span>
            <div className=" flex flex-1 flex-col items-center gap-2.5">
              <div style={{ height: "52px" }}>
                <InputPulie
                  svgLogo={
                    <AiOutlineDollarCircle color="#A9A9AD" size={"25px"} />
                  }
                  placeHolder={"ex:100"}
                  svgPosMargine={"-5px"}
                  valController={Price}
                  onChangeController={handleInputChange}
                />
              </div>
              {isLoading1 && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Ring size={35} lineWeight={5} speed={1.5} color="#6499E9" />
                </div>
              )}
              {isLoading1 === false ? (
                <button
                  className={
                    Price !== ""
                      ? "button group h-12 xs:h-11 rounded-2xl xs:rounded-xl px-6 xs:px-5 py-0 button-primary w-full max-w-[18rem]"
                      : "button group h-12 xs:h-11 rounded-2xl xs:rounded-xl px-6 xs:px-5 py-0 button-primary button-disable w-full max-w-[18rem]"
                  }
                  disabled=""
                  onClick={chargeMethod1}
                  type="submit"
                >
                  <span className=" z-10 tp-h6 xs:tp-h7 !tp-h7 xs:!tp-lead2">
                    Charge
                  </span>
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex flex-1 flex-col items-stretch border-l-2 border-gray-100 pl-10 xl:pl-8 lg:border-y-2 lg:border-l-0 lg:p-8 forrespoLast">
            <span className="tp-lead6 self-center rounded-full bg-gray-50 px-4.5 py-1.5 text-gray-300">
              Method 2
            </span>
            <span className="tp-display1 mt-2 mb-6 self-center">
              Admin Charge
            </span>
            <div className="flex flex-1 flex-col items-center justify-end gap-2.5">
              <span className="tp-lead1 max-w-[18rem] text-center text-gray-300">
                Feel free to reach out to the administrator to add funds to your
                wallet.
              </span>
              <input type="file" className="hidden" />
              <button
                className="button group h-12 xs:h-11 rounded-2xl xs:rounded-xl px-4 py-0 button-tertiary w-full max-w-[18rem]"
                type="submit"
                onClick={() =>
                  window.open(
                    "https://discord.gg/KF6XBxczN6",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                <MdOutlineAdminPanelSettings size={"20px"} color="#2B2B34" />
                <span className=" z-10 tp-h6 xs:tp-h7 !tp-h7 xs:!tp-lead2 -mb-0.5">
                  Contact Admin
                </span>
              </button>
            </div>
          </div>
        </div>
        <section
          className="flex flex-col"
          style={{ height: `${calculateDynamicHeight()}px` }}
        >
          <header className="mb-6 flex items-center gap-2">
            <LuWallet2 size={"24px"} />
            <h4 className="tp-h4">Last Transaction</h4>
          </header>
          <div className="flex flex-1 flex-col gap-y-5 relative">
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
            {payments.length === 0 && !isLoading ? (
              <div className="mt-16 mb-28 flex flex-col items-center justify-center">
                <HiClipboardDocumentList size={"9rem"} color="#E8E8E9" />
                <span className="tp-display1 mt-3">List is Empty</span>
              </div>
            ) : (
              ""
            )}
            {delayedCard.map((pay, i) => (
              <PaymentsCard
                key={i}
                Flag={getCountryCode(pay.Country)}
                image={
                  UserRole === "C" ? pay.ImageReshipper : pay.ImageCustomar
                }
                parcelName={pay.Name_on_Parcel}
                Adrress={pay.AddressLine1}
                ReceiverName={pay.Receiver_name}
                Quantity={pay.Quantity}
                DatePayment={dateFix(pay.datePayment)}
                payPrice={pay.paymentPrice}
                userRole={UserRole}
                SenderName={pay.SenderName}
                afterFees={pay.priceAfterFees}
              />
            ))}
          </div>
        </section>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
}
export default Payments;
