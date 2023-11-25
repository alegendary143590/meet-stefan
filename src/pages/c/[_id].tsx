import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Conversation from "../../components/conversation";
import HomeContent from "../../components/content/home";
import NewchatContent from "../../components/content/new_chat";
import Home from "..";

const NewChat = () => {

  let [message, setMessage] = useState([]);
  let [soulThoughts, setSoulThoughts] = useState(["HI", "If done"]);
  const router = useRouter();

  let selectedIndex;
  let index = 0;

  try {
    selectedIndex = router.query._id;
    // console.log("selectedIndex", selectedIndex);
    index = parseInt(selectedIndex['0']);
  } catch (err) {
    index = 0;
  }


  const query = router.query.text;
  let ContentComponent = Conversation;

  let all_messages: any[] = [];

  useEffect(() => {
    // console.log("id-handle", message);
    try {
      if (typeof window !== "undefined") {
        const chatHistory = localStorage.getItem("chatHistory");
        all_messages = JSON.parse(chatHistory);
        const messages = all_messages[index].message;
      }
      if (selectedIndex === "init") {
        ContentComponent = HomeContent;
      }
      if (selectedIndex === "new-chat") {
        ContentComponent = NewchatContent;
      }
    } catch (err) {
      
    }
    
  }, [index]);

  const handleMessage = async (data) => {
    setMessage(preArray => [...preArray, data]);
  }

  return (
    <Layout index={selectedIndex} thoughts={soulThoughts} typeMessage={handleMessage}>
      <ContentComponent selectedIndex={selectedIndex} message={message} />
    </Layout>
  )
}

export default React.memo(NewChat)