const add = (n1: number, n2: number) => {
    return n1 + n2;
}

// In TS, a function that doesn't return anything returns void not undefined
// ↪ For a function to output undefined, it needs to return undefined
const printResult = (num: number): void => {
    console.log(`Result: ${num}`);    
}

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
    const result = n1 + n2;
    cb(result);
}

printResult(add(5, 12));

let combinedValues: (param1: number, param2: number) => number;

combinedValues = add;

console.log(combinedValues(8, 8));

addAndHandle(10, 20, (num) => console.log(num))