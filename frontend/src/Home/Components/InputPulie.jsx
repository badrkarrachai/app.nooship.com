import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
function InputPulie({
  svgLogo,
  svgPosMargine,
  placeHolder,
  bgColor,
  lines,
  maxLen,
  errorP,
  Defaultval,
  comingValue,
  valController,
  onChangeController,
  svgLogoBack,
  keyPresssHandel,
  isInputDisabled,
  autoComplateInput,
}) {
  const [focusedInput, setFocusedInput] = useState("");

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput("");
  };
  const [val, setVal] = useState(Defaultval ? Defaultval : "");

  useEffect(() => {
    setVal("");
  }, [comingValue]);

  const handleInputChange = (event) => {
    setVal(event.target.value);
  };

  const [EyeLogoSt, setEyeLogoSt] = useState({
    statu: true,
    logo: <AiOutlineEye size={"20px"} color="#8E8E93" />,
  });
  const HandelEyeChange = () => {
    if (EyeLogoSt.statu === true) {
      setEyeLogoSt({
        statu: false,
        logo: <AiOutlineEyeInvisible size={"20px"} color="#FF0098" />,
      });
    } else {
      setEyeLogoSt({
        statu: true,
        logo: <AiOutlineEye size={"20px"} color="#8E8E93" />,
      });
    }
  };
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
        </div>
        <div className="relative flex flex-1 items-center ">
          {lines ? (
            ""
          ) : (
            <input
              placeholder={placeHolder}
              autoComplete={autoComplateInput === "off" ? "new-password" : "on"}
              onFocus={() => handleFocus("email")}
              onBlur={handleBlur}
              type={
                svgLogoBack === true && EyeLogoSt.statu ? "password" : "text"
              }
              className="show-autofill-new flex z-20 flex-1 w-full relative z-10 tp-lead4 xs:tp-lead5 h-full resize-none text-gray-800 bg-transparent outline-none !tp-lead5 lg:!tp-lead1 xs:!tp-body2 comment121"
              name="text"
              maxLength={maxLen ? maxLen : "100"}
              value={valController ? valController : val}
              onChange={
                onChangeController ? onChangeController : handleInputChange
              }
              onKeyDown={keyPresssHandel ? keyPresssHandel : null}
              disabled={isInputDisabled ? true : false}
              style={{ color: isInputDisabled ? "#434242" : "#000000" }}
            />
          )}
          {lines ? (
            <textarea
              value={valController ? valController : val}
              autoComplete={autoComplateInput === "off" ? "new-password" : "on"}
              onChange={
                onChangeController ? onChangeController : handleInputChange
              }
              placeholder={placeHolder}
              onFocus={() => handleFocus("email")}
              onBlur={handleBlur}
              name="textbig"
              rows={lines ? lines : "1"}
              cols="50"
              maxLength={maxLen ? maxLen : "100"}
              disabled={isInputDisabled ? true : false}
              style={{ color: isInputDisabled ? "#434242" : "#000000" }}
              className="show-autofill-new flex z-20 flex-1 w-full relative z-10 tp-lead4 xs:tp-lead5 h-full resize-none text-gray-800 bg-transparent outline-none !tp-lead5 lg:!tp-lead1 xs:!tp-body2 comment121"
            />
          ) : (
            ""
          )}
          {svgLogoBack === true ? (
            <div style={{ height: "100%" }} onClick={HandelEyeChange}>
              {EyeLogoSt.logo}
            </div>
          ) : (
            ""
          )}
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
export default InputPulie;
