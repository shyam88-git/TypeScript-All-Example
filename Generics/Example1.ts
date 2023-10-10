interface IOracle{
    UserName:string;
    Password:string;
    Database:string;



}

interface MongoDB{

    url:string;
}

class Database<T>{

    public ConnectionString:T|null=null;
    public Connect(){

        for(var property in this.ConnectionString){

            console.log(`${property}:${this.ConnectionString[property]}`);
        }
    }
}

console.log(`........................Connectiong with oracle...........`);
let oracle=new Database<IOracle>();
oracle.ConnectionString={

    UserName:"Scott",
    Password:"Tiger",
    Database:"embdb",
}

oracle.Connect();

console.log(`.........Connectiong with MongoDB........`);
let mongo=new Database<MongoDB>();
mongo.ConnectionString={

   url:"mongodb://127.0.0.1:2701",


}

mongo.Connect();