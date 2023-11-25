import React, {useState, useEffect} from "react"

import Item from "../../sidebar/left/Item"
import Link from "next/link"
import { useRouter } from "next/router"

interface DrawerProps {
    isLeftDrawer: boolean
    setLeftDrawer: (isOpen: boolean) => void
}

const LeftDrawer:React.FC<DrawerProps> = ({ isLeftDrawer, setLeftDrawer  })=>{
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const router = useRouter();
    const handleClick = (i) => {
        // setSelectedIndex(i);
    }

    // useEffect(() => {
    //     if (selectedIndex>=0) {
    //       console.log("item chat ?>>");
    //       router.push(`/c/${selectedIndex}`);
    //     } 
    //   }, [selectedIndex]);


    return(
        <div
            id="drawer"
            className={`${
                isLeftDrawer ? 'translate-x-0' : '-translate-x-full'
            } fixed top-0 left-0 w-full h-full shadow-lg transform transition-transform duration-300 ease-in-out`}
            style={{zIndex:1000}}
        >
            <div className="flex h-full z-10">
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
                       
                        <div className="h-5/6 overflow-y-scroll scroll-hidden px-3">
                            <h2 className="text-[#52525B] text-[15px] font-medium">Recent</h2>
                            <ul>
                                {
                                    [0].map((item, i)=> <Item
                                        title="Item..."
                                        isSelected = {selectedIndex === item}
                                        onClick={()=>handleClick(item)}
                                        key={item}
                                    />)
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="absolute block sm:block md:hidden top-1/2 right-[-25px]" style={{marginRight:"5px"}}>
                        <div 
                            onClick={()=>setLeftDrawer(!isLeftDrawer)} 
                            className="w-[50px] h-[50px] flex justify-center items-center bg-white rounded-full cursor-pointer"
                        >
                            <img
                                style={{marginLeft:"15px"}}
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