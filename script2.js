function factorielle(nombre){
    let i = nombre;
    reponse = nombre;

    while (i !== 1){
      i --;
      reponse = reponse*i;
    }
    return reponse;
  }

let reponse = 0;
let nombre = prompt('De quel nombre veux-tu le factorielle ?');
factorielle(nombre);

console.log(`le résulat est ${reponse}`);
