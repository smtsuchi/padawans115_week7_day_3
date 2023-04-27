console.log('HELLO DOM DEMO')

console.log(document) // built in "document" variable is the entry point to connecting with our HTML
console.log(document.body)
console.log(document.body.children[0].innerText)


const h1s = document.getElementsByTagName('h1')
console.log(h1s[0])

const myTitle = document.getElementById('title')
console.log(myTitle)

const darkTexts = document.getElementsByClassName('text-dark')
console.log(darkTexts)

myTitle.innerText = myTitle.innerText + '!!!!!'


h1s[1].innerHTML = '<p class="text-success">ANOTHER ONE :)</p>'

// grab elements iusing the querySelector tool

const myTitle2 = document.querySelector('#title')
console.log(myTitle2)

const h1sPart2 = document.querySelectorAll('h1')
console.log(h1sPart2)


const changeColor = (event) => {
    console.log(event)
    console.log('i was clicked')

    const elementToChange = event.target
    // const elementToChange = document.querySelector('button')

    let color = elementToChange.classList[1]
    if (color == 'btn-primary'){
        elementToChange.className = 'btn btn-danger'
    } else if (color == 'btn-danger'){
        elementToChange.className = 'btn btn-success'
    } else{
        elementToChange.className = 'btn btn-primary'
    }


};


//create element from nothing
const newButton = document.createElement('button')
newButton.innerText = 'BOOP'
newButton.className = 'btn btn-warning'

// document.body.append(newButton) // INSTEAD OF APPENDING TO BODY, LETS PLACE NEW BUTTON INSIDE THE DIV
const container = document.getElementById('test')
container.insertAdjacentElement('afterbegin', newButton)

// SYNTAX:
//htmlElem.addEventListener('typeOfEvent', callbackFunction)
newButton.addEventListener('click', changeColor)

newButton.addEventListener('click', ()=>{
    const moreText = document.createElement('h2')
    moreText.innerText = "I AM ALIVE!! (thru JS)"
    container.append(moreText)
})

// grab info from from submission
const form = document.querySelector('#myForm')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log(e)
    
    // this way goes directly to the element, regarless of event
    const input = document.getElementById('myPokemon')
    console.log(input.value)

    // grab info through the event (using the NAME attribute)
    console.log(e.target.pokemon.value)

    console.log(e.target[0].value)


    const url = `http://pokeapi.co/api/v2/pokemon/${input.value}`
    fetch(url)
.then()
})