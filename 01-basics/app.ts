let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Rony";

// unknown cannot be assigned
// userName = userInput;

// instead check first
if (typeof userInput === "string") {
    userName = userInput;
}

const generateError = (message: string, code: number): never => {
    throw {message, code};
}

generateError("Error!", 400);