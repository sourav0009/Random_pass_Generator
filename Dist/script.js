const passwordBox = document.getElementById("password");
const length = 12;


const uporCase = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*?"

function creatPassword(){
    let password = " ";
    password += uporCase[Math.floor(Math.random()*uporCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];


    while(length > Password.length){
        
    }
}
