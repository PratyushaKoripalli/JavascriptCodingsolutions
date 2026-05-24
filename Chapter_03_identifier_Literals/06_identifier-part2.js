// # Wrote js - identifier - rules.js
// JavaScript Identifier Rules — All-in-One Demo
// ─────────────────────────────────────────────
// 1. Valid starting characters: letter, underscore, dollar sign
// ─────────────────────────────────────────────
let myVar = "starts with a letter";
let _private = "starts with underscore";
let $jqElement = "starts with dollar sign";
// ─────────────────────────────────────────────
// 2. Subsequent characters can include digits
// ─────────────────────────────────────────────
let item1 = "ends with digit";
let _123abc = "digit after underscore is fine";
let $2 = "digit after dollar is fine";
let myVar99 = "mixed with digits";
// ─────────────────────────────────────────────
// 3. CANNOT start with a digit
// ─────────────────────────────────────────────
// let 1stPlace = "SyntaxError";     // ❌ Invalid
// ─────────────────────────────────────────────
// 4. Case-sensitive
// ─────────────────────────────────────────────
let name = "lowercase";
let Name = "uppercase";
let NAME = "all caps";
console.log(name, Name, NAME);      // three different identifiers
// ─────────────────────────────────────────────
// 5. Unicode letters allowed
// ─────────────────────────────────────────────
let 变量 = "Chinese characters";
let π = 3.14159;
let rété = "accents are okay";
let привет = "Cyrillic works too";
// ─────────────────────────────────────────────
// 6. No spaces or special characters (only _ and $)
// ─────────────────────────────────────────────
// let my var   = "SyntaxError";     // ❌ space not allowed
// let my-var   = "SyntaxError";     // ❌ hyphen not allowed
// let my@var   = "SyntaxError";     // ❌ @ not allowed
// ─────────────────────────────────────────────
// 7. Cannot use reserved keywords
// ─────────────────────────────────────────────
// let class    = "SyntaxError";     // ❌ reserved
// let function = "SyntaxError";     // ❌ reserved
// let if       = "SyntaxError";     // ❌ reserved
// let 1let     = "SyntaxError";     // ❌ starts with digit─────────────────────────────────────────
