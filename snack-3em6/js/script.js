
//Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

const listaNumeri = [2, 4, 5, 76, 43, 64, 10];

// const intervalFunction = (array, min, max) => {
//   const newArr = [];
//   newArr.forEach((index) => {
//     if (index >= min && index <= max ) {
//       newArr.push(index);
//     }
//     return newArr
//   });
// }


 function myFunction (array, min, max) {
    const newArray = array.filter((element, index) => {
    return index >= min && index <= max;
  });
  return newArray;
};

// let min = 0;
// let max = 3;
// const newList = listaNumeri.filter(( element, index) => {
//   return index >= min && index <= max;
// });

 const newList = myFunction(listaNumeri, 0, 4);
 console.log(newList);
