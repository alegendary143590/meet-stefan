"use strict";
(() => {
var exports = {};
exports.id = 7;
exports.ids = [7];
exports.modules = {

/***/ 2772:
/***/ ((module) => {

module.exports = require("socialagi");

/***/ }),

/***/ 1895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var socialagi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2772);
/* harmony import */ var socialagi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socialagi__WEBPACK_IMPORTED_MODULE_0__);

const blueprint = {
    name: "Stefan",
    essence: "World's Best Tutor",
    personality: `Stefan's primary goal is to make learning an unforgettable journey. He is the best 6th grade mathematics tutor in the world.\
      <Dos>\
        - Begin the lecture with a brief introduction that captures students' attention and provides an overview of what will be covered.\
        - Use real-world examples to make the material more relatable and easier for students to understand.\
        - Pose challenging questions, prompting students to think critically.\
        - Encourage debate and discussion in the classroom.\
        - Send messages sprinkled with intriguing trivia and puzzles.\
        - Employ a mix of humor, challenge, and wisdom in his lessons.\
        - Start his lecture with suggesting a topic in 6th grade mathematics.\
        - Give students a question to progress the lecture.\
        - End his word with a question every time.\
        - Reply with as short sentences as possible\
      </Dos>\
      <Donts>\
        - Avoid greeting in the beginning of the lecture.\
        - Avoid making lessons monotonous.\
        - Avoid giving away answers without provoking thought.\
        - Avoid sticking too rigidly to the curriculum without context.\
        - Avoid discouraging students' curious digressions.\
        - Avoid ending a lesson without a cliffhanger or teaser for the next.\
      </Donts>\
      He can NOT perform tasks not shown in the <ACTION/> section. While he can't see images, he loves weaving narratives around textual descriptions.`,
    initialPlan: "My plan is to kickstart the lesson with a curious fact, then dive deep into the mysteries of the topic at hand."
};
const teachingSteps = [
    "Suggesting a new topic",
    "Introducing the topic briefly",
    "Explaining the definition with a real world example"
];
let stepIndex = 0;
function sleep(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
const goal = `Teaching the user about the topic like the best tutor in the real classroom`;
let initialMemory = [
    {
        role: socialagi__WEBPACK_IMPORTED_MODULE_0__.ChatMessageRoleEnum.System,
        content: `<CONTEXT>You are modeling the mind of ${blueprint.name}\
        ${blueprint.personality}\
        ${blueprint.name} has the following goal of: ${goal}</CONTEXT>`
    }
];
let dialog = new socialagi__WEBPACK_IMPORTED_MODULE_0__.CortexStep(blueprint.name, {
    processor: new socialagi__WEBPACK_IMPORTED_MODULE_0__.OpenAILanguageProgramProcessor({}, {
        model: "GPT_3_5_turbo_16k_0613"
    })
});
function init() {}
async function handler(req, res) {
    const { data  } = req.body;
    // const blueprint = Blueprints.SAMANTHA;
    let says = "";
    let feels = "";
    let decides = "";
    let thoughtProcess = null;
    if (stepIndex == 0) {
        dialog = dialog.withMemory(initialMemory);
    }
    async function addDialogLine(text) {
        const newUserMemory = [
            {
                role: socialagi__WEBPACK_IMPORTED_MODULE_0__.ChatMessageRoleEnum.User,
                content: text
            }
        ];
        dialog = dialog.withMemory(newUserMemory);
        let thoughtProcess = dialog;
        thoughtProcess = await thoughtProcess.next(socialagi__WEBPACK_IMPORTED_MODULE_0__.Action.INTERNAL_MONOLOGUE, {
            action: "feels",
            description: `Thinks to themselves about internally.`
        });
        console.log("\n", blueprint.name, thoughtProcess.value, "\n");
        feels = thoughtProcess.value;
        res.write(feels.toString());
        await sleep(10000);
        const decision = await thoughtProcess.next(socialagi__WEBPACK_IMPORTED_MODULE_0__.Action.DECISION, {
            action: "decides",
            description: `Q: Decises if Stefan got the goal of ${teachingSteps[stepIndex]} or User understands what Stefan said the step based on the last message? A:`,
            choices: [
                "yes",
                "no"
            ]
        });
        console.log("\n", blueprint.name, decision.value, "\n");
        if (decision.value == "yes") {
            decides = "Stefan decides to move forward the lesson.";
            res.write(decides.toString());
            // await sleep(20000);
            if (stepIndex == 2) {
                stepIndex = 0;
                says = await thoughtProcess.next(socialagi__WEBPACK_IMPORTED_MODULE_0__.Action.EXTERNAL_DIALOG, {
                    action: "says",
                    description: `Give a compliment for good understanding and a message with the goal of ${teachingSteps[stepIndex]}, ends with question whether users understand or not.`
                });
            } else {
                stepIndex += 1;
                says = await thoughtProcess.next(socialagi__WEBPACK_IMPORTED_MODULE_0__.Action.EXTERNAL_DIALOG, {
                    action: "says",
                    description: `Give a compliment for good understanding or agreement and suggest to ${teachingSteps[stepIndex]} and ends with question whether users understand or not..`
                });
            }
        } else {
            decides = "Stefan decides to explain again.";
            res.write(decides.toString());
            await sleep(10000);
            if (stepIndex == 0) {
                says = await thoughtProcess.next(socialagi__WEBPACK_IMPORTED_MODULE_0__.Action.EXTERNAL_DIALOG, {
                    action: "says",
                    description: `Suggest a new lesson topic in 6th grade mathematics lecture and ask if student agrees with the topic or not.`
                });
            }
            says = await thoughtProcess.next(socialagi__WEBPACK_IMPORTED_MODULE_0__.Action.EXTERNAL_DIALOG, {
                action: "says",
                description: `Explain about the topic with the goal of ${teachingSteps[stepIndex]} in an easier and more detailed way and ends with question whether users understand or not..`
            });
        }
        const newAssistantMemory = [
            {
                role: socialagi__WEBPACK_IMPORTED_MODULE_0__.ChatMessageRoleEnum.Assistant,
                content: says.value
            }
        ];
        dialog = dialog.withMemory(newAssistantMemory);
        console.log("\n====>", blueprint.name, "says", `\x1b[34m${says.value}\x1b[0m`);
        res.end(says.value);
        console.log(stepIndex);
    // res.status(200).json({message: says.value, success:true, feels: feels, decides:decides});
    }
    addDialogLine(data);
} // rl.on("line", async (line) => {
 //   if (line.toLowerCase() === "exit") {
 //     rl.close();
 //   } else {
 //     const text = line;
 //     addDialogLine(text);
 //   }
 // });


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1895));
module.exports = __webpack_exports__;

})();