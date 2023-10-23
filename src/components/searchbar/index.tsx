const SearchBar = ()=>{
    return(
        <div className="h-32 flex justify-center items-center sm:items-center md:items-start gap-5 px-5">
            <div className="basis-11/12">
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
                            placeholder="Type something intersetintg"
                            className="w-full h-full outline-none focus:outline-none"
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
            {/* <div className="basis-2/12">
                <div className="w-[63px] h-[63px] flex justify-center items-center rounded-full bg-mic">
                    <img
                        src="/img/icons/mic.svg"
                    />
                </div>
            </div> */}
        </div>
    )
}

export default SearchBar