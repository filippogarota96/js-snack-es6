//Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore

const bici = [
  {
    nome:'Trek',
    peso: 5000
  },

  {
    nome:'Giant',
    peso: 8000
  },

  {
    nome:'Atala',
    peso: 3000
  },

  {
    nome:'Santa Cruz',
    peso: 6000,
  }
];
console.log(bici);

let biciLeggera = bici[0];
for (var i = 0; i < bici.length; i++) {
  if (bici[i].peso < biciLeggera.peso) {
    biciLeggera = bici[i];
    console.log(`${biciLeggera.nome} è la bici più leggera`);
  }
}
