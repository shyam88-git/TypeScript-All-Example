var employee = /** @class */ (function () {
    //define constructor
    function employee(id, name) {
        this.id = id;
        this.name = name;
    }
    //creating method and function
    employee.prototype.display = function () {
        console.log("Function displays student id is:" + this.id);
        console.log("Function displays student name is:" + this.name);
    };
    return employee;
}());
var ob = new employee(101, 'Shyam');
ob.display();
