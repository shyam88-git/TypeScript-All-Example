var names = ["Sumit", "Suraj", "Swastik"];
var result = names.find(findName);
function findName(name) {
    return name === 'Suraj';
}
console.log(result);
