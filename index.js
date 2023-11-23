const testCase1 = ["OR", ["<", "a", "b"],
    ["AND", ["==", "c", "d"],
        ["!=", "e", "f"]
    ]
];

const testCase2 = ["OR", ["<", ["+", "w", "z"], "b"],
    ["AND", ["!==", "a", "b"],
        ["+", "f", "m"]
    ]
];

const testCase3 = ["OR",
    ["<",
        ["!==", "z", "z"], "z"
    ],
    ["AND",
        ["!==", "m", "w"], "m"
    ]
];

const testCase4 = ["OR",
    ["<", "w", "c"],
    ["AND", "z", "m"]
];

const applyBrackets = (inputArray) => {

    const hasInnerObject = (operandNo) => typeof inputArray[operandNo][1] === 'object' ||
        typeof inputArray[operandNo][2] === "object"
    
    const hasDifferentType = (operandNo) => typeof inputArray[operandNo] === 'object' &&
        typeof inputArray[2 / operandNo] !== "object"
    
    return {
        operandOneBrackets: hasInnerObject(1) || hasDifferentType(1),
        operandTwoBrackets: hasInnerObject(2) || hasDifferentType(2)
    }
}

const operatorProblem = (inputArray) => {
    if (typeof inputArray === "string") return inputArray
    const {
        operandOneBrackets,
        operandTwoBrackets
    } = applyBrackets(inputArray)
    return `${operandOneBrackets ? `(${operatorProblem(inputArray[1])})` : operatorProblem(inputArray[1])} ${operatorProblem(inputArray[0])} ${operandTwoBrackets ? `(${operatorProblem(inputArray[2])})` : operatorProblem(inputArray[2])}`
}

console.log(operatorProblem(testCase1))
console.log(operatorProblem(testCase2))
console.log(operatorProblem(testCase3))
console.log(operatorProblem(testCase4))