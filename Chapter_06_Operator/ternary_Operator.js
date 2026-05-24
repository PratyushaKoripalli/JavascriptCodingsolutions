// let actual_marks = 60;

// let student_marks = actual_marks > 59 ? "pass" : "fail";

// console.log(student_marks);


// let actual_code = 200;
// let expected_code = 200;
// let Result = actual_code === expected_code ? "pass" : "fail";
// console.log(Result);

// let student_marks = 100;

// let Result = student_marks <= 50 ? " fail" :
//     (student_marks <= 60) ? "justPass" :
//         (student_marks <= 70) ? "thirdClass" :
//             (student_marks <= 80) ? "secondClass" :
//                 (student_marks <= 90) ? "firstClass" :
//                     (student_marks > 90) ? "Topper" : "NA"


// console.log(Result);

// let environment = "sys"

// let url = environment === "staging" ? "https://demowebshop.staging.tricentis.com" : "https://demowebshop.sys.tricentis.com";

// console.log(url);

// let testcaseStatus = true;

// let status = testcaseStatus ? "pass" : "fail";

// console.log(status)

// let sla = 900;
// let response_time = 1000;

// let time_taken = sla <= response_time ? "SLA Not Breached" : "SLA Breached";

// console.log(time_taken);

// let person_age = 21

// let result = person_age >= 18 ? (person_age >= 30 ? "heCanStandInElection" : "heCannotJoinElection") : "heCannotVote";
// console.log(result);

// let statuscode = 404;

// let result = statuscode < 300 ? "success" :
//     statuscode < 400 ? "redirect" :
//         statuscode < 500 ? "clientError" : "serverError";

// console.log(`${statuscode} ${result}`);

// let a = 16;
// let b = 14;
// let result = a > b ? "a is greatest" : "b is greatest";
// console.log(result);

// let a = null;

// let result = a ?? 30;
// console.log(result);

let milk = null;
let requiredMilk = milk ?? "Nandhini"
console.log(milk);
console.log(requiredMilk);


// let a = 5, b = 8, c = 10;

// let result = a > b ? (a > c ? "a is greatest" : "c is greatest") : (b > c ? "b is greatest" : "c is greatest");

// console.log(result);