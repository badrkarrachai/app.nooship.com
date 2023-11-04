import React from "react";
import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { MdArrowBackIosNew } from "react-icons/md";

function SelectPulie({
  svgLogo,
  placeHolder,
  bgColor,
  lines,
  maxLen,
  errorP,
  comingValue,
  ListOfValues,
  onChangeController,
  valController,
  idSelect,
  isInputDisabled,
  defaultWord,
}) {
  const [focusedInput, setFocusedInput] = useState("");
  const [selectedOption, setSelectedOption] = useState("Select address");
  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput("");
  };
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  useEffect(() => {
    setSelectedOption("Select address");
  }, [comingValue]);

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
        {svgLogo}{" "}
        <div className="relative flex flex-1 items-center ">
          <Form.Control
            onFocus={() => handleFocus("email")}
            onBlur={handleBlur}
            as="select"
            className="rounded-0 shadow"
            value={valController ? valController : selectedOption}
            onChange={onChangeController ? onChangeController : handleChange}
            id={"selectpl" + idSelect}
            disabled={isInputDisabled ? true : false}
          >
            <option className="d-none" id="0" value="">
              Select {defaultWord ? defaultWord : "address"}
            </option>
            {ListOfValues}
          </Form.Control>
        </div>
        <MdArrowBackIosNew className="aidug78" />
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
export default SelectPulie;
