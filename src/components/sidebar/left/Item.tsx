import Link from "next/link"

const Item = ()=>{
    return(
        <li className="my-4">
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