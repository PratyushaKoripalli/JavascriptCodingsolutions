// //pre increment
// let a = 10;
// console.log(++a);
// console.log(a);
// //pre decrement
// let c = 11;
// console.log(--c);
// console.log(c);
// //post increment
// let b = 11;
// console.log(b++);
// console.log(b);
// //post decrement
// let d = 11;
// console.log(d--);
// console.log(d);

//Even or odd
let no = 13;
if (no % 2 === 0) {
    console.log("even")
}
else if (no % 2 === 1) {
    console.log("odd")
};

//Student Grade
let Marks = 95;

if (Marks >= 90) {
    console.log("Grade A")
}
else if (Marks >= 80) {
    console.log("Grade B")
}
else if (Marks >= 70) {
    console.log("Grade C")
}
else if (Marks >= 60) {
    console.log("Grade D")
}
else { console.log("fail") };

//leap year
let year = 2000;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("leap year")
}
else if (year % 4 === 1) {
    console.log("Not a leap year")
};