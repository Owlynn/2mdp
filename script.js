const app = {

  currentButton : null, 
  currentPlayer : null, 
  newButton : null, 
  newPlayer : null,

  handlebarsSetup() {
    // HANDLEBARS SETUP
    const template = Handlebars.compile(document.getElementById('hb').innerHTML);
    // BLOCS DE SAMPLES VIA HANDLEBARS
    document.getElementById('blocs').innerHTML = template({ samples });
  },

  // LANCE LA LECTURE QUAND ON CLIQUE SUR UN SAMPLE
  launchPlayer(event) {
    this.newButton = event.target;
    
    if (this.currentButton && this.currentPlayer) {
      this.stopCurrentPlayer();
    }
  
    if (this.newButton != this.currentButton) {
      this.startNewPlayer();
      this.currentButton = this.newButton;
      this.currentPlayer = this.newPlayer;
    }
  },

  startNewPlayer() {
    this.newPlayer = document.getElementById(`${this.newButton.id}-player`);
    this.newPlayer.play();
    this.newPlayer.addEventListener("ended", this.stopCurrentPlayer);
    this.newButton.classList.add("playing");
  },

  stopCurrentPlayer() {
    this.currentPlayer.pause();
    this.currentPlayer.currentTime = 0; // permet de recommencer la lecture du début
    this.currentPlayer = null;
    this.currentButton.classList.remove("playing");
  },
  
  run() {
    this.handlebarsSetup();
  
    // BOUTONS INTERACTIFS
    const boutons = Array.from(document.getElementsByClassName("boutons"));
    boutons.forEach((button) => button.onclick = this.launchPlayer.bind(this));
  }
};

app.run();