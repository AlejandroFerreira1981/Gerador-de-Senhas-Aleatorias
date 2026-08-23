const btnEL = document.querySelector(".btn");

btnEL.addEventListener("click", () => {
    createPassword();
});

function createPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 16;
    let password = ""
    for (let i = 0; i < passwordLength; i++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1);
        console.log(randomNum, password);
    }
}