function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
// verification des champs du formulaire avec les regex
const nameRegex = /^[a-zA-Z][a-zéèç]/;
const emailRegex = /^[a-zA-Z0-9._-]+[@]{1}[a-zA-Z]+[.]{1}[a-z]{2,6}$/;

// récupération des inputs
const prenom = document.getElementById('prenom');
const nom = document.getElementById('nom');
const email = document.getElementById('email');
const message = document.getElementById('message');

// contenu des erreurs
const erreurPrenom ='Veuillez entrer 2 caractères ou plus pour le champ du prénom ';
const erreurNom = 'Veuillez entrer 2 caractères ou plus pour le champ du nom ';
const erreurEmail = ' Veuilez entrer une adresse email valide';
const erreurMsg = 'Vous devez entrer votre message';

// span pour afficher l'erreur
const spanPrenom = document.getElementById('spanPrenom');
const spanNom = document.getElementById('spanNom');
const spanEmail = document.getElementById('spanEmail');
const spanMsg = document.getElementById('spanMsg');

const msgValidation = document.getElementById('formValid');

// validation du formulaire au clique sur le bouton submit

const btnSubmit = document.getElementById('btn-submit')
btnSubmit.addEventListener('click', function (e) {
  e.preventDefault()

  if (!nameRegex.test(prenom.value)) {
    spanPrenom.textContent = erreurPrenom
  } else {
    spanPrenom.style.display = 'none'
  }

  if (!nameRegex.test(nom.value)) {
    spanNom.textContent = erreurNom
  } else {
    spanNom.style.display = 'none'
  }

  if (!emailRegex.test(email.value)) {
    spanEmail.textContent = erreurEmail
  } else {
    spanEmail.style.display = 'none'
  }
  if (!message.value) {
    spanMsg.textContent = erreurMsg
  } else {
    spanMsg.style.display = 'none'
  }

  if (prenom.value && nom.value && email.value && message.value) {
    msgValidation.innerHTML = 'Votre message à bien été reçu';
    msgValidation.style.color = '#fff';
    msgValidation.style.fontSize = '3em';
  }
});

//validatation des inputs à la perte du focus
prenom.addEventListener('change', function () {
  if (!nameRegex.test(prenom.value)) {
    spanPrenom.textContent = erreurPrenom
  } else {
    spanPrenom.style.display = 'none'
  }
});

nom.addEventListener('change', function () {
  if (!nameRegex.test(nom.value)) {
    spanNom.textContent = erreurNom
  } else {
    spanNom.style.display = 'none'
  }
});

email.addEventListener('change', function () {
    if (!emailRegex.test(email.value)) {
      spanEmail.textContent = erreurEmail
    } else {
      spanEmail.style.display = 'none'
    }
  });
  
  message.addEventListener('change', function () {
    if (!message.value) {
      spanMsg.textContent = erreurMsg
    } else {
      spanMsg.style.display = 'none'
    }
  });


