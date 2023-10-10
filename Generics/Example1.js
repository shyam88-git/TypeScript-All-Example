var Database = /** @class */ (function () {
    function Database() {
        this.ConnectionString = null;
    }
    Database.prototype.Connect = function () {
        for (var property in this.ConnectionString) {
            console.log("".concat(property, ":").concat(this.ConnectionString[property]));
        }
    };
    return Database;
}());
console.log("........................Connectiong with oracle...........");
var oracle = new Database();
oracle.ConnectionString = {
    UserName: "Scott",
    Password: "Tiger",
    Database: "embdb",
};
oracle.Connect();
console.log(".........Connectiong with MongoDB........");
var mongo = new Database();
mongo.ConnectionString = {
    url: "mongodb://127.0.0.1:2701",
};
mongo.Connect();
