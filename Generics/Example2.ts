interface IProduct{

    Name:string;
    Price:number;
    Stock:boolean;
}

interface IEmployee{

    FirstName:string;
    LastName:string;
    Designation:string;
}

class Service{

    public GetData<T>(data:T){

        console.log(data);
    }
}

let tv=new Service();
tv.GetData<IProduct>({

    Name:"TV",
    Price:35000,
    Stock:true,
});

tv.GetData<IProduct>({

    Name:"Mobile",
    Price:45000,
    Stock:true,
});
tv.GetData<IEmployee>({

    FirstName:"Shyam",
    LastName:"Sharki",
    Designation:"Developer"
})
