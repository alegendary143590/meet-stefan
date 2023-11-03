import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Home = ()=>{ 
  const [message, setMessage] = useState("");
  const [convIndex, setConvIndex] = useState(-1);

  const router = useRouter();

  const handleClick = () =>{
    router.push("/new-chat");
  }
    return(
      <Layout setMessage={setMessage} selection = {convIndex} >
        <div className="pt-5">
          <img
              width={450}
              height={480}
              src="/img/bg.png"
              className="mx-auto mt-7 sm:mt-7 md:mt-0"
            />
            <div className="block sm:block md:hidden">
              <div className="flex justify-center mt-5">
                <div className="bg-[#FFFFFF] py-3 px-7 rounded-full" onClick={handleClick}>
                  <div className="flex gap-2">
                    <Image
                        height={20}
                        width={20}
                        src="/img/icons/plus.svg"
                        alt="plus icon"
                      />
                      <span className="text-[#52525B] text-base font-bold">
                        New Chat
                      </span>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </Layout>
      
    )
}

export default Home