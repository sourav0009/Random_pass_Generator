const passwordBox = document.getElementById("password");
const length = 12;


const uporCase = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*?"
const allChar = uporCase + lowerCase + number + symbol;

function creatPassword(){
    let password = " ";
    password += uporCase[Math.floor(Math.random()*uporCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];


    while(length > password.length){
    password += allChar[Math.floor(Math.random()*allChar.length)];
    }

    passwordBox.value = password;
}

function myCopy(){
    const copyText = document.getElementById("password")

    //im mobile
    // copyText.select();
    // copyText.setSelectionRange(0,99999);
    navigator.clipboard.writeText(copyText.value);
    alert("clibord the text: " + copyText.value);
}