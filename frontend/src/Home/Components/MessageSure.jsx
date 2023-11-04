import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { unsetAreYouSure } from "../../redux/LoadingStataus";
import { setDataAreYouSure } from "../../redux/AreYouSure";

export default function MessageSure({ TextAreYouSure, actionButton }) {
  const dispatch = useDispatch();
  const TitleAreYou = useSelector((state) => state.TitleAreYou.value);
  const ButtonMessage = useSelector((state) => state.ButtonMessage.value);
  const ImageAreYou = useSelector((state) => state.ImageAreYou.value);
  const ButtonType = useSelector((state) => state.ButtonType.value);
  return (
    <React.Fragment>
      <div
        className="lougOutBack animated-element-fadein"
        onClick={() => dispatch(unsetAreYouSure())}
      >
        <div className="relative z-20 my-15 rounded-3xl flex flex-col min-w-[20rem] bg-base-1 h-fit mx-20 md:mx-12 !h-[25.5rem] md:!h-[20rem] w-[52rem] justify-center overflow-visible pl-24 lg:px-15 md:pl-10 md:!px-20 sm:!px-12 cartlogOut animated-element-MoveUp">
          <div className="flex flex-1 flex-col items-start justify-center gap-y-10 xs:items-center xs:gap-y-8 moia2">
            <h2 className="tp-h1 max-w-[60%] text-left text-gray-800 md:max-w-full md:text-center txtloug2">
              {TitleAreYou}
            </h2>
            <div className="flex gap-x-3 md:self-center xs:w-full xs:flex-col xs:gap-y-3 buttlougcontiner">
              <button
                className={
                  ButtonType === "Red"
                    ? "button group h-12 xs:h-11 rounded-2xl xs:rounded-xl px-6 xs:px-5 py-0 button-tertiary border-error-standard bg-error-standard hover:bg-error-standard buttloug123"
                    : "button group h-12 xs:h-11 rounded-2xl xs:rounded-xl px-6 xs:px-5 py-0  border-success-standard bg-success-standard hover:bg-success-standard buttloug123Green"
                }
                type="submit"
                onClick={() => dispatch(setDataAreYouSure(true))}
              >
                <span className=" z-10 tp-h6 xs:tp-h7 !tp-h7 xs:!tp-lead2 text-base-1">
                  {ButtonMessage}
                </span>
              </button>
              <button
                className="button group h-12 xs:h-11 rounded-2xl xs:rounded-xl px-6 xs:px-5 py-0 button-tertiary"
                type="submit"
                onClick={() => dispatch(unsetAreYouSure())}
              >
                <span className=" z-10 tp-h6 xs:tp-h7 !tp-h7 xs:!tp-lead2">
                  Cancel
                </span>
              </button>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-[19rem] lg:w-[15rem] md:hidden imaglogman">
            <img
              alt=""
              src={ImageAreYou}
              className="absolute right-10 bottom-0 lg:w-[15rem] md:right-5 md:w-[12rem]"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
