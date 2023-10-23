import React from "react"
interface ItemProps {
  bg: string,
  title?: string
}

const Item:React.FC<ItemProps> = ({ bg })=>{
    return(
      <li className={`${bg} p-3 my-2 rounded-lg`}>
        In retrospect, I feel like asking about the user's thoughts and using an emoji was a good way to show my enthusiasm and keep the conversation interesting. 🤔
      </li>
    )
}
export default Item