import { useState } from "react";
import WrapperDash from "../../dashboard/WrapperDash";
import style from "../setting.module.css";
import Dropdown from "../../dashboard/Bartender/Dropdown";
import Notification from "../../dashboard/Bartender/Notification";
import { Link } from "react-router-dom";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function FreqAsk() {
  const [showModal, setShowModal] = useState(false);
  const mainModal = <Dropdown></Dropdown>;
  const [showModalnotify, setShowModalnotify] = useState(false);
  const mainModalnotify = <Notification></Notification>;
  return (
    <WrapperDash>
      {showModal && mainModal}
      {showModalnotify && mainModalnotify}
      <div className="flex flex-col grow shrink-0 basis-0 max-md:max-w-full max-w-full">
        <div className="flex flex-col px-5  bg-zinc-50 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between px-5 pb-5 w-full max-md:flex-wrap max-md:pr-5 border-solid border-b-2 max-md:max-w-full">
            <div className=" mt-6 text-3xl ">
              <div className="grow ">
                <Link to={"/SettingMain"}
                className="border-2 border-black rounded-[10px] px-4 ">
                  &#10094;
                </Link>
              </div>
            </div>
            <div className="flex gap-5 pt-3  justify-between">
              <img
                onClick={() =>
                  setShowModalnotify(
                    (setShowModalnotify) => !setShowModalnotify
                  )
                }
                loading="lazy"
                src="/images/completeProfile/yellowNotify.png"
                className="shrink-0 self-start mt-3.5 z-200 aspect-square w-[42px]"
              />
              <div className="flex shadow-lg items-center rounded-lg px-2 border-black gap-3 ">
                <div>
                  {" "}
                  <img
                    loading="lazy"
                    src="/images/completeProfile/user1.png"
                    className="shrink-0 self-start mt-2.5 aspect-square w-[42px]"
                  />
                </div>
                <button
                  onClick={() => setShowModal((setShowModal) => !setShowModal)}
                  className="text-5xl items-center relative bottom-4  "
                >
                  &#751;
                </button>
              </div>
            </div>
          </div>
          {/* <div className="shrink-0 mt-5 h-px border border-solid bg-zinc-100 border-zinc-300 max-md:max-w-full" /> */}
          <div className="flex flex-col px-14 py-9 mt-8 bg-white rounded-3xl shadow-2xl max-md:px-5 max-md:max-w-full">
            <div className="text-[20px] text-black max-md:max-w-full">
              Frequently Asked Questions
            </div>
            <div className="mt-5">
              <Accordion
                style={{ boxShadow: "0px 0px 12px 0px rgba(0, 0, 0, 0.12)" }}
              >
                <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
                  <span className="text-red-500 text-[16px]">
                    {" "}
                    Lorem Ipsum is simply ?
                  </span>
                </AccordionSummary>
                <AccordionDetails className="text-[13px]">
                  Lorem Ipsum is Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum. Lorem
                  Ipsum is Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="mt-5">
              <Accordion
                style={{ boxShadow: "0px 0px 12px 0px rgba(0, 0, 0, 0.12)" }}
              >
                <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
                  <span className="text-red-500 text-[16px]">
                    {" "}
                    Lorem Ipsum is simply ?
                  </span>
                </AccordionSummary>
                <AccordionDetails className="text-[13px]">
                  Lorem Ipsum is Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum. Lorem
                  Ipsum is Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="mt-5">
              <Accordion
                style={{ boxShadow: "0px 0px 12px 0px rgba(0, 0, 0, 0.12)" }}
              >
                <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
                  <span className="text-red-500 text-[16px]">
                    {" "}
                    Lorem Ipsum is simply ?
                  </span>
                </AccordionSummary>
                <AccordionDetails className="text-[13px]">
                  Lorem Ipsum is Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum. Lorem
                  Ipsum is Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="mt-5">
              <Accordion
                style={{ boxShadow: "0px 0px 12px 0px rgba(0, 0, 0, 0.12)" }}
              >
                <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
                  <span className="text-red-500 text-[16px]">
                    {" "}
                    Lorem Ipsum is simply ?
                  </span>
                </AccordionSummary>
                <AccordionDetails className="text-[13px]">
                  Lorem Ipsum is Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum. Lorem
                  Ipsum is Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="mt-5">
              <Accordion
                style={{ boxShadow: "0px 0px 12px 0px rgba(0, 0, 0, 0.12)" }}
              >
                <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
                  <span className="text-red-500 text-[16px]">
                    {" "}
                    Lorem Ipsum is simply ?
                  </span>
                </AccordionSummary>
                <AccordionDetails className="text-[13px]">
                  Lorem Ipsum is Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum. Lorem
                  Ipsum is Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="flex justify-center mt-12">
              <button className="justify-center px-14 py-4 w-[300px] text-[13px] text-center text-black bg-amber-300 rounded-[92.207px]">
               <Link to={"/ChatSupportBart"}> Chat With Support
               </Link>
               
              </button>
            </div>
          </div>
        </div>
      </div>
    </WrapperDash>
  );
}

export default FreqAsk;
