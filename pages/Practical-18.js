//selectors

const form = document.getElementById('form');
const username = document.getElementById("username");
const email = document.getElementById("email");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const small = document.querySelector("small");



//Event Handler
form.addEventListener('submit',function(e){
    e.preventDefault();  //stop (blank form)data submission to server
    checkInput();
});

//Functions

function checkInput(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === ''){
        showError(username,"Username can not be blank");
    }
    else if(!isUsernameValid(usernameValue)){
        showError(username,"Username invalid, don't use special character");
    }
    else{
        showSuccess(username);
    }

    if(emailValue === ''){
        showError(email,"Email can not be blank");
    }
    else if(!isEmailValid(emailValue)){
        showError(email,"Email id is not valid");
    }
    else{
        showSuccess(email);
    }
    if(password1Value === ''){
        showError(password1,"Password can not be blank");
    }
    else{
        showSuccess(password1);
    }

    if(password2Value === ''){
        showError(password2,"Password2 can not be blank");
    }
    else if(password2Value != password1Value){
        showError(password2,"Passwords not matched");
    }
    else{
        showSuccess(password2);
    }


}
function showError(input,msg){
    const formControl = input.parentNode;
    formControl.className = 'form-container error';//error class is added
    const small = formControl.querySelector('small');
    small.innerHTML = msg;
}

function showSuccess(input){
    const formControl = input.parentNode;
    formControl.className = 'form-container success';
}

function isEmailValid(email){
    return /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,3})$/.test(email);
}

function isUsernameValid(username){
    return /(^[a-z0-9]{3,10}$)/.test(username);
}