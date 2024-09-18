// Custom type declaration
type numStr = number | string;
type type = "as-number" | "as-text";

function combine(input1: numStr, input2: numStr, resultConversion: type) {

    let result;

    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
        result = Number(input1) + Number(input2);
    }
    else {
        result = input1.toString() + input2.toString();
    }
    
    return result;
}

const combinedNumbers = combine(30, 30, "as-number");
console.log(combinedNumbers);

const combinedStringNumbers = combine("10", "24", "as-number");
console.log(combinedStringNumbers);

const combinedStrings = combine("Max", "Anna", "as-text");
console.log(combinedStrings);