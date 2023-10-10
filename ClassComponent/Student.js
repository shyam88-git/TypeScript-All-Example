var student = /** @class */ (function () {
    function student(code, name) {
        this.stuCode = code;
        this.stuName = name;
    }
    student.prototype.getGrade = function () {
        return "A+";
    };
    return student;
}());
