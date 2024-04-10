import React from "react";
import style from "../../profile.module.css";
import { Link } from "react-router-dom";

function LinkDocument() {
  return (
    <div>
      <img
        loading="lazy"
        src="/images/completeProfile/complete_Profile_backImg.png"
        className="object-cover fixed inset-0 size-full"
      />

      <div className="flex overflow-hidden relative flex-col  px-20 py-[60px] text-3xl text-white min-h-[130px] rounded-b-3xl max-md:flex-wrap max-md:px-5">
        <img
          loading="lazy"
          src="/images/completeProfile/upper_img.png"
          className="object-cover absolute inset-0 size-full"
        />

        <div className="relative flex-auto my-auto max-md:max-w-full">
          <Link
            to={"/MainProfile"}
            className="border-2 px-4 rounded-[10px] mr-5 } "
          >
            &#10094;
          </Link>
          <span className={`${style.header} `}>Edit Your Profile</span>
        </div>
      </div>
      <div className=" flex justify-center">
        <div className="flex relative justify-center items-center self-center mx-10 px-5 py-12 mt-14 mb-10 w-full text-xs rounded-3xl bg-white bg-opacity-80 max-w-[1099px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col items-center max-w-full w-[1199px]">
            <div
              className={`text-2xl leading-9 text-center text-black} ${style.header}`}
            >
              Links & Documents
            </div>
            <div className="mt-3.5 text-base text-neutral-600">
              Add your links, resume and certificates
            </div>
            <div className="flex flex-col items-start self-stretch px-6 mt-8 max-md:px-5 max-md:max-w-full">
              <div className="flex gap-5 self-stretch text-xs max-md:flex-wrap">
                <div className="flex flex-1 gap-4 px-5 py-3.5 bg-white border border-gray-200 border-solid rounded-[92.207px] max-md:flex-wrap">
                  <img
                    loading="lazy"
                    src="/images/completeProfile/portFolio.png"
                    className="shrink-0 my-auto aspect-square w-[23px]"
                  />
                  <div className="flex flex-col flex-1 max-md:max-w-full">
                    <div className="text-black max-md:max-w-full">
                      Portfolio Link
                    </div>
                    <input
                      className=" outline-none mt-1 border-none text-zinc-500 max-md:max-w-full"
                      type="text"
                      placeholder="Add your portfolio link"
                    />
                  </div>
                </div>
                <div className="flex flex-1 gap-4 px-5 py-3.5 bg-white border border-gray-200 border-solid rounded-[92.207px] max-md:flex-wrap">
                  <img
                    loading="lazy"
                    src="/images/completeProfile/linkdin.png"
                    className="shrink-0 my-auto aspect-square w-[23px]"
                  />
                  <div className="flex flex-col flex-1 max-md:max-w-full">
                    <div className="text-black max-md:max-w-full">
                      LinkedIn Link
                    </div>

                    <input
                      className=" outline-none border-none mt-1 text-zinc-500 max-md:max-w-full"
                      type="text"
                      placeholder="Add your LinkedIn link"
                    />
                  </div>
                </div>
                <div className="flex flex-1 gap-4 px-5 py-3.5 bg-white border border-gray-200 border-solid rounded-[92.207px] max-md:flex-wrap">
                  <img
                    loading="lazy"
                    src="/images/completeProfile/insta.png"
                    className="shrink-0 my-auto aspect-square w-[23px]"
                  />
                  <div className="flex flex-col flex-1 max-md:max-w-full">
                    <div className="text-black max-md:max-w-full">
                      Instagram Link
                    </div>
                    <input
                      className=" outline-none mt-1 border-none text-zinc-500 max-md:max-w-full"
                      type="text"
                      placeholder="Add your Instagram link"
                    />
                  </div>
                </div>
              </div>
              <div
                className={`mt-10 ml-4 text-base text-black max-md:mt-10 max-md:ml-2.5} ${style.header}`}
              >
                Your Resume
              </div>
              <div className="flex gap-5 mt-4 ml-3 max-w-full w-[900px] max-md:flex-wrap">
                <div className="flex grow shrink-0 justify-center items-center px-16 py-5 text-center rounded-xl border border-red-500 border-dashed basis-0 bg-red-500 bg-opacity-10 leading-[153.3%] w-fit max-md:px-5 max-md:max-w-full">
                  <div className="flex flex-col max-w-full w-[148px]">
                    <img
                      loading="lazy"
                      src="/images/completeProfile/upload.png"
                      className="self-center w-5 aspect-[0.67]"
                    />
                    <div className="mt-3 text-xs text-black ">
                      <span className="text-red-500 underline">Browse </span>
                      <span className="text-black">your </span>
                      <span className="text-black">file</span>
                    </div>
                    <div className="mt-2.5 text-xs text-neutral-400">
                      Supports JPEG, PNG, PDF
                    </div>
                  </div>
                </div>
                <div className="flex relative flex-col items-center self-start pb-3 mt-2 bg-sky-200 rounded-xl">
                  <div className=" absolute top-[-7px] end-[-7px] ">
                    <img
                      loading="lazy"
                      src="/images/completeProfile/red_cross.png"
                      className="w-6 aspect-[0.95]"
                    />
                  </div>
                  <div className="flex justify-center items-center self-stretch px-16 py-5 bg-white rounded-xl border-4 border-sky-50 border-solid max-md:px-5">
                    <img
                      loading="lazy"
                      src="/images/completeProfile/pdf.png"
                      className="w-5 aspect-[0.95]"
                    />
                  </div>
                  <div className="mt-1 text-xs py-3 leading-4 text-black whitespace-nowrap">
                    Lorem 01.doc
                  </div>
                  <div className=" text-xs leading-4 whitespace-nowrap text-stone-500">
                    97.47 KB
                  </div>
                </div>
              </div>
              <div
                className={`mt-14 ml-3.5 text-base text-black max-md:mt-10 max-md:ml-2.5} ${style.header}`}
              >
                Your Certifications
              </div>
              <div className="flex gap-5 mt-4 ml-3 max-w-full w-[900px] max-md:flex-wrap">
                <div className="flex grow shrink-0 justify-center items-center px-16 py-7 text-center rounded-xl border border-red-500 border-dashed basis-0 bg-red-500 bg-opacity-10 leading-[153.3%] w-fit max-md:px-5 max-md:max-w-full">
                  <div className="flex flex-col max-w-full w-[149px]">
                    <img
                      loading="lazy"
                      src="/images/completeProfile/upload.png"
                      className="self-center w-5 aspect-[0.67]"
                    />
                    <div className="mt-3 text-xs text-black">
                      <span className="text-red-500 underline">Browse </span>
                      <span className="text-black">your</span> file
                    </div>
                    <div className="mt-2.5 text-xs text-neutral-400">
                      Supports JPEG, PNG, PDF
                    </div>
                  </div>
                </div>
                <div className="flex relative flex-col items-center self-start pb-3 mt-2 bg-sky-200 rounded-xl">
                  <div className=" absolute top-[-7px] end-[-7px] ">
                    <img
                      loading="lazy"
                      src="/images/completeProfile/red_cross.png"
                      className="w-6 aspect-[0.95]"
                    />
                  </div>
                  <div className="flex justify-center items-center self-stretch px-16 py-5 bg-white rounded-xl border-4 border-sky-50 border-solid max-md:px-5">
                    <img
                      loading="lazy"
                      src="/images/completeProfile/pdf.png"
                      className="w-5 aspect-[0.95]"
                    />
                  </div>
                  <div className="mt-1 text-xs py-3 leading-4 text-black whitespace-nowrap">
                    Lorem 01.doc
                  </div>
                  <div className=" text-xs leading-4 whitespace-nowrap text-stone-500">
                    97.47 KB
                  </div>
                </div>
              </div>
              <div className="mt-7 ml-3 text-base italic text-gray-400 max-md:ml-2.5">
                <span className="">
                  Do not have any certifications? Here are few
                </span>
                <Link
                  to={"/CertificationLink"}
                  className="font-bold text-red-500"
                >
                  {" "}
                  links
                </Link>
              </div>
              <Link
                to={"/BackGroundCheck"}
                className="justify-center self-center p-5 mt-20 text-sm text-center  min-w-[590px] text-black bg-amber-300 rounded-[92.207px] max-md:mt-10 max-md:max-w-full"
              >
                Save & Next
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinkDocument;
