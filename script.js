const app = {

  currentButton : null, 
  currentPlayer : null, 
  newButton : null, 
  newPlayer : null,
  currentPage : 0,
  pages : [],
  buttonsPerPage : 0,

  handlebarsSetup() {
    // HANDLEBARS SETUP
    const template = Handlebars.compile(document.getElementById('hb').innerHTML);
    // BLOCS DE SAMPLES VIA HANDLEBARS
    document.getElementById('blocs').innerHTML = template({ samples });
  },

  // Calcule le nombre de colonnes selon la taille de l'écran
  getColumnsCount() {
    const width = window.innerWidth;
    if (width >= 1200) return 5;
    if (width >= 900) return 4;
    if (width >= 700) return 3;
    if (width >= 480) return 2;
    return 1;
  },

  // Applique le nombre de colonnes à la grille
  applyGridColumns() {
    const container = document.getElementById('blocs');
    const columns = this.getColumnsCount();
    container.style.gridTemplateColumns = `repeat(${columns}, 200px)`;
  },

  // Calcule le nombre de lignes visibles
  getVisibleRows() {
    const container = document.getElementById('blocs');
    const containerHeight = container.clientHeight;
    const padding = 1 * 16 * 2; // padding top + bottom en pixels (1rem = 16px)
    const rowGap = 0.25 * 16; // row-gap en pixels (0.25rem = 4px)
    const buttonHeight = 200; // hauteur d'un bouton en pixels
    const availableHeight = containerHeight - padding;
    // Calcul: (hauteur disponible) / (hauteur bouton + gap entre les lignes)
    const rows = Math.floor(availableHeight / (buttonHeight + rowGap));
    return Math.max(1, rows); // Au moins 1 ligne
  },

  // Calcule le nombre de boutons par page
  calculateButtonsPerPage() {
    const columns = this.getColumnsCount();
    const rows = this.getVisibleRows();
    this.buttonsPerPage = columns * rows;
    return this.buttonsPerPage;
  },

  // Divise les boutons en pages
  createPages() {
    const boutons = Array.from(document.getElementsByClassName("boutons"));
    const totalButtons = boutons.length;
    const buttonsPerPage = this.calculateButtonsPerPage();
    this.pages = [];
    
    for (let i = 0; i < totalButtons; i += buttonsPerPage) {
      this.pages.push(boutons.slice(i, i + buttonsPerPage));
    }
  },

  // Affiche une page spécifique
  showPage(pageIndex) {
    if (pageIndex < 0 || pageIndex >= this.pages.length) return;
    
    this.currentPage = pageIndex;
    
    // Cacher tous les boutons
    const allButtons = Array.from(document.getElementsByClassName("boutons"));
    allButtons.forEach(button => {
      button.style.display = 'none';
    });
    
    // Afficher les boutons de la page actuelle
    this.pages[pageIndex].forEach(button => {
      button.style.display = 'flex';
    });
    
    // Mettre à jour les indicateurs de pagination
    this.updatePaginationDots();
  },

  // Crée les indicateurs de pagination
  createPaginationDots() {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';
    
    if (this.pages.length <= 1) {
      paginationContainer.style.display = 'none';
      return;
    }
    
    paginationContainer.style.display = 'flex';
    
    for (let i = 0; i < this.pages.length; i++) {
      const dot = document.createElement('div');
      dot.className = 'pagination-dot';
      if (i === this.currentPage) {
        dot.classList.add('active');
      }
      dot.addEventListener('click', () => this.showPage(i));
      paginationContainer.appendChild(dot);
    }
  },

  // Met à jour l'état actif des indicateurs
  updatePaginationDots() {
    const dots = document.querySelectorAll('.pagination-dot');
    dots.forEach((dot, index) => {
      if (index === this.currentPage) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  },

  // Gère le redimensionnement de la fenêtre
  handleResize() {
    this.applyGridColumns();
    this.createPages();
    this.showPage(0);
    this.createPaginationDots();
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
    this.newPlayer.addEventListener("ended", this.stopCurrentPlayer.bind(this));
    this.newButton.classList.add("playing");
  },

  stopCurrentPlayer() {
    if (this.currentPlayer) {
      this.currentPlayer.pause();
      this.currentPlayer.currentTime = 0; // permet de recommencer la lecture du début
      this.currentPlayer = null;
    }
    if (this.currentButton) {
      this.currentButton.classList.remove("playing");
    }
  },
  
  run() {
    this.handlebarsSetup();
  
    // Attendre que le DOM soit complètement rendu
    setTimeout(() => {
      // BOUTONS INTERACTIFS
      const boutons = Array.from(document.getElementsByClassName("boutons"));
      boutons.forEach((button) => {
        button.onclick = this.launchPlayer.bind(this);
        button.style.display = 'flex'; // S'assurer que les boutons sont en flex
      });
      
      // Appliquer les colonnes de la grille
      this.applyGridColumns();
      
      // Initialiser la pagination
      this.createPages();
      this.showPage(0);
      this.createPaginationDots();
    }, 100);
    
    // Gérer le redimensionnement
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => this.handleResize(), 250);
    });
  }
};

app.run();