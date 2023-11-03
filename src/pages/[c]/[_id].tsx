import { useState } from "react"
import { useRouter } from "next/router"
import Layout from "../../components/Layout"
import Conversation from "../../components/conversation"
import { userAgent } from "next/server"

const NewChat = ()=>{

  const [message, setMessage] = useState('');
  const router = useRouter();
  
  const  selectedIndex  = router.query;
  const index = parseInt(selectedIndex);
  const handleMessage = (data:string) => {
    setMessage(data);
  }

  return (
    <Layout setMessage={handleMessage} selection={index}>
      <div className="pt-5 px-3">
        <Conversation message={message}/>
      </div>
    </Layout>
  )
}

export default NewChat