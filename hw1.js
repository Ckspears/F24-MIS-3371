/* 
    Program name: patient-form.html
    Author: Carisma Spears
    Date created: 9/13/2024
    Date last edited: 9/21/2024
    Version: 1.0
    Description: Homework 1 JavaScript
*/

//dynamic date JS code//
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;


//range slider JS Code//
let slider = document.getElementById("range")
    let output = document.getElementById("range slider")
    output.innerHTML = slider.value;

    slider.oninput = function () {output.innerHTML = this.value;};