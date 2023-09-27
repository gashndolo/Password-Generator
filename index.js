const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOneEl = document.getElementById("passwordOne")
let passwordTwoEl = document.getElementById("passwordTwo")

function generatePasswords() {
    passwordOneEl.textContent = ""
    passwordTwoEl.textContent = ""
    let passwordOne = ""
    let passwordTwo = ""
    let passwordOneLength = Math.floor(Math.random() * 6) + 10
    for (let i = 0; i<= passwordOneLength; i++) {
        passwordOne += characters[Math.floor(Math.random() * characters.length)]
    }
    passwordOneEl.textContent = passwordOne
    console.log("One: " + passwordOne)
    let passwordTwoLength = Math.floor(Math.random() * 6) + 10
    for (let i = 0; i<= passwordTwoLength; i++) {
        passwordTwo += characters[Math.floor(Math.random() * characters.length)]
    }
    passwordTwoEl.textContent = passwordTwo
    console.log("Two: " + passwordTwo)
}


