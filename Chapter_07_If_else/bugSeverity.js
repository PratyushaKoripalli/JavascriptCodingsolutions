let bug_Severity = 10;

if (bug_Severity >= 9) {
    console.log("Severity: Critical — Block release");
}
else if (bug_Severity >= 7) {
    console.log("Severity: High");
}
else if (bug_Severity >= 4) {
    console.log("Severity: Medium");
}
else if (bug_Severity >= 1) {
    console.log("Severity: Low");
}
else { console.log("Invalid score") }