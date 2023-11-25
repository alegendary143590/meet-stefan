import { useState } from "react";
import Link from "next/link";
import LeftDrawer from "./drawer/left";
import RightDrawer from "./drawer/right";

const Header = ()=>{
    const [isLeftDrawer, setLeftDrawer] = useState(false)
    const [isRightDrawer, setRightDrawer] = useState(false)

    return(
        <div className="bg-[#FBBF3B] h-16 -mb-1 sm:-mb-1 md:mb-4">
            <div className="flex justify-between px-5">
                <div className="w-full sm:w-full md:w-auto flex items-center justify-between sm:justify-between md:justify-normal gap-0 sm:gap-0 md:gap-5 h-16">
                    <img
                        height={30}
                        width={30}
                        className="order-1 sm:order-1 md:order-3 block sm:block md:hidden"
                        src="/img/icons/chat.svg"
                        onClick={()=>setLeftDrawer(!isLeftDrawer)}
                    />

                    <img
                        height={30}
                        width={30}
                        className="order-3 sm:order-3 md:order-1"
                        src="/img/icons/Hamburger.svg"
                        onClick={()=>setRightDrawer(!isRightDrawer)}
                    />
                    
                    <Link className="block order-2 sm:order-2 md:order-2" href="/">
                        <img
                            height={30}
                            width={95}
                            src="/img/logo.png"
                        />
                    </Link>
                </div>
                <div className="md:flex items-center h-16 gap-3 hidden sm:hidden">
                    <div className="bg-white h-[52px] w-[52px] rounded-full flex items-center justify-center">
                        <img
                            height={24}
                            width={24}
                            src="/img/icons/cup.svg"
                            // className="block mx-auto my-auto"
                        />
                    </div>
                    <div className="bg-white h-[52px] w-auto rounded-full flex items-center justify-center px-1 gap-1">
                        <div>
                            <img
                                height={46}
                                width={46}
                                src="/img/profile.png"
                                // className="block mx-auto my-auto"
                            />
                        </div>
                        <div className="flex flex-col pr-3">
                            <h2 className="tro text-sm font-bold">Usman Zafar</h2>
                            <h5 className="tro text-sm font-normal">usmanzafar089@gmail.com</h5>
                        </div>
                    </div>
                </div>
            </div>
            <LeftDrawer isLeftDrawer={isLeftDrawer} setLeftDrawer={setLeftDrawer}/>
            <RightDrawer isRightDrawer={isRightDrawer} setRightDrawer={setRightDrawer}/>
        </div>
    )
}
export default Header