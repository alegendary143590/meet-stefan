import React, { ReactNode, useState } from "react"
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
  let [chatHistory, setChatHistory] = useState('init');
  let [chatItem, setChatItem] = useState([
    { title: "Item... ", message: [{ sender: "user", message: "Hi" }], isTitle: true }
  ]);
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
        title: data.substring(0, 10) + '...',
        message: [
          {
            sender: 'user',
            message: data,
          }
        ],
        thoughts: [
          "I think he is asking me what I can do for him.",
          "So I will do the best as possible."
        ],
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

    //Send user message to backend api
    // const jsonData = {sender: "user", message:data};
    //  setMessage(jsonData);

    //  const res = await fetch('/api/send', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({data}),
    //  })
    //  .then(response => {
    //     if(!response.ok){
    //       throw new Error('Bad gateway');
    //     }
    //     console.log(response);
    //     return response;
    //  })
    //  .catch(error => {
    //   console.error("Error:", error.message);
    //  });

    // // Get the res from backend and send it to display
    // let done = false;
    // let chunks = [];
    // //@ts-ignore
    // const result = await res.body.getReader();
    // console.log(result);
    // while(!done){
    //   const { value, done: isDone} = await result.read();
    //   const decodedValue = new TextDecoder().decode(value);
    //   chunks.push(decodedValue);
    //   if(chunks.length==1){
    //     setSoulThoughts(preArray => [...preArray, `Stefan feels: ${decodedValue}`]);
    //     console.log("Stefan feels...");
    //   }
    //   if(chunks.length==2){
    //     setSoulThoughts(preArray => [...preArray, decodedValue]);
    //     console.log("Stefan decides...");
    //   }
    //   if(chunks.length==3){
    //     setSoulThoughts(preArray => [...preArray, `Stefan sent message: ${decodedValue}`]);
    //     setMessage({sender:"stefan", message:`${decodedValue}`});
    //     console.log("Stefan says...");
    //   }
    //   done = isDone;
    // }


  }
  return (
    <div className="bg-white h-screen overflow-y-hidden">
      <Header />
      <div className="h-[calc(100vh-4rem)] grid grid-cols-12 mx-auto px-0 sm:px-0 md:px-5">
        <LeftSidebar selection={itemIndex} setSelection={setItemIndex} />
        <div className="h-[calc(100vh-4rem)] col-span-12 sm:col-span-12 md:col-span-7 bg-[#FAFAFA] rounded-xl ml-0 md:ml-2">
          <div className="flex flex-col">
            <div className="h-[calc(100vh-12rem)] overflow-y-scroll">{children}</div>
            <SearchBar itemIndex={itemIndex} onSearch={handleMessage} />
          </div>
        </div>
        <RightSidebar itemIndex={itemIndex} soulThoughts={soulThoughts} />
      </div>
    </div>
  );
};

export default Layout;
