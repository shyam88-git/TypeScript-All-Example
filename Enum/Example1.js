var Weekedays;
(function (Weekedays) {
    Weekedays[Weekedays["sunday"] = 0] = "sunday";
    Weekedays[Weekedays["monday"] = 1] = "monday";
    Weekedays[Weekedays["tuesday"] = 2] = "tuesday";
    Weekedays[Weekedays["wed"] = 3] = "wed";
    Weekedays[Weekedays["th"] = 4] = "th";
})(Weekedays || (Weekedays = {}));
var Months;
(function (Months) {
    Months[Months["Jan"] = 0] = "Jan";
    Months[Months["Feb"] = 1] = "Feb";
    Months[Months["Mar"] = 2] = "Mar";
    Months[Months["Apr"] = 3] = "Apr";
    Months[Months["May"] = 4] = "May";
    Months[Months["Jun"] = 5] = "Jun";
})(Months || (Months = {}));
var now = new Date();
console.log("\nMonth:".concat(Months[now.getMonth()], "\n\nWeekday:").concat(Weekedays[now.getDay()], " "));
