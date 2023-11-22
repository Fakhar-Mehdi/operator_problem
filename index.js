testCase1 = ["OR", ["<", "a", "b"],
    ["AND", ["==", "c", "d"],
        ["!=", "e", "f"]
    ]
];

testCase2 = ["OR", ["<", ["+", "w", "z"], "b"],
    ["AND", ["!==", "a", "b"],
        ["+", "f", "m"]
    ]
];

const applyBrackets = (inputArray) => {
    return {
        operandOneBrackets: (typeof inputArray[1][1] === "object" || typeof inputArray[1][2] === "object") || (typeof inputArray[1] === "object" && typeof inputArray[2] !== "object"),
        operandTwoBrackets: (typeof inputArray[2][1] === "object" || typeof inputArray[2][2] === "object") || (typeof inputArray[1] !== "object" && typeof inputArray[2] === "object")
    }
}

const operatorProblem = (inputArray) => {
    if (typeof inputArray === "string")
        return inputArray

    const {
        operandOneBrackets,
        operandTwoBrackets
    } = applyBrackets(inputArray)

    return `
    ${operandOneBrackets ? `(${operatorProblem(inputArray[1])})` : operatorProblem(inputArray[1])} 
    ${operatorProblem(inputArray[0])} 
    ${operandTwoBrackets ? `(${operatorProblem(inputArray[2])})` : operatorProblem(inputArray[2])}
    `
}

console.log(operatorProblem(testCase1))
console.log(operatorProblem(testCase2))