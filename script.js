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
          title: 'Qui va se faire buter',
          url: 'https://www.donnerdelavoix.fr/test/test.mp3',
          
        },
        {
          title: 'Ma femme a tous vos livres',
          url: 'https://www.donnerdelavoix.fr/test/test.mp3',
          
        },
        {
          title: 'vous êtes très percepuiscasse',
          url: 'https://www.donnerdelavoix.fr/test/test.mp3',
          
        } 
    ]
};

const templateElement = document.getElementById('hb');
console.log(templateElement);
const templateSource = document.getElementById('hb').innerHTML;
const template = Handlebars.compile(templateSource);
const compiledHtml= template(context);

console.log(document.getElementById('main'));
document.getElementById('blocs').innerHTML = compiledHtml;
