import React, { useState, useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Input } from "@chakra-ui/react";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import InputPulie from "../../Components/InputPulie";
import SelectPulie from "../../Components/SelectPulie";
import DatePickerPulie from "../../Components/DatePickerPulie";
import RangePulie from "../../Components/RangePulie";
import { Ring } from "@uiball/loaders";
import { useDispatch, useSelector } from "react-redux";
import {
  setToActiveNotificationDot,
  setToInActiveNotification,
  setToNoneNotification,
} from "../../../redux/NotificationbarStatus";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import config from "../../../config";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
function NotificationCard({
  idNotification,
  notificationBody,
  notificationTitile,
  notificationImage,
  getNew,
}) {
  const dispatch = useDispatch();
  const deletespesificNotifications = async () => {
    try {
      const response = await axios.post(
        `${config.baseURL}/delete_specific_notifications`,
        { idNotification },
        {
          withCredentials: true, // Include credentials (cookies) with the request
        }
      );

      if (response.data.Done) {
        getNew();
        dispatch(setToActiveNotificationDot());
      }
    } catch (error) {
      console.log(error);
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
      // console.log("Getting addresses failed:", error.response.data.error);
    }
  };
  return (
    <React.Fragment>
      <article className="flex flex-col bg-base-1 p-8 rounded-2xl lg:p-6  DowntoUpFloat  shadow-card">
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            left: "0",
            top: "0",
            zIndex: "1",
          }}
        ></div>
        <header className="flex items-start " style={{ gap: "1rem" }}>
          <div
            className="flex gap-x-5 items-center lg:flex-col lg:items-start lg:gap-y-4 respowrap aerf7234"
            style={{ cursor: "pointer", zIndex: "2" }}
          >
            <a target="_blank" style={{ cursor: "pointer" }}>
              <div
                className="flex w-25 h-25 shrink-0 rounded-full w-16 h-16"
                style={{ width: "3rem", height: "3rem" }}
              >
                <img
                  src={
                    notificationImage === ""
                      ? "https://capmership.s3.eu-north-1.amazonaws.com/Default+Notification.png"
                      : notificationImage
                  }
                  alt="logo"
                  className="w-full rounded-full border border-gray-100 bg-base-1 object-contain p-[1px] duration-200 hover:border-secondary-1/70"
                />
              </div>
            </a>
          </div>
          <div
            style={{
              left: "0",
              fontSize: "12pt",
              gap: "0.7rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <b>{notificationTitile}</b>
            <div dangerouslySetInnerHTML={{ __html: notificationBody }} />
          </div>
          <div
            className=""
            style={{ marginTop: "-15px", marginRight: "-15px" }}
          >
            <div className="flex items-center gap-x-3">
              <button
                onClick={deletespesificNotifications}
                style={{ zIndex: "2" }}
                className=" justify-center items-center gap-2 px-4 h-12 border-2 border-gray-100 hover:bg-base-2 active:bg-base-3 transition duration-200 px-4 h-9 px-0  px-0 w-9 h-9 rounded-xl py-0 btninvCardHover btninvCardClick"
              >
                <div style={{ marginLeft: "-8px" }}>
                  <AiOutlineClose />
                </div>
              </button>
            </div>
          </div>
        </header>
      </article>
    </React.Fragment>
  );
}

function Notificationbar() {
  const NotificationBarStatus = useSelector(
    (state) => state.NotificationBarStatus.value
  );
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const stRightBar = () => {
    if (NotificationBarStatus === "true") {
      return "flex w-[31.25rem] flex-1 -translate-x-full flex-col justify-between bxshadow12343 slidetoright123jj asdfg345 xs:w-full ";
    } else if (NotificationBarStatus === "false") {
      return "flex w-[31.25rem] flex-1 -translate-x-full flex-col justify-between bxshadow12343 slidetoright321jj asdfg345 xs:w-full ";
    } else {
      return "";
    }
  };
  const [NotesValue, setNotestValue] = useState(0);
  const [notifications, setNotifications] = useState([]);
  async function getNotifications() {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${config.baseURL}/get_all_notifications`,
        {
          withCredentials: true, // Include credentials (cookies) with the request
        }
      );
      setNotifications([]);
      if (response.data.Exist) {
        setNotifications(response.data.message);
      }
    } catch (error) {
      // console.log("Getting addresses failed:", error.response.data.error);
    } finally {
      setIsLoading(false); // Hide loading spinner
    }
  }
  useEffect(() => {
    getNotifications();
  }, [NotificationBarStatus]);

  const deleteAllNotifications = async () => {
    try {
      const response = await axios.get(
        `${config.baseURL}/delete_all_notifications`,
        {
          withCredentials: true, // Include credentials (cookies) with the request
        }
      );

      if (response.data.Done) {
        setNotifications([]);
        dispatch(setToActiveNotificationDot());
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
      // console.log("Getting addresses failed:", error.response.data.error);
    }
  };
  return (
    <React.Fragment>
      {NotificationBarStatus !== "none" && (
        <div
          className="somthingtoremove123"
          onClick={() => {
            dispatch(setToInActiveNotification());
            const timer = setTimeout(() => {
              dispatch(setToNoneNotification());
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
            <div style={{ marginTop: "3px" }}>
              <GrNotification size={"25px"} />
            </div>

            <h4
              className="tp-h4 text-text-1"
              style={{ marginLeft: "10px", marginTop: "-px" }}
            >
              Notifications
            </h4>
          </div>

          <div className="flex gap-3">
            <button
              className="button group px-4 h-9 rounded-xl py-0 button-tertiary"
              type="submit"
              onClick={deleteAllNotifications}
            >
              <span className=" z-10 tp-h6 xs:tp-h7 !tp-lead6 xs:!tp-lead6">
                Clear
              </span>
            </button>
            <button
              className="button group px-0 w-9 h-9 rounded-xl py-0 button-tertiary"
              type="submit"
              onClick={() => {
                dispatch(setToInActiveNotification());
                const timer = setTimeout(() => {
                  dispatch(setToNoneNotification());
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
          <div className="ScrollbarsCustom trackYVisible flex flex-1 relative flex flex-1 flexer12dd34 ">
            <div className="ScrollbarsCustom-Wrapper sdekjf23sdfs4">
              <div
                className="ScrollbarsCustom-Scroller"
                style={{
                  height: "100%",
                }}
              >
                <div
                  className="Content flex flex-1 flex-col py-5"
                  style={{
                    height: "100%",
                  }}
                >
                  {!isLoading && (
                    <>
                      {notifications.length === 0 ? (
                        <div
                          className="mr-8 ml-10"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                          }}
                        >
                          <div className="grid gap-6 grid-cols-12 w-full gap-6 centerNotPanel">
                            <div className="mt-16 mb-28 flex flex-col items-center justify-center ">
                              <HiClipboardDocumentList
                                size={"9rem"}
                                color="#E8E8E9"
                              />
                              <span className="tp-display1 mt-3">
                                List is Empty
                              </span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      <div
                        className="mr-8 ml-10"
                        style={{
                          gap: "1rem",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        {notifications.map((notif) => (
                          <NotificationCard
                            key={notif.idNotification}
                            idNotification={notif.idNotification}
                            notificationTitile={notif.TitleNotification}
                            notificationBody={notif.Notification}
                            notificationImage={notif.ImageNotification}
                            getNew={getNotifications}
                          />
                        ))}
                      </div>
                    </>
                  )}
                  {isLoading && (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignContent: "center",
                        marginTop: "50px",
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
      </div>
      <ToastContainer />
    </React.Fragment>
  );
}
export default Notificationbar;
