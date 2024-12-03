/* 
    Program name: hw4.js
    Author: Carisma Spears
    Date created: 9/13/2024
    Date last edited: 12/2/2024
    Version: 4.0
    Description: Homework 4 JavaScript
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

//first name validation JS Code
function validateFname()
{
    fname = document.getElementById("fname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    //checks if first name field is empty
    if (fname == "") 
        {
            document.getElementById("fname-error").innerHTML = "First name field cannot be empty.";
            return false;
        } else if (fname != "") 
            {
                if (!fname.match(namePattern)) //checks if first name matches patern requirements
                {
                    document.getElementById("fname-error").innerHTML = "Letters, apostrophes, and dashes only.";
                    return false;
                } else if (fname.length < 2) //checks if first name is at least 1 character
                    {
                        document.getElementById("fname-error").innerHTML = "First name cannot be less than 2 characters.";
                        return false;
                    } else if (fname.length > 30) //checks if first name is more than 30 characters
                        {
                            document.getElementById("fname-error").innerHTML = "First name cannot be more than 30 characters.";
                            return false;
                        } else 
                        {
                            document.getElementById("fname-error").innerHTML = "";
                            return true;
                        }
            }
        
}

//middle initial validation JS Code
function validateMidInt()
{
    midint = document.getElementById("midint").value;
    var namePattern = /^[A-Z]+$/;

    //makes middle initial uppercase
    midint = midint.toUpperCase();
    document.getElementById("midint").value = midint;

    //checks that middle initial is 1 uppercase letter
    if (!midint.match(namePattern)) 
    {
        document.getElementById("midint-error").innerHTML = "Middle initial must be a single uppercase letter.";
        return false;
    } else 
        {
            document.getElementById("midint-error").innerHTML = "";
            return true;
        }
}

//last name validation JS Code
function validateLname()
{
    lname = document.getElementById("lname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    //checks if last name field is empty
    if (lname == "") 
        {
            document.getElementById("lname-error").innerHTML = "Last name field cannot be empty.";
            return false;
        } else if (lname != "") 
            {
                if (!lname.match(namePattern)) //checks if last name matches patern requirements
                {
                    document.getElementById("lname-error").innerHTML = "Letters, apostrophes, and dashes only.";
                    return false;
                } else if (lname.length < 2) //checks if last name is at least 1 character
                    {
                        document.getElementById("lname-error").innerHTML = "Last name cannot be less than 2 characters.";
                        return false;
                    } else if (lname.length > 30) //checks if last name is more than 30 characters
                        {
                            document.getElementById("lname-error").innerHTML = "Last name cannot be more than 30 characters.";
                            return false;
                        } else 
                        {
                            document.getElementById("lname-error").innerHTML = "";
                            return true;
                        }
                }
}

// dob validation JavaScript code
function validateDob() 
{
    dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date()- 120);

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

//City validation JS Code
function validateCity()
{
    city = document.getElementById("city").value.trim();

    if (!city) 
        {
            document.getElementById("city-error").innerHTML = "City field cannot be blank.";
            return false;
        } else 
            {
                document.getElementById("city-error").innerHTML = "";
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
        document.getElementById("email-error").innerHTML = "Please enter a valid email address";
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

//displays alert box when necessary JS Code
function showAlert() 
{
    var alertBox = document.getElementById("alert-box");
    var closeAlert = document.getElementById("close-alert");

    alertBox.style.display = "block";
    closeAlert.onclick = function() 
    {
        alertBox.style.display = "none";
    }
}

//validate everything on form
function validateEverything() 
{
    let valid = true;

    if (!validateFname()) 
        {
            valid = false;
        }
    if (!validateMidInt()) 
        {
            valid = false;
        }
    if (!validateLname()) 
        {
            valid = false;
        }
    if (!validateDob()) 
        {
            valid = false;
        }
    if (!validateSsn()) 
        {
            valid = false;
        }
    if (!validateAddress1()) 
        {
            valid = false;
        }
    if (!validateCity()) 
        {
            valid = false;
        }
    if (!validateZip()) 
        {
            valid = false;
        }
    if (!validateEmail()) 
        {
            valid = false;
        }
    if (!validatePhone()) 
        {
            valid = false;
        }
    if (!validateUname()) 
        {
            valid = false;
        }
    if (!validatePassword()) 
        {
            valid = false;
        }
    if (!confirmPassword()) 
        {
            valid = false;
        }
    if (valid) // enable submit button if valid
        {
            document.getElementById("submit").disabled = false;
        } else // show alert if validation fails
            {
                showAlert();
            }
}

//cookie for remembering information inputted into the form
function setCookie (name, cvalue, expiryDays) {
    var day = new Date();
    day.setTime(day.getTime() + (expiryDays*24*60*60*1000));
    var expires = "expires=" + day.toUTCString();
    document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie (name) {
    var cookieName = name + "=";
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        while (cookie.charAt (0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) == 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

var inputs = [
    {id: "fname", cookieName: "firstName"},
    {id: "midint", cookieName: "middleInitial"},
    {id: "lname", cookieName: "lastName"},
    {id: "dob", cookieName: "dob"},
    {id: "SSN", cookieName: "SSN"},
    {id: "address1", cookieName: "address1"},
    {id: "address2", cookieName: "address2"},
    {id: "city", cookieName: "city"},
    {id: "zip", cookieName: "zipCode"},
    {id: "email", cookieName: "email"},
    {id: "phone", cookieName: "phone"},
    {id: "notes", cookieName: "notes"},
    {id: "uname", cookieName: "userName"},
]

inputs.forEach(function(input) {
    var inputElement = document.getElementById(input.id);

    //prefill input fields with value from the cookie
    var cookieValue = getCookie(input.cookieName);
    if (cookieValue !== "") {
        inputElement.value = cookieValue;
    }

    //sets a cookie with the input value when the input field changes
    inputElement.addEventListener("input", function() {
        setCookie(input.cookieName, inputElement.value, 30);
    });
});

//greet user with their name & message if the cookie is set
var firstName = getCookie("firstName");
if(firstName !=="") {
    document.getElementById("welcome1").innerHTML = "Welcome Back, " + firstName + "! </br></br>";
    document.getElementById("welcome2").innerHTML = 
    "<a href='#' id='new-user'>Not " + firstName + "? Click here to start a new form. </a>";

    document.getElementById("new-user").addEventListener ("click", function() {
        inputs.forEach(function(input) {
            setCookie(input.cookieName, "", -1);
        });
        location.reload();
    });
}