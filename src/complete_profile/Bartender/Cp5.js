import { Link } from "react-router-dom";
import Wrappers from "./Wrappers";
import styles from "./cp.module.css";
function Cp5() {
  return (
    <Wrappers>
      <div className="flex relative flex-col py-8 pr-5 w-full max-w-[1599px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col items-end max-w-full text-5xl whitespace-nowrap pl-10 w-[921px]">
        <Link
          className="self-start aspect-square border border-2 border-black rounded-lg h-12 w-12"
              to="/cp4"
            >
             &#60;
            </Link>
        </div>
        <div
          className={`mt-20 text-2xl leading-9 text-center text-black max-md:mt-10} ${styles.header}`}
        >
          Here are some Certification Links
        </div>
        <div className=" mr-10 text-base text-neutral-600 max-md:mr-2.5">
          Add your links, resume and certificates
        </div>
        <div className="px-5 mt-[80px] mb-[80px]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col ml-5 w-[33%] h-[190px] max-md:ml-0 max-md:w-full">
              <div className="grow pt-5  pl-5 w-full bg-gray-400 rounded-xl max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col text-base text-neutral-600 max-md:mt-10">
                      <div
                        className={`text-2xl w-[190px] text-left text-black capitalize} ${styles.headerss}`}
                      >
                        The Bar School
                      </div>
                      <div className="w-[230px] text-left tracking-tighter">
                        Get certified for $40 or less
                        <br />
                        <br />
                      </div>
                      <div className="flex justify-between px-3 py-1.5 w-[140px] whitespace-nowrap bg-white bg-opacity-60 rounded-[40.208px]">
                        <Link to={"/cp6"} className="grow text-left pl-1 text-sm">
                          Learn More
                        </Link>
                        <img
                          loading="lazy"
                          src="/images/completeProfile/arrow.png"
                          className="self-start w-5 aspect-square"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-8 mt-5 max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      src="/images/completeProfile/tips.png"
                      className="grow mt-3.5 mb-3 max-w-full aspect-[1.75]   max-md:mt-10"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] h-[190px] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-4 pt-6 w-full rounded-xl bg-stone-300 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div
                  className={`text-2xl text-left text-black capitalize} ${styles.headerss}`}
                >
                  United States Bartenders Guild
                </div>
                <div className="flex  justify-between text-left  text-neutral-600">
                  <div className=" text-left tracking-tighter text-[14px] whitespace-nowrap">
                    Come together to Learn, Engage,
                    <div className=" text-left tracking-tighter">
                      Achieve and Discover.
                    </div>
                    <div className="flex gap-3 justify-between px-4 pr-10 w-[140px] mr-9 py-1.5 mt-3.5 bg-white bg-opacity-60 rounded-[40.208px] max-md:px-5">
                      <Link to={"/cp6"} className="text-sm">Learn More</Link>
                      <img
                        loading="lazy"
                        src="/images/completeProfile/arrow.png"
                        className=" w-5 aspect-square"
                      />
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="/images/completeProfile/unitedStateLogo.png"
                    className=" aspect-square mt-4 w-[90px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] h-[190px] max-md:ml-0 max-md:w-full">
              <div className="grow py-3 pr-2 pl-5 w-full bg-gray-400 rounded-xl max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col text-base text-neutral-600 max-md:mt-10">
                      <div
                        className={`text-2xl leading-10 w-[190px] text-left text-black capitalize ${styles.headerss}`}
                      >
                        The Bar School
                      </div>
                      <div className="w-[200px] tracking-tighter text-left">
                        Online school training
                        <br />
                        <br />
                      </div>
                      <div className="flex w-[140px] justify-between px-5 py-1.5 whitespace-nowrap bg-white bg-opacity-60 rounded-[40.208px]">
                        <Link to={"/cp6"} className="text-sm">Learn More</Link>
                        <img
                          loading="lazy"
                          src="/images/completeProfile/arrow.png"
                          className="self-start ml-3 w-5 aspect-square"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/547c02cc17b5b43fc71b6c2f0a92904afa6ba3f77ba21ede917fcfb9d766192c?apiKey=016313c1f0884bb4ae446bb033c426c2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/547c02cc17b5b43fc71b6c2f0a92904afa6ba3f77ba21ede917fcfb9d766192c?apiKey=016313c1f0884bb4ae446bb033c426c2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/547c02cc17b5b43fc71b6c2f0a92904afa6ba3f77ba21ede917fcfb9d766192c?apiKey=016313c1f0884bb4ae446bb033c426c2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/547c02cc17b5b43fc71b6c2f0a92904afa6ba3f77ba21ede917fcfb9d766192c?apiKey=016313c1f0884bb4ae446bb033c426c2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/547c02cc17b5b43fc71b6c2f0a92904afa6ba3f77ba21ede917fcfb9d766192c?apiKey=016313c1f0884bb4ae446bb033c426c2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/547c02cc17b5b43fc71b6c2f0a92904afa6ba3f77ba21ede917fcfb9d766192c?apiKey=016313c1f0884bb4ae446bb033c426c2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/547c02cc17b5b43fc71b6c2f0a92904afa6ba3f77ba21ede917fcfb9d766192c?apiKey=016313c1f0884bb4ae446bb033c426c2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/547c02cc17b5b43fc71b6c2f0a92904afa6ba3f77ba21ede917fcfb9d766192c?apiKey=016313c1f0884bb4ae446bb033c426c2&"
                      className="grow mt-5 max-w-full aspect-[1.75] w-[200px] h-[100px] max-md:mt-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrappers>
  );
}
export default Cp5;
