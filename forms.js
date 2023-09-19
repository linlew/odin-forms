
let firstPass = '';
let secondPass = '';

const confirmPassword = document.querySelector('#confirm-password');
confirmPassword.addEventListener('input', checkPassword);

const initialPassword = document.querySelector('#initial-password');
initialPassword.addEventListener('input', checkPassword);

const incorrectPassword = document.createElement('div');
incorrectPassword.classList = 'incorrect-warning';
incorrectPassword.textContent = '* Passwords do not match'

const signUpLeft = document.querySelector('.left');




function checkPassword() {
    firstPass = initialPassword.value;
    secondPass = confirmPassword.value;
    if (firstPass !== secondPass){
        initialPassword.classList = 'incorrect';
        confirmPassword.classList = 'incorrect';
        signUpLeft.appendChild(incorrectPassword);
    }
    else {
        initialPassword.classList.remove('incorrect');
        confirmPassword.classList.remove('incorrect');
        incorrectPassword.remove();
    }
}
