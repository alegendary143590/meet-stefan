
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import HomeContent from "../components/content/home";
import { useRouter } from "next/router";
import { createContext } from "vm";


const Home = ()=>{ 
  const [selectedIndex, setSelectedIndex] = useState('init');
  const [chatHistory, setChatHistory] = useState([
    { title: "Item... ", message: [{sender:"user", message:"Hi"}], isTitle:false }
  ]);

  if (typeof window !== 'undefined') {
    // Perform localStorage action
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
  }

  const router = useRouter();
  
    return(
        <Layout index={selectedIndex}>
          <HomeContent />
        </Layout>
    )
}

export default Home