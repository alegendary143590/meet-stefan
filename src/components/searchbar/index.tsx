import {useState} from 'react';

const SearchBar = ({onSearch})=>{
    const [message, setMessage] = useState("");

    const handleInputChange = (event) =>{
        const value = event.target.value;
        // setMessage(value);
        setMessage(value);
    }
    const handleSendMessage = (e) =>{
        e.preventDefault();
        onSearch(message);
        setMessage("");
    }
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
                            type="text"
                            onKeyDown={e=>e.keyCode==13?handleSendMessage(e):""}
                            value={message}
                            onChange={handleInputChange}
                            placeholder="Type something interesting"
                            className="w-full h-full outline-none focus:outline-none large"
                        />
                        <input
                            id="user_input"
                            type="text"
                            onKeyDown={e=>e.keyCode==13?handleSendMessage(e):""}
                            value={message}
                            onChange={handleInputChange}
                            placeholder="Type here"
                            className="w-full h-full outline-none focus:outline-none small"
                        />
                    </div>
                   <div className="basis-1/12 flex justify-center items-center">
                        <button onClick={handleSendMessage}>
                            <img
                                width={21}
                                height={21}
                                src="/img/icons/arrow.svg"
                            />
                        </button>
                        
                   </div>
                </div>
            </div>
            <div className="basis-2/12 min-w-63 z-1" >
                <div className="relative flex justify-center items-center rounded-full hover:cursor-pointer">
                    <img src="/img/icons/mic.svg" className="w-[63px] h-[63px]"/>
                    <img src="/img/union.png" alt="Union Icon" className="absolute bottom-[40px] tooltip-setting mr-7"/>
                </div>
            </div>
        </div>
    )
}

export default SearchBar