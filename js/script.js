document.getElementById("whatsappForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nom = document.getElementById("nom").value;
  const email = document.getElementById("email").value;
  const tel = document.getElementById("tel").value;
  const profil = document.getElementById("profil").value;
  const entreprise = document.getElementById("entreprise").value || "Non précisée";

  const message = `
 *Nouvelle présence – Journée de réseautage D-CLIC*

 Nom : ${nom}
 Email : ${email}
 Téléphone : ${tel}
 Profil : ${profil}
 Entreprise : ${entreprise}
`;

  const whatsappLink =
    "https://wa.me/?text=" + encodeURIComponent(message);

  // Ouvre WhatsApp avec le message pré-rempli
  window.open(whatsappLink, "_blank");

  // Redirige ensuite vers le groupe WhatsApp
  setTimeout(() => {
    window.location.href =
      "https://chat.whatsapp.com/EJu4VT1OQQ5HFElVoMrCwO";
  }, 1500);

   /*  RÉINITIALISATION DU FORMULAIRE */
  this.reset();
});


 
