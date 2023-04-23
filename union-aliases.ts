type Combinable = number | string;

function combine(
    input1: Combinable, 
    input2: Combinable,
    validator: 'as-number' | 'as-text') {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || validator === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + ' ' + input2.toString();
    }
    return result;
}

const CombineNumbers = combine(25, 26, 'as-number');
console.log(CombineNumbers);

const CombineStringNumbers = combine('25', '26', 'as-number');
console.log(CombineStringNumbers);

const CombineNames = combine('Didier', 'Deschamps', 'as-text')
console.log(CombineNames);