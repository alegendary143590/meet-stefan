import Link from "next/link"
import Item from "./Item"
import {useState, useEffect} from "react";
import { useRouter } from "next/router";


interface LeftProps {
  setSelection:(Selection:string|string[]) => void;
  selection: string | string[];
}
const Left = ({selection, setSelection}:LeftProps)=> {
  let [selectedIndex, setSelectedIndex] = useState(selection);
  const [chatHistory, setChatHistory] = useState([]);
  useEffect(()=>{
    if(typeof window !== 'undefined'){
      setChatHistory(JSON.parse(window.localStorage.getItem('chatHistory')));
    }
  },[]);

  const router = useRouter();
  const handleClick = (i) => {
    setSelectedIndex(i);
  }

  useEffect(()=>{
    if((selectedIndex!=='init')&&(selectedIndex!=='new-chat'))
      router.push({
        pathname:`/c/${selectedIndex}`,
        query:{
          id: selectedIndex,
        }
    });
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
          <div className="h-[calc(100vh-7rem)] overflow-y-scroll pt-2">
            <h2 className="text-[#52525B] text-[15px] font-medium">Recent</h2>
            <ul>
              {
                chatHistory.map((item, id)=> <Item
                    isSelected = {selectedIndex === id.toString()}
                    onClick={()=>handleClick(id.toString())}
                    title={item.title}
                    key={id}
                />)
              }
            </ul>
          </div>
        </div>
    )
}
export default Left