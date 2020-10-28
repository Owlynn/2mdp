// HANDLEBARS CONTEXT 

// HANDLEBARS SETUP
const templateElement = document.getElementById('hb');
const templateSource = document.getElementById('hb').innerHTML;
const template = Handlebars.compile(templateSource);
const compiledHtml= template({samples});

// BLOCS DE SAMPLES VIA HANDLEBARS
document.getElementById('blocs').innerHTML = compiledHtml;

// BOUTONS INTERACTIFS

const boutons = Array.from(document.getElementsByClassName("boutons"));

// LANCE LA LECTURE QUAND ON CLIQUE SUR UN SAMPLE



boutons.forEach ( function (currentButton){
  currentButton.onclick = (event) => {
    const playerId=`${event.target.id}-player`;
    const currentPlayer = document.getElementById(playerId)
    // arrête la lecture quand on reclique sur le carré
    if (currentPlayer.paused) {
      currentPlayer.play();
    } else if (!currentPlayer.paused) {
      currentPlayer.pause();
    }
      }

})

// ARRETE LA LECTURE DU PRECEDENT SAMPLE QUAND ON LANCE UN DEUXIEME

