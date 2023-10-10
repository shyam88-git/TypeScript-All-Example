class Car{

    color:string;

    constructor(color:string){

        this.color=color;
    }


}

class BMW extends Car{

    Price:number;

    constructor(Price:number, color:string){

        super(color);
        this.Price=Price;
    }

    display():any{

        console.log("Car color is:"+this.color);
        console.log("Car Price is:"+this.Price);
    }




}

let obj=new BMW(50000,'Red');
obj.display();