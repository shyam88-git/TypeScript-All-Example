import { ProductTemplate } from "../Templates/ProductTemplate";

export class ProductComponent extends ProductTemplate
{



   Name="Samsung TV";
   Price=45000.0;
   Qty=2;
  CategoryName="Electronics";
  Total(){

    return this.Qty*this.Price;
  }

  Print(){

    console.log(`Name=${this.Name} \n Price=${this.Price} \n 
    Qty=${this.Qty}\n CategoryName=${this.CategoryName}\n
    Total=${this.Total()}\n`);
  }



}