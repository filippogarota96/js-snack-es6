/*Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
2 step:
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
3 step:
Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

function randomNumber(min, max) {
  return Math.floor(Math.random()* (max - min + 1) + min);
};

const squadre = [
  {
    nome: 'roma',
    punti: 0,
    falliSubiti: 0,
  },
  {
    nome: 'bologna',
    punti: 0,
    falliSubiti: 0,
  },
  {
    nome: 'sampdoria',
    punti: 0,
    falliSubiti: 0,
  },
];
// console.log(squadre);
// for (let i = 0; i < squadre.length; i++) {
//   let numeroFalli = randomNumber(1, 12);
//   let numeroPunti = randomNumber(1, 100);
//   squadre[i].punti = numeroPunti;
//   squadre[i].falliSubiti = numeroFalli;
// }


const nomiFalli = squadre.map((item) => {
  item.falliSubiti = randomNumber(1, 12);
  item.punti = randomNumber(1, 100);
  let {nome, falliSubiti: falli} = item;
  return {nome, falli};
});
console.log(squadre);
console.log(nomiFalli);
// for (let i = 0; i < squadre.length; i++) {
//   const {nomi, falli} = falli[i];
//   nomiFalli.push(obj);
//   const {nome, falliSubiti} = obj;
//   console.log(` ${nome} ha subito ${falliSubiti} falli`);
// }
