import React, { ReactNode, useState, useEffect, useRef } from "react"
import Header from "./Header"
import LeftSidebar from "./sidebar/left"
import RightSidebar from "./sidebar/right"
import SearchBar from "./searchbar";
import Router, { useRouter } from "next/router";


interface LayoutProps {
  thoughts?: string[];
  index?: string | string[];
  children?: ReactNode;
  typeMessage?: any;
}

const Layout = ({ index, children, thoughts, typeMessage }: LayoutProps) => {


  const [itemIndex, setItemIndex] = useState(index);
  const refEndMessage = useRef(null);
  const [soulThoughts, setSoulThoughts] = useState(thoughts);
  const router = useRouter();

  function addMessage(value, sender, id) {

    let storedChatHistory = [];
    if (typeof window !== 'undefined') {

      const storedData = localStorage.getItem('chatHistory');

      if (storedData) {
        storedChatHistory = JSON.parse(storedData);
      }

      if (storedChatHistory.length > 0) {
        const targetMessage = storedChatHistory[id].message;
        targetMessage.push({ sender: sender, message: value });
      }

      localStorage.setItem(('chatHistory'), JSON.stringify(storedChatHistory));

      router.push({
        pathname: `/c/${id}`,
        query: {
          text: value,
        }
      });
    }
  }
  const scrollToBottomMessage = () => {
    refEndMessage.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(()=>{
    scrollToBottomMessage();
  },[thoughts])
  const updateChatHistory = (newItem) => {
    if (typeof window !== 'undefined') {
      const existingArray = localStorage.getItem('chatHistory');
      let myArray = [];
      if (existingArray) {
        myArray = JSON.parse(existingArray);
      }

      myArray.unshift(newItem);
      localStorage.setItem('chatHistory', JSON.stringify(myArray));
      console.log('Successfully saved!');
    }
  };
  const handleMessage = async (data: string) => {

    if (index == 'init' || index == 'new-chat') {
      index = '0';

      const updateData = {
        title: data.substring(0, 20) + '...',
        message: [
          {
            sender: 'user',
            message: data,
          }
        ],
        thoughts: [],
        isTitle: true,
      };
      updateChatHistory(updateData);
      setItemIndex(index);
      router.push({
        pathname: `/c/${index}`,
        query: {
          text: data,
        }
      });
    }

    else {
      typeMessage({ sender: "user", message: data });
    }


  }
  return (
    <div className="bg-white h-screen overflow-y-hidden">
      <Header />
      <div className="h-[calc(100vh-4rem)] grid grid-cols-12 mx-auto px-0 sm:px-0 md:px-5">
        <LeftSidebar selection={itemIndex} setSelection={setItemIndex} />
        <div className="h-[calc(100vh-4rem)] col-span-12 sm:col-span-12 md:col-span-7 bg-[#FAFAFA] rounded-xl ml-0 md:ml-2">
          <div className="flex flex-col ">
            <div className="h-[calc(100vh-12rem)] overflow-y-scroll">
              {children}
              <div ref={refEndMessage} />
            </div>
            <SearchBar itemIndex={itemIndex} onSearch={handleMessage} />
          </div>
        </div>
        <RightSidebar itemIndex={itemIndex} soulThoughts={soulThoughts} />
      </div>
    </div>
  );
};

export default Layout;
