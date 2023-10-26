import Link from "next/link"
import { useState } from "react";

interface ItemProps {
    isSelected: boolean;
    onClick: () => void;
}
const Item = ({isSelected, onClick})=>{
    
    return(
        <li className={`flex items-center justify-center my-4 ${isSelected ? "bg-yellow-200" : ""} rounded-full`} onClick={onClick} style={{height:"40px"}}>
            <Link className="flex gap-2" href={"/c/dsf567"}>
                <img
                    height={24}
                    width={24}
                    src="/img/icons/message.svg"
                    alt="message icon"
                />
                <h5 className="text-[#52525B] text-sm font-normal">Mowgli Baloo's best ...</h5>
            </Link>
        </li>
    )
}
export default Item