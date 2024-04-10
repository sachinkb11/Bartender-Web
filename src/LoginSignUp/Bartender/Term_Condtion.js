import * as React from "react";
import styels from '../../styles/termCondtion.module.css'
import { useNavigate } from "react-router-dom";
export default function TermCondition(props) {
    const navigate = useNavigate()
    function goToSignUp(){
        navigate("/signup")
    }
    return (
        <div className={styels.mainContainer}>
            <div className={styels.container}>
            </div>
            <div className={styels.childBox}>
                <div className={styels.textContain}>
                    <div className="flex gap-4 mt-3  max-w-full text-3xl tracking-widest  max-md:flex-wrap">
                       <button className="border border-1 border-black rounded-lg w-10" onClick={goToSignUp}>&lt;</button>
                        <div className="flex-auto my-auto">
                            <span className="text-black">Terms and </span>
                            <span className="text-red-500">Condition</span>
                        </div>
                    </div>
                    <div className="mt-11 text-left max-md:mt-10 max-md:max-w-full">
                        Lorem ipsum dolor sit amet consectetur. Posuere bibendum pellentesque at
                        sit integer tristique maecenas. Tristique at vitae purus scelerisque morbi
                        eu nunc porta id. Pellentesque in massa id faucibus. Eget ac id et id
                        neque nulla odio. Lorem quis non nulla sed sed nibh maecenas quam. Arcu
                        rhoncus tincidunt bibendum sed. Pellentesque vel egestas proin non. A nisl
                        vehicula ut purus etiam sit viverra sed consectetur. Lorem ipsum dolor sit
                        amet consectetur. Posuere bibendum pellentesque at sit integer tristique
                        maecenas. Tristique at vitae purus scelerisque morbi eu nunc porta id.
                        Pellentesque in massa id faucibus. Eget ac id et id neque nulla odio.
                        Lorem quis non nulla sed sed nibh maecenas quam. Arcu rhoncus tincidunt
                        bibendum sed. Pellentesque vel egestas proin non. A nisl vehicula ut purus
                        etiam sit viverra sed consectetur.
                    </div>
                    <div className="mt-8 text-left max-md:max-w-full">
                        Lorem ipsum dolor sit amet consectetur. Posuere bibendum pellentesque at
                        sit integer tristique maecenas. Tristique at vitae purus scelerisque morbi
                        eu nunc porta id. Pellentesque in massa id faucibus. Eget ac id et id
                        neque nulla odio. Lorem quis non nulla sed sed nibh maecenas quam. Arcu
                        rhoncus tincidunt bibendum sed. Pellentesque vel egestas proin non. A nisl
                        vehicula ut purus etiam sit viverra sed consectetur. Lorem ipsum dolor sit
                        amet consectetur. Posuere bibendum pellentesque at sit integer tristique
                        maecenas. Tristique at vitae purus scelerisque morbi eu nunc porta id.
                        Pellentesque in massa id faucibus. Eget ac id et id neque nulla odio.
                        Lorem quis non nulla sed sed nibh maecenas quam. Arcu rhoncus tincidunt
                        bibendum sed. Pellentesque vel egestas proin non. A nisl vehicula ut purus
                        etiam sit viverra sed consectetur.
                    </div>    
                    <div className="mt-8 text-left max-md:max-w-full">
                        Lorem ipsum dolor sit amet consectetur. Posuere bibendum pellentesque at
                        sit integer tristique maecenas. Tristique at vitae purus scelerisque morbi
                        eu nunc porta id. Pellentesque in massa id faucibus. Eget ac id et id
                        neque nulla odio. Lorem quis non nulla sed sed nibh maecenas quam. Arcu
                        rhoncus tincidunt bibendum sed. Pellentesque vel egestas proin non. A nisl
                        vehicula ut purus etiam sit viverra sed consectetur. Lorem ipsum dolor sit
                        amet consectetur. Posuere bibendum pellentesque at sit integer tristique
                        maecenas. Tristique at vitae purus scelerisque morbi eu nunc porta id.
                        Pellentesque in massa id faucibus. Eget ac id et id neque nulla odio.
                        Lorem quis non nulla sed sed nibh maecenas quam. Arcu rhoncus tincidunt
                        bibendum sed. Pellentesque vel egestas proin non. A nisl vehicula ut purus
                        etiam sit viverra sed consectetur.
                    </div>    
                </div>
            </div>
        </div>



    );
}


