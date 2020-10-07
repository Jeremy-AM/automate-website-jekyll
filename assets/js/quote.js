const ctas = document.querySelectorAll('.cta');

ctas.forEach(cta => {
  cta.addEventListener('click', function(event) {
    const problem = event.currentTarget.parentElement
    problem.classList.add('hidden');
    const solution = event.currentTarget.parentElement.parentElement.querySelector('.solution');
    solution.classList.remove('hidden');

    const ctaBack = solution.querySelector('.cta-back');
    ctaBack.addEventListener('click', function(event) {
      solution.classList.add('hidden');
      problem.classList.remove('hidden');
    });
  });
})


const hiddenQuotes = document.querySelectorAll('.hidden-mobile');
const moreButton = document.querySelector('#more-button');
const topPosition = moreButton.getBoundingClientRect().top + window.pageYOffset

moreButton.addEventListener('click', function() {
  hiddenQuotes.forEach(quote => {
    quote.classList.toggle('hidden');
  });
  if (moreButton.innerText === 'En voir plus') {
    moreButton.innerText = 'En voir moins'
  } else {
    moreButton.innerText = 'En voir plus'
    window.scrollTo({
      top: topPosition
    })
  }
});

$('#missedSales').click(function(){
    mixpanel.track("Solution #1 clicked!", {"problem": "Les commerciaux et le marketing ne communiquent pas assez. Ca nous fait rater des opportunités !", "solution": "On fait communiquer les outils des commerciaux et des marketeurs grâce à des automatisations. Par exemple, si un prospect télécharge un livre blanc ou ouvre une newsletter, l'information s'affiche dans votre CRM."});
});

$('#CRM').click(function(){
    mixpanel.track("Solution #2 clicked!", {"problem": "Le CRM parfait n’existe pas. Ou alors il est bien trop cher.", "solution": "Grâce à des outils SaaS modernes comme Airtable et des automatisations, on peut vous construire un CRM adapté parfaitement à vos besoins, pour une fraction du coût d'un outil comme Salesforce."});
});

$('#salesPipe').click(function(){
    mixpanel.track("Solution #3 clicked!", {"problem": "Ces temps-ci, je passe plus de temps à créer des devis ou des contrats qu’à échanger avec mes clients.", "solution": "Grâce à des automatisations, les documents, devis et contrats peuvent être générés et envoyés automatiquement au moment nécessaire."});
});

$('#MKG').click(function(){
    mixpanel.track("Solution #4 clicked!", {"problem": "Notre marketing sur internet se résume à une newsletter.", "solution": "Des outils de marketing automation vous permettent d'intéragir avec vos prospects de façon personnalisée et automatisée. Moins de travail, plus de ventes !"});
});

$('#internalComm').click(function(){
    mixpanel.track("Solution #5 clicked!", {"problem": "On manque d’info en interne, non ? Tu savais toi, qu’on vient de signer un nouveau client ?", "solution": "Grâce à des automatisations, envoyez des notifications (par mail ou sur Slack) à vos salariés en fonction de certains évènements, comme une nouvelle vente !"});
});

$('#paymentSystem').click(function(){
    mixpanel.track("Solution #6 clicked!", {"problem": "3 mois de développement pour créer notre système de paiement, c’est long, tu trouves pas ?", "solution": "En 2020, vous n'avez plus besoin de faire développer un couteux système de paiement sur mesure. On vous installe un outil SaaS performant en quelques jours pour facturer et prélever vos clients."});
});

$('#excel').click(function(){
    mixpanel.track("Solution #7 clicked!", {"problem": "En 2020, il serait peut être temps d’arrêter de tout gérer sur Excel...", "solution": "Grâce aux bons outils et à des automatisations, remplacez vos Excels par des solutions sur-mesure, faciles à prendre en main, et qui évitent les erreurs et la double-saisie."});
});

$('#dashboard').click(function(){
    mixpanel.track("Solution #8 clicked!", {"problem": "Ca serait génial de pouvoir savoir à tout moment où on est : combien de ventes, de chiffre d’affaire ou même le temps de réponse du support !!", "solution": "On vous créé un dashboard personnalisé et des rapports automatisés pour suivre en temps réel tous vos indicateurs."});
});

$('#RH').click(function(){
    mixpanel.track("Solution #9 clicked!", {"problem": "Moi ce que j’aime dans mon travail de RH, c’est l’humain, pas passer du temps à saisir des heures.", "solution": "On automatise pour vous la saisie des heures, ainsi que la génération des fiches de paie. Votre RH peut se consacrer au coeur de son métier !"});
});
