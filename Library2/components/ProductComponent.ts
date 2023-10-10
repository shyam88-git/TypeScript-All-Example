
import ProductTemplate from "../templates/ProductTemplate";
export default class ProductComponent extends ProductTemplate {


    Name="Mobile";
    Price=50000.0;
    Qty=5;
    CategoryName="Electronics";

    Total(){

        return this.Price*this.Qty;
    }
    Print(){

        console.log(`Name =${this.Name} \n Price=${this.Price}\n
        Qty=${this.Qty}\n
        Total=${this.Total()}\n
         `);
    }

}