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
let oldPlayer = null;

function stopPlayer(player) {
  player.pause();  // permet de recommencer la lecture du début
  player.currentTime = 0;
}

const launchPlayer = (event) => {
  const playerId=`${event.target.id}-player`;
  const currentPlayer = document.getElementById(playerId);

  if (oldPlayer == currentPlayer) {
    stopPlayer(oldPlayer);
    oldPlayer = null;
    return ;
  }

  if (oldPlayer != null) {
    stopPlayer(oldPlayer);
    oldPlayer = null;
  }
  
  if (oldPlayer != currentPlayer) {
    // arrête la lecture quand on reclique sur le carré
    if (currentPlayer.paused) {
      currentPlayer.play();
    } else if (!currentPlayer.paused) {
      stopPlayer(currentPlayer);
    }
    oldPlayer = currentPlayer;
  }
};

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