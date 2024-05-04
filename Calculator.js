var Display = document.getElementById("display-region");
var Displayable = document.getElementsByClassName("displayable");
var Numbers = document.getElementsByClassName("num");
var Result = document.getElementById("result");
var Plus = document.getElementById('plus');
var Sub = document.getElementById("sub");
var Mul = document.getElementById("mul");
var Division = document.getElementById("division");
var Clear = document.getElementById("clear");


let isOpenBracket = true;

function toggleBracket() {
    if (isOpenBracket) {
        Display.value += '(';
    } else {
        Display.value += ')';
    }
    isOpenBracket = !isOpenBracket;
}



function appendToDisplay(value) {
    document.getElementById('display-region').value += value;
}
 

//CALCULATION
function Calc() {
    try {
        Display.value = eval(Display.value);
    }
    catch (error) {
        Display.value = "Error";
    }
}

Result.onclick = () => {
    Display.innerHTML = Calc();
}

document.addEventListener('DOMContentLoaded', function () {
            document.addEventListener('keydown', function (event) {
                if (event.key === 'Enter') {
                    event.preventDefault(); // Prevent default Enter key behavior
                    Result.click(); // Click the button
                }
            });
        });


//CLEAR FUNCTION
Clear.addEventListener("click", function () {
    Display.value = " ";
});



function deleteLastCharacter() {
    Display.value = Display.value.slice(0, -1);
}

document.addEventListener('DOMContentLoaded', function () {
            document.addEventListener('keydown', function (event) {
                if (event.key === 'Backspace') {
                    event.preventDefault(); // Prevent default Enter key behavior
                    document.getElementById('delete').click(); // Click the button
                }
            });
        });


document.addEventListener("keypress", function (event) {
    keyEvent(event.key);
})


function keyEvent(key) {
    switch (key) {
        case "1":
            appendToDisplay(1);
            break;
        
          case "2":
            appendToDisplay(2);
            break;
        
          case "3":
            appendToDisplay(3);
            break;
        
          case "4":
            appendToDisplay(4);
            break;
        
          case "5":
            appendToDisplay(5);
            break;
        
          case "6":
            appendToDisplay(6);
            break;
        
          case "7":
            appendToDisplay(7);
            break;
        
          case "8":
            appendToDisplay(8);
            break;
        
          case "9":
            appendToDisplay(9);
            break;
        
          case "0":
            appendToDisplay(0);
            break;
        
          case "(":
            appendToDisplay('(');
            break;
        
          case ")":
            appendToDisplay(')');
            break;
        
          case "%":
            appendToDisplay('%');
            break;
        
          case "/":
            appendToDisplay('/');
            break;
        
          case "*":
            appendToDisplay('*');
            break;
        
          case "-":
            appendToDisplay('-');
            break;
        
          case "+":
            appendToDisplay('+');
            break;
        
          case ".":
            appendToDisplay('.');
            break;
        
          case "=":
            Display.innerHTML = Calc();
            break;
        
        //   case "":
        //     appendToDisplay(1);
        //     break;
    
        default:
            break;
    }
}

