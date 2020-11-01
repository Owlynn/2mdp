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

let oldButton = null;
let oldPlayer = null;

// LANCE LA LECTURE QUAND ON CLIQUE SUR UN SAMPLE
const launchPlayer = (event) => {
  
  const currentButton = event.target;
  const currentPlayer = document.getElementById(`${event.target.id}-player`);
    
  // si on a cliqué sur le même bouton
  if (oldPlayer == currentPlayer && !oldPlayer.paused) {
    stopPlayer(oldPlayer);
    oldPlayer = null;
    oldButton.classList.remove("playing");
    return ;
  }
  
  // si un lecteur est déjà en lecture
  if (oldPlayer != null && !oldPlayer.paused) {
    stopPlayer(oldPlayer);
    oldButton.classList.remove("playing");
    oldPlayer = null;
  }
  
  // si le nouveau player est différent de l'ancien
  if (oldPlayer != currentPlayer) {
    if (currentPlayer.paused) {
      currentPlayer.play();
      currentButton.classList.add("playing");
      currentPlayer.addEventListener("ended", () => {
        oldPlayer = null;
        event.target.classList.remove("playing");
      });
    }
    oldButton = currentButton;
    oldPlayer = currentPlayer;
  }
  
};

function stopPlayer(player) {
  player.pause();  // permet de recommencer la lecture du début
  player.currentTime = 0;
}

const bindClick = function (currentButton){
  currentButton.onclick = launchPlayer;
};

boutons.forEach(bindClick);


// const app = {
//   currentPlayer : null,
//   oldPlayer: null,
//   futurePlayerList: [],
  
//   init: (param) => {
//     this.listSamples = this.loadSamples();
//   },

//   onClick: () => {
//     const player = getbyid();
//     this.futurePlayerList.push(player);
//   },

//   loadSamples: () => {
//     return [
//       {
//         id: ""

//       }
//       // ...
//     ]
//   }
// }

// app.init()
