import { Form } from "react-bootstrap";
import { MdArrowBackIosNew } from "react-icons/md";
import React, { useState, useEffect } from "react";
function DatePickerPulie({
  svgLogo,
  placeHolder,
  bgColor,
  lines,
  maxLen,
  errorP,
  comingValue,
  valController,
  onChangeController,
  reseter,
  idReciver,
  isInputDisabled,
}) {
  const [focusedInput, setFocusedInput] = useState("");
  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput("");
  };
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const yearsRange = 20;

  const generateYearList = () => {
    const yearList = [];
    for (let i = currentYear; i <= currentYear + yearsRange; i++) {
      yearList.push(i);
    }
    return yearList;
  };
  const [selectedOption, setSelectedOption] = useState("Year");
  const [selectedOption1, setSelectedOption1] = useState("Month");
  const [selectedOption2, setSelectedOption2] = useState("Day");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };
  const handleChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };
  useEffect(() => {
    setSelectedOption("Select address");
    setSelectedOption1("Select address");
    setSelectedOption2("Select address");
  }, [comingValue]);

  useEffect(() => {
    // You can add any additional code here if needed
  }, []);

  const yearList = generateYearList();
  const YearOnly = (dateString) => {
    const dateObject = new Date(dateString);
    const year = dateObject.getFullYear();
    return year;
  };
  const MonthOnly = (dateString) => {
    const dateObject = new Date(dateString);
    const monthName = dateObject.toLocaleString("default", { month: "long" });
    return monthName;
  };
  const DayOnly = (dateString) => {
    const dateObject = new Date(dateString);
    const day = dateObject.getDate();
    return day;
  };
  useEffect(() => {
    if (valController) {
      const newyear = YearOnly(valController);
      const newMonth = MonthOnly(valController);
      const newDay = DayOnly(valController);

      setSelectedOption(newyear);
      setSelectedOption1(newMonth);
      setSelectedOption2(newDay);
      reseter("");
    }
  }, [valController]);
  useEffect(() => {
    const monthMapping = {
      January: 1,
      February: 2,
      March: 3,
      April: 4,
      May: 5,
      June: 6,
      July: 7,
      August: 8,
      September: 9,
      October: 10,
      November: 11,
      December: 12,
    };
    if (
      selectedOption !== "Select address" &&
      selectedOption1 !== "Select address" &&
      selectedOption2 !== "Select address" &&
      selectedOption &&
      selectedOption1 &&
      selectedOption2
    ) {
      const monthNumber = monthMapping[selectedOption1];
      onChangeController
        ? onChangeController(
            selectedOption + "-" + monthNumber + "-" + selectedOption2
          )
        : null;
    } else {
      onChangeController ? onChangeController(null) : null;
    }
  }, [selectedOption, selectedOption1, selectedOption2]);
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
            className="show-autofill-new rounded-0 shadow"
            style={{
              textAlign: "center",
              color: isInputDisabled ? "#434242" : "#000000",
            }}
            value={selectedOption}
            onChange={handleChange}
            id={idReciver + "Year"}
            disabled={isInputDisabled ? true : false}
          >
            <option className="d-none" value="">
              Year
            </option>
            {yearList.map((option) => (
              <option key={option}> {option}</option>
            ))}
          </Form.Control>
        </div>
        <MdArrowBackIosNew className="aidug78" />
        <div className="relative flex flex-1 items-center ">
          <Form.Control
            onFocus={() => handleFocus("email")}
            onBlur={handleBlur}
            as="select"
            className="show-autofill-new rounded-0 shadow"
            style={{
              textAlign: "center",
              color: isInputDisabled ? "#434242" : "#000000",
            }}
            value={selectedOption1}
            onChange={handleChange1}
            disabled={isInputDisabled ? true : false}
            id={idReciver + "Month"}
          >
            <option className="d-none" value="">
              Month
            </option>
            {[
              { name: "January", id: 1 },
              { name: "February", id: 2 },
              { name: "March", id: 3 },
              { name: "April", id: 4 },
              { name: "May", id: 5 },
              { name: "June", id: 6 },
              { name: "July", id: 7 },
              { name: "August", id: 8 },
              { name: "September", id: 9 },
              { name: "October", id: 10 },
              { name: "November", id: 11 },
              { name: "December", id: 12 },
            ].map((option) => (
              <option key={option.id}> {option.name}</option>
            ))}
          </Form.Control>
        </div>
        <MdArrowBackIosNew className="aidug78" />
        <div className="relative flex flex-1 items-center ">
          <Form.Control
            onFocus={() => handleFocus("email")}
            onBlur={handleBlur}
            as="select"
            className="show-autofill-new rounded-0 shadow"
            style={{
              textAlign: "center",
              color: isInputDisabled ? "#434242" : "#000000",
            }}
            value={selectedOption2}
            onChange={handleChange2}
            disabled={isInputDisabled ? true : false}
            id={idReciver + "Day"}
          >
            <option className="d-none" value="">
              Day
            </option>
            {Array.from({ length: 31 }, (_, index) => index + 1).map(
              (option) => (
                <option key={option}> {option}</option>
              )
            )}
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
export default DatePickerPulie;
