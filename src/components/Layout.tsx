import React, { ReactNode, useState } from "react"
import Header from "./Header"
import LeftSidebar from "./sidebar/left"
import RightSidebar from "./sidebar/right"
import SearchBar from "./searchbar";
import Router, { useRouter } from "next/router";


interface LayoutProps {
  index:string | string[];
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ index, children} :LayoutProps) => {
  
  
  const [itemIndex, setItemIndex] = useState(index);
  let [chatHistory, setChatHistory] = useState('init');
  let [chatItem, setChatItem] = useState([
    { title: "Item... ", message: [{sender:"user", message:"Hi"}], isTitle:true }
  ]);
  const [soulThoughts, setSoulThoughts] = useState([]);
  const router = useRouter();

  function addMessage(value, sender, id){
    
    let storedChatHistory = [];
    if(typeof window!=='undefined'){
      const storedData = localStorage.getItem('chatHistory');
      if(storedData){
        storedChatHistory = JSON.parse(storedData);
      }
      if(storedChatHistory.length>0){
        const targetMessage = storedChatHistory[id].message;
        targetMessage.push({sender: sender, message: value});
      }
      localStorage.setItem(('chatHistory'), JSON.stringify(storedChatHistory));
      
      router.push({
        pathname:`/c/${id}`,
        query:{
          text:value,
        }
      });
    }
    
  }
  const updateChatHistory = (newItem) => {
    let storedChatHistory = [];

    if(typeof window!== 'undefined'){
      const storeData = localStorage.getItem('chatHistory');
      if(storeData){
        storedChatHistory = JSON.stringify(storeData);
      }
    }
    // Create a copy of the current chat history array
    const updatedChatHistory = [...chatHistory];

    // Add the new item to the beginning of the array
    updatedChatHistory.unshift(newItem);

    // Update the state with the modified chat history
    setChatItem(updatedChatHistory);

    // Update local storage with the modified chat history
    localStorage.setItem('chatHistory', JSON.stringify(updatedChatHistory));
  };
  const handleMessage = async (data:string) => {
    
    if (index == 'init'||index=='new-chat'){
      // setConversationItem(arrayItem=>
      //   [{name:"New Conversation...", message:[], isTitle:false}, ...arrayItem]
      // );
      index='0';
      setItemIndex(index);
      // addMessage(data, "user", 0);  
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
      <Header/>
      <div className="h-[calc(100vh-4rem)] grid grid-cols-12 mx-auto px-0 sm:px-0 md:px-5">
        <LeftSidebar selection={itemIndex} />
        <div className="h-[calc(100vh-4rem)] col-span-12 sm:col-span-12 md:col-span-7 bg-[#FAFAFA] rounded-xl ml-0 md:ml-2">
          <div className="flex flex-col">
            <div className="h-[calc(100vh-12rem)] overflow-y-scroll">{children}</div>
            <SearchBar onSearch={handleMessage} />
          </div>
        </div>
        <RightSidebar soulThoughts={soulThoughts} />
      </div>
    </div>
  );
};

export default Layout;
