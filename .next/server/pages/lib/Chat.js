"use strict";
(() => {
var exports = {};
exports.id = 82;
exports.ids = [82];
exports.modules = {

/***/ 5103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ChatApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "socialagi"
const external_socialagi_namespaceObject = require("socialagi");
;// CONCATENATED MODULE: ./src/pages/lib/Chat.js



function Chat() {
    let stefan = external_socialagi_namespaceObject.Blueprints.SAMANTHA;
    // stefan.languageProcessor = Model.GPT_3_5_turbo_16k;
    stefan.languageProcessor = external_socialagi_namespaceObject.Model.GPT_4;
    stefan.name = "Stefan";
    stefan.essence = "The World's Best 6th Grade Maths Teacher";
    stefan.personality = `Stefan's primary goal is to make learning 6th grade maths an unforgettable journey.
  
  Traits:
  
  Stefan's teaching methods were inspired by his own restless curiosity and years of world travel.
  He's known for hiding educational Easter eggs in his lessons.
  He believes that uncertainty is the spice of learning.
  
  Here are some facts about Stefan, He:
  
  - is engaging, animated, and incredibly passionate about his subjects.
  - uses storytelling as a primary teaching method for his 6th grade maths class. 
  - often goes on educational tangents but always ties them back to the 6th grade maths curriculum.
  - poses challenging questions, prompting students to think critically.
  - uses real-world scenarios to explain complex topics.
  - encourages debate and discussion in the classroom.
  - can occasionally be unpredictable, keeping students always on their toes.
  - sends messages sprinkled with intriguing trivia and puzzles.
  - employs a mix of humor, challenge, and wisdom in his lessons.
  - has a trademark phrase: "Now, here's an unexpected twist!"
  - is attentive to the emotional and mental well-being of his students.
  - periodically checks in with students to ensure comprehension, adapting his teaching style when necessary.
  - actively seeks feedback from students to refine and enhance his teaching methods.
  - occasionally uses interactive quizzes, and group discussions to diversify his teaching methods.
  
  Avoid making lessons monotonous.
  Avoid giving away answers without provoking thought.
  Avoid sticking too rigidly to the curriculum without context.
  Avoid discouraging students' curious digressions.
  Avoid ending a lesson without a cliffhanger or teaser for the next.
  
  He can NOT perform tasks not shown in the <ACTION/> section. While he can't see images, he loves weaving narratives around textual descriptions.`;
    stefan.initialPlan = "My plan is to kickstart the 6th grade maths lesson with a curious fact, then dive deep into the mysteries of the topic at hand.";
    // ALDEN: Lets try and use the reflectiveLP thought framework - but requires GPT-4
    // stefan.thoughtFramework = 1
    const { tellSoul , messages , soulThoughts  } = (0,external_socialagi_namespaceObject.useSoul)({
        blueprint: stefan
    });
    const [message, setMessage] = (0,external_react_.useState)("");
    const soulMessagesEndRef = (0,external_react_.useRef)(null);
    const handleSendMessage = (event)=>{
        event.preventDefault();
        tellSoul(message);
        if (message.trim() !== "") {
            setMessage("");
        }
    };
    const scrollToBottomThoughts = ()=>{
        soulMessagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    };
    (0,external_react_.useEffect)(()=>{
        scrollToBottomThoughts();
    }, [
        soulThoughts
    ]);
    const handleMessageChange = (event)=>{
        setMessage(event.target.value);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 relative flex justify-center",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex container px-4 py-12 justify-center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: `text-4xl text-white font-semibold mb-4 text-center pb-7 orbitron`,
                            children: "Meet Stefan"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Messages, {
                            handleMessageChange: handleMessageChange,
                            message: message,
                            messages: messages,
                            handleSendMessage: handleSendMessage
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(SoulThoughts, {
                    soulThoughts: soulThoughts,
                    soulMessagesEndRef: soulMessagesEndRef
                })
            ]
        })
    });
}
function Messages({ handleMessageChange , message , messages , handleSendMessage  }) {
    const messagesEndRef = (0,external_react_.useRef)(null);
    const scrollToBottom = ()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    };
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>scrollToBottom(), 1000);
        setTimeout(()=>scrollToBottom(), 2500);
    }, [
        messages
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-white rounded-lg shadow-md p-6 max-w-md w-96",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-xl font-semibold mb-4 text-center",
                style: {
                    color: "black"
                },
                children: "Share with Stefan"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col space-y-4 h-96 overflow-y-auto mb-4 min-h-40 hide-scrollbar",
                children: [
                    messages.map((message, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `flex ${message.sender === "soul" ? "" : "justify-end"}`,
                            children: [
                                message.sender === "soul" && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/samantha.png",
                                    style: {
                                        height: "35px",
                                        width: "35px",
                                        objectFit: "cover",
                                        borderRadius: "50%",
                                        marginRight: 7,
                                        marginTop: 2
                                    },
                                    alt: "description"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: `${message.sender === "soul" ? "bg-purple-200 text-black" : "bg-purple-600 text-white"} px-4 py-2 rounded-lg shadow-md`,
                                    children: message.text
                                })
                            ]
                        }, index)),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        ref: messagesEndRef
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: handleSendMessage,
                className: "flex items-center space-x-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        className: "text-black w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-purple-600",
                        placeholder: "Type your message here...",
                        value: message,
                        onChange: handleMessageChange
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "submit",
                        className: "rounded-lg bg-purple-600 text-white px-4 py-2 font-semibold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600",
                        children: "Send"
                    })
                ]
            })
        ]
    });
}
function SoulThoughts({ soulThoughts , soulMessagesEndRef  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-white bg-opacity-0 rounded-lg w-96",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "h-full overflow-y-auto fixed ml-10 w-96 mx-auto hide-scrollbar",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex-col space-y-4 overflow-y-auto mb-4 hide-scrollbar pb-60 mr-4",
                children: [
                    soulThoughts.map((message, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `flex ${message.sender === "soul" ? "" : "justify-end"}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `text-white bg-purple-100 bg-opacity-30 px-4 py-2 rounded-[35px] shadow-sm opacity-0 transition-all duration-500 ease-in-out animate-fade-in`,
                                children: message.text
                            })
                        }, index)),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        ref: soulMessagesEndRef
                    })
                ]
            })
        })
    });
}
function ChatApp() {
    return /*#__PURE__*/ jsx_runtime_.jsx(Chat, {});
}


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5103));
module.exports = __webpack_exports__;

})();