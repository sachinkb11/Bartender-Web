import { useState } from "react";
import * as React from "react";
import WrapperDash from "../../dashboard/WrapperDash";
import Dropdown from "../../dashboard/Bartender/Dropdown";
import Notification from "../../dashboard/Bartender/Notification";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { render } from "@testing-library/react";
import Report from "./Report";
import Block from "./Block";

function ChatBrt(props) {
  const [showModal, setShowModal] = useState(false);
  const mainModal = <Dropdown></Dropdown>;
  const [showModalnotify, setShowModalnotify] = useState(false);
  const mainModalnotify = <Notification></Notification>;



  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <WrapperDash>
      {showModal && mainModal}
      {showModalnotify && mainModalnotify}


      <div className="flex gap-5 justify-between px-5 pb-5  max-md:flex-wrap max-md:pr-5 border-solid border-b-2 max-md:max-w-full">
        <div className="flex gap-5 my-auto text-4xl font-semibold tracking-tighter text-yellow-400 whitespace-nowrap leading-[58.8px]">
          <div className="grow pt-3 my-auto">
            <span className=" text-neutral-700 uppercase font-[BebasNeue] ">
              chat
            </span>
          </div>
        </div>
        <div className="flex gap-5 pt-3 justify-between">
          <img
            onClick={() =>
              setShowModalnotify((setShowModalnotify) => !setShowModalnotify)
            }
            loading="lazy"
            src="/images/completeProfile/yellowNotify.png"
            className="shrink-0 self-start mt-4 aspect-square w-[42px]"
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

      <div className="flex gap-4 mt-5">
        {/* first */}
        <div className="   p-4 bg-white rounded-3xl shadow-2xl max-w-[380px]">
          <div className="grid grid-cols-1 xl:grid-cols-2 flex gap-5 px-1 py-1 text-sm leading-5 whitespace-nowrap bg-white border border-gray-200 border-solid rounded-[100px]">
            <div className=" justify-center px-12 py-4 font-medium text-center text-white bg-red-500 rounded-[100px] max-md:px-5">
              Bartenders
            </div>
            <div className="flex-auto my-auto px-6 pb-2 pt-3 text-neutral-700">
              Establishments
            </div>
          </div>
          <div className="flex gap-2 px-6 py-5  mt-5 text-base leading-6 rounded-xl bg-neutral-100 text-stone-300 max-md:px-5 max-md:mx-2.5">
            <img
              loading="lazy"
              src="/images/search.png"
              className="shrink-0 aspect-square w-[15px] py-1"
            />
            <div className="flex-auto ">Search Here</div>
          </div>
          <div className="flex gap-0 self-center mt-7">
            <img
              loading="lazy"
              src="/images/chat1.png"
              className="shrink-0 self-start rounded-full aspect-square w-[52px]"
            />
            <div className="flex flex-col grow shrink-0 px-5 basis-0 w-fit">
              <div className="flex gap-5 justify-between leading-[160%]">
                <div className="text-base text-black">Wanda Dean</div>
                <div className="text-xs text-stone-300">An hour ago</div>
              </div>
              <div className="mt-2 text-sm leading-6 text-stone-500">
                Let have a meeting.. I will be available around 8pm.
              </div>
            </div>
          </div>
          <div className="flex z-10 gap-1  mt-5 bg-amber-300 bg-opacity-10 max-md:pr-5">
            <img
              loading="lazy"
              src="/images/chat2.png"
              className="shrink-0 self-start rounded-full aspect-square w-[52px]"
            />
            <div className="flex flex-col grow shrink-0 px-5 basis-0 w-fit">
              <div className="flex gap-5 justify-between leading-[160%]">
                <div className="text-base text-black">Wanda Dean</div>
                <div className="text-xs text-stone-300">An hour ago</div>
              </div>
              <div className="mt-2 text-sm leading-6 text-stone-500">
                Lorem Ipsum is simply dummy text of the the industry's standard
                dummy text
              </div>
            </div>
          </div>
          <div className="flex gap-0 self-center mt-7">
            <img
              loading="lazy"
              src="/images/chat3.png"
              className="shrink-0 self-start rounded-full aspect-square w-[52px]"
            />
            <div className="flex flex-col grow shrink-0 px-5 basis-0 w-fit">
              <div className="flex gap-5 justify-between leading-[160%]">
                <div className="text-base text-black">Wanda Dean</div>
                <div className="text-xs text-stone-300">An hour ago</div>
              </div>
              <div className="mt-2 text-sm leading-6 text-stone-500">
                Let have a meeting.. I will be available around 8pm.
              </div>
            </div>
          </div>
          <div className="flex gap-1 self-center mt-7">
            <img
              loading="lazy"
              src="/images/chat4.png"
              className="shrink-0 self-start rounded-full aspect-square w-[52px]"
            />
            <div className="flex flex-col grow shrink-0 px-5 basis-0 w-fit">
              <div className="flex gap-5 justify-between leading-[160%]">
                <div className="text-base text-black">Wanda Dean</div>
                <div className="text-xs text-stone-300">An hour ago</div>
              </div>
              <div className="mt-2 text-sm leading-6 text-stone-500">
                Let have a meeting.. I will be available around 8pm.
              </div>
            </div>
          </div>
          <div className="flex gap-0 self-center mt-7">
            <img
              loading="lazy"
              src="/images/chat2.png"
              className="shrink-0 self-start rounded-full aspect-square w-[52px]"
            />
            <div className="flex flex-col grow shrink-0 px-5 basis-0 w-fit">
              <div className="flex gap-5 justify-between leading-[160%]">
                <div className="text-base text-black">Wanda Dean</div>
                <div className="text-xs text-stone-300">An hour ago</div>
              </div>
              <div className="mt-2 text-sm leading-6 text-stone-500">
                Let have a meeting.. I will be available
                <br />
                around 8pm.
              </div>
            </div>
          </div>
          <div className="flex gap-3.5 self-center mt-7">
            <img
              loading="lazy"
              src="/images/chat1.png"
              className="shrink-0 self-start rounded-full aspect-square w-[52px]"
            />
            <div className="flex flex-col grow shrink-0 px-5 basis-0 w-fit">
              <div className="flex gap-5 justify-between leading-[160%]">
                <div className="text-base text-black">Wanda Dean</div>
                <div className="text-xs text-stone-300">An hour ago</div>
              </div>
              <div className="mt-2 text-sm leading-6 text-stone-500">
                Let have a meeting.. I will be available around 8pm.
              </div>
            </div>
          </div>
        </div>
        {/* second */}
        <div className="bg-white p-4 pt-5   rounded-3xl shadow-2xl w-full min-h-[806px]">
          <div className="flex flex-col px-5 max-w-[993px]">
            <div className="flex gap-5   justify-between border-b-2 pb-3 max-md:flex-wrap ">
              <div className="flex gap-4 ">
                <img
                  loading="lazy"
                  src="/images/chat2.png"
                  className="shrink-0 rounded-full aspect-square w-[60px]"
                />
                <div className="flex flex-col ">
                  <div className="text-lg text-black">Wanda Dean</div>
                  <div className="self-start  text-xs text-emerald-400 max-md:ml-2.5">
                    <span className="mr-[4px] text-sm">&#x2022;</span>
                    Online
                  </div>
                </div>
              </div>
              <Button variant="primary" onClick={() => setModalShow(setModalShow=>!setModalShow)} >
              &#x2022;&#x2022;&#x2022;
              </Button>

              <MyVerticallyCenteredModal
                className="fixed top-[220px] z-10 right-[95px] "
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>

            <div className="self-center mt-10 text-sm leading-6 text-zinc-500">
              Yesterday
            </div>
            <div className="flex gap-2 self-start mt-1.5 text-base leading-7 text-black max-md:flex-wrap">
              <img
                loading="lazy"
                src="/images/chat1.png"
                className="shrink-0 self-start mt-3 rounded-full aspect-square w-[30px]"
              />
              <div className="grow shrink-0 px-3.5 p-3 rounded-3xl bg-neutral-100 max-md:pr-5 max-w-[450px] max-md:max-w-full">
                Cool, let's talk about it later, shall we? This is going to be a
                huge!! We already sent you the details bro.
              </div>
            </div>
            <div className="flex flex-col pl-14 mt-1 w-full max-md:pl-5 max-md:max-w-full">
              <div className="text-sm leading-6 text-stone-500 max-md:max-w-full">
                15:30
              </div>
              <div className="justify-center items-start self-end p-3 mt-1 max-w-full text-base leading-7 text-black bg-amber-300 rounded-3xl w-[433px] max-md:px-5">
                Cool, let's talk about it later, shall we? This is going to be a
                huge!! We already sent
              </div>
            </div>
            <div className="text-sm text-end mr-4 mt-1 leading-6 text-stone-500">
              15:30
            </div>

            <div className="flex gap-5 justify-between items-start mt-1 w-full max-md:flex-wrap max-md:max-w-full">
              <div className="flex gap-2 mt-1.5 text-base leading-7 text-black max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="/images/chat1.png"
                  className="shrink-0 self-start mt-3.5 rounded-full aspect-square w-[30px]"
                />
                <div className="grow p-3 pb-2.5 rounded-3xl bg-neutral-100 max-w-[450px] max-md:max-w-full">
                  Ok.. Will send you and John the meeting invite on your mail.
                </div>
              </div>
            </div>
            <div className="text-sm ml-14 mt-1 leading-6 text-stone-500">
              15:30
            </div>

            <div className="flex flex-col pl-14 mt-2.5 w-full max-md:pl-5 max-md:max-w-full">
              <div className="justify-center self-end p-3 mt-1.5 max-w-full text-base leading-7 text-black bg-amber-300 rounded-3xl w-[432px] max-md:px-5">
                Ok.. See you in the meeting.. I will be good if John be in the
                meeting.. He has to be there.!
              </div>
            </div>
            <div className="text-sm text-end mr-3 mt-1 leading-6 text-stone-500">
              15:30
            </div>
            <div className="flex gap-5 justify-between mt-4 max-w-[450px] max-md:flex-wrap max-md:max-w-full">
              <div className="flex gap-2 text-base leading-7 text-black max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="/images/chat2.png"
                  className="shrink-0 self-start mt-2 rounded-full aspect-square w-[30px]"
                />
                <div className="grow justify-center p-3 rounded-3xl bg-neutral-100 w-fit max-md:max-w-full">
                  Ok.. Will send you and John the meeting invite on your mail.
                </div>
              </div>
            </div>
            <div className="self-start mt-1 ml-14 text-sm leading-6 text-stone-500 max-md:ml-2.5">
              15:30
            </div>
            <div className="flex  justify-between px-7 py-4 mt-10 w-full text-base leading-6 rounded-3xl bg-neutral-100 text-stone-500 text-opacity-109 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
              <div className="flex gap-2">
                <img
                  loading="lazy"
                  src="/images/chatEmoji.png"
                  className="shrink-0 aspect-square w-[23px]"
                />
                <div className="flex-auto my-auto"></div>
                <input
                  className="w-[400px] bg-neutral-100 outline-none border-none"
                  type="text"
                  placeholder="Yeah, Me too! Let’s go out tonight."
                />
              </div>
              <img
                loading="lazy"
                src="/images/chatEnter.png"
                className="shrink-0 self-start aspect-[1.1] fill-black w-[23px]"
              />
            </div>
          </div>
        </div>
      </div>
    </WrapperDash>
  );
}

export default ChatBrt;

function MyVerticallyCenteredModal(props) {
  const [showModalReport, setShowReport] = useState(false);
  const mainModalReport = <Report></Report>;

  const [showModalBlock, setShowBlock] = useState(false);
  const mainModalBlock = <Block></Block>;
  return (
    
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
      {showModalReport && mainModalReport}
      {showModalBlock && mainModalBlock}

      <div className="flex flex-col justify-center px-5 py-5 text-xl leading-8 whitespace-nowrap bg-white rounded-xl border border-solid border-stone-300 max-w-[190px]">
        <Button className="text-red-500"  onClick={() =>
              setShowBlock((setShowBlock) => !setShowBlock)
            } >
          Block
        </Button>
       
        <div className="shrink-0 my-3 h-px border border-solid bg-zinc-300 border-zinc-300" />
        <Button onClick={() =>
              setShowReport((setShowReport) => !setShowReport)
            }>Report</Button>
      </div>
    </Modal>
  );
}
