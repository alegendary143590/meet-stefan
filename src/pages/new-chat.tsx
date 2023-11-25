import React, {useState, useEffect} from 'react';
import Layout from "../components/Layout";
import Topic from "../components/cards/topic";
import { useRouter } from 'next/router';
import NewchatContent from '../components/content/new_chat';


const NewChat = ()=>{
  const [message, setMessage] = useState("");

  const [selectedIndex, setSelectedIndex] = useState('new-chat');

  // const router = useRouter();
  // useEffect(() => {
  //   router.push(`/c/${selectedIndex}`);
  // }, []);
  const items = [];
  
  
    return(
        <Layout index={selectedIndex} thoughts={[]}>
          <NewchatContent />
        </Layout>
    )
}

export default React.memo(NewChat)