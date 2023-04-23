function add(n1, n2) {
    return n1 + n2;
}
function showResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
showResult(add(12, 17));
var CombineValues;
CombineValues = add;
console.log(CombineValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
