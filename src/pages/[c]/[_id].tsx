import { useState } from "react"
import Layout from "../../components/Layout"
import Conversation from "../../components/conversation"

const NewChat = ()=>{
  const [message, setMessage] = useState("");
  const handleMessage = (data:string) => {
    setMessage(data);
  }
  return(
    <Layout setMessage={handleMessage}>
      <div className="pt-5 px-3">
        <Conversation message={message}/>
      </div>
    </Layout>
  )
}

export default NewChat