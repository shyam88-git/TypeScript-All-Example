interface Person{

    name:string;
}

interface PersonDetail{

    age:number;
    gender:string;
}

interface Employee  extends Person,PersonDetail{

    empCode:number;
}

let empObject=<Employee>{};
empObject.name="Abhisek";
empObject.age=24;

empObject.gender="male";

console.log("Name:"+empObject.name);
console.log("Employee Code:"+empObject.empCode);

