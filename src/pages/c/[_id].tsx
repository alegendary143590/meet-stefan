import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Conversation from "../../components/conversation";
import HomeContent from "../../components/content/home";
import NewchatContent from "../../components/content/new_chat";

const NewChat = ()=>{

  const [message, setMessage] = useState([{}]);
  const router = useRouter();
  
  const  selectedIndex  = router.query._id;

  let ContentComponent = Conversation;
  
  if(selectedIndex==="init"){
    ContentComponent = HomeContent;
  }
  if (selectedIndex === "new-chat"){
    ContentComponent = NewchatContent;
  }
  const handleMessage = (data) => {
    setMessage(preArray => [...preArray, data]);
    console.log("Item >>>", message);
  }

  console.log(selectedIndex);

  return (
    <Layout setMessage={handleMessage} >
        <ContentComponent message={message} index={selectedIndex}/>
    </Layout>
  )
}

export default NewChat