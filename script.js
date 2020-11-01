// HANDLEBARS SETUP
const templateElement = document.getElementById('hb');
const templateSource = document.getElementById('hb').innerHTML;
const template = Handlebars.compile(templateSource);
const compiledHtml= template({samples});

// BLOCS DE SAMPLES VIA HANDLEBARS
document.getElementById('blocs').innerHTML = compiledHtml;

// BOUTONS INTERACTIFS
const boutons = Array.from(document.getElementsByClassName("boutons"));

let currentButton = null;
let currentPlayer = null;

let newButton = null;
let newPlayer = null

// LANCE LA LECTURE QUAND ON CLIQUE SUR UN SAMPLE
const launchPlayer = (event) => {
  
  newButton = event.target;
  newPlayer = document.getElementById(`${newButton.id}-player`);
    
  // si on a cliqué sur le même bouton
  if (newPlayer == currentPlayer && !currentPlayer.paused) {
    stopCurrentPlayer();
    return ;
  }
  
  // si un lecteur est déjà en lecture
  if (currentPlayer != null) {
    stopCurrentPlayer();
  }
  
  // si le nouveau player est différent de l'ancien
  if (newPlayer != currentPlayer) {
    newPlayer.play();
    newButton.classList.add("playing");
    newPlayer.addEventListener("ended", stopCurrentPlayer);
    currentButton = newButton;
    currentPlayer = newPlayer;
  }
  
};

function stopCurrentPlayer() {
  currentButton.classList.remove("playing");
  currentPlayer.pause();
  currentPlayer.currentTime = 0; // permet de recommencer la lecture du début
  currentPlayer = null;
}

const bindClick = function (currentButton){
  currentButton.onclick = launchPlayer;
};

boutons.forEach(bindClick);