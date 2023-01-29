document.documentElement.classList.add('js-enabled');

const panels = document.querySelectorAll('.panel');
let previousTarget;
let click = false;
let transition = false;

for (const panel of panels) {
  panel.addEventListener('click',(e)=>{
    e.currentTarget.classList.add('open');
    if (previousTarget !== undefined){
      previousTarget.classList.remove('open');
      previousTarget.classList.remove('open-active');
    }
    previousTarget = e.currentTarget;
  });


    panel.addEventListener('transitionend', (e)=>{
      e.currentTarget.classList.add('open-active');
    });


}

console.log('oui');

//faire une version ou lorsqu'on clique sur un panel ça ferme l'autre

//j'ai problème je sais que c'est pas dans le cadre de l'exercice mais je voudrais que lorsqu'on clique sur un autre panel, le panel déja ouvert se ferme et que le contenu qui aie ajouté avec le css partent. Le probleme c'est que lorsque le contenu ajouté par le CSS part il revient car l'ecouteur d'evenement que j'ai appliqué a panel rajoute la classe open-active dès la fin de l'animation qui s'enleve comment faire ?