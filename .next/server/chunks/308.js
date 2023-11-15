"use strict";
exports.id = 308;
exports.ids = [308];
exports.modules = {

/***/ 2308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ new_chat)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/cards/topic/index.tsx


const Topic = ({ title , img , data  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-white rounded-lg shadow-lg p-3",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-[50px] h-[50px] bg-[#F1F5F9] flex justify-center items-center rounded-lg",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    width: 28,
                    height: 28,
                    src: img,
                    alt: "Icon"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-[#0966AB] text-xl font-bold py-2",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "mt-2",
                    children: data.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "mb-5",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "bg-[#F4F4F5] text-sm py-2 px-3 rounded-full",
                                children: item.title
                            })
                        }, index))
                })
            })
        ]
    });
};
/* harmony default export */ const topic = (Topic);

;// CONCATENATED MODULE: ./src/components/content/new_chat/index.tsx



const NewchatContent = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "pt-5 px-3",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-[32px] sm:text-[32px] md:text-5xl font-bold",
                children: "Hello again"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-[#52525B] text-base sm:text-base md:text-xl font-normal py-4",
                children: "Tell me what’s on your mind, or pick a suggestion. I have limitations and won’t always get it right, but your feedback will help me improve."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full sm:w-full md:w-10/12",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(topic, {
                            title: "Artists",
                            img: "/img/icons/paint-brush.png",
                            data: [
                                {
                                    title: "Spanish-language music artists"
                                },
                                {
                                    title: "artists similar to The Beatles"
                                },
                                {
                                    title: "Japanese music artists from the 1980s"
                                }
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(topic, {
                            title: "Music",
                            img: "/img/icons/music.png",
                            data: [
                                {
                                    title: "Chill music artists for studying"
                                },
                                {
                                    title: "Female R&B artists"
                                },
                                {
                                    title: "Male country singers"
                                }
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const new_chat = (NewchatContent);


/***/ })

};
;