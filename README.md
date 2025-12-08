# 2mdp - Sampler des Deux Minutes du Peuple

Un sampler web interactif permettant de jouer des répliques cultes de l'émission "Les Deux Minutes du Peuple". Cliquez sur un bouton pour lancer un sample audio !

## 🎯 Description du projet

Ce projet est un sampler audio en ligne qui permet de jouer différents extraits sonores en cliquant sur des boutons. Chaque bouton correspond à un sample MP3 stocké dans le dossier `samples/`.

## 🛠️ Technologies utilisées

- **HTML5** - Structure de la page
- **CSS3** - Styles et mise en page (avec Skeleton CSS framework)
- **JavaScript (Vanilla)** - Logique de l'application
- **Handlebars.js** - Templating pour générer dynamiquement les boutons
- **HTML5 Audio API** - Gestion de la lecture des fichiers audio

## 📁 Structure du projet

```
2mdp/
├── index.html          # Point d'entrée de l'application
├── script.js           # Logique principale de l'application
├── samples.js          # Liste des échantillons audio
├── style.css           # Styles personnalisés
├── skeleton.css        # Framework CSS minimaliste
├── normalize.css       # Reset CSS
├── samples/            # Dossier contenant les fichiers audio MP3
│   ├── accordéon.mp3
│   ├── Kapouey.mp3
│   └── ...
└── README.md           # Documentation du projet
```

## 🚀 Installation et lancement

### Prérequis
- Un navigateur web moderne (Chrome, Firefox, Edge, Safari)

### Méthode 1 : Serveur local simple (Python)

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Puis ouvrez votre navigateur à l'adresse : `http://localhost:8000`

### Méthode 2 : Ouvrir directement

Vous pouvez simplement ouvrir `index.html` dans votre navigateur, mais certaines fonctionnalités audio peuvent ne pas fonctionner selon les politiques de sécurité du navigateur.

## 📖 Comment voir et explorer le code

### Fichiers principaux à consulter

1. **`index.html`** - Structure HTML de base
   - Contient le template Handlebars pour générer les boutons
   - Définit la structure de la page (titre + zone des boutons)

2. **`script.js`** - Logique métier de l'application
   - **`app`** : Objet principal contenant toute la logique
   - **`handlebarsSetup()`** : Génère les boutons depuis le template Handlebars
   - **`launchPlayer(event)`** : Gère le clic sur un bouton (arrête le son actuel, lance le nouveau)
   - **`startNewPlayer()`** : Démarre la lecture d'un nouveau sample
   - **`stopCurrentPlayer()`** : Arrête le sample en cours de lecture
   - **`run()`** : Initialise l'application

3. **`samples.js`** - Configuration des échantillons
   - Tableau `samples` contenant les noms de tous les fichiers audio (sans extension .mp3)
   - Les fichiers correspondants doivent être présents dans le dossier `samples/`

4. **`style.css`** - Styles visuels
   - Styles des boutons (`.boutons`)
   - État "playing" (`.boutons.playing`) quand un sample est en lecture
   - Mise en page avec flexbox

### Flux de fonctionnement

1. Le fichier `samples.js` charge la liste des samples
2. `index.html` charge les scripts et définit le template Handlebars
3. Au chargement de la page, `app.run()` s'exécute :
   - Génère les boutons via Handlebars à partir du tableau `samples`
   - Attache les event listeners sur chaque bouton
4. Quand un utilisateur clique sur un bouton :
   - `launchPlayer()` est appelé
   - Si un sample est déjà en lecture, il est arrêté
   - Le nouveau sample démarre
   - Le bouton change de style (classe `playing`)

### Points d'intérêt du code

- **Gestion de l'audio** : Utilisation de l'API HTML5 Audio avec gestion du cycle de vie (play, pause, ended)
- **Templating dynamique** : Handlebars génère automatiquement tous les boutons à partir d'un template
- **Event delegation** : Chaque bouton a son propre event listener attaché
- **État de l'application** : L'objet `app` conserve l'état actuel (bouton et player en cours)

## 🎮 Utilisation

1. Ouvrez l'application dans votre navigateur
2. Cliquez sur un bouton pour lancer un sample audio
3. Le bouton change de couleur pour indiquer qu'il est en cours de lecture
4. Cliquer sur un autre bouton arrête automatiquement le sample en cours et lance le nouveau
5. Les samples se jouent en boucle jusqu'à la fin (ou jusqu'à ce qu'un autre soit lancé)

## 🐛 Bugs connus

- Quand on clique deux fois sur le même bouton, après avoir arrêté la lecture, la lecture ne reprend pas

## 📝 To do List

* [ ] Ajouter la fonction partage
* [ ] Remettre les samples au même volume
* [ ] Repenser le Design
* [ ] Résoudre le bug suivant : quand on clique deux fois sur le même bouton, après avoir arrêté la lecture, la lecture ne reprend pas
* [ ] Rajouter une fonction d'upload
* [ ] Rajouter de nouveaux samples

## 📄 Licence

Ce projet est un projet personnel/éducatif.
