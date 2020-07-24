// Variables 
var length;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// Arrays for characters 
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", ".", "/", "<", ">","?", "[", "]",  "{", "}", "~"];
upper= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var confirmationVal;

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// Generate password + alert if no options are picked
function generatePassword() {
  
  var length = prompt("Input password length (between 8 & 128 characters.)")
  
    if (!length) {
        alert("Length must between 8 & 128 characters!");
    } else if (length <= 7 || length >= 129) {
        
        length = parseInt(prompt("You must choose between 8 and 128!"));

    } else {
      
        confirmNumber = confirm("Would you like to use numbers?");
        confirmCharacter = confirm("Would you like to use special characters?");
        confirmUppercase = confirm("Would you like to use uppercase letters?");
        confirmLowercase = confirm("Would you like to use lowercase letters?");
    };
    
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        confirmationVal = alert("You must select an option.");

    }

    // Statements for various confirmed values.  
    else if (confirmNumber && confirmCharacter && confirmUppercase && confirmLowercase) {

        confirmationVal = character.concat(number, lower, upper);
    }
    
    else if (confirmNumber && confirmCharacter && confirmUppercase) {
        confirmationVal = character.concat(number, upper);
    }
    else if (confirmNumber && confirmCharacter && confirmLowercase) {
        confirmationVal = character.concat(number, lower);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        confirmationVal = character.concat(lower, upper);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        confirmationVal = number.concat(lower, upper);
    }
    
    else if (confirmCharacter && confirmNumber) {
        confirmationVal = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        confirmationVal = character.concat(lower);

    } else if (confirmCharacter && confirmUppercase) {
        confirmationVal = character.concat(upper);
    }
    else if (confirmLowercase && confirmNumber) {
        confirmationVal = lower.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        confirmationVal = lower.concat(upper);

    } else if (confirmNumber && confirmUppercase) {
        confirmationVal = number.concat(upper);
    }
    
    else if (confirmCharacter) {
        confirmationVal = character;
    }
    else if (confirmNumber) {
        confirmationVal = number;
    }
    else if (confirmLowercase) {
        confirmationVal = lower;
    }
    else if (confirmUppercase) {
        confirmationVal = upper;
    };

//Selects random values, then joins them into array, convert to string. 
    var password = [];

    for (var i = 0; i < length; i++) {
        var pickconfirmationVal = confirmationVal[Math.floor(Math.random() * confirmationVal.length)];
        password.push(pickconfirmationVal);
    }
   
    var ps = password.join("");
    UserInput(ps);
    return ps;
}// outputs generated password
function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword();
});
