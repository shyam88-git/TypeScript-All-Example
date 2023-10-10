const names:string[]=["Sumit","Suraj","Swastik"];
const result=names.find(findName);

function findName(name){

    return name==='Suraj';
}

console.log(result);