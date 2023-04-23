function add(n1: number, n2: number) {
    return n1 + n2;
}

function showResult(num: number): void {
    console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num:number) => void) {
    const result = n1 + n2;
    cb(result);
}

showResult(add(12,17));

let CombineValues: (a: number, b: number) => number;
CombineValues = add;

console.log(CombineValues(8,8));

addAndHandle(10, 20, (result) => {
    console.log(result);
})