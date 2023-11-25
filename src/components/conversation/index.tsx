import { useState, useRef, useEffect } from "react";
import MarkdownDisplay from "../markdown"

const Conversation = ({ selectedIndex, message }) => {

    const markdownContent = `Essay on Electric cars that how they effect on our environment`;

    let messages = [];
    if (typeof window !== 'undefined') {
        try {
            const storedData = localStorage.getItem('chatHistory');
            let storedChatHistory = JSON.parse(storedData);
            const targetMessage = storedChatHistory[selectedIndex];
            messages = targetMessage.message;
        } catch (err) {
        } finally {
        }
    }

    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);
    useEffect(() => {
        // setMessages(message);
        // console.log("conversation-message ======> ", message);
    }, [message]);

    return (
        <div className="pt-5 px-3">
            {messages.map((msg, i) => {
                if (msg.sender === "user") {
                    return (
                        <div className="flex mt-5" key={i}>
                            <div className="w-16 mx-4">
                                <img
                                    className="w-14 h-14 object-contain"
                                    src={`/img/icons/user.png`}
                                    alt="User Icon"
                                />
                            </div>
                            <div className="bg-white basis-11/12 p-3 rounded-lg shadow-sm">
                                <div className="prose flex align-center className='font-sans'">
                                    <MarkdownDisplay markdownContent={`${msg.message}`} />
                                </div>
                            </div>
                        </div>
                    )
                } else if (msg.sender === "stefan") {
                    return (
                        <div className="flex mt-5" key={i}>
                            <div className="p-1 mr-4 ml-4">
                                <img
                                    className="w-14 h-14 object-contain"
                                    src={`/img/icons/stefan.png`}
                                    alt="User Icon"
                                />
                            </div>
                            <div className="bg-white basis-11/12 p-3 rounded-lg shadow-sm">
                                <div className="prose">
                                    <MarkdownDisplay markdownContent={`${msg.message}`} />
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
        </div>
    );
}
export default Conversation