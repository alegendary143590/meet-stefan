import Item from "./Item"

const Right = ()=>{
    return(
      <div className="h-[calc(100vh-4rem)] col-span-3 pl-7 hidden sm:hidden md:block">
        <div className="h-8">
          <h3 className="text-[#52525B] text-[15px] font-bold">AI Feelings</h3>
        </div>
        <div className="h-[calc(100vh-6rem)] overflow-y-scroll">
          <ul>
            {
              ["bg-[#E2F1EB]", "bg-[#DAE8F3]", "bg-[#FEE7E3]", "bg-[#E2F1EB]", "bg-[#DAE8F3]", "bg-[#FEE7E3]", "bg-[#E2F1EB]", "bg-[#DAE8F3]", "bg-[#FEE7E3]", "bg-[#E2F1EB]", "bg-[#DAE8F3]", "bg-[#FEE7E3]"]
              .map((item, index)=><Item key={index} bg={item}/>)
            }
          </ul>
        </div>
      </div>
    )
}
export default Right