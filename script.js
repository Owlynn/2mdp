// HANDLEBARS CONTEXT 

// HANDLEBARS SETUP
const templateElement = document.getElementById('hb');
const templateSource = document.getElementById('hb').innerHTML;
const template = Handlebars.compile(templateSource);
const compiledHtml= template({samples});

// BLOCS DE SAMPLES VIA HANDLEBARS
document.getElementById('blocs').innerHTML = compiledHtml;

// BOUTONS INTERACTIFS
// console.log(document.getElementsByClassName("trigger"));

const boutons = Array.from(document.getElementsByClassName("boutons"));

boutons.forEach ( function (currentButton){
  currentButton.onclick = (event) => {
    const playerId=`${event.target.id}-player`;
    document.getElementById(playerId).play();
  }

})
