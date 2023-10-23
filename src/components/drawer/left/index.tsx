import React from "react"

import Item from "../../sidebar/left/Item"
import Link from "next/link"

interface DrawerProps {
    isLeftDrawer: boolean
    setLeftDrawer: (isOpen: boolean) => void
}

const LeftDrawer:React.FC<DrawerProps> = ({ isLeftDrawer, setLeftDrawer  })=>{
    return(
        <div
            id="drawer"
            className={`${
                isLeftDrawer ? 'translate-x-0' : '-translate-x-full'
            } fixed top-0 left-0 w-full h-full shadow-lg transform transition-transform duration-300 ease-in-out`}
        >
            <div className="flex h-full">
                <div className="w-9/12 bg-white relative">
                    <div className="h-full pt-2 pl-2">
                        <div className="h-1/6">
                            <Link href="/new-chat" className="w-40 flex bg-[#F5F5F5] rounded-full py-2 px-2 mt-1 gap-1">
                                <img
                                    height={24}
                                    width={24}
                                    src="/img/icons/plus.svg"
                                />
                                <h3 className="text-[#52525B] text-base font-bold">New chat</h3>
                            </Link>
                        </div>
                       
                        <div className=" h-5/6 overflow-y-scroll">
                            <h2 className="text-[#52525B] text-[15px] font-medium">Recent</h2>
                            <ul>
                                {
                                    [0,1,2,3,4,5,6,7,8,9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((item)=> <Item
                                        key={item}
                                    />)
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="absolute block sm:block md:hidden top-1/2 right-[-25px]">
                        <div 
                            onClick={()=>setLeftDrawer(!isLeftDrawer)} 
                            className="w-[50px] h-[50px] flex justify-center items-center bg-white rounded-full cursor-pointer"
                        >
                            <img
                                height={22}
                                width={22}
                                src="/img/icons/left-arrow.svg"
                            />
                        </div>
                    </div>
                </div>
                <div 
                    onClick={()=>setLeftDrawer(!isLeftDrawer)} 
                    className="w-3/12 min-w-fit min-h-fit bg-disable"
                >        
                </div>
            </div>
        </div>
    )
}
export default LeftDrawer