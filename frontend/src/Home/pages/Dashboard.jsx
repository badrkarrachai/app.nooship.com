import React, { useEffect, useState } from "react";
import { BsTruck } from "react-icons/bs";
import { MdOutlineShareLocation } from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { AiOutlineFieldTime } from "react-icons/ai";
import { LuWallet2 } from "react-icons/lu";
import { AiOutlineArrowRight } from "react-icons/ai";
import { LuListMinus } from "react-icons/lu";
import { HiClipboardDocumentList } from "react-icons/hi2";
import Topbar from "../topbar/topbar";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { useDispatch, useSelector } from "react-redux";
import { setProfileUpdateIndecator } from "../../redux/ProfileUpdateIndicator";
import baseURL from "../../config";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import countryData from "../../data/countries";
import { setUserRole } from "../../redux/UserBasicData";
import { BsExclamationCircle } from "react-icons/bs";
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
          </div>
        </div>
      </a>
    </React.Fragment>
  );
}

const Dashboard = () => {
  const navigate = useNavigate();
  function getGreeting() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    let greeting;

    if (currentHour < 12) {
      greeting = "Good morning";
    } else if (currentHour < 18) {
      greeting = "Good afternoon";
    } else {
      greeting = "Good evening";
    }

    return greeting;
  }
  const [user, setUser] = useState("");
  const [userImage, setUserImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const cookies = new Cookies();
  const ProfileUpdateIndecator = useSelector(
    (state) => state.ProfileUpdateIndecator.value
  );
  const dispatch = useDispatch();

  const getDataFromServer = async () => {
    try {
      const response = await axios.get(`${baseURL}/get_user_data_Mership`, {
        withCredentials: true, // Include credentials (cookies) with the request
      });

      if (response.data.status === true) {
        let userData = response.data.message;
        setUserImage(userData.Image);
        cookies.set("xml", userData, { path: "/" });
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
  //get the count of the pending expected parcels
  const [penddingExpectPrcels, setPenddingExpectPrcels] = useState(0);
  const [invparcelsCount, setInvparcelsCount] = useState(0);
  const [reshippedparceles, setReshippedparceles] = useState(0);
  const getPendingExpectedParcelsCount = async () => {
    try {
      const response = await axios.get(
        `${baseURL}/get_count_expected_parcels`,
        {
          withCredentials: true, // Include credentials (cookies) with the request
        }
      );
      if (response.data.status === true) {
        setPenddingExpectPrcels(response.data.message.ExpCount);
      }
    } catch (error) {
      toast.error("Couldn't get expected parcels!", {
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
    try {
      const response = await axios.get(`${baseURL}/get_count_inventory`, {
        withCredentials: true, // Include credentials (cookies) with the request
      });
      if (response.data.status === true) {
        setInvparcelsCount(response.data.message.ExpCount);
      }
    } catch (error) {
      toast.error("Couldn't get inventory parcels!", {
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
    try {
      const response = await axios.get(`${baseURL}/get_count_inv_reshipped`, {
        withCredentials: true, // Include credentials (cookies) with the request
      });
      if (response.data.status === true) {
        setReshippedparceles(response.data.message.ExpCount);
      }
    } catch (error) {
      toast.error("Couldn't get reshipped parcels!", {
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

  const [payments, setPayments] = useState([]);
  const [delayedCard, setDelayedCard] = useState([]);

  const getPayments = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${baseURL}/get_recent_payments_mership`,
        {
          withCredentials: true, // Include credentials (cookies) with the request
        }
      );
      if (response.data !== "Something went wrong!") {
        setDelayedCard([]);
        setPayments(response.data.payments);
      } else {
        toast.error("Couldn't get recent payments!", {
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
  const UserRole = useSelector((state) => state.UserRole.value);
  useEffect(() => {
    renderDelayedCards(payments, 300); // Adjust the delay (in milliseconds) as needed
  }, [payments]);
  //get the count of the pending delivered parcels
  useEffect(() => {
    setCountries(countryData);
    getPayments();
    getPendingExpectedParcelsCount();
    getDataFromServer();
    const userCookie = cookies.get("xml");
    if (userCookie) {
      setUser(userCookie);
      setUserImage(userCookie.Image);
      dispatch(setUserRole(userCookie.Role));
    }
    if (ProfileUpdateIndecator !== "") {
      dispatch(setProfileUpdateIndecator(""));
    }
  }, [ProfileUpdateIndecator]);
  const calculateDynamicHeight = () => {
    const itemHeight = 240; // Adjust this value based on your design
    const gap = 6;
    const numItems = delayedCard.length;
    return numItems * itemHeight + (numItems - 1) * gap;
  };
  return (
    <React.Fragment>
      <Topbar currentPage={"Dashboard"} oldPage={""} />
      <div className="DashParent slide-inFromRight">
        <div className=" respoAdder">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start gap-x-8 xl:gap-x-4 xs:flex-col xs:gap-y-5 upRespoDash">
              <img
                className="h-24 w-24 rounded-full xl:h-20 xl:w-20"
                alt=""
                src={
                  userImage === ""
                    ? "https://i.pinimg.com/originals/36/fa/7b/36fa7b46c58c94ab0e5251ccd768d669.jpg"
                    : userImage
                }
              />
              <div className="respoadderfortextUp">
                <div className="xs:flex xs:flex-col xs:items-center">
                  <span className="tp-h2 text-text-1 2xs:text-center">
                    {" "}
                    {getGreeting()},{" "}
                  </span>
                  <span className="tp-h2 text-text-1">
                    {user?.First_Name || "Unknown"}
                  </span>
                </div>
                <span className="tp-lead4 text-gray-300">
                  Ready to tackle the next level of reshipping?
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-x-10 xl:gap-x-5 sm:hidden hidedforRespoCounters">
            <a
              className="flex items-center justify-center"
              onClick={() => navigate("/Inventory")}
              style={{ cursor: "pointer" }}
            >
              <BsTruck size={"3.4rem"} color="#00D0FF" />
              <span className="tp-h2 mr-2 ml-3 text-text-1">
                {reshippedparceles}
              </span>
              <span className="tp-lead1 text-gray-400 lblcounter">
                Reshipped
              </span>
            </a>
            <a
              className="flex items-center justify-center"
              onClick={() => navigate("/Inventory")}
              style={{ cursor: "pointer" }}
            >
              <HiOutlineClipboardDocumentList size={"3.4rem"} color="#FF0091" />
              <span className="tp-h2 mr-2 ml-3 text-text-1">
                {invparcelsCount}
              </span>
              <span className="tp-lead1 text-gray-400 lblcounter">
                Inventory
              </span>
            </a>
            <a
              className="flex items-center justify-center"
              onClick={() => navigate("/ExpectedDelivery")}
              style={{ cursor: "pointer" }}
            >
              <AiOutlineFieldTime size={"3.4rem"} color="#F8B634" />
              <span className="tp-h2 mr-2 ml-3 text-text-1">
                {penddingExpectPrcels}
              </span>
              <span className="tp-lead1 text-gray-400 lblcounter">Pending</span>
            </a>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-4 justify-between gap-8 lg:grid-cols-2 lg:gap-6 sm:gap-4 xs:grid-cols-1 addspcatobuttodash respoCards">
          <div onClick={() => navigate("/ExpectedDelivery")} className="rxt12">
            <div className="floating-box flex relative hover:drop-shadow-none flex-1 rounded-[2rem] overflow-hidden justify-center items-center cursor-pointer bg-blend-hard-light transition duration-300 hover:-translate-y-1.5 drop-shadow-[0px_10px_20px_rgba(249,137,7,0.3)] ">
              <img
                className="absolute top-0 z-20 h-full w-full object-cover"
                src="https://capmership.s3.eu-north-1.amazonaws.com/orange-bg.jpg"
                alt=""
              />
              <div className="absolute z-30 flex flex-1 flex-col items-start justify-center px-8 xl:items-center xl:px-4">
                <AiOutlineFieldTime size={"3.4rem"} color="white" />
                <span className="tp-display1 mt-3 mb-6 !text-base-1 xl:text-center">
                  Submit a Parcel
                </span>
                <span className="tp-body1 text-base-1/70 xl:hidden responforlong">
                  Begin your journey with our services by initiating the process
                  with the submission of a parcel for reshipment.
                </span>
              </div>
              <div className="aspect-w-8 aspect-h-10 relative lg:aspect-w-2 lg:aspect-h-1 sm:aspect-w-1 sm:aspect-h-1 xs:aspect-w-2 xs:aspect-h-1"></div>
            </div>
          </div>
          <div onClick={() => navigate("/Inventory")} className="rxt12">
            <div className="floating-box flex relative hover:drop-shadow-none flex-1 rounded-[2rem] overflow-hidden justify-center items-center cursor-pointer bg-blend-hard-light transition duration-300 hover:-translate-y-1.5 drop-shadow-[0px_10px_20px_rgba(255,0,145,0.3)] ">
              <img
                className="absolute top-0 z-20 h-full w-full object-cover"
                src="https://capmership.s3.eu-north-1.amazonaws.com/pink-bg.jpg"
                alt=""
              />
              <div className="absolute z-30 flex flex-1 flex-col items-start justify-center px-8 xl:items-center xl:px-4">
                <HiOutlineClipboardDocumentList size={"3.4rem"} color="white" />
                <span className="tp-display1 mt-3 mb-6 !text-base-1 xl:text-center">
                  Browse Your Inventory
                </span>
                <span className="tp-body1 text-base-1/70 xl:hidden responforlong">
                  Maintain constant oversight of your parcels' whereabouts and
                  status within the inventory management system.
                </span>
              </div>
              <div className="aspect-w-8 aspect-h-10 relative lg:aspect-w-2 lg:aspect-h-1 sm:aspect-w-1 sm:aspect-h-1 xs:aspect-w-2 xs:aspect-h-1"></div>
            </div>
          </div>
          <div onClick={() => navigate("/Addresses")} className="rxt12">
            <div className="floating-box flex relative hover:drop-shadow-none flex-1 rounded-[2rem] overflow-hidden justify-center items-center cursor-pointer bg-blend-hard-light transition duration-300 hover:-translate-y-1.5 drop-shadow-[0px_10px_20px_rgba(106,0,196,0.3)] ">
              <img
                className="absolute top-0 z-20 h-full w-full object-cover"
                src="https://capmership.s3.eu-north-1.amazonaws.com/purple-bg.jpg"
                alt=""
              />
              <div className="absolute z-30 flex flex-1 flex-col items-start justify-center px-8 xl:items-center xl:px-4">
                <MdOutlineShareLocation size={"3.4rem"} color="white" />
                <span className="tp-display1 mt-3 mb-6 !text-base-1 xl:text-center">
                  Browse Available Addresses
                </span>
                <span className="tp-body1 text-base-1/70 xl:hidden responforlong">
                  You have the option to monitor the addresses that have been
                  included in our reshipping services.
                </span>
              </div>
              <div className="aspect-w-8 aspect-h-10 relative lg:aspect-w-2 lg:aspect-h-1 sm:aspect-w-1 sm:aspect-h-1 xs:aspect-w-2 xs:aspect-h-1"></div>
            </div>
          </div>
          <div onClick={() => navigate("/Payments")} className="rxt12">
            <div className="floating-box flex relative hover:drop-shadow-none flex-1 rounded-[2rem] overflow-hidden justify-center items-center cursor-pointer bg-blend-hard-light transition duration-300 hover:-translate-y-1.5 drop-shadow-[0px_10px_20px_rgba(110,179,34,0.3)] ">
              <img
                className="absolute top-0 z-20 h-full w-full object-cover"
                src="https://capmership.s3.eu-north-1.amazonaws.com/green-bg.jpg"
                alt=""
              />
              <div className="absolute z-30 flex flex-1 flex-col items-start justify-center px-8 xl:items-center xl:px-4">
                <LuWallet2 size={"3.1rem"} color="white" />
                <span className="tp-display1 mt-3 mb-6 !text-base-1 xl:text-center">
                  Check your payments
                </span>
                <span className="tp-body1 text-base-1/70 xl:hidden responforlong">
                  Remember to regularly review your recent payment activity to
                  stay informed about your financial transactions.
                </span>
              </div>
              <div className="aspect-w-8 aspect-h-10 relative lg:aspect-w-2 lg:aspect-h-1 sm:aspect-w-1 sm:aspect-h-1 xs:aspect-w-2 xs:aspect-h-1"></div>
            </div>
          </div>
        </div>
        <div className="cards">
          <div
            className="card1 floating-box"
            onClick={() => navigate("/ExpectedDelivery")}
            style={{ cursor: "pointer" }}
          >
            <div className="absolute z-30 flex flex-1 flex-col items-start justify-center px-8 xl:items-center xl:px-4 respoAdderMidelTextDash">
              <AiOutlineFieldTime size={"3.4rem"} color="white" />
              <span className="tp-display1 mt-3 mb-6 !text-base-1 xl:text-center">
                Submit a Parcel
              </span>
            </div>
          </div>
          <div
            className="card2 floating-box"
            onClick={() => navigate("/Inventory")}
            style={{ cursor: "pointer" }}
          >
            <div className="absolute z-30 flex flex-1 flex-col items-start justify-center px-8 xl:items-center xl:px-4 respoAdderMidelTextDash">
              <HiOutlineClipboardDocumentList size={"3.4rem"} color="white" />
              <span className="tp-display1 mt-3 mb-6 !text-base-1 xl:text-center">
                Browse Your Inventory
              </span>
            </div>
          </div>
          <div
            className="card3 floating-box"
            onClick={() => navigate("/Addresses")}
            style={{ cursor: "pointer" }}
          >
            <div className="absolute z-30 flex flex-1 flex-col items-start justify-center px-8 xl:items-center xl:px-4 respoAdderMidelTextDash">
              <MdOutlineShareLocation size={"3.4rem"} color="white" />
              <span className="tp-display1 mt-3 mb-6 !text-base-1 xl:text-center">
                Browse Available Addresses
              </span>
            </div>
          </div>
          <div
            className="card4 floating-box"
            onClick={() => navigate("/Payments")}
            style={{ cursor: "pointer" }}
          >
            <div className="absolute z-30 flex flex-1 flex-col items-start justify-center px-8 xl:items-center xl:px-4 respoAdderMidelTextDash">
              <LuWallet2 size={"3.1rem"} color="white" />
              <span className="tp-display1 mt-3 mb-6 !text-base-1 xl:text-center">
                Check your payments
              </span>
            </div>
          </div>
        </div>

        <div className="mt-20 mb-8 flex items-center justify-start xs:flex-col xs:items-start xs:gap-y-4">
          <div className="flex items-center">
            <div className="flex items-center justify-between gap-x-2">
              <LuListMinus size={"1.5rem"} />
              <span className="tp-h4 text-text-1">Recent Payements</span>
            </div>
          </div>
          <a
            className="button group h-12 xs:h-11 rounded-2xl xs:rounded-xl px-4 py-0 button-text !flex-row-reverse !px-0 !py-0 !h-auto ml-5 text-primary xs:ml-0"
            type="submit"
            onClick={() => navigate("/Payments")}
          >
            <AiOutlineArrowRight />
            <span className=" z-10 tp-h6 xs:tp-h7 !tp-h7 xs:!tp-lead2 -mb-0.5">
              See All
            </span>
          </a>
        </div>
        <div
          className="flex flex-col flex-1 gap-18 pb-10"
          style={{ minHeight: "67vh" }}
        >
          <section className="flex flex-col">
            <div
              className="flex flex-1 flex-col gap-y-5 relative"
              style={{ height: `${calculateDynamicHeight()}px`, width: "100%" }}
            >
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
                />
              ))}
            </div>
          </section>
        </div>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
};

export default Dashboard;
