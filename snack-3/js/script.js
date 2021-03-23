/*Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.*/

function myFunction (arr, min, max) {
  const newArr= [];
  for (let i = min; i <= max; i++) {
    if (i >= min && i <= max) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const list = ['pomodori', 'carote', 'sedano', 'cipolla'];
const newList = myFunction(list, 0, 1);

console.log(newList);
