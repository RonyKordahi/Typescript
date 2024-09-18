function add(n1: number, n2: number, printResult: boolean, resultPhrase: string) {

    if(printResult) {
        console.log(`${resultPhrase} ${n1 + n2}`);
    }

    return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "The result is:";

add(number1, number2, printResult, resultPhrase);