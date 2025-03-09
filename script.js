
//************Page de CONNEXION****************


/********  Page de Profil *************/
//tableau de données de l'utilisateur
//1
/*
const utilisateur = {
    username: '', 
    email: "", 
    password: '',
    typ: '',
    scores: '',
    date: ''
};*/

const utilisateur1 = {
    username: 'Anne', 
    email: "annpetrov@ast.ru", 
    password: '123Ghy!jhjh',
    typ: 'animaux',
    scores: '350',
    date: '01/05/2025'
};

const utilisateur2 = {
    username: 'Lola', 
    email: "ces@yahoo.fr", 
    password: 'azertyU!123',
    typ: 'animaux2',
    scores: '100',
    date: '01/02/2025'
};

const utilisateur3 = {
    username: 'Bryan', 
    email: "dg@yahoo.com", 
    password: 'azertyU!456',
    typ: 'dogs',
    scores: '450',
    date: '03/02/2025'
};
//2  stringifier les données pour les enregistrer dans 
// localStorage
//const utilisateurJSON = JSON.stringify(utilisateur);

//ajout des utilisateurs manuellement

const utilisateur1JSON = JSON.stringify(utilisateur1);
const utilisateur2JSON = JSON.stringify(utilisateur2);
const utilisateur3JSON = JSON.stringify(utilisateur3);


//3
// //création de localStorage
localStorage.setItem("utilisateur1", utilisateur1JSON);
localStorage.setItem("utilisateur2", utilisateur2JSON);
localStorage.setItem("utilisateur3", utilisateur3JSON);

/**************enregistrer dans local storage*******************/


/* username.value, email.value, password.value à sauvegarder */
//place de stockage.addEventListener('submit', (e)=>{
document.getElementById("#form").addEventListener("submit", function(e){ 
    //e.preventDefault();  
    console.log("submit");

    let userValue = username.value.trim();
    let emailValue = email.value.trim();
    let pwdValue = password.value.trim();
    
    //tu dois récupérer les données et tu crée l'utilisateur avec ces données
    const utilisateur = {
        username: 'userValue', /* récupéré les valeurs à l'input */
        email: 'emailValue', 
        password: 'pwdValue',
        typ: '',
        scores: '',
        date: date
    };

  // Convertir l'objet utilisateur en chaîne JSON
  const utilisateurSauvegarde = JSON.stringify(utilisateur);
    
  // Stocker la chaîne JSON dans le localStorage

  localStorage.setItem(username, utilisateurSauvegarde);
});
//ou bien : localStorage.setItem("utilisateur", JSON.stringify(utilisateur));

//4. Récuperer les données pour affiche sur la page PROFIL

const utilisateurRecupere = localStorage.getItem("utilisateur", JSON.parse(utilisateurSauvegarde));
console.log(utilisateur);

if(utilisateurRecupere!= null ){
    document.querySelector('#h1').innerText=`Bonjour ${(utilisateurRecupere.username)}`;
   };


