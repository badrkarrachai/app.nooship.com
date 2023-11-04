import React, { useEffect } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import { BiUserCircle } from "react-icons/bi";
import { BiLockAlt } from "react-icons/bi";
import { AiOutlineLogout } from "react-icons/ai";
import Rightbar from "./pages/HomeParts/Rightbar";
import { useNavigate } from "react-router-dom";
import Notificationbar from "./pages/HomeParts/Notificationbar";
import Lougout from "./pages/ProfilParts/Logout";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setLoadingFalse } from "../redux/LoadingStataus";
import MiniSidebar from "./sidebar/MiniSidebar";
import MessageSure from "./Components/MessageSure";
import { setToActiveSide, setToInActiveSide } from "../redux/SideBarStatus";

function ProfilCard({ clickOff, logoutShow }) {
  const navigate = useNavigate();

  const SideBarStatus = useSelector((state) => state.SideBarStatus.value);
  const dispatch = useDispatch();
  const handelSideBar = () => {
    if (SideBarStatus === "true") {
      dispatch(setToInActiveSide());
    } else {
      dispatch(setToActiveSide());
    }
  };
  return (
    <div className="justforRemove" onClick={clickOff}>
      <div className="cardProfil1">
        <div className="OutsideofFloating">
          <div className="couvertureProfil">
            <button
              className="button group h-12 xs:h-11 rounded-2xl xs:rounded-xl px-4 py-0 button-text group w-full shrink-0 !justify-start !gap-x-2.5 !rounded-xl !p-3.5 transition-all duration-300 hover:bg-gray-50 hovergrayCard"
              type="submit"
              onClick={() => {
                handelSideBar();
                navigate("/Profil");
              }}
            >
              <BiUserCircle size={"22px"} color="#A9A9AD" />
              <span className=" z-10 tp-h6 xs:tp-h7 tp-hnn xs:!tp-lead2 -mb-0.5 !text-text-2 !-mb-0 group-hover:!text-gray-800 transition duration-300">
                My Profile
              </span>
            </button>
            <button
              className="button group h-12 xs:h-11 rounded-2xl xs:rounded-xl px-4 py-0 button-text group w-full shrink-0 !justify-start !gap-x-2.5 !rounded-xl !p-3.5 transition-all duration-300 hover:bg-gray-50 hovergrayCard"
              type="submit"
              onClick={() => {
                handelSideBar();
                navigate("/ChangePassword");
              }}
            >
              <BiLockAlt size={"22px"} color="#A9A9AD" />
              <span className=" z-10 tp-h6 xs:tp-h7 tp-hnn xs:!tp-lead2 -mb-0.5 !text-text-2 !-mb-0 group-hover:!text-gray-800 transition duration-300">
                Change Password
              </span>
            </button>
            <button
              onClick={() => {
                handelSideBar();
                logoutShow();
              }}
              className="button group h-12 xs:h-11 rounded-2xl xs:rounded-xl px-4 py-0 button-text group w-full shrink-0 !justify-start !gap-x-2.5 !rounded-xl !p-3.5 transition-all duration-300 hover:bg-gray-50 hovergrayCard"
              type="submit"
            >
              <AiOutlineLogout size={"22px"} color="#E76A6A" />
              <span className=" z-10 tp-h6 xs:tp-h7 tp-hnn xs:!tp-lead2 -mb-0.5 !text-text-2 !-mb-0 group-hover:!text-gray-800 transition duration-300">
                Logout
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const [ProfilCardSt, setProfilCardSt] = useState(false);
  const [LogoutCard, setLogoutCard] = useState(false);

  const ToggelProfileCard = () => {
    setProfilCardSt(!ProfilCardSt);
  };
  const ProfileCardOff = () => {
    setProfilCardSt(false);
  };
  const ToggeleLogoutCard = () => {
    setLogoutCard(true);
  };
  const LogoutCardOff = () => {
    setLogoutCard(false);
  };
  const Loading = useSelector((state) => state.Loading.value);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoadingFalse());
    }, 3500);
  }, [Loading]);
  function LoadingWithProgressBar() {
    return (
      <div className="ContianerLoading12">
        <div className="hider1234">
          <div className="loeaderMership12"></div>
        </div>
      </div>
    );
  }
  const SideBarStatus = useSelector((state) => state.SideBarStatus.value);
  const AreYouSure = useSelector((state) => state.AreYouSure.value);

  return (
    <React.Fragment>
      {AreYouSure && <MessageSure />}
      {Loading === true ? <LoadingWithProgressBar /> : ""}
      {LogoutCard && <Lougout logoutStatut={LogoutCardOff} />}
      <Notificationbar />
      <Rightbar />
      <div className="rootPageHome">
        <Sidebar clickProf={ToggelProfileCard} />
        {SideBarStatus === "true" ? (
          <MiniSidebar clickProf={ToggelProfileCard} />
        ) : (
          ""
        )}
        {ProfilCardSt && (
          <ProfilCard
            clickOff={ProfileCardOff}
            logoutShow={ToggeleLogoutCard}
          />
        )}

        <Outlet />
      </div>
    </React.Fragment>
  );
}
export default Home;
