const boutons = Array.from(document.getElementsByClassName("boutons"));

boutons.forEach(function (currentBouton) {
    currentBouton.onclick = (event) => {
        const playerId = `${event.target.id}-player`;
        document.getElementById(playerId).play();
    };
});