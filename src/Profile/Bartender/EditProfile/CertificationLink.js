import React from "react";
import { Link } from "react-router-dom";
import style from "../../profile.module.css";

function CertificationLink() {
  return (
    <div>
      <img
        loading="lazy"
        src="/images/completeProfile/complete_Profile_backImg.png"
        className="object-cover fixed inset-0 size-full"
      />
      <div className="flex justify-center relative flex-col  m-20 px-10 w-full rounded-3xl bg-white bg-opacity-80 max-w-[1099px] max-md:px-5 max-md:max-w-full">
      <div className=" flex-auto mt-8  max-md:max-w-full">
          <Link
            to={"/LinkDocument"}
            className="border-2 border-black px-5 py-3  rounded-[10px] mr-5 } "
          >
            &#10094;
          </Link>
          <div className={`mt-[80px] text-2xl  text-center text-black max-md:mt-10} ${style.header}`}>
            Here are some Certification Links
          </div>
          <div className="mt-3.5 text-base text-center text-neutral-600 max-md:mr-2.5">
            Add your links, resume and certificates
          </div>
        </div>
        <div className="mt-14 mb-40 max-md:pr-5 max-md:my-10 max-md:mr-1.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="grow pl-3 w-full rounded-xl bg-stone-300 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[61%] max-md:ml-0 pt-2 pb-2 pr-1 max-md:w-full">
                    <div className="flex z-10 flex-col text-base text-neutral-600 max-md:mt-6">
                      <div className={`text-lg text-black whitespace-nowrap capitalize} ${style.header}`}>
                        Alcohol Safety Training
                       </div>
                      <div className="text-sm" >
                        Get certified for $40 or less
                                            </div>
                      <div className="flex  justify-center w-[150px] mt-2  bg-white bg-opacity-60 rounded-[40.208px] max-md:px-5">
                        <div className="py-1.5 px-2">Learn More</div>
                        <img
                          loading="lazy"
                          src="/images/completeProfile/arrow.png"
                          className="shrink-0 self-start w-5 mt-2 ml-1 aspect-square"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      src="/images/completeProfile/tips.png"
                      className="z-10 grow shrink-0 mt-8 max-w-full aspect-[1.41]  w-[161px] max-md:mt-10"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pl-3 pt-2 pb-2 pr-1 w-full rounded-xl bg-stone-300 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className={`text-lg leading-10 text-black capitalize} ${style.header}`}>
                  United States Bartenders Guild
                 
                </div>
                <div className="flex  text-base text-neutral-600">
                  <div className="flex flex-col text-sm self-start">
                    <div>
                      Come together to Learn, Engage, Achieve and Discover.
                     
                    </div>
                    <div className="flex w-[150px] mt-2 justify-center  bg-white bg-opacity-60 rounded-[40.208px] max-md:px-5">
                      <div className="py-2 px-2">Learn More</div>
                      <img
                        loading="lazy"
                        src="/images/completeProfile/arrow.png"
                        className="shrink-0 my-auto w-5 aspect-square"
                      />
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="/images/completeProfile/unitedStateLogo.png"
                    className="shrink-0 max-w-full aspect-square h-[90px] w-[90px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="grow pt-2 pb-2 pr-1 pl-3 w-full bg-gray-400 rounded-xl max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col text-base text-neutral-600 max-md:mt-10">
                      <div className={`text-lg whitespace-nowrap text-black capitalize} ${style.header}`}>
                        The Bar School
                       
                      </div>
                      <div className="text-sm">
                        Online school training
                                             </div>
                      <div className="flex w-[150px] mt-2  justify-center  bg-white bg-opacity-60 rounded-[40.208px]">
                        <div className="py-1.5 px-2 ">Learn More</div>
                        <img
                          loading="lazy"
                          src="/images/completeProfile/arrow.png"
                          className="shrink-0 self-start mt-2 w-5 aspect-square"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/547c02cc17b5b43fc71b6c2f0a92904afa6ba3f77ba21ede917fcfb9d766192c?apiKey=016313c1f0884bb4ae446bb033c426c2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/547c02cc17b5b43fc71b6c2f0a92904afa6ba3f77ba21ede917fcfb9d766192c?apiKey=016313c1f0884bb4ae446bb033c426c2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/547c02cc17b5b43fc71b6c2f0a92904afa6ba3f77ba21ede917fcfb9d766192c?apiKey=016313c1f0884bb4ae446bb033c426c2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/547c02cc17b5b43fc71b6c2f0a92904afa6ba3f77ba21ede917fcfb9d766192c?apiKey=016313c1f0884bb4ae446bb033c426c2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/547c02cc17b5b43fc71b6c2f0a92904afa6ba3f77ba21ede917fcfb9d766192c?apiKey=016313c1f0884bb4ae446bb033c426c2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/547c02cc17b5b43fc71b6c2f0a92904afa6ba3f77ba21ede917fcfb9d766192c?apiKey=016313c1f0884bb4ae446bb033c426c2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/547c02cc17b5b43fc71b6c2f0a92904afa6ba3f77ba21ede917fcfb9d766192c?apiKey=016313c1f0884bb4ae446bb033c426c2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/547c02cc17b5b43fc71b6c2f0a92904afa6ba3f77ba21ede917fcfb9d766192c?apiKey=016313c1f0884bb4ae446bb033c426c2&"
                      className="grow shrink-0 mt-3.5 max-w-full aspect-[1.75] w-[219px] max-md:mt-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CertificationLink;
