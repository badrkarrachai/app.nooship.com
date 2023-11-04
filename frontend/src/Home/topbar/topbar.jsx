import React, { useEffect } from "react";
import { LuWallet2 } from "react-icons/lu";
import { BiShoppingBag } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToActiveNotification } from "../../redux/NotificationbarStatus";
import Sidebar from "../sidebar/Sidebar";
import { setToActiveSide, setToInActiveSide } from "../../redux/SideBarStatus";
import { setBalance, setUpdateBalance } from "../../redux/Balance";
import axios from "axios";
import baseURL from "../../config";

function Topbar({ currentPage, oldPage }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const SideBarStatus = useSelector((state) => state.SideBarStatus.value);
  const handelSideBar = () => {
    if (SideBarStatus === "true") {
      dispatch(setToInActiveSide());
    } else {
      dispatch(setToActiveSide());
    }
  };
  const Balance = useSelector((state) => state.Balance.value);
  const UpdateBalance = useSelector((state) => state.UpdateBalance.value);
  const getBlance = async () => {
    try {
      const response = await axios.get(`${baseURL}/get_user_balance_mership`, {
        withCredentials: true, // Include credentials (cookies) with the request
      });
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
  useEffect(() => {
    if (UpdateBalance === true) {
      dispatch(setUpdateBalance(false));
    }
    getBlance();
  }, [UpdateBalance]);
  return (
    <React.Fragment>
      <div className="upupbar flex justify-between flex-col pb-5 bg-base-1 divide-y-2 divide-gray-100 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] mb-6">
        <div className="respotoBar flex items-center justify-between  px-14 pt-5">
          {currentPage === "Dashboard" ? (
            <h2 className="tp-h4 flex-1 slide-inFromRight">{currentPage}</h2>
          ) : (
            <div className="flex items-center !pt-0 inRowtopbar slide-inFromRight">
              <Link
                className="tp-body2 text-gray-300 hover:text-gray-400 transition-all duration-300 haut2"
                to={"/" + oldPage}
              >
                <button
                  className="button group h-15 lg:h-14 xs:h-13 rounded-2xl xs:rounded-xl px-0 w-15 lg:w-14 xs:w-13 py-0 button-link mr-4 h-7 w-7 sjhdf878r8"
                  type="submit"
                >
                  <BsFillArrowLeftCircleFill size={"17px"} />
                </button>
                {oldPage ? oldPage : "Dashboard"}
              </Link>
              <IoIosArrowForward color="#A9A9AD" />
              <Link
                className="tp-h5 text-text-1 haut1"
                to={currentPage.split()}
              >
                {currentPage}
              </Link>
            </div>
          )}

          <div className="flex gap-2 slide-inFromRight ">
            <div className="sidebarShow12">
              <div className="relative flex">
                <button
                  className="button group h-12 xs:h-11 rounded-2xl xs:rounded-xl px-0 w-12 xs:w-11 py-0 button-tertiary z-10 "
                  type="submit"
                  onClick={handelSideBar}
                >
                  <HiOutlineMenuAlt3 size={"17px"} />
                </button>
              </div>
            </div>
            <div className="hidess1">
              <a
                className="button group h-12 xs:h-11 rounded-2xl xs:rounded-xl px-4 py-0 button-tertiary"
                type="submit"
                onClick={() => navigate("/Payments")}
              >
                <LuWallet2 />
                <span className=" z-10 tp-h6 xs:tp-h7 !tp-h7 xs:!tp-lead2 -mb-0.5">
                  ${Balance}
                </span>
              </a>
            </div>

            <div className="hideit23">
              <div className="relative flex">
                <button
                  className="button group h-12 xs:h-11 rounded-2xl xs:rounded-xl px-0 w-12 xs:w-11 py-0 button-tertiary z-10"
                  type="submit"
                  onClick={() => dispatch(setToActiveNotification())}
                >
                  <FaRegBell size={"17px"} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Topbar;
