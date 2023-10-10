var ages = [25, 24, 28, 22];
var res = ages.find(findAge);
function findAge(age) {
    return age > 18;
}
console.log(res);
