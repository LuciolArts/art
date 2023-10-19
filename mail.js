function sendMail() {
  // Récupérez les données du formulaire
  const nom = document.querySelector("input[name='nom']").value;
  const email = document.querySelector("input[name='email']").value;
  const message = document.querySelector("textarea[name='message']").value;

  // Créez l'objet mail
  const mail = new Mail({
    to: "destinataire@example.com",
    from: "expéditeur@example.com",
    subject: "Formulaire de contact",
    text: `
      Nom : ${nom}
      Email : ${email}
      Message :
      ${message}
    `,
  });

  // Envoyez le mail
  mail.send();

  // Afficher une notification
  alert("Votre message a bien été envoyé !");
}

// Appelez la fonction au clic sur le bouton d'envoi
document.querySelector("input[type='submit']").addEventListener("click", sendMail);
