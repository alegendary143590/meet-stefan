import Link from "next/link"
import Item from "./Item"
import {useState, useEffect} from "react";
import { useRouter } from "next/router";


interface LeftProps {
  selection: number;
}
const Left = ({selection}:LeftProps )=> {
  const [selectedIndex, setSelectedIndex] = useState(selection);

  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 5, name: "Item 5" }
  ];
  const router = useRouter();
  const handleClick = (i) => {
    setSelectedIndex(i);
  }

  useEffect(() => {
    if (selectedIndex>=0) {
      console.log("item chat ?>>");
      router.push(`/c/${selectedIndex}`);
    } 
  }, [selectedIndex]);



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
                  items.map((item)=> <Item
                      isSelected = {selectedIndex === item.id}
                      onClick={()=>handleClick(item.id)}
                      key={item.id}
                  />)
              }
            </ul>
            <h2 className="text-[#52525B] text-[15px] font-medium">Last month</h2>
            <ul>
              {
                 
              }
            </ul>
          </div>
        </div>
    )
}
export default Left