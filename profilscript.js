// Créer un objet Date pour obtenir la date actuelle
const date = new Date();

// Formater la date sous forme "jour mois année"
const formattedDate = date.toLocaleDateString('fr-FR', {
    weekday: 'long', // Nom du jour
    year: 'numeric', // Année complète
    month: 'long',   // Nom du mois
    day: 'numeric'   // Jour du mois
});

// Afficher la date dans l'élément avec l'ID "date"
document.getElementById('curent-date').textContent = formattedDate;



// Lie l'envoie du formulaire
// Écouter le clic sur le bouton d'envoi        avec submit   btn-play
document.querySelector('#submitButton').addEventListener('click', function(event) {
    event.preventDefault(); // Empêcher le comportement par défaut du bouton (soumission de formulaire)

    // Récupérer les données de tous les formulaires
    const formData = new FormData();
    
    // Récupérer les données du premier formulaire
    const formul1 = document.getElementById('selectType');
    const theme = formul1.querySelector('#memo').value;
    formData.append('selectType', theme);
    
    // Récupérer les données du deuxième formulaire
    const formul2 = document.getElementById('selectForm');
    const formArea = formul2.querySelector('#typ').value;
    formData.append('formArea', typ);

    
});
