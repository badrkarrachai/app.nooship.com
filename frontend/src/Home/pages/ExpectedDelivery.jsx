import React, { useState, useEffect } from "react";
import Topbar from "../topbar/topbar";
import { RiSearchLine } from "react-icons/ri";
import { CgAdd } from "react-icons/cg";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { HiOutlineTrash } from "react-icons/hi2";
import { BiEdit } from "react-icons/bi";
import InputPulie from "../Components/InputPulie";
import { ToastContainer, toast } from "react-toastify";
import { HiClipboardDocumentList } from "react-icons/hi2";

import { useDispatch, useSelector } from "react-redux";
import {
  setExpectedParcelEdite,
  setToActive,
} from "../../redux/RightBarStatus";
import axios from "axios";
import config from "../../config";
import MessageSure from "../Components/MessageSure";
import { setAreSure } from "../../redux/LoadingStataus";
import {
  setButtonMessage,
  setButtonType,
  setDataAreYouSure,
  setImageAreYou,
  setTitleareYou,
  setUpdateExpParce,
} from "../../redux/AreYouSure";
import { Ring } from "@uiball/loaders";
import Cookies from "universal-cookie";
import { setCominFromRightBar, setUserRole } from "../../redux/UserBasicData";
import { setUpdateBalance } from "../../redux/Balance";

function ExpCard({
  ParcelName,
  ReciverName,
  Adress,
  TrackingNumber,
  Courire,
  packageFee,
  Quantity,
  idParcel,
  getnewParcels,
  toEdite,
  deletedStatus,
  UserRole,
  acceptStatus,
  SenderName,
  idUser,
  OriginalUserId,
  idReshipper,
}) {
  const dispatch = useDispatch();
  const ResponseAreYouSure = useSelector(
    (state) => state.DataBaseAreouSure.value
  );
  const [readyToDelete, setReadyToDelete] = useState("");
  const [readyToAccept, setReadyToAccept] = useState("");

  const LissnerDelete = async () => {
    try {
      const response = await axios.post(
        `${config.baseURL}/DeleteExpectedParcelMership123`,
        { idParcel },
        {
          withCredentials: true, // Include credentials (cookies) with the request
        }
      );
      if (response.data === "Deleted") {
        getnewParcels();
        deletedStatus(true);
        dispatch(setDataAreYouSure(false));
      } else {
        deletedStatus(false);
      }
    } catch (error) {
      deletedStatus(false);
    }
  };

  const LissnerAccept = async () => {
    try {
      function formatDateToYYYYMMDD(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
      }
      const currentDate = formatDateToYYYYMMDD(new Date());
      const response = await axios.post(
        `${config.baseURL}/accept_parcel_mership2023`,
        { idParcel, currentDate, idUser, packageFee },
        {
          withCredentials: true, // Include credentials (cookies) with the request
        }
      );
      if (response.data === "Done") {
        getnewParcels();
        acceptStatus(true);
        dispatch(setUpdateBalance(true));
        dispatch(setDataAreYouSure(false));
      } else {
        dispatch(setDataAreYouSure(false));
        acceptStatus(false, response.data);
      }
    } catch (error) {
      dispatch(setDataAreYouSure(false));
      acceptStatus(false);
    }
  };
  useEffect(() => {
    if (readyToDelete !== "") {
      if (ResponseAreYouSure) {
        LissnerDelete();
      }
      setReadyToDelete("");
    }
    if (readyToAccept !== "") {
      if (ResponseAreYouSure) {
        LissnerAccept();
      }
      setReadyToAccept("");
    }
  }, [ResponseAreYouSure]);

  return (
    <React.Fragment>
      <article className="flex bg-base-1 p-7 md:flex-col md:p-6 shadow-card rounded-2xl  downtoUPAnimeWithOpacity1 DowntoUpFloat articaleHolder">
        <div className="flex items-center justify-between xs:flex-col xs:items-start xs:gap-2">
          <a>
            <div className="h-20 w-20 shrink-0 self-center rounded-full md:mr-5 md:h-13 md:w-13 md:self-start imgsmallsize12">
              <img
                src="https://i.pinimg.com/originals/02/bb/8d/02bb8d688146187abdabb16d0354a1f5.png"
                alt="logo"
                className="h-full w-full rounded-full border border-gray-100 p-[1px] duration-200 hover:border-secondary-1/70 sdfs67ddfg"
              />
            </div>
          </a>
          <div className="hidden md:flex">
            <div className="flex items-center gap-x-3 jsduy23">
              <div className="flex flex-1 h-9 px-4 gap-x-1 justify-center items-center box-border rounded-full bg-gray-50 group-hover:bg-gray-75 transition duration-300">
                <span className="text-gray-100 group-hover:text-gray-150 tp-lead2 transition duration-300">
                  Eligible
                </span>
              </div>

              <button className="flex justify-center items-center gap-2 px-4 h-12 border-2 border-gray-100 hover:bg-base-2 active:bg-base-3 transition duration-200 px-4 h-9 px-0  px-0 w-9 h-9 rounded-xl py-0"></button>
            </div>
          </div>
        </div>
        <div className="ml-10 mr-6 flex min-w-0 flex-1 flex-col lg:ml-6 md:mx-0 md:mt-4 md:px-0 iegiy8297">
          <a>
            <div className="flex min-w-0">
              <h5 className="ellipsis tp-h5 text-gray-800 duration-200 hover:text-secondary-1">
                {ParcelName}
              </h5>
            </div>
          </a>
          <div className="mt-3 flex flex-col gap-y-4 xl:mt-4 xl:flex-col xl:gap-y-4">
            <div className="flex gap-x-6 md:flex-col md:items-start md:gap-y-3 lkjasdh34">
              <a
                target="_blank"
                className="group flex min-w-0 items-center justify-center gap-x-2 md:max-w-full "
              >
                <div className="group flex min-w-0 items-center justify-center gap-x-2 md:max-w-full">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100/30 transition duration-300 group-hover:bg-gray-75">
                    <MdOutlineAccountCircle color="#A9A9AD" />
                  </span>
                  <div className="flex min-w-0 flex-col">
                    <span className="tp-lead1 text-gray-300">
                      {idUser === OriginalUserId ? (
                        "Receiver Name"
                      ) : (
                        <React.Fragment>
                          {UserRole === "C" && OriginalUserId !== idReshipper
                            ? "Receiver Name"
                            : "Sender Name"}
                        </React.Fragment>
                      )}
                    </span>
                    <span className="tp-h7 ellipsis text-text-1 transition-all duration-300 hover:text-secondary-1">
                      {idUser === OriginalUserId ? (
                        ReciverName
                      ) : (
                        <React.Fragment>
                          {UserRole === "C" && OriginalUserId !== idReshipper
                            ? ReciverName
                            : SenderName}
                        </React.Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
              <a
                target="_blank"
                className="group flex min-w-0 items-center justify-center gap-x-2 md:max-w-full "
              >
                <div className="group flex min-w-0 items-center justify-center gap-x-2 md:max-w-full">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100/30 transition duration-300 group-hover:bg-gray-75">
                    <HiLocationMarker color="#A9A9AD" />
                  </span>
                  <div className="flex min-w-0 flex-col">
                    <span className="tp-lead1 text-gray-300">Address</span>
                    <span className="tp-h7 ellipsis text-text-1 transition-all duration-300 hover:text-secondary-1">
                      {Adress}
                    </span>
                  </div>
                </div>
              </a>
              <div
                target="_blank"
                className="group flex min-w-0 items-center justify-center gap-x-2 md:max-w-full "
              ></div>
              <div
                target="_blank"
                className="group flex min-w-0 items-center justify-center gap-x-2 md:max-w-full "
              >
                <div className="group flex min-w-0 items-center justify-center gap-x-2 md:max-w-full">
                  <div className="flex min-w-0 flex-col">
                    <span className="tp-lead1 text-gray-300">
                      Tracking Number
                    </span>
                    <span className="tp-h7 ellipsis text-text-1 transition-all duration-300">
                      {TrackingNumber}
                    </span>
                  </div>
                </div>
              </div>
              {Courire && (
                <div className="group flex min-w-0 items-center justify-center gap-x-2 md:max-w-full">
                  <div className="flex min-w-0 flex-col">
                    <span className="tp-lead1 text-gray-300">Courier</span>
                    <span className="tp-h7 ellipsis text-text-1 transition-all duration-300">
                      {Courire}
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div className="flex gap-x-6 xl:flex-col-reverse xl:gap-y-6 sjkfgh9483">
              <div className="flex items-center gap-x-6 xs:flex-col xs:items-start xs:gap-y-4">
                <div className="flex flex-col gap-y-1">
                  <span className="tp-lead1 text-gray-300">Package Fee</span>
                  <span className="tp-h7 text-text-1">{packageFee}$</span>
                </div>
                <div className="flex flex-col gap-y-1">
                  <span className="tp-lead1 text-gray-300">Quantity</span>
                  <span className="tp-h7 text-text-1">{Quantity} Package</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between md:w-full md:gap-y-6 skljfo93">
          <div className="md:hidden">
            <div
              className="flex items-center gap-x-3"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <div
                className="flex flex-1 h-9 px-4 gap-x-1 justify-center items-center box-border rounded-full group-hover:bg-gray-75 transition duration-300 bg-gray-50ADd"
                style={{ display: "none" }}
              >
                <BiEdit />
                <span className=" group-hover:text-gray-150 tp-lead2 transition duration-300">
                  Edit
                </span>
              </div>
              <button
                onClick={() => {
                  setReadyToDelete(idParcel);
                  dispatch(
                    setTitleareYou(
                      "Are you sure you want to delete this parcel?"
                    )
                  );
                  dispatch(setButtonMessage("Delete"));
                  dispatch(
                    setImageAreYou(
                      "https://capmership.s3.eu-north-1.amazonaws.com/DeleteLogo.png"
                    )
                  );
                  dispatch(setButtonType("Red"));
                  dispatch(setAreSure());
                }}
                className=" justify-center items-center gap-2 px-4 h-12 border-2 border-gray-100 hover:bg-base-2 active:bg-base-3 transition duration-200 px-4 h-9 px-0  px-0 w-9 h-9 rounded-xl py-0 btninvCardHover btninvCardClick"
              >
                <HiOutlineTrash className="deleteInvBtnFix" />
              </button>
            </div>
          </div>
          {idUser !== OriginalUserId ? (
            ""
          ) : (
            <React.Fragment>
              {UserRole === "C" ? (
                <a
                  className="button group h-12 xs:h-11 rounded-2xl xs:rounded-xl px-6 xs:px-5 py-0 button-secondary w-[9.5rem] self-end md:mt-6"
                  type="submit"
                  onClick={() => {
                    dispatch(setExpectedParcelEdite(toEdite));
                    dispatch(setToActive());
                    dispatch(setCominFromRightBar("C"));
                  }}
                >
                  <span className=" z-10 tp-h6 xs:tp-h7 !tp-h7 xs:!tp-lead2">
                    Edit
                  </span>
                </a>
              ) : (
                ""
              )}{" "}
            </React.Fragment>
          )}
          {idUser === OriginalUserId ? (
            ""
          ) : (
            <React.Fragment>
              {UserRole === "R" ? (
                <a
                  className="button group h-12 xs:h-11 rounded-2xl xs:rounded-xl px-6 xs:px-5 py-0 button-secondary w-[9.5rem] self-end md:mt-6"
                  type="submit"
                  onClick={() => {
                    setReadyToAccept(idParcel);
                    dispatch(
                      setTitleareYou(
                        "Are you sure you want to accept this parcel?"
                      )
                    );
                    dispatch(setButtonMessage("Accept"));
                    dispatch(
                      setImageAreYou(
                        "https://capmership.s3.eu-north-1.amazonaws.com/AcceptPerson2.png"
                      )
                    );
                    dispatch(setButtonType("Green"));
                    dispatch(setAreSure());
                  }}
                >
                  <span className=" z-10 tp-h6 xs:tp-h7 !tp-h7 xs:!tp-lead2">
                    Accept
                  </span>
                </a>
              ) : (
                ""
              )}
            </React.Fragment>
          )}
        </div>
      </article>
    </React.Fragment>
  );
}

function SortedbyCard({ remove, filterVontroller, newGetParcels }) {
  return (
    <div className="justforRemove" onClick={remove}>
      <div className="cardProfil">
        <div className="OutsideofFloating1">
          <div className="couvertureProfil">
            <button
              className="button group h-12 xs:h-11 rounded-2xl xs:rounded-xl px-4 py-0 button-text group w-full shrink-0 !justify-start !gap-x-2.5 !rounded-xl !p-3.5 transition-all duration-300 hover:bg-gray-50 hovergrayCard"
              type="submit"
              onClick={() => {
                newGetParcels("ReciverName");
              }}
            >
              <span className=" z-10 tp-h6 xs:tp-h7 tp-hnn xs:!tp-lead2 -mb-0.5 !text-text-2 !-mb-0 group-hover:!text-gray-800 transition duration-300">
                Receiver Name
              </span>
            </button>
            <button
              className="button group h-12 xs:h-11 rounded-2xl xs:rounded-xl px-4 py-0 button-text group w-full shrink-0 !justify-start !gap-x-2.5 !rounded-xl !p-3.5 transition-all duration-300 hover:bg-gray-50 hovergrayCard"
              type="submit"
              onClick={() => {
                newGetParcels("Address");
              }}
            >
              <span className=" z-10 tp-h6 xs:tp-h7 tp-hnn xs:!tp-lead2 -mb-0.5 !text-text-2 !-mb-0 group-hover:!text-gray-800 transition duration-300">
                Address
              </span>
            </button>
            <button
              className="button group h-12 xs:h-11 rounded-2xl xs:rounded-xl px-4 py-0 button-text group w-full shrink-0 !justify-start !gap-x-2.5 !rounded-xl !p-3.5 transition-all duration-300 hover:bg-gray-50 hovergrayCard"
              type="submit"
              onClick={() => {
                newGetParcels("Price");
              }}
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

function ExpectedDelivery() {
  const [expParcels, setExpParcels] = useState([]);
  const UpdateExpParce = useSelector((state) => state.UpdateExpParce.value);
  const [Search, setSerach] = useState("");
  const [delayedCard, setDelayedCard] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const ToggleSortbyStatut = () => {
    setSortbyCardStatut(!sortbyCardStatut);
  };
  const ToggleSortbyStatutFs = () => {
    setSortbyCardStatut(false);
  };
  const [sortbyCardStatut, setSortbyCardStatut] = useState(false);
  const dispatch = useDispatch();
  const getExpectedParcels = async (filter) => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        `${config.baseURL}/get_allExpectedParcels`,
        { filter },
        {
          withCredentials: true, // Include credentials (cookies) with the request
        }
      );

      setExpParcels([]);
      setDelayedCard([]);
      setExpParcels(response.data.parcels || []);
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
  useEffect(() => {
    if (UpdateExpParce) {
      getExpectedParcels();
    }
    dispatch(setUpdateExpParce(false));
  }, [UpdateExpParce]);
  const UserRole = useSelector((state) => state.UserRole.value);
  const [IdUserOr, setIdUserOr] = useState("");
  const cookies = new Cookies();
  useEffect(() => {
    const userCookie = cookies.get("xml");
    if (userCookie) {
      setIdUserOr(userCookie.Id);
      dispatch(setUserRole(userCookie.Role));
    }
    getExpectedParcels();
  }, []);
  const renderDelayedCards = (cards, delay) => {
    cards.forEach((card, index) => {
      setTimeout(() => {
        setDelayedCard((prev) => [...prev, card]);
      }, index * delay);
    });
  };
  useEffect(() => {
    renderDelayedCards(expParcels, 300); // Adjust the delay (in milliseconds) as needed
  }, [expParcels]);

  useEffect(() => {
    if (Search.split() !== "") {
      setDelayedCard(expParcels);
      const foundObject = expParcels.filter((obj) =>
        obj.Name_on_Parcel.toLowerCase().includes(Search.toLowerCase())
      );

      if (foundObject) {
        setDelayedCard(foundObject);
      } else {
        setDelayedCard([]);
      }
    } else {
      setDelayedCard(expParcels);
    }
  }, [Search]);
  const tosterFunctiom = (status) => {
    if (status) {
      toast.success("Parcel deleted successfully", {
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
  };
  const tosterFunctiomAccept = (status, message) => {
    if (status) {
      toast.success("Parcel accepted successfully", {
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
      toast.error(message, {
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
  const calculateDynamicHeight = () => {
    const itemHeight = 240; // Adjust this value based on your design
    const gap = 6;
    const numItems = delayedCard.length;
    return numItems * itemHeight + (numItems - 1) * gap;
  };
  return (
    <React.Fragment>
      {sortbyCardStatut && (
        <div onClick={ToggleSortbyStatut} className="justforRemove1">
          <div className="sortByCardHolder">
            <SortedbyCard
              remove={ToggleSortbyStatutFs}
              newGetParcels={getExpectedParcels}
            />
          </div>
        </div>
      )}
      {/* {ToggleNewParcel && (
        <div onClick={ToggleNewParcelFs} className="justforRemove1"></div>
      )} */}
      <Topbar currentPage={"Expected Delivery"} oldPage={""} />
      <div className="DashParent1">
        <div
          onClick={ToggleSortbyStatutFs}
          className="mb-8 flex justify-between gap-x-2 lg:flex-col lg:gap-y-3 slide-inFromRight respoinv1"
        >
          <div className="flex flex-1 gap-x-2">
            <div className="relative flex-1" style={{ height: "60px" }}>
              <InputPulie
                placeHolder={
                  "Search in expected delivery using name of parcel!"
                }
                valController={Search}
                onChangeController={(x) => setSerach(x.target.value)}
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
            {UserRole === "C" ? (
              <button
                className="animateCheckbox button group h-15 lg:h-14 xs:h-13 rounded-2xl xs:rounded-xl px-10 px2 lg:px-9 xs:px-8 py-0 button-primary"
                type="submit"
                onClick={() => {
                  dispatch(setCominFromRightBar("C"));
                  dispatch(setToActive());
                }}
              >
                <CgAdd size={"20px"} />
                <span className=" z-10 tp-h6 xs:tp-h7 -mb-0.5 hautFilter respoword">
                  New Parcel
                </span>
              </button>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="mt-4 flex gap-y-3 lg:mt-2 lg:flex-col lg:gap-y-0 lg:py-0 slide-inFromRight resposortby">
          <div
            onClick={ToggleSortbyStatutFs}
            className="flex flex-1 items-center self-start py-4 lg:w-full respoline"
          >
            <span className="tp-lead5 shrink-0 text-gray-300 lg:hidden">
              {delayedCard.length} Results Found!
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
            <div
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
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col lg:mt-4 sdc234">
          <div className="">
            <div
              className="flex flex-col gap-y-6 maxwithog"
              style={{ height: `${calculateDynamicHeight()}px` }}
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
              {delayedCard.length === 0 && !isLoading ? (
                <div className="mt-16 mb-28 flex flex-col items-center justify-center">
                  <HiClipboardDocumentList size={"9rem"} color="#E8E8E9" />
                  <span className="tp-display1 mt-3">List is Empty</span>
                </div>
              ) : (
                ""
              )}
              {delayedCard?.map((order, i) => (
                <ExpCard
                  key={i}
                  OriginalUserId={IdUserOr}
                  idReshipper={order.Id_Reshipper}
                  id={order.idOrder}
                  idUser={order.idUser}
                  idParcel={order.idOrder}
                  ParcelName={order.Name_on_Parcel}
                  ReciverName={order.ReciverName}
                  Adress={order.ReshipperAddress}
                  TrackingNumber={order.Tracking_Number}
                  Courire={order.Courier}
                  packageFee={order.Price}
                  Quantity={order.Quantity}
                  getnewParcels={getExpectedParcels}
                  toEdite={order}
                  deletedStatus={tosterFunctiom}
                  UserRole={UserRole}
                  acceptStatus={tosterFunctiomAccept}
                  SenderName={order.Sender_Name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
}
export default ExpectedDelivery;
