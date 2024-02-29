function pyramide(nombre){
    let n = nombre;
    let i = 0;

    while (n !== 0){
      i = i + 1;
      n = n - 1;
      let espace = ' '.repeat(n);
      let hashtag = '#'.repeat(i);
      console.log(espace + hashtag);
    }
  }

  let nombre = prompt('Salut, bienvenue dans ma super pyramide ! Combien d étages veux-tu ?');

  pyramide(nombre);