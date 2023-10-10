let nums:number[]=[10,20,30,40,50];

let newArray=nums.find(findNums);

function findNums(num){

    return num>=30;
}

console.log(newArray);