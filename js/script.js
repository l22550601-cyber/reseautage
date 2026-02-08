



document.getElementById("infoForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nom = document.getElementById("nom").value;
  const email = document.getElementById("email").value;
  const telephone = document.getElementById("telephone").value;
  const profil = document.getElementById("profil").value;
  const entreprise = document.getElementById("entreprise").value || "Non précisé";

  const message = `
 Journée de réseautage D-CLIC

 Nom : ${nom}
 Email : ${email}
 Téléphone : ${telephone}
 Profil : ${profil}
Entreprise : ${entreprise}
  `;

  /*  WHATSAPP */
  const whatsappNumber = "22891529402"; //  mets ton numéro WhatsApp ici
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, "_blank");

  /*  EMAIL */
  const emailURL = `mailto:creatorkb9@gmail.com?subject=Inscription Journée de réseautage&body=${encodeURIComponent(message)}`;
  window.location.href = emailURL;

  /*  RÉINITIALISATION DU FORMULAIRE */
  this.reset();
});
