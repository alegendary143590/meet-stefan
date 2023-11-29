
import { useEffect } from "react";
import Item from "./Item"

const Right = ({ itemIndex, soulThoughts }) => {

  let thoughts = [];

  try {
    const storedData = localStorage.getItem('chatHistory');
    let storedChatHistory = JSON.parse(storedData);
    const targetMessage = storedChatHistory[itemIndex];
    thoughts = targetMessage.thoughts;
  } catch (err) {
    thoughts = [];
  }

  useEffect(() =>
    {

    }, [soulThoughts]
  )

  const bgColors = ["bg-[#E2F1EB]", "bg-[#DAE8F3]", "bg-[#FEE7E3]"];
  let index = 0;

  return (
    <div className="h-[calc(100vh-4rem)] col-span-3 pl-7 hidden sm:hidden md:block">
      <div className="h-8">
        <h3 className="text-[#52525B] text-[15px] font-bold">AI Feelings</h3>
      </div>
      <div className="h-[calc(100vh-6rem)] overflow-y-scroll">
        <ul>
          {
            thoughts.map((item, index) => <Item key={index} bg={bgColors[(++index) % 3]} title={item} />)
          }
        </ul>
      </div>
    </div>
  )
}
export default Right