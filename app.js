function combine(input1, input2, validator) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || validator === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + ' ' + input2.toString();
    }
    return result;
}
var CombineNumbers = combine(25, 26, 'as-number');
console.log(CombineNumbers);
var CombineStringNumbers = combine('25', '26', 'as-number');
console.log(CombineStringNumbers);
var CombineNames = combine('Didier', 'Deschamps', 'as-text');
console.log(CombineNames);
