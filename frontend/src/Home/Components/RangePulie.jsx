import React from "react";
import { useState, useEffect } from "react";
import { MdArrowBackIosNew } from "react-icons/md";

function RangePulie({
  svgLogo,
  placeHolder,
  bgColor,
  lines,
  maxLen,
  errorP,
  Defaultval,
  comingValue,
  svgPosMargine,
  valController,
  onChangeController,
  toAddNew,
  isInputDisabled,
}) {
  const [focusedInput, setFocusedInput] = useState("");
  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput("");
  };
  const [quantity, setQuantity] = useState(1);

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    // Use a regular expression to remove non-numeric characters
    const numericValue = inputText.replace(/[^0-9]/g, "");

    // Check if the numeric value is within the range [1, 255]
    if (numericValue === "" || (numericValue >= 1 && numericValue <= 255)) {
      // Update the state with the numeric value
      setQuantity(numericValue === "" ? 1 : parseInt(numericValue, 10));
    }
  };

  useEffect(() => {
    setQuantity(1);
  }, [comingValue]);
  useEffect(() => {
    onChangeController(quantity);
  }, [quantity]);
  useEffect(() => {
    if (valController !== "") {
      setQuantity(valController);
    }
  }, [valController]);
  return (
    <React.Fragment>
      <div
        style={{ backgroundColor: bgColor }}
        className={
          focusedInput === "email"
            ? "group flex z-0 rounded-2xl xs:rounded-xl box-border w-full border-2 border-gray-150 transition duration-300 relative px-6 hover:bg-gray-50 gap-3 h-14 lg:h-13 xs:h-12 !border-secondary-1 !bg-transparent shadow-[0_0_0_2px_rgba(0,208,255,0.2)] !h-13 lg:!h-12 xs:!h-11 !px-4 !rounded-xl bg-gray-50 dsfg3456"
            : errorP
            ? "group flex z-0 rounded-2xl xs:rounded-xl box-border w-full border-2 border-gray-150 transition duration-300 relative px-6 hover:bg-gray-50 gap-3 h-14 lg:h-13 xs:h-12 !h-13 lg:!h-12 xs:!h-11 !px-4 !rounded-xl !border-error-standard shadow-[0_0_0_2px_rgba(227,81,81,0.2)]"
            : "group flex z-0 rounded-2xl xs:rounded-xl box-border wfull border-2 border-gray-150  duration-300 relative px-6 hover:bg-gray-50 gap-3 h-14 lg:h-13 xs:h-12 !h-13 lg:!h-12 xs:!h-11 !px-4 !rounded-xl dsfg3456"
        }
      >
        <div
          style={{
            marginLeft: svgPosMargine ? svgPosMargine : "",
          }}
        >
          {svgLogo}
        </div>{" "}
        <div className="relative flex flex-1 items-center ">
          {lines ? (
            ""
          ) : (
            <input
              placeholder={placeHolder}
              onFocus={() => handleFocus("email")}
              onBlur={handleBlur}
              type="text"
              className="flex z-20 flex-1 w-full relative z-10 tp-lead4 xs:tp-lead5 h-full resize-none text-gray-800 bg-transparent outline-none !tp-lead5 lg:!tp-lead1 xs:!tp-body2 comment121"
              name="text"
              maxLength="100"
              style={{ color: isInputDisabled ? "#434242" : "#000000" }}
              defaultValue={Defaultval}
              value={quantity}
              onChange={handleInputChange}
              disabled={isInputDisabled ? true : false}
            />
          )}
          {lines ? (
            <textarea
              defaultValue={Defaultval}
              placeholder={placeHolder}
              onFocus={() => handleFocus("email")}
              onBlur={handleBlur}
              rows={lines ? lines : "1"}
              cols="50"
              value={quantity}
              style={{ color: isInputDisabled ? "#434242" : "#000000" }}
              onChange={handleInputChange}
              maxLength={maxLen ? maxLen : "100"}
              disabled={isInputDisabled ? true : false}
              className="flex z-20 flex-1 w-full relative z-10 tp-lead4 xs:tp-lead5 h-full resize-none text-gray-800 bg-transparent outline-none !tp-lead5 lg:!tp-lead1 xs:!tp-body2 comment121"
            />
          ) : (
            ""
          )}
          <div className="">
            <MdArrowBackIosNew
              className="asdkui78 flexksjfh342"
              onClick={
                isInputDisabled
                  ? null
                  : () => (quantity < 255 ? setQuantity(quantity + 1) : "")
              }
            />
            <MdArrowBackIosNew
              className="aidug78 flexksjfh342"
              onClick={
                isInputDisabled
                  ? null
                  : () => (quantity > 1 ? setQuantity(quantity - 1) : "")
              }
            />
          </div>
        </div>
      </div>
      {errorP ? (
        <span className="flex opacity-0 h-4 transition-all duration-200 -z-10 -mt-4 ml-1 text-error-standard tp-body2 !mt-1 !opacity-100">
          {errorP}
        </span>
      ) : (
        ""
      )}
    </React.Fragment>
  );
}
export default RangePulie;
