class student{

     stuCode:number;
     stuName:string;

     constructor(code:number,name:string){

        this.stuCode=code;
        this.stuName=name;
     }

     getGrade():string{

        return "A+";
     }
}