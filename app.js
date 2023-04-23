function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var CombineNumbers = combine(25, 26);
console.log(CombineNumbers);
var CombineNames = combine('Didier', 'Deschamps');
console.log(CombineNames);
