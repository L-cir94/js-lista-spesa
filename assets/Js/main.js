/* 
Data una lista della spesa,
stampare sulla pagina (anche brutalmente, basta che si vedano)
gli elementi della lista individualmente con un ciclo while.

Consigli:
Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while
*/

// creo lista 
const shoppingList = ["vinellino", "cibo gatti", "biscottini vegani", "Pasta", "Birra vegana", "salami", "Burro", "acido", "disinfettante cesso", "veleno per topi"];

const container = document.querySelector(".container");

const ulElement = document.createElement("ol");
container.append(ulElement);

let i = 0;


while (i < shoppingList.length) {
    const liElement = document.createElement("li");

    liElement.innerText = shoppingList[i];
  

    ulElement.append(liElement);
    
    i++;
}