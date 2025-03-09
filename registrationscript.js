//INSCRIPTION





// 
// 
// Formulaire d'inscription

// La recuperation des elements 
const form = document.querySelector("#form");
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');



// Fonction de vérification de formulaire - Page d'inscription
// Evenements pour pas que ça se propage dans le formulaire

form.addEventListener('input',function(event){
    //event.preventDefault();
    
    form_verify();
    
});

function form_verify() {
    // Obtenir toutes les valeurs des inputs
    let userValue = username.value.trim();
    let emailValue = email.value.trim();
    let pwdValue = password.value.trim();
    let pwd2Value = password2.value.trim();

    // Validation de nom d'utilisateur
    if (userValue === "") {
        let message ="Username ne peut pas être vide";
        setError(username,message);
    }else if(!userValue.match(/^[a-zA-Z]/)){
        let message ="Username doit commencer par une lettre";
        setError(username,message)
    }else{
        let letterNum = userValue.length;
        if (letterNum < 3) {
            let message ="Username doit avoir au moins 3 caractères";
            setError(username,message)
        } else {
            setSuccess(username);
        }
    }

    // email verify
    if (emailValue === "") {
        let message = "Email ne peut pas être vide";
        setError(email,message);
    }else if(!email_verify(emailValue)){
        let message = "Email non valide";
        setError(email,message);
    }else{
        setSuccess(email)
    }
    
    // password verify
    if (pwdValue ==="") {
        let message ="Le passeword ne peut pas être vide";
        setError(password,message)
        let numLet = pwdValue.length;
    }
    
    else if(!password_verify(pwdValue)){
        let message = "Le mot de passe est trop faible";
        setError(password,message)
    }
    else{
        setSuccess(password);
    }


    // password confirmation

    if (pwd2Value === "" && pwdValue < 6) {
        let message ="Le passeword confirm ne peut pas être moins de 6 caractères";
        setError(password2,message)
    }else if( pwdValue !== pwd2Value){
        let message ="Les mots de passe ne correspondent pas";
        setError(password2,message)
    }else{
        setSuccess(password2)
    }

}
function setError(elem,message) {
    const formControl = elem.parentElement;
    const small = formControl.querySelector('small');

    // Ajout du message d'erreur
    small.innerText = message

    // Ajout de la classe error
    formControl.className = "form-control error";
};

function setSuccess(elem) {
    const formControl = elem.parentElement;
    formControl.className ='form-control success'
};


function email_verify(emailValue) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (regex.test(emailValue)) {
            return true;  // Email valide
        } else {
            return false; // Email invalide
        }
};

function password_verify(pwdValue){
    console.log(pwdValue);
    if (!/[a-z]/.test(pwdValue)) {
        console.log("il y a une minuscule");
        return false;
        
    }
    if (!/[A-Z]/.test(pwdValue)) {
        console.log("il y a une majuscule");
        return false;
    }
    if (!/[0-9]/.test(pwdValue)) {
        console.log("il y a un chiffre");
        return false;

    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(pwdValue)) {
        console.log("au moins un caractère spécial");
        return false;
    }    
    else{
        return true;
    }
}
    