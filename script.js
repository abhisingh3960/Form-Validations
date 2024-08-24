let form = document.getElementById('signupForm');
let emailInput = document.getElementById('email');
let emailError = document.getElementById('emailError');

let passwordInput = document.getElementById('password');
let passwordError = document.getElementById('passwordError');

let formStatus = document.getElementById('formStatus');

// Email checking conditions: more than 3 characters, includes "@" and "."
emailInput.addEventListener('input', () => {
    let emailValue = emailInput.value;
    if (emailValue.length > 3 && emailValue.includes("@") && emailValue.includes(".")) {
        emailError.textContent = ''; 
        emailError.style.color = "green";
    } else {
        emailError.textContent = 'Make sure email is more than 3 characters and has @ and a .';
        emailError.style.color = "red";
    }
    checkingStatus();
});


// Password Checking Conditions : password.lenght > 8;
passwordInput.addEventListener('input' , () =>{
    let passwordValue = passwordInput.value;
    if(passwordValue.length > 8){
        passwordError.textContent ='';
        passwordError.style.color = "green";
    }
    else{
        passwordError.textContent ='Make sure password is more than 8 characters.';
        passwordError.style.color = "red";
    }
    checkingStatus();
})


// Verifing the email and password both and set the all good;
function checkingStatus(){
    if(emailError.style.color ==='green' &&  passwordError.style.color === "green" ){
        formStatus.textContent ='All good to go!';
        formStatus.className ='success';
    }
    else{
        formStatus.textContent ='';
    }
} 



form.onsubmit = function (event) {
    event.preventDefault();

    const confirmation = confirm("Are you sure you want to sign up?");
    if (confirmation) {
        alert('Successful signup!');
        form.reset();
        emailInput.classList.remove('valid', 'invalid');
        passwordInput.classList.remove('valid', 'invalid');
        emailError.textContent = '';
        passwordError.textContent = '';
        formStatus.textContent = '';
    } else {
        window.location.reload(); 
    }
};