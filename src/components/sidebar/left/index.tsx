import Link from "next/link"
import Item from "./Item"
import {useState} from "react";
const Left = ()=>{

  const [selectedIndex, setSelectedIndex] = useState(0);
    const handleIndex = (index) => {
        setSelectedIndex(index);
        console.log(index);
    }
    return(
        <div className="h-[calc(100vh-4rem)] col-span-2 hidden sm:hidden md:block">
          <div className="h-12">
            <Link href="/new-chat" className="w-32 flex bg-[#F5F5F5] rounded-full py-2 px-2 mt-1 gap-1">
              <img
                height={24}
                width={24}
                src="/img/icons/plus.svg"
              />
              <h3 className="text-[#52525B] text-base font-bold">New chat</h3>
            </Link>
          </div>
          <div className="h-[calc(100vh-7rem)] overflow-y-scroll">
            <h2 className="text-[#52525B] text-[15px] font-medium">Recent</h2>
            <ul>
              {
                  [0,1,2,3,4,5].map((item, i)=> <Item
                      isSelected={selectedIndex==item}
                      onClick={()=> handleIndex(item)}
                      key={item}
                  />)
              }
            </ul>
            <h2 className="text-[#52525B] text-[15px] font-medium">Last month</h2>
            <ul>
              {
                  [7,8,9,10,11,12,13,14,15].map((item,i)=> <Item
                      isSelected={selectedIndex==item}
                      onClick={()=> handleIndex(item)}
                      key={item}
                  />)
              }
            </ul>
          </div>
        </div>
    )
}
export default Left