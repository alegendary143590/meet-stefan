import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Conversation from "../../components/conversation";
import HomeContent from "../../components/content/home";
import NewchatContent from "../../components/content/new_chat";
import Home from "..";

const NewChat = ()=>{

  let [message, setMessage] = useState();
  const router = useRouter();
  
  const  selectedIndex  = router.query._id;
  const query = router.query.text;

  let all_messages:any[] = [];
  if(typeof window !== 'undefined'){
    const chatHistory = localStorage.getItem('chatHistory');
      all_messages = JSON.parse(chatHistory);
      const messages = (all_messages[parseInt(selectedIndex[0])].message);
      console.log(messages);
      message = messages;
  }

  let ContentComponent = Conversation;
  
  if(selectedIndex==="init"){
    ContentComponent = HomeContent;
  }
  if (selectedIndex === "new-chat"){
    ContentComponent = NewchatContent;
  }
  const handleMessage = (data) => {
    // setMessage(preArray => [...preArray, data]);
    // console.log("Item >>>", message);
  }

  // console.log(selectedIndex);

  return (
    <Layout index={selectedIndex}>
        <ContentComponent message={message} />
    </Layout>
  )
}

export default React.memo(NewChat)