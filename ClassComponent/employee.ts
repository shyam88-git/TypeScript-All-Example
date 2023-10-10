class employee{

    id:number;
    name:string;


    //define constructor

    constructor(id:number,name:string){

        this.id=id;
        this.name=name;
    }

    //creating method and function

    display():void{
        console.log("Function displays student id is:"+this.id);
        console.log("Function displays student name is:"+this.name);
    }
}

let ob=new employee(101,'Shyam');
ob.display();
