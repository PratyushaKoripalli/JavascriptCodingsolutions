let a = 10;
let b = 12;
let c = 14;

if (a == b && b == c) {
    console.log("Equilateral Triangle");
}
else if (a == b || b == c || a == c) {
    console.log("Isosceles Triangle");
}
else {

    console.log("Scalene triangle")
}