enum Weekedays{

    sunday,
    monday,
    tuesday,
    wed,
    th,
}

enum Months{

    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
}
let now:any=new Date();
console.log(`
Month:${Months[now.getMonth()]}\n
Weekday:${Weekedays[now.getDay()]} `);