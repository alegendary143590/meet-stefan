const SearchBar = ()=>{
    return(
        <div className="h-32 flex justify-center items-center sm:items-center md:items-start gap-5 px-5">
            <div className="basis-10/12">
                <div className="bg-white flex justify-between h-[63px] w-auto px-3 rounded-full">
                    <div className="basis-1/12 flex justify-center items-center">
                        <img
                            width={23}
                            height={23}
                            src="/img/icons/img.svg"
                        />
                    </div>
                    <div className="basis-10/12">
                        <input
                            id="user_input"
                            placeholder="Type something interesting"
                            className="w-full h-full outline-none focus:outline-none large"
                        />
                        <input
                            id="user_input"
                            placeholder="Type here"
                            className="w-full h-full outline-none focus:outline-none small"
                        />
                    </div>
                   <div className="basis-1/12 flex justify-center items-center">
                        <img
                            width={21}
                            height={21}
                            src="/img/icons/arrow.svg"
                        />
                   </div>
                </div>
            </div>
            <div className="basis-3/12" >
                {/* <div className="relative w-[63px] h-[63px] flex justify-center items-center rounded-full bg-mic hover:cursor-pointer">
                    <img src="/img/icons/mic.svg" />
                    <div className="absolute bottom-[80px] left-1/2 -translate-x-1/2 bg-white text-black px-2 py-2 rounded-full shadow-lg whitespace-nowrap tooltip-rotate">
                        <span style={{fontSize:"14px", fontFamily:"sans-serif"}}>Say "<strong >Hi Stefan!</strong>"</span>
                        <span className="tooltip-triangle"></span>
                    </div>
                </div> */}
                <div className="relative flex justify-center items-center rounded-full hover:cursor-pointer aspect-w-1 aspect-h-1">
                    <img src="/img/icons/mic.svg" className="w-[63px] h-[63px]"/>
                    <img src="/img/union.png" alt="Union Icon" className="absolute bottom-[40px] tooltip-setting mr-7"/>
                </div>
            </div>
        </div>
    )
}

export default SearchBar