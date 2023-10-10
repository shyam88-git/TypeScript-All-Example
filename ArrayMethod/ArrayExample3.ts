let ages:number[]=[25,24,28,22];
let res=ages.find(findAge);

function findAge(age){

    return age>18;
}

console.log(res);