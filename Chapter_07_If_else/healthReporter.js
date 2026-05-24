let Per_testcase_pass = 69;
if (Per_testcase_pass === 100) {
    console.log("Green Build")
}
else if (Per_testcase_pass >= 90) {
    console.log("🟡 Stable — Investigate failures")
}
else if (Per_testcase_pass >= 70) {
    console.log("Unstable")
}
else {
    console.log("🔴 Broken Build — Block deployment")
}