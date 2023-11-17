// Consegna:
// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

const listaSpesa = ['zucchine','peperoni','cereali','petto di pollo','latte','acqua','pane','fette biscottate','sapone']

const sectionElement = document.createElement('section')
document.body.appendChild(sectionElement)

const listElement = document.createElement('ul')

sectionElement.appendChild(listElement)

// per ogni elemento della listaSpesa, crea un li dentro ul 


let i = 0

while (i < listaSpesa.length){

    let groceries = listaSpesa [i]

    const groceryList = document.createElement('li')
    listElement.appendChild(groceryList)

    groceryList.innerHTML = groceries

    i++
}