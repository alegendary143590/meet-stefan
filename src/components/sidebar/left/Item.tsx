import { on } from "events";
import Link from "next/link"
import { useRouter } from "next/router";
import { useState } from "react";


interface ItemProps {
    title:string;
    isSelected: boolean;
    onClick: () => void;
}
const Item = ({title, isSelected, onClick}:ItemProps)=>{
    
    const router = useRouter();
    
    return(
        <li className={`flex items-center justify-start my-4 rounded-full cursor-pointer px-1 ${isSelected ? 'bg-yellow-200' : ''}`} onClick={onClick} style={{height:"40px"}}>
            <div className="flex gap-2" >
                <img
                    height={24}
                    width={24}
                    src="/img/icons/message.svg"
                    alt="message icon"
                />
                <h5 className="text-[#52525B] text-sm font-normal"> {title}</h5>
            </div>
        </li>
    )
}
export default Item