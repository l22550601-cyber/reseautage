
  document.querySelectorAll(".etoiles").forEach(stars => {
    const note = stars.getAttribute("data-note");
    let affichage = "";

    for (let i = 1; i <= 5; i++) {
      affichage += i <= note ? "★" : "☆";
    }

    stars.innerHTML = affichage;
  });

