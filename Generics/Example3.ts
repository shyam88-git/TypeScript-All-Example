
function sum(a:any,b:any){

    return a+b;
}
class Demo{

    public Add<T>(a:T,b:T):T{

        return sum(a,b);
    }
}

let obj=new Demo();
obj.Add<number>(10,20);
obj.Add<string>("A","B");