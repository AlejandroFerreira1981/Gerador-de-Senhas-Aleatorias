const btnEL = document.querySelector(".btn")
const inputEL = document.querySelector("#input")
const copyIconEL = document.querySelector(".fa-copy")

btnEL.addEventListener("click", () => {
    createPassword()
})

copyIconEL.addEventListener("click", ()=>{
    copyPassword()
})

function createPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const passwordLength = 14
    let password = ""
    
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNum, randomNum + 1)
    }
    inputEL.value = password
}

function copyPassword() {
    inputEL.select()
    inputEL.setSelectionRange(0,9999)
    navigator.clipboard.writeText(inputEL.value)
}