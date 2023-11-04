import React, { useState, useRef } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import {
  setToInActiveNotification,
  setToNoneNotification,
} from "../../../redux/NotificationbarStatus";
import { HiClipboardDocumentList } from "react-icons/hi2";

function Notificationbar() {
  const NotificationBarStatus = useSelector(
    (state) => state.NotificationBarStatus.value
  );
  const dispatch = useDispatch();

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
              onClick={() => setNotestValue((prevCount) => prevCount - 1)}
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
          <div className="ScrollbarsCustom trackYVisible flex flex-1 relative flex flex-1 flexer1234 ">
            <div className="ScrollbarsCustom-Wrapper sdekjf23sdf4">
              <div className="ScrollbarsCustom-Scroller">
                <div className="Content flex flex-1 flex-col py-5">
                  <div className="mr-8 ml-10">
                    <div className="grid gap-6 grid-cols-12 w-full gap-6 centerNotPanel">
                      <div className="mt-16 mb-28 flex flex-col items-center justify-center ">
                        <HiClipboardDocumentList
                          size={"9rem"}
                          color="#E8E8E9"
                        />
                        <span className="tp-display1 mt-3">List is Empty</span>
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
      </div>
    </React.Fragment>
  );
}
export default Notificationbar;
