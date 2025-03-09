// LOGIN
// 




// Ajouter un événement au formulaire pour vérifier les informations lors de la soumission

document.querySelector('#loginForm').addEventListener('input', function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire
    verifyUserLogs();
});

// Fonction pour vérifier l'authentification sur la page de connexion
window.onload = function verifyUserLogs() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Récupérer les informations stockées dans localStorage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    // Vérification des informations saisies par rapport à celles stockées
    if (email === storedEmail && password === storedPassword) {
        document.getElementById('#alert').textContent = "Connexion réussie!";
    } else {
        document.querySelector('#message').textContent = "Identifiants incorrects.";
    }
};

window.onload = function() {
    // Récupérer les données de localStorage
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    

    // Vérifier si les données existent avant de les afficher
    if (username && email) {
        // Insérer les données dans les éléments HTML
        document.getElementById('username').textContent = "username";
        document.getElementById('email').textContent = "email";
        
    } else {
        // Gérer l'absence de données, si nécessaire
        console.log('Les données utilisateur ne sont pas disponibles.');
    }
}


