function add(n1: number, n2: number, showResult: boolean, phrase: string ) {

    const result = (n1 + n2);
    if (showResult = true){
        console.log(phrasing + result);
    }
    return n1 + n2;
}

const number1 = 5;
const number2 = 3;
const printResult = true;
const phrasing = 'Result is: ';

add(number1, number2, printResult, phrasing);
