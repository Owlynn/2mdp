// HANDLEBARS CONTEXT 
const context = {
    titre:'test',
    samples: [
        {
          title: 'Kapoué',
          url: 'https://www.donnerdelavoix.fr/test/test.mp3',
          
        },
        {
          title: 'Columbo',
          url: 'https://www.donnerdelavoix.fr/test/test.mp3',
          
        },
        {
          title: 'Qui va se ',
          url: 'https://www.donnerdelavoix.fr/test/test.mp3',
          
        },
        {
          title: 'Une ligne',
          url: 'https://www.donnerdelavoix.fr/test/test.mp3',
          
        },
        {
          title: 'one line',
          url: 'https://www.donnerdelavoix.fr/test/test.mp3',
          
        } 
    ]
};

 // HANDLEBARS SETUP

const templateElement = document.getElementById('hb');
const templateSource = document.getElementById('hb').innerHTML;
const template = Handlebars.compile(templateSource);
const compiledHtml= template(context);

    // BLOCS DE SAMPLES VIA HANDLEBARS

document.getElementById('blocs').innerHTML = compiledHtml;

// BOUTONS INTERACTIFS
console.log(document.getElementsByClassName("trigger"));
const pwet =  function(event) {alert ("pwet")} ;

let eventTarget = document.getElementById("bouton"); //premier bloc de la liste uniquement
let eventClass = document.getElementsByClassName("trigger"); // tous les blocs/boutons dans un tableau


eventTarget.onclick = pwet ; //fonctionne Cas 1
const test = function (elem) {
  console.log(elem);
  elem.onclick = pwet;

} ;

Array.from(eventClass).forEach(test); // convertit en vrai tableau


