import React from "react"
interface ItemProps {
  bg: string,
  title?: string
}

const Item:React.FC<ItemProps> = ({ bg, title})=>{
  const bgColors = ["bg-[#E2F1EB]", "bg-[#DAE8F3]", "bg-[#FEE7E3]"];
    return(
      <li className={`${bg} p-3 my-2 rounded-lg`}>
        {title} 🤔
      </li>
    )
}
export default Item