import React, { useState, useRef, useEffect } from "react";

import { HiOutlineViewGridAdd } from "react-icons/hi";
import { AiOutlineArrowRight } from "react-icons/ai";
import InputPulie from "../../Components/InputPulie";
import SelectPulie from "../../Components/SelectPulie";
import DatePickerPulie from "../../Components/DatePickerPulie";
import RangePulie from "../../Components/RangePulie";
import { useDispatch, useSelector } from "react-redux";
import {
  setExpectedParcelEdite,
  setToInActive,
  setToNone,
} from "../../../redux/RightBarStatus";
import axios from "axios";
import config from "../../../config";
import { ToastContainer, toast } from "react-toastify";
import { unsetSTadd } from "../../../redux/LoadingStataus";
import { setUpdateExpParce } from "../../../redux/AreYouSure";
import Cookies from "universal-cookie";
import {
  setCominFromRightBar,
  setUserRole,
} from "../../../redux/UserBasicData";
import { Ring } from "@uiball/loaders";
import { setToActiveNotificationDot } from "../../../redux/NotificationbarStatus";

function Rightbar() {
  const RightBarStatut = useSelector((state) => state.RightBarStatus.value);
  const ExpectedParcelEdite = useSelector(
    (state) => state.ExpectedParcelEdite.value
  );
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const stRightBar = () => {
    if (RightBarStatut === "true") {
      return "flex w-[31.25rem] flex-1 -translate-x-full flex-col justify-between bxshadow12343 slidetoright123jj asdfg345 xs:w-full ";
    } else if (RightBarStatut === "false") {
      return "flex w-[31.25rem] flex-1 -translate-x-full flex-col justify-between bxshadow12343 slidetoright321jj asdfg345 xs:w-full ";
    } else {
      return "";
    }
  };
  const [isLoading, setIsLoading] = useState(false);
  const [IdRishipper, setIdRishipper] = useState("");
  const [IdOrder, setIdOrder] = useState("");
  const [Addresses, setAddresses] = useState([]);
  const [AddressesValue, setAddressesValue] = useState("");
  const [AddressesError, setAddressesError] = useState("");
  // Define state for each note
  const [clearAll, setClear] = useState(0);
  const [note, setNote] = useState("");
  const [dateExpected, setDateExpected] = useState("");
  const [dateStatus, setDateStatus] = useState(false);
  const [nameOnParcel, setNameOnParcel] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [trackingNumber, setTrackingNumber] = useState("");
  const [courier, setCourier] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [price, setPrice] = useState(config.servicePrice);
  const [promoPrice, setPromoPrice] = useState(0);

  // Define error states for each note
  const [NoteError, setNoteError] = useState("");
  const [dateExpectedError, setDateExpectedError] = useState("");
  const [nameOnParcelError, setNameOnParcelError] = useState("");
  const [quantityError, setQuantityError] = useState("");
  const [trackingNumberError, setTrackingNumberError] = useState("");
  const [courierError, setCourierError] = useState("");
  const [promoCodeError, setPromoCodeError] = useState("");
  const [ButtonText, setButtonText] = useState("Submit Parcel");

  const [Status, setStatus] = useState("Processing");
  const [StatusError, setStatusError] = useState("");
  const [IdStatus, setIdStatus] = useState("");

  const [Parcelimagelink, setParcelimagelink] = useState("");
  const [ParcelimagelinkError, setParcelimagelinkError] = useState("");

  const GetAddresses = async () => {
    try {
      const response = await axios.get(
        `${config.baseURL}/get_climedaddress_For_Expected_delivery`,
        {
          withCredentials: true, // Include credentials (cookies) with the request
        }
      );
      setAddresses(response.data.addresses);
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
  useEffect(() => {
    setPrice((price) => config.servicePrice * quantity - promoPrice);
  }, [quantity]);
  function Defualt() {
    setPrice(config.servicePrice);
    setPromoPrice(0);
    setClear((prevCount) => prevCount - 1);
    setAddressesValue("");
    setNote("");
    setNameOnParcel("");
    setTrackingNumber("");
    setCourier("");
    setPromoCode("");
    setDateExpectedError("");
    setNameOnParcelError("");
    setQuantityError("");
    setTrackingNumberError("");
    setPromoCodeError("");
    dispatch(setToInActive());
    setAddressesError("");
    const timer = setTimeout(() => {
      dispatch(setToNone());
    }, 300);
  }
  const AddEpectedParcel = async () => {
    const trackingNumber1 = trackingNumber.toUpperCase();
    const courier1 = courier.toUpperCase();
    const nameOnParcel1 =
      nameOnParcel.charAt(0).toUpperCase() +
      nameOnParcel.slice(1).toLowerCase();

    let link =
      ButtonText === "Submit Parcel"
        ? "AddExpectedParcelMership"
        : "UpdateExpectParcelMership123";
    try {
      setIsLoading(true);
      const response = await axios.post(
        config.baseURL + "/" + link,
        {
          IdRishipper,
          note,
          dateStatus,
          nameOnParcel1,
          quantity,
          trackingNumber1,
          courier1,
          price,
          IdOrder,
        },
        {
          withCredentials: true, // Include credentials (cookies) with the request
        }
      );

      if (response.data === "Added") {
        Defualt();
        setButtonText("Submit Parcel");
        dispatch(setUpdateExpParce(true));
        dispatch(setCominFromRightBar("C"));

        toast.success(
          ButtonText === "Submit Parcel"
            ? "Parcel added successfully"
            : "Parcel edited successfully",
          {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );
      } else {
        Defualt();
        setButtonText("Submit Parcel");
        dispatch(setCominFromRightBar("C"));

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
      Defualt();
      setButtonText("Submit Parcel");
      dispatch(setCominFromRightBar("C"));

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
      dispatch(setToActiveNotificationDot());
      setIsLoading(false); // Hide loading spinner
    }
  };
  const AdressStatus = useSelector((state) => state.AdressStatus.value);
  const CominFromRightBar = useSelector(
    (state) => state.CominFromRightBar.value
  );
  const UserRole = useSelector((state) => state.UserRole.value);
  const [userIdOr, setUserIDOr] = useState("");
  const [userIdParcel, setUserIDParcel] = useState("");

  useEffect(() => {
    const userCookie = cookies.get("xml");
    if (userCookie) {
      dispatch(setUserRole(userCookie.Role));
      setUserIDOr(userCookie.Id);
    }
    dispatch(unsetSTadd());
    GetAddresses();
  }, [AdressStatus]);
  useEffect(() => {
    if (ExpectedParcelEdite !== "none") {
      setUserIDParcel(ExpectedParcelEdite.idUser);
      setAddressesValue(ExpectedParcelEdite.ReciverName);
      setNote(ExpectedParcelEdite.Notes);
      setDateExpected(ExpectedParcelEdite.Date_Expected);
      setNameOnParcel(ExpectedParcelEdite.Name_on_Parcel);
      setQuantity(ExpectedParcelEdite.Quantity);
      setTrackingNumber(ExpectedParcelEdite.Tracking_Number);
      setCourier(ExpectedParcelEdite.Courier);
      setIdOrder(ExpectedParcelEdite.idOrder);
      setIdRishipper(ExpectedParcelEdite.Id_Reshipper);
      setStatus(ExpectedParcelEdite.Status);
      setParcelimagelink(ExpectedParcelEdite.ImageLink);
      setButtonText("Edit Parcel");
    }
    dispatch(setExpectedParcelEdite("none"));
  }, [ExpectedParcelEdite]);

  //update the status
  const updateTheStatus = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        `${config.baseURL}/update_status_order_mership`,
        { IdOrder, Parcelimagelink, Status },
        {
          withCredentials: true, // Include credentials (cookies) with the request
        }
      );

      if (response.data === "Done") {
        Defualt();
        setButtonText("Submit Parcel");
        dispatch(setUpdateExpParce(true));
        dispatch(setCominFromRightBar("C"));
        toast.success(
          ButtonText === "Submit Parcel"
            ? "Parcel added successfully"
            : UserRole === "C"
            ? "Parcel edited successfully"
            : "Parcel updated successfully",
          {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );
      } else {
        Defualt();
        setButtonText("Submit Parcel");
        dispatch(setUpdateExpParce(true));
        dispatch(setCominFromRightBar("C"));
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
      Defualt();
      setButtonText("Submit Parcel");
      dispatch(setUpdateExpParce(true));
      dispatch(setCominFromRightBar("C"));
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
  const SubmitParcel = () => {
    if (UserRole === "R") {
      let pass1 = true;
      if (Status.split(" ").join("") !== "") {
        setStatusError("");
      } else {
        setStatusError("Status of the parcel is required");
        pass = false;
      }
      if (pass1) {
        updateTheStatus();
      }
    } else {
      let pass = true;
      if (AddressesValue.split(" ").join("") !== "") {
        setAddressesError("");
      } else {
        setAddressesError("Address is required");
        pass = false;
      }
      if (dateStatus === null) {
        setDateExpectedError("Date expected is required");
        pass = false;
      } else {
        setDateExpectedError("");
      }
      if (nameOnParcel.split(" ").join("") === "") {
        setNameOnParcelError("Name on Parcel is required");
        pass = false;
      } else {
        setNameOnParcelError("");
      }
      if (trackingNumber.split(" ").join("") === "") {
        setTrackingNumberError("Tracking number is required");
        pass = false;
      } else {
        setTrackingNumberError("");
      }
      if (quantity < 1) {
        setQuantityError("Quantity is required");
        pass = false;
      } else {
        setQuantityError("");
      }

      if (pass) {
        AddEpectedParcel();
      }
    }
  };
  const HandelPromoCode = async () => {
    if (promoCode.split(" ").join("") !== "") {
      if (promoPrice === 0) {
        setPromoCodeError("");
        try {
          const response = await axios.post(
            `${config.baseURL}/ApplypromocodeMership2023`,
            {
              promoCode,
            },
            {
              withCredentials: true, // Include credentials (cookies) with the request
            }
          );
          if (response.data.valid) {
            setPromoPrice(response.data.message);
            setPrice((price) => price - response.data.message);
          } else {
            setPromoCodeError(response.data.message);
          }
        } catch (error) {
          setPromoCodeError("Something went wrong!");
        }
      }
    } else {
      setPromoCodeError("Promo code is required before apply");
    }
  };
  const StatusTypes = [
    { id: 0, status: "Processing" },
    { id: 1, status: "Received" },
    { id: 2, status: "Declined" },
    { id: 3, status: "Reshipped" },
  ];
  return (
    <React.Fragment>
      {RightBarStatut !== "none" && (
        <div
          className="somthingtoremove123"
          onClick={() => {
            Defualt();

            setButtonText("Submit Parcel");
            dispatch(setToInActive());
            const timer = setTimeout(() => {
              dispatch(setToNone());
            }, 300);
          }}
        ></div>
      )}
      <div
        style={{
          backgroundColor: "white",
          width: "600px",
          height: "100%",
          position: "fixed",
          right: "-600px",
          zIndex: "99999",
          borderTopLeftRadius: "1rem",
          borderBottomLeftRadius: "1rem",
        }}
        className={stRightBar()}
      >
        <div className="m-10 mb-0 flex items-center justify-between">
          <div className="flex gap-x-1">
            <HiOutlineViewGridAdd size={"29px"} />
            <h4
              className="tp-h4 text-text-1"
              style={{ marginLeft: "10px", marginTop: "-px" }}
            >
              {ButtonText === "Submit Parcel"
                ? "New"
                : CominFromRightBar === "INV"
                ? ""
                : "Edit"}{" "}
              Delivery
            </h4>
          </div>

          <div className="flex gap-3">
            {UserRole === "c" ? (
              <button
                className="button group px-4 h-9 rounded-xl py-0 button-tertiary"
                type="submit"
                onClick={() => {
                  setClear((prevCount) => prevCount - 1);
                  setAddressesValue("");
                  setNote("");
                  setNameOnParcel("");
                  setTrackingNumber("");
                  setCourier("");
                  setPromoCode("");
                }}
              >
                <span className=" z-10 tp-h6 xs:tp-h7 !tp-lead6 xs:!tp-lead6">
                  Clear
                </span>
              </button>
            ) : (
              ""
            )}
            <button
              className="button group px-0 w-9 h-9 rounded-xl py-0 button-tertiary"
              type="submit"
              onClick={() => {
                Defualt();
                setButtonText("Submit Parcel");

                dispatch(setToInActive());
                const timer = setTimeout(() => {
                  dispatch(setToNone());
                }, 300);
              }}
            >
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
        <div
          className="flex p-1 rounded-2xl h-15 lg:h-14 xs:h-13 box-border relative my-8 mx-10"
          style={{ marginTop: "-70px" }}
        >
          {/* upper part */}
        </div>
        <div className="relative flex flex-1 sdkjf9345">
          <div className="ScrollbarsCustom trackYVisible flex flex-1 relative flex flex-1 flexer1234 ">
            <div className="ScrollbarsCustom-Wrapper sdekjf23">
              <div className="ScrollbarsCustom-Scroller">
                <div className="Content flex flex-1 flex-col py-5">
                  <div className="mr-8 ml-10">
                    <div className="grid gap-6 grid-cols-12 w-full gap-6">
                      {UserRole === "R" && userIdOr !== userIdParcel ? (
                        <React.Fragment>
                          <div className="flex flex-col col-span-12">
                            <span className="tp-h7 mb-1 pl-1 text-gray-600">
                              Status *
                            </span>
                            <span
                              style={{ height: "52px" }}
                              className="tp-h7 mb-1 pl-1 text-gray-600"
                            >
                              <SelectPulie
                                errorP={StatusError}
                                defaultWord={"status"}
                                comingValue={clearAll}
                                onChangeController={(x) =>
                                  setStatus(x.target.value)
                                }
                                valController={Status}
                                ListOfValues={StatusTypes.map((st) => (
                                  <option key={st.id} id={st.id}>
                                    {st.status}
                                  </option>
                                ))}
                              />
                            </span>
                          </div>
                          <div className="flex flex-col col-span-12">
                            <span className="tp-h7 mb-1 pl-1 text-gray-600">
                              Parcel image link
                            </span>
                            <span
                              className="tp-h7 mb-1 pl-1 text-gray-600"
                              style={{ height: "52px" }}
                            >
                              <InputPulie
                                errorP={ParcelimagelinkError}
                                comingValue={clearAll}
                                valController={Parcelimagelink}
                                maxLen={"300"}
                                onChangeController={(x) =>
                                  setParcelimagelink(x.target.value)
                                }
                              />
                            </span>

                            <span className="flex opacity-0 h-4 transition-all duration-200 -z-10 -mt-4 ml-1 text-error-standard tp-body2"></span>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              width: "500px",
                              alignItems: "center",
                            }}
                          >
                            <span
                              className="tp-h7 mb-1 pl-1 text-gray-600"
                              style={{
                                width: "360px",
                                fontSize: "15pt",
                                marginTop: "20px",
                              }}
                            >
                              Parcel informations:
                            </span>
                            <span
                              style={{ marginTop: "20px" }}
                              className="mr-4 ml-3 h-0.5 w-full gap-x-5 bg-gray-100 lg:mx-0 "
                            ></span>
                          </div>
                        </React.Fragment>
                      ) : (
                        ""
                      )}
                      {UserRole === "C" || userIdOr === userIdParcel ? (
                        <React.Fragment>
                          <div className="flex flex-col col-span-12">
                            <span className="tp-h7 mb-1 pl-1 text-gray-600">
                              Address *
                            </span>
                            <span
                              style={{ height: "52px" }}
                              className="tp-h7 mb-1 pl-1 text-gray-600"
                            >
                              <SelectPulie
                                errorP={AddressesError}
                                comingValue={clearAll}
                                isInputDisabled={
                                  UserRole === "R" ||
                                  CominFromRightBar === "INV"
                                    ? true
                                    : false
                                }
                                onChangeController={(x) => {
                                  setAddressesValue(x.target.value);
                                  const selectedOptionId =
                                    event.target.options[
                                      event.target.selectedIndex
                                    ].id;
                                  setIdRishipper(selectedOptionId);
                                }}
                                valController={AddressesValue}
                                ListOfValues={Addresses.map((address) => (
                                  <option key={address.Id} id={address.Id}>
                                    {address.First_Name +
                                      " " +
                                      address.Last_Name}
                                  </option>
                                ))}
                              />
                            </span>
                          </div>
                          {userIdOr === userIdParcel ? (
                            <>
                              {CominFromRightBar === "INV" ? (
                                <div className="flex flex-col col-span-12">
                                  <span className="tp-h7 mb-1 pl-1 text-gray-600">
                                    Parcel image link
                                  </span>
                                  <span
                                    className="tp-h7 mb-1 pl-1 text-gray-600"
                                    style={{ height: "52px" }}
                                  >
                                    <div
                                      style={{
                                        width: "470px",
                                        height: "52px",
                                        position: "absolute",
                                        zIndex: "999",
                                        cursor: "pointer",
                                      }}
                                      onClick={() => {
                                        if (
                                          Parcelimagelink.split(" ").join(
                                            ""
                                          ) !== ""
                                        ) {
                                          window.open(
                                            Parcelimagelink,
                                            "_blank",
                                            "noopener,noreferrer"
                                          );
                                        }
                                      }}
                                    ></div>
                                    <InputPulie
                                      isInputDisabled={true}
                                      valController={Parcelimagelink}
                                      maxLen={"300"}
                                    />
                                  </span>

                                  <span className="flex opacity-0 h-4 transition-all duration-200 -z-10 -mt-4 ml-1 text-error-standard tp-body2"></span>
                                </div>
                              ) : (
                                ""
                              )}
                            </>
                          ) : (
                            ""
                          )}
                        </React.Fragment>
                      ) : (
                        ""
                      )}
                      <div className="flex flex-col col-span-12">
                        <span className="tp-h7 mb-1 pl-1 text-gray-600">
                          Notes
                        </span>
                        <span
                          className="tp-h7 mb-1 pl-1 text-gray-600"
                          style={{ height: "120px" }}
                        >
                          <InputPulie
                            comingValue={clearAll}
                            errorP={NoteError}
                            isInputDisabled={
                              UserRole === "R" || CominFromRightBar === "INV"
                                ? true
                                : false
                            }
                            lines={"4"}
                            maxLen={"500"}
                            valController={note}
                            onChangeController={(x) => setNote(x.target.value)}
                          />
                        </span>
                        <span className="flex opacity-0 h-4 transition-all duration-200 -z-10 -mt-4 ml-1 text-error-standard tp-body2"></span>
                      </div>
                      <div className="flex flex-col col-span-12">
                        <span className="tp-h7 mb-1 pl-1 text-gray-600">
                          Date Expected *
                        </span>
                        <span
                          className="tp-h7 mb-1 pl-1 text-gray-600"
                          style={{ height: "52px" }}
                        >
                          <DatePickerPulie
                            errorP={dateExpectedError}
                            comingValue={clearAll}
                            isInputDisabled={
                              UserRole === "R" || CominFromRightBar === "INV"
                                ? true
                                : false
                            }
                            valController={dateExpected}
                            onChangeController={setDateStatus}
                            reseter={setDateExpected}
                          />
                        </span>

                        <span className="flex opacity-0 h-4 transition-all duration-200 -z-10 -mt-4 ml-1 text-error-standard tp-body2"></span>
                      </div>
                      <div className="flex flex-col col-span-12">
                        <span className="tp-h7 mb-1 pl-1 text-gray-600">
                          Name on Parcel *
                        </span>
                        <span
                          className="tp-h7 mb-1 pl-1 text-gray-600"
                          style={{ height: "52px" }}
                        >
                          <InputPulie
                            errorP={nameOnParcelError}
                            comingValue={clearAll}
                            valController={nameOnParcel}
                            isInputDisabled={
                              UserRole === "R" || CominFromRightBar === "INV"
                                ? true
                                : false
                            }
                            onChangeController={(x) =>
                              setNameOnParcel(x.target.value)
                            }
                          />
                        </span>

                        <span className="flex opacity-0 h-4 transition-all duration-200 -z-10 -mt-4 ml-1 text-error-standard tp-body2"></span>
                      </div>
                      <div className="flex flex-col col-span-12">
                        <span className="tp-h7 mb-1 pl-1 text-gray-600">
                          Quantity
                        </span>
                        <span
                          className="tp-h7 mb-1 pl-1 text-gray-600"
                          style={{ height: "52px" }}
                        >
                          <RangePulie
                            errorP={quantityError}
                            comingValue={clearAll}
                            valController={quantity}
                            onChangeController={setQuantity}
                            isInputDisabled={
                              UserRole === "R" || CominFromRightBar === "INV"
                                ? true
                                : false
                            }
                          />
                        </span>

                        <span className="flex opacity-0 h-4 transition-all duration-200 -z-10 -mt-4 ml-1 text-error-standard tp-body2"></span>
                      </div>
                      <div className="flex flex-col col-span-12">
                        <span className="tp-h7 mb-1 pl-1 text-gray-600">
                          Tracking Number *
                        </span>
                        <span
                          className="tp-h7 mb-1 pl-1 text-gray-600"
                          style={{ height: "52px" }}
                        >
                          <InputPulie
                            errorP={trackingNumberError}
                            comingValue={clearAll}
                            valController={trackingNumber}
                            isInputDisabled={
                              UserRole === "R" || CominFromRightBar === "INV"
                                ? true
                                : false
                            }
                            onChangeController={(x) =>
                              setTrackingNumber(x.target.value)
                            }
                          />
                        </span>

                        <span className="flex opacity-0 h-4 transition-all duration-200 -z-10 -mt-4 ml-1 text-error-standard tp-body2"></span>
                      </div>
                      <div className="flex flex-col col-span-12 ">
                        <span className="tp-h7 mb-1 pl-1 text-gray-600">
                          Courier
                        </span>
                        <span
                          className="tp-h7 mb-1 pl-1 text-gray-600"
                          style={{ height: "52px" }}
                        >
                          <InputPulie
                            isInputDisabled={
                              UserRole === "R" || CominFromRightBar === "INV"
                                ? true
                                : false
                            }
                            errorP={courierError}
                            comingValue={clearAll}
                            valController={courier}
                            onChangeController={(x) =>
                              setCourier(x.target.value)
                            }
                          />
                        </span>

                        <span className="flex opacity-0 h-4 transition-all duration-200 -z-10 -mt-4 ml-1 text-error-standard tp-body2"></span>
                      </div>
                      {UserRole === "C" && CominFromRightBar === "C" ? (
                        <div className="flex flex-col col-span-12 ">
                          <span className="tp-h7 mb-1 pl-1 text-gray-600">
                            Promo code
                          </span>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              columnGap: "10px",
                            }}
                          >
                            <span
                              className="tp-h7 mb-1 pl-1 text-gray-600"
                              style={{ height: "52px", width: "100%" }}
                            >
                              <InputPulie
                                isInputDisabled={
                                  UserRole === "R" ||
                                  CominFromRightBar === "INV"
                                    ? true
                                    : false
                                }
                                errorP={promoCodeError}
                                comingValue={clearAll}
                                valController={promoCode}
                                onChangeController={(x) =>
                                  setPromoCode(x.target.value)
                                }
                              />
                            </span>
                            <button
                              className="button group px-4 h-9 rounded-xl py-0 button-tertiary"
                              type="submit"
                              style={{ height: "100%" }}
                              onClick={HandelPromoCode}
                            >
                              <span className=" z-10 tp-h6 xs:tp-h7 !tp-lead6 xs:!tp-lead6">
                                Apply
                              </span>
                            </button>
                          </div>
                          <span className="flex opacity-0 h-4 transition-all duration-200 -z-10 -mt-4 ml-1 text-error-standard tp-body2"></span>
                        </div>
                      ) : (
                        ""
                      )}
                      <div className="flex flex-col col-span-12 mrBttom1">
                        <span className="tp-h7 mb-1 pl-1 text-gray-600">
                          Order total:
                        </span>
                        <span
                          className="tp-h7 mb-1 pl-1 text-gray-600"
                          style={{
                            height: "52px",
                            fontSize: "18pt",
                            marginTop: "5px",
                            columnGap: "10px",
                          }}
                        >
                          {promoPrice !== 0 ? (
                            <div style={{ color: "#EF6262", fontSize: "15px" }}>
                              {"-" + promoPrice + "$ Promo"}
                            </div>
                          ) : (
                            ""
                          )}
                          <div
                            style={{
                              marginTop: "5px",
                            }}
                          >
                            {price + "$"}
                          </div>
                        </span>

                        <span className="flex opacity-0 h-4 transition-all duration-200 -z-10 -mt-4 ml-1 text-error-standard tp-body2"></span>
                      </div>
                    </div>
                  </div>
                  <div className="mr-8 ml-10">{/* Here */}</div>
                </div>
              </div>
            </div>
            <span className="trackY" axis="y">
              <div className="ScrollbarsCustom-Thumb ScrollbarsCustom-ThumbY"></div>
            </span>
          </div>
          <div className="absolute bottom-0 h-0 w-full shadow-scroller asdk734"></div>
          <div className="absolute top-0 h-0 w-full shadow-scroller asdk734"></div>
        </div>
        <div className="sdf343">
          <div
            className="m-10 mb-9 flex gap-x-3 "
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isLoading && (
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
            {isLoading === false ? (
              <React.Fragment>
                {userIdOr !== userIdParcel || CominFromRightBar !== "INV" ? (
                  <React.Fragment>
                    {CominFromRightBar === "INV" && UserRole === "C" ? (
                      ""
                    ) : (
                      <button
                        className="button group h-12 xs:h-11 rounded-2xl xs:rounded-xl px-6 xs:px-5 py-0 button-primary flex-1 !rounded-xl"
                        type="submit"
                        onClick={SubmitParcel}
                      >
                        <span className=" z-10 tp-h6 xs:tp-h7 !tp-h7 xs:!tp-lead2">
                          {ButtonText === "Submit Parcel"
                            ? "Submit Parcel"
                            : UserRole === "C"
                            ? "Edit Parcel"
                            : "Update Parcel"}
                        </span>
                      </button>
                    )}
                  </React.Fragment>
                ) : (
                  ""
                )}
              </React.Fragment>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
}
export default Rightbar;
