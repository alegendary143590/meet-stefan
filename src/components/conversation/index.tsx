import { useState, useRef } from "react";
import MarkdownDisplay from "../markdown"

const Conversation = ({message})=>{
    console.log('messsage>>>>>>',message);
    const markdownContent = `Essay on Electric cars that how they effect on our environment`;
    
    const [messages, setMessages] = useState([{sender: "user", text: "Essay on Electric cars that how they effect on our environment"}, {sender: "stefan", text: "Title: The Environmental Impact of Electric Cars\nIntroduction\nThe automobile industry has been undergoing a significant transformation in recent years with the emergence of electric cars. Electric vehicles (EVs) have gained popularity as a more sustainable and environmentally friendly alternative to traditional gasoline-powered vehicles."}]);
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);
    

    return(
        <> 
            {messages.map((msg, i) => {
                if(msg.sender==="user"){
                    return (
                        <div className="flex mt-5">
                            <div className="w-16 mx-4">
                                <img
                                    className="w-14 h-14 object-contain"
                                    src={`/img/icons/user.png`}
                                    alt="User Icon"
                                />
                            </div>
                            <div className="bg-white basis-11/12 p-3 rounded-lg shadow-sm">
                                <div className="prose flex align-center className='font-sans'">
                                    <MarkdownDisplay markdownContent={`${msg.text}`}/>
                                </div>
                            </div>
                        </div>
                    )
                    } else  {
                        return (
                            <div className="flex mt-5">
                                <div className="p-1 mr-4 ml-4">
                                    <img
                                        className="w-14 h-14 object-contain"
                                        src={`/img/icons/stefan.png`}
                                        alt="User Icon"
                                    />
                                </div>
                                <div className="bg-white basis-11/12 p-3 rounded-lg shadow-sm">
                                    <div className="prose">
                                        <MarkdownDisplay markdownContent={`${msg.text}`}/>
                                    </div>
                                    <div className="flex gap-2 pt-5">
                                        <img
                                            height={24}
                                            width={24}
                                            className="cursor-pointer"
                                            src="/img/icons/like.svg"
                                        />
                                        <img
                                            height={24}
                                            width={24}
                                            className="cursor-pointer"
                                            src="/img/icons/unlike.svg"
                                        />
                                        <img
                                            height={24}
                                            width={24}
                                            className="cursor-pointer"
                                            src="/img/icons/copy.svg"
                                        />
                                        <img
                                            height={24}
                                            width={24}
                                            className="cursor-pointer"
                                            src="/img/icons/share.svg"
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    }
            })}
        </>
        
    );
}
export default Conversation