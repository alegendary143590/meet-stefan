import React, { ReactNode, useState } from "react"
import Header from "./Header"
import LeftSidebar from "./sidebar/left"
import RightSidebar from "./sidebar/right"
import SearchBar from "./searchbar";


interface LayoutProps {
  children: ReactNode;
  setMessage: (value) =>void;
}

const Layout: React.FC<LayoutProps> = ({ children, setMessage} :LayoutProps) => {
  
  const [soulThoughts, setSoulThoughts] = useState([]);
  const handleMessage = async (data:string) => {

    //Send user message to backend api
    const jsonData = {sender: "user", message:data};
     setMessage(jsonData);
     
     const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({data}),
     })
     .then(response => {
        if(!response.ok){
          throw new Error('Bad gateway');
        }
        console.log(response);
        return response;
     })
     .catch(error => {
      console.error("Error:", error.message);
     });
    
    // Get the res from backend and send it to display
    let done = false;
    let chunks = [];
    //@ts-ignore
    const result = await res.body.getReader();
    console.log(result);
    while(!done){
      const { value, done: isDone} = await result.read();
      const decodedValue = new TextDecoder().decode(value);
      chunks.push(decodedValue);
      if(chunks.length==1){
        setSoulThoughts(preArray => [...preArray, `Stefan feels: ${decodedValue}`]);
        console.log("Stefan feels...");
      }
      if(chunks.length==2){
        setSoulThoughts(preArray => [...preArray, decodedValue]);
        console.log("Stefan decides...");
      }
      if(chunks.length==3){
        setSoulThoughts(preArray => [...preArray, `Stefan sent message: ${decodedValue}`]);
        setMessage({sender:"stefan", message:`${decodedValue}`});
        console.log("Stefan says...");

      }
      done = isDone;
    }


  }
  return (
    <div className="bg-white h-screen overflow-y-hidden">
      <Header/>
      <div className="h-[calc(100vh-4rem)] grid grid-cols-12 mx-auto px-0 sm:px-0 md:px-5">
        <LeftSidebar />
        <div className="h-[calc(100vh-4rem)] col-span-12 sm:col-span-12 md:col-span-7 bg-[#FAFAFA] rounded-xl ml-0 md:ml-2">
          <div className="flex flex-col">
            <div className="h-[calc(100vh-12rem)] overflow-y-scroll">{children}</div>
            <SearchBar onSearch={handleMessage}/>
          </div>
        </div>
        <RightSidebar soulThoughts={soulThoughts}/>
      </div>
    </div>
  );
};

export default Layout;
