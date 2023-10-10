class Shape{

    area:number;
    constructor(area:number){

        this.area=area;
    }
}

class Circle extends Shape{

    constructor(area:number){

        super(area);
    }

    display():void{

        console.log("Area of the circle is:"+this.area);
    }

}

let circle=new Circle(320);
circle.display();