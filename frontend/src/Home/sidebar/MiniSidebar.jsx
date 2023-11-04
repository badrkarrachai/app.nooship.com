import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.scss";
import { HiHome } from "react-icons/hi2";
import { MdInventory } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillCreditCardFill } from "react-icons/bs";
import { FiMoreVertical } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToActiveSide, setToInActiveSide } from "../../redux/SideBarStatus";
import { FaRegBell } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { setToActiveNotification } from "../../redux/NotificationbarStatus";
import Cookies from "universal-cookie";
import { setProfileUpdateIndecator } from "../../redux/ProfileUpdateIndicator";
const sidebarNavItems = [
  {
    display: "Dashboard",
    icon: <HiHome size={"1.20em"} />,
    to: "/",
    section: "",
  },
  {
    display: "Inventory",
    icon: <MdInventory size={"1.20em"} />,
    to: "/Inventory",
    section: "Inventory",
  },
  {
    display: "Expected delivery",
    icon: <FaCartShopping size={"1.20em"} />,
    to: "/ExpectedDelivery",
    section: "ExpectedDelivery",
  },
  {
    display: "Addresses",
    icon: <FaLocationDot size={"1.20em"} />,
    to: "/Addresses",
    section: "Addresses",
  },
  {
    display: "Payments",
    icon: <BsFillCreditCardFill size={"1.20em"} />,
    to: "/Payments",
    section: "Payments",
  },
];

const MiniSidebar = ({ clickProf }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem = sidebarRef.current.querySelector(
        ".sidebar__menu__item"
      );
      indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
      setStepHeight(sidebarItem.clientHeight);
    }, 50);
  }, []);

  // change active index
  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    if (
      curPath === "" ||
      curPath === "Inventory" ||
      curPath === "ExpectedDelivery" ||
      curPath === "Addresses" ||
      curPath === "Payments"
    ) {
      const activeItem = sidebarNavItems.findIndex(
        (item) => item.section === curPath
      );
      setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }
  }, [location]);
  const dispatch = useDispatch();
  const SideBarStatus = useSelector((state) => state.SideBarStatus.value);
  const handelSideBar = () => {
    if (SideBarStatus === "true") {
      dispatch(setToInActiveSide());
    } else {
      dispatch(setToActiveSide());
    }
  };
  const [userImage, setUserImage] = useState("");
  const [user, setUser] = useState("");
  const ProfileUpdateIndecator = useSelector(
    (state) => state.ProfileUpdateIndecator.value
  );
  const cookies = new Cookies();
  useEffect(() => {
    const userCookie = cookies.get("xml");
    if (userCookie) {
      setUser(userCookie);

      setUserImage(userCookie.Image);
    }
    if (ProfileUpdateIndecator !== "") {
      dispatch(setProfileUpdateIndecator(""));
    }
  }, [ProfileUpdateIndecator]);
  return (
    <React.Fragment>
      <div className="BackMenuSide345" onClick={handelSideBar}>
        <div className="SmallBuutunsHolder123">
          <button
            className="button group h-12 xs:h-11 rounded-2xl xs:rounded-xl px-0 w-12 xs:w-11 py-0 button-text bg-base-1"
            type="submit"
            onClick={handelSideBar}
          >
            <GrClose size={"17px"} />
          </button>
          <div className="relative">
            <a
              className="button group h-12 xs:h-11 rounded-2xl xs:rounded-xl px-0 w-12 xs:w-11 py-0 z-10 bg-base-1"
              type="submit"
              onClick={() => dispatch(setToActiveNotification())}
            >
              <FaRegBell size={"17px"} />
            </a>
          </div>
        </div>
      </div>
      <div className="sidebar1 ">
        <img
          className="sidebar__logo top slide-infirst"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer", width: "292px", display: "inline" }}
          src="https://capmership.s3.eu-north-1.amazonaws.com/logo.png"
        />

        <img
          src="https://capmership.s3.eu-north-1.amazonaws.com/smallLogo.png"
          className="smallLogo slide-infirst"
          alt=""
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        />
        <div ref={sidebarRef} className="slide-in sidebar__menu middle">
          <div
            ref={indicatorRef}
            className="sidebar__menu__indicator"
            style={{
              transform: `translateX(-50%) translateY(${
                activeIndex * stepHeight
              }px)`,
            }}
          ></div>

          <span
            style={{
              transform: `translateX(0%) translateY(${
                activeIndex * stepHeight + 14
              }px)`,
            }}
            className="sidebar-gradient absolute left-0 h-10 w-[6px] rounded-full rounded-l"
          ></span>
          <div className="put-in-center">
            {" "}
            {sidebarNavItems.map((item, index) => (
              <Link to={item.to} key={index} onClick={handelSideBar}>
                <div
                  className={`sidebar__menu__item ${
                    activeIndex === index ? "active" : ""
                  }`}
                  style={{ display: "flex", zIndex: "9999999999" }}
                >
                  <div className="sidebar__menu__item__icon">{item.icon}</div>
                  <div
                    className="sidebar__menu__item__text"
                    style={{ display: "inline" }}
                  >
                    {item.display}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div
          className="slide-inlast bottomBox flex 2xl:hidden lg:flex gap-x-3 cursor-pointer items-center self-center py-3 pl-5 pr-4 bg-base-1 shadow-select mx-10 rounded-xl transition-all duration-300 sm:mx-6 hiderforprofile small-partofsidebar"
          onClick={clickProf}
        >
          <img
            src={
              userImage === ""
                ? "https://i.pinimg.com/originals/36/fa/7b/36fa7b46c58c94ab0e5251ccd768d669.jpg"
                : userImage
            }
            alt="avatar"
            className="h-8 rounded-full border border-gray-25 object-cover"
          />
          <div className="flex min-w-0 flex-1 flex-col">
            <span className="tp-h7 text-text-1">
              {user?.First_Name || "Unknown"}
            </span>
            <span className="tp-small3 ellipsis min-w-0 text-gray-400">
              {user?.Email || "Unknown"}
            </span>
          </div>

          <FiMoreVertical size={"1.20em"} />
        </div>
        <div
          className="slide-inlast relative mb-14 2xl:self-center lg:w-full lg:self-start sm:mb-8 xs:mb-6 makeitcenterProfile makeprofilecenter"
          onClick={clickProf}
        >
          <img
            src={
              userImage === "data:image/jpeg;base64,"
                ? "https://i.pinimg.com/originals/36/fa/7b/36fa7b46c58c94ab0e5251ccd768d669.jpg"
                : userImage
            }
            alt="avatar"
            className=" h-10 w-10 cursor-pointer rounded-full border-2 border-base-1 object-cover 2xl:flex lg:hidden "
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MiniSidebar;
