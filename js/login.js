// step 1: add clicked event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step 2 get the email address inside the email input field
    // always remeber to use.value to get the text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);
    // step 3: get the password inside the password input field....
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(password);

    // step -4 verify email and password
    if(email === 'bangla@gmail.com' && password === 'secret'){
        window.location.href = 'http://127.0.0.1:5500/js/bank.html';
    }
    else{
        alert('toke ami teijjo putro ghosona korlam. tui amar password vule gachis haramjada');
    }
})