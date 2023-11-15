"use strict";
exports.id = 250;
exports.ids = [250];
exports.modules = {

/***/ 8250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/sidebar/left/Item.tsx


const Item = ({ title , isSelected , onClick  })=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: `flex items-center justify-start my-4 rounded-full cursor-pointer px-1 ${isSelected ? "bg-yellow-200" : ""}`,
        onClick: onClick,
        style: {
            height: "40px"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex gap-2",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    height: 24,
                    width: 24,
                    src: "/img/icons/message.svg",
                    alt: "message icon"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                    className: "text-[#52525B] text-sm font-normal",
                    children: [
                        " ",
                        title
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const left_Item = (Item);

;// CONCATENATED MODULE: ./src/components/drawer/left/index.tsx





const LeftDrawer = ({ isLeftDrawer , setLeftDrawer  })=>{
    const [selectedIndex, setSelectedIndex] = (0,external_react_.useState)(-1);
    const router = (0,router_.useRouter)();
    const handleClick = (i)=>{
    // setSelectedIndex(i);
    };
    // useEffect(() => {
    //     if (selectedIndex>=0) {
    //       console.log("item chat ?>>");
    //       router.push(`/c/${selectedIndex}`);
    //     } 
    //   }, [selectedIndex]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        id: "drawer",
        className: `${isLeftDrawer ? "translate-x-0" : "-translate-x-full"} fixed top-0 left-0 w-full h-full shadow-lg transform transition-transform duration-300 ease-in-out`,
        style: {
            zIndex: 1000
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex h-full z-10",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-9/12 bg-white relative",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "h-full pt-2 pl-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "h-1/6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                        href: "/new-chat",
                                        className: "w-40 flex bg-[#F5F5F5] rounded-full py-2 px-2 mt-1 gap-1",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                height: 24,
                                                width: 24,
                                                src: "/img/icons/plus.svg"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "text-[#52525B] text-base font-bold",
                                                children: "New chat"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "h-5/6 overflow-y-scroll scroll-hidden px-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "text-[#52525B] text-[15px] font-medium",
                                            children: "Recent"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            children: [
                                                0
                                            ].map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx(left_Item, {
                                                    title: "Item...",
                                                    isSelected: selectedIndex === item,
                                                    onClick: ()=>handleClick(item)
                                                }, item))
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "absolute block sm:block md:hidden top-1/2 right-[-25px]",
                            style: {
                                marginRight: "5px"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                onClick: ()=>setLeftDrawer(!isLeftDrawer),
                                className: "w-[50px] h-[50px] flex justify-center items-center bg-white rounded-full cursor-pointer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    style: {
                                        marginLeft: "15px"
                                    },
                                    height: 22,
                                    width: 22,
                                    src: "/img/icons/left-arrow.svg"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    onClick: ()=>setLeftDrawer(!isLeftDrawer),
                    className: "w-3/12 min-w-fit min-h-fit bg-disable"
                })
            ]
        })
    });
};
/* harmony default export */ const left = (LeftDrawer);

;// CONCATENATED MODULE: ./src/components/sidebar/right/Item.tsx


const Item_Item = ({ bg , title  })=>{
    const bgColors = [
        "bg-[#E2F1EB]",
        "bg-[#DAE8F3]",
        "bg-[#FEE7E3]"
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        className: `${bg} p-3 my-2 rounded-lg`,
        children: [
            title,
            " \uD83E\uDD14"
        ]
    });
};
/* harmony default export */ const right_Item = (Item_Item);

;// CONCATENATED MODULE: ./src/components/drawer/right/index.tsx



const RightDrawer = ({ isRightDrawer , setRightDrawer  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `${isRightDrawer ? "translate-x-0" : "translate-x-full"} fixed top-0 right-0 w-full h-full shadow-lg transform transition-transform duration-300 ease-in-out z-1000`,
        style: {
            zIndex: 1000
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex h-full w-400",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    onClick: ()=>setRightDrawer(!isRightDrawer),
                    className: "w-3/12 min-w-fit min-h-fit bg-disable"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-9/12 min-h-full bg-white relative bg-image",
                    style: {
                        zIndex: "1000"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "pt-2 pl-2 h-full overflow-y-scroll overflow-hidden",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "h-8",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "text-[#52525B] text-[15px] font-bold",
                                        children: "AI Feelings"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    children: [
                                        "bg-[#E2F1EB]",
                                        "bg-[#DAE8F3]",
                                        "bg-[#FEE7E3]",
                                        "bg-[#E2F1EB]",
                                        "bg-[#DAE8F3]",
                                        "bg-[#FEE7E3]",
                                        "bg-[#E2F1EB]",
                                        "bg-[#DAE8F3]",
                                        "bg-[#FEE7E3]",
                                        "bg-[#E2F1EB]",
                                        "bg-[#DAE8F3]",
                                        "bg-[#FEE7E3]"
                                    ].map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(right_Item, {
                                            bg: item
                                        }, index))
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "absolute block sm:block md:hidden top-1/2 left-[-25px]",
                            style: {
                                zIndex: "-1",
                                marginLeft: "5px"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                onClick: ()=>setRightDrawer(!isRightDrawer),
                                className: "w-[50px] h-[50px] flex justify-center items-center bg-white rounded-full cursor-pointer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    style: {
                                        marginRight: "18px"
                                    },
                                    height: 22,
                                    width: 22,
                                    src: "/img/icons/left-arrow.svg"
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const right = (RightDrawer);

;// CONCATENATED MODULE: ./src/components/Header.tsx





const Header = ()=>{
    const [isLeftDrawer, setLeftDrawer] = (0,external_react_.useState)(false);
    const [isRightDrawer, setRightDrawer] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-[#FBBF3B] h-16 -mb-1 sm:-mb-1 md:mb-4",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-between px-5",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-full sm:w-full md:w-auto flex items-center justify-between sm:justify-between md:justify-normal gap-0 sm:gap-0 md:gap-5 h-16",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                height: 30,
                                width: 30,
                                className: "order-1 sm:order-1 md:order-3 block sm:block md:hidden",
                                src: "/img/icons/chat.svg",
                                onClick: ()=>setLeftDrawer(!isLeftDrawer)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                height: 30,
                                width: 30,
                                className: "order-3 sm:order-3 md:order-1",
                                src: "/img/icons/Hamburger.svg",
                                onClick: ()=>setRightDrawer(!isRightDrawer)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                className: "block order-2 sm:order-2 md:order-2",
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    height: 30,
                                    width: 95,
                                    src: "/img/logo.png"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "md:flex items-center h-16 gap-3 hidden sm:hidden",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "bg-white h-[52px] w-[52px] rounded-full flex items-center justify-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    height: 24,
                                    width: 24,
                                    src: "/img/icons/cup.svg"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "bg-white h-[52px] w-auto rounded-full flex items-center justify-center px-1 gap-1",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            height: 46,
                                            width: 46,
                                            src: "/img/profile.png"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-col pr-3",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                className: "tro text-sm font-bold",
                                                children: "Usman Zafar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                className: "tro text-sm font-normal",
                                                children: "usmanzafar089@gmail.com"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(left, {
                isLeftDrawer: isLeftDrawer,
                setLeftDrawer: setLeftDrawer
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(right, {
                isRightDrawer: isRightDrawer,
                setRightDrawer: setRightDrawer
            })
        ]
    });
};
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: ./src/components/sidebar/left/index.tsx





const Left = ({ selection , setSelection  })=>{
    let [selectedIndex, setSelectedIndex] = (0,external_react_.useState)(selection);
    const [chatHistory, setChatHistory] = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    }, []);
    const router = (0,router_.useRouter)();
    const handleClick = (i)=>{
        setSelectedIndex(i);
    };
    (0,external_react_.useEffect)(()=>{
        if (selectedIndex !== "init" && selectedIndex !== "new-chat") router.push({
            pathname: `/c/${selectedIndex}`,
            query: {
                id: selectedIndex
            }
        });
    }, [
        selectedIndex
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "h-[calc(100vh-4rem)] col-span-2 hidden sm:hidden md:block",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h-12",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                    href: "/new-chat",
                    className: "w-32 flex bg-[#F5F5F5] rounded-full py-2 px-2 mt-1 gap-1",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            height: 24,
                            width: 24,
                            src: "/img/icons/plus.svg"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "text-[#52525B] text-base font-bold",
                            children: "New chat"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "h-[calc(100vh-7rem)] overflow-y-scroll pt-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "text-[#52525B] text-[15px] font-medium",
                        children: "Recent"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        children: chatHistory.map((item, id)=>/*#__PURE__*/ jsx_runtime_.jsx(left_Item, {
                                isSelected: selectedIndex === id.toString(),
                                onClick: ()=>handleClick(id.toString()),
                                title: item.title
                            }, id))
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const sidebar_left = (Left);

;// CONCATENATED MODULE: ./src/components/sidebar/right/index.tsx


const Right = ({ soulThoughts  })=>{
    const bgColors = [
        "bg-[#E2F1EB]",
        "bg-[#DAE8F3]",
        "bg-[#FEE7E3]"
    ];
    let index = 0;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "h-[calc(100vh-4rem)] col-span-3 pl-7 hidden sm:hidden md:block",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h-8",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    className: "text-[#52525B] text-[15px] font-bold",
                    children: "AI Feelings"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h-[calc(100vh-6rem)] overflow-y-scroll",
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    children: soulThoughts.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(right_Item, {
                            bg: bgColors[++index % 3],
                            title: item
                        }, index))
                })
            })
        ]
    });
};
/* harmony default export */ const sidebar_right = (Right);

;// CONCATENATED MODULE: ./src/components/searchbar/index.tsx


const SearchBar = ({ onSearch  })=>{
    const [message, setMessage] = (0,external_react_.useState)("");
    const handleInputChange = (event)=>{
        const value = event.target.value;
        // setMessage(value);
        setMessage(value);
    };
    const handleSendMessage = (e)=>{
        e.preventDefault();
        onSearch(message);
        setMessage("");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "h-32 flex justify-center items-center sm:items-center md:items-start gap-5 px-5",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "basis-10/12",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "bg-white flex justify-between h-[63px] w-auto px-3 rounded-full",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "basis-1/12 flex justify-center items-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                width: 23,
                                height: 23,
                                src: "/img/icons/img.svg"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "basis-10/12",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    id: "user_input",
                                    type: "text",
                                    onKeyDown: (e)=>e.keyCode == 13 ? handleSendMessage(e) : "",
                                    value: message,
                                    onChange: handleInputChange,
                                    placeholder: "Type something interesting",
                                    className: "w-full h-full outline-none focus:outline-none large"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    id: "user_input",
                                    type: "text",
                                    onKeyDown: (e)=>e.keyCode == 13 ? handleSendMessage(e) : "",
                                    value: message,
                                    onChange: handleInputChange,
                                    placeholder: "Type here",
                                    className: "w-full h-full outline-none focus:outline-none small"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "basis-1/12 flex justify-center items-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: handleSendMessage,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    width: 21,
                                    height: 21,
                                    src: "/img/icons/arrow.svg"
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "basis-2/12 min-w-63 z-1",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "relative flex justify-center items-center rounded-full hover:cursor-pointer",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/img/icons/mic.svg",
                            className: "w-[63px] h-[63px]"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/img/union.png",
                            alt: "Union Icon",
                            className: "absolute bottom-[40px] tooltip-setting mr-7"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const searchbar = (SearchBar);

;// CONCATENATED MODULE: ./src/components/Layout.tsx







const Layout = ({ index , children , thoughts  })=>{
    const [itemIndex, setItemIndex] = (0,external_react_.useState)(index);
    let [chatHistory, setChatHistory] = (0,external_react_.useState)("init");
    let [chatItem, setChatItem] = (0,external_react_.useState)([
        {
            title: "Item... ",
            message: [
                {
                    sender: "user",
                    message: "Hi"
                }
            ],
            isTitle: true
        }
    ]);
    const [soulThoughts, setSoulThoughts] = (0,external_react_.useState)(thoughts);
    const router = (0,router_.useRouter)();
    function addMessage(value, sender, id) {
        let storedChatHistory = [];
        if (false) {}
    }
    const updateChatHistory = (newItem)=>{
        if (false) {}
    };
    const handleMessage = async (data)=>{
        if (index == "init" || index == "new-chat") {
            index = "0";
            const updateData = {
                title: data.substring(0, 10) + "...",
                message: [
                    {
                        sender: "user",
                        message: data
                    }
                ],
                isTitle: true
            };
            updateChatHistory(updateData);
            setItemIndex(index);
            router.push({
                pathname: `/c/${index}`,
                query: {
                    text: data
                }
            });
        }
    //Send user message to backend api
    // const jsonData = {sender: "user", message:data};
    //  setMessage(jsonData);
    //  const res = await fetch('/api/send', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({data}),
    //  })
    //  .then(response => {
    //     if(!response.ok){
    //       throw new Error('Bad gateway');
    //     }
    //     console.log(response);
    //     return response;
    //  })
    //  .catch(error => {
    //   console.error("Error:", error.message);
    //  });
    // // Get the res from backend and send it to display
    // let done = false;
    // let chunks = [];
    // //@ts-ignore
    // const result = await res.body.getReader();
    // console.log(result);
    // while(!done){
    //   const { value, done: isDone} = await result.read();
    //   const decodedValue = new TextDecoder().decode(value);
    //   chunks.push(decodedValue);
    //   if(chunks.length==1){
    //     setSoulThoughts(preArray => [...preArray, `Stefan feels: ${decodedValue}`]);
    //     console.log("Stefan feels...");
    //   }
    //   if(chunks.length==2){
    //     setSoulThoughts(preArray => [...preArray, decodedValue]);
    //     console.log("Stefan decides...");
    //   }
    //   if(chunks.length==3){
    //     setSoulThoughts(preArray => [...preArray, `Stefan sent message: ${decodedValue}`]);
    //     setMessage({sender:"stefan", message:`${decodedValue}`});
    //     console.log("Stefan says...");
    //   }
    //   done = isDone;
    // }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-white h-screen overflow-y-hidden",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "h-[calc(100vh-4rem)] grid grid-cols-12 mx-auto px-0 sm:px-0 md:px-5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(sidebar_left, {
                        selection: itemIndex,
                        setSelection: setItemIndex
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "h-[calc(100vh-4rem)] col-span-12 sm:col-span-12 md:col-span-7 bg-[#FAFAFA] rounded-xl ml-0 md:ml-2",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "h-[calc(100vh-12rem)] overflow-y-scroll",
                                    children: children
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(searchbar, {
                                    onSearch: handleMessage
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(sidebar_right, {
                        soulThoughts: soulThoughts
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);


/***/ })

};
;