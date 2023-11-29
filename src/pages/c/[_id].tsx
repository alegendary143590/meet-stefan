import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Conversation from "../../components/conversation";
import HomeContent from "../../components/content/home";
import NewchatContent from "../../components/content/new_chat";
import { type } from "os";

const NewChat = () => {

  let [message, setMessage] = useState([]);
  let [soulThoughts, setSoulThoughts] = useState(["HI", "If done"]);
  const router = useRouter();

  let selectedIndex;
  let index = 0;

  try {
    selectedIndex = router.query._id;
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

    if(typeof window != undefined){
      const storedData = localStorage.getItem('chatHistory');
      let storedChatHistory = JSON.parse(storedData);
      const targetMessage = storedChatHistory[index];
      const thoughts = targetMessage.thoughts;
      const messages = targetMessage.message;
      console.log("Thoughts ..", thoughts);
      console.log("Messages ..", messages);
    
      try {

        // setMessage(preArray => [...preArray, data]);

        console.log(data['message'], " is sent to backend!!");
        const query = data['message'];

        const res = await fetch('/api/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({query}),
        });

        if(res && res.body){
          let done = false;
          let chunks = [];
          const response = res.body.getReader();
          while(!done){

            const {value, done: isDone} = await response.read();
            const value1 = new TextDecoder().decode(value);
            console.log("Value >>> ", value1);
            chunks.push(value1);
            
            const storedData = localStorage.getItem('chatHistory');
            let storedChatHistory = JSON.parse(storedData);
            const targetMessage = storedChatHistory[index];
            const thoughts = targetMessage.thoughts;
            const messages = targetMessage.message;
            
            if(chunks.length<3){
              thoughts.push(value1);
              setSoulThoughts(preArray => [...preArray, value1]);
              localStorage.setItem('chatHistory', JSON.stringify(storedChatHistory));


            }
            if(chunks.length==3){
              thoughts.push(`Stefan sent message : ${value1}`);
              setSoulThoughts(preArray => [...preArray, value1]);
              console.log("The 3th >>>", thoughts);
              const result = {sender: 'stefan', message:value1}
              setMessage(preArray => [...preArray, result]);

              messages.push(
                { sender: "stefan", message: value1 }
              );
              localStorage.setItem('chatHistory', JSON.stringify(storedChatHistory));

            }
            console.log(thoughts);
            done = isDone;
          }  
        }   else {
          console.log('Error: Response or response body is undefined');
        }
      }
      catch(err){
        console.log(err.message);
      }
    } else {
      console.log('localStorage is not available');
    }
  }

  return (
    <Layout index={selectedIndex} thoughts={soulThoughts} typeMessage={handleMessage}>
      <ContentComponent selectedIndex={selectedIndex} message={message} />
    </Layout>
  )
}

export default React.memo(NewChat)