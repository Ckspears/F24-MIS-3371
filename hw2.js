/* 
    Program name: hw2.html
    Author: Carisma Spears
    Date created: 9/13/2024
    Date last edited: 10/19/2024
    Version: 2.0
    Description: Homework 2 JavaScript
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

// dob validation JavaScript code
function validateDob() 
{
    dob=document.getElementById("dob");
    let date = new Date(dob, value);
    let maxDate = new Date().setFullYear(new Date()-120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = "Date cannot be in the future"
        dob.value="";
        return false;
    } else if(date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML = "Date cannot be more than 120 years ago"
        dob.value="";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML ="";
        return true;
    }
}

// SSN validation JavaScript code
function validateSsn() 
{
    const SSN = document.getElementById("SSN").value;

    // regex for SSN pattern
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(SSN)) {
        document.getElementById("SSN-error").innerHTML = "Please enter a valid Social Security Number";
        return false;
    } else {
        document.getElementById("SSN-error").innerHTML = "";
        return true;
    }
}

// address validation JavaScript code
function validateAddress1()
{
    var ad1 = document.getElementById("address1").value;
    console.log(ad1);
    console.log(ad1.length);

    if (ad1.length < 2) {
        document.getElementById("address1-error").innerHTML = "Please enter a valid address";
        return false;
    } else {
        document.getElementById("address1-error").innerHTML = "";
        return true;
    }
}

// Zip code validation JavaScript code
function validateZip() 
{
    const zipInput = document.getElementById("zip");
    let zip = zipInput.value.replace(/[^\d-]/g, ""); //removes any non-number and non-dash characters

    if (!zip) {
        document.getElementById("zip-error").innerHTML = "Zip code cannot be left blank";
        return false;
    }

    if (zip.length > 5) {
        zip = zip.slice(0,5); //removes all digits after first 5
    }

    zipInput.value = zip;
    document.getElementById("zip-error").innerHTML = "";
    return true;
}

// email validation JavaScript code
function validateEmail() 
{
    email = document.getElementById("email").value;
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;//regex pattern for email

    if (email =="") {
        document.getElementById("email-error").innerHTML = "Email cannot be left blank";
        return false;
    } else if(!email.match(emailR)) {
        Document.getElementById("email-error").innerHTML = "Please enter a valid email address";
        return false;
    } else {
        document.getElementById("email-error").innerHTML = "";
        return true;
    }
}

// phone number validation JavaScript code
function validatePhone()
{
    const phoneInput = document.getElementById("phone");
    const phone = phoneInput.value.replace(/\D/g, ""); //removes all non-number characters

    if (phone.length == 0) {
        document.getElementById("phone-error").innerHTML = "Phone number cannot be left blank";
        return false;
    }

    const formattedPhone = phone.slice(0,3) + "-" + phone.slice(3,6) + "-" + phone.slice(6,10);
    phoneInput.value = formattedPhone;
    document.getElementById("phone-error").innerHTML = "";
    return true;
}

// username validation JavaScript code
function validateUname()
{
    uname = document.getElementById("uname").value;

    //converts username to lowercase
    uname = uname.toLowerCase();

    //displays username in lowercase
    document.getElementById("uname").value = uname;

    if (uname.length == 0) {
        document.getElementById("uname-error").innerHTML = "Username cannot be left blank";
        return false;
    }

    //checks that username does not start with a number
    if (!isNaN(uname.charAt(0))) {
        document.getElementById("uname-error").innerHTML = "Username cannot begin with a number";
        return false;
    }

    //regex checks that username consists of only letters, numbers, or underscores
    let regex = /^[a-zA-Z0-9_]+$/;
    if (!regex.test(uname)) {
        document.getElementById("uname-error").innerHTML = "Username can only contain letters, numbers, or underscores";
        return false;
        //checks that username does not have more than 30 characters
    } else if (uname.length < 5) {
        document.getElementById("uname-error").innerHTML = "Username cannot be less than 5 characters";
        return false;
    } else if (uname.length > 30) {
        document.getElementById("uname-error").innerHTML = "Username cannot exceed 30 characters";
        return false;
    } else { //if all requirements above are met then the username is valid
        document.getElementById("uname-error").innerHTML = "";
        return true;
    }
}

// password validation JavaScript code
function validatePassword() 
{
    const pword = document.getElementById("pword").value;
    const uname = document.getElementById("uname").value;

    //sets up and initializes an array
    const errorMessage = [];

    //checks for lowercase letters
    if (!pword.match(/[a-z]/)) {
        errorMessage.push("Enter at least one lowercase letter");
    }
    
    //checks for uppercase letters
    if (!pword.match(/[A-Z]/)) {
        errorMessage.push("Enter at least one uppercase letter");
    }

    //checks for number
    if (!pword.match(/[0-9]/)) {
        errorMessage.push("Enter at least one number");
    }

    //checks for special characters
    if (!pword.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
        errorMessage.push("Enter at least one special character");
    }

    //checks that username is not in password
    if (!pword == uname || pword.includes[uname]) {
        errorMessage.push("Password cannot contain username");
    }

    //displays error messages if there are any errors
    const errorContainer = document.querySelector(".pword-message");
    errorContainer.innerHTML = errorMessage
    .map((message) => `<span>${message}</span><br/>`)
    .join("");
}

// confirm password validation JavaScript code
function confirmPassword() 
{
    pword1 = document.getElementById("pword").value;
    pword2 = document.getElementById("confirm_pword").value;

    if (pword1 != pword2) {
        document.getElementById("confirmpword-error").innerHTML = "Passwords do not match";
        return false;
    } else {
        document.getElementById("confirmpword-error").innerHTML = "Passwords match";
        return true;
    }
}

//re-display user input back to user through review button
function reviewInput() 
{
    var formcontent = document.getElementById("signup");
    var formoutput;
    var i;
    formoutput = "<table class='output'><th colspan = '3'>Your Information:</th>";
    
    for (i = 0; i < formcontent.length; i++) 
    {
        if (formcontent.elements[i].value !== "") 
        {
            datatype = formcontent.elements[i].type;
            switch (datatype) 
            {
                case "checkbox":
                    if (formcontent.elements[i].checked) {
                        formoutput = formoutput + "<tr> <td align= 'right'>" + formcontent.elements[i].name + "</td>";
                        formoutput = formoutput + "<td class='outputdata'>&#x2713;</td></tr>";
                    }
                    break;
                case "radio":
                    if (formcontent.elements[i].checked) {
                        formoutput = formoutput + "<tr> <td align= 'right'>" + formcontent.elements[i].name + "</td>";
                        formoutput = formoutput +"<td class='outputdata'>" + formcontent.elements[i].value + "</td></tr>";
                    }
                    break;
                case "button":
                case "submit":
                case "reset":
                    break;

                case "password":
                    //show placeholder for password to protect sentitive user inputs (SSN and password)
                    formoutput += "<tr> <td align= 'right'>" + formcontent.elements[i].name + "</td>";
                    formoutput += "<td class='outputdata'>**********</td></tr>"; //masked password
                    break;
                default:
                    formoutput = formoutput + "<tr><td align= 'right'>" + formcontent.elements[i].name + "</td>";
                    formoutput = formoutput + "<td class='outputdata'>" + formcontent.elements[i].value + "</td></tr>";

            }
        }
    }
    if (formoutput.length > 0) {
        formoutput = formoutput + "</table>";
        document.getElementById("showInput").innerHTML = formoutput;
    }

}

//remove user input
function removeReview() 
{
    document.getElementById("showInput").innerHTML = "";
}
