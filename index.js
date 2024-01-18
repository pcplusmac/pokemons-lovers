
// form.addEventListener('DOMContentLoaded', () => {

let formSearch = document.querySelector('#search_form')
formSearch.addEventListener('submit', e => {
    e.preventDefault()
    handleForm(e)
    formSearch.reset()
})

// })



function init() {
    // leave the functions that need to start when the page needs to get the data from somwwhere else, suchn api
    fetchPokemons()
    

}

async function fetchPokemons() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon")
    const data = await res.json()
    console.log("data", data)
    data.results.forEach(item => fetchPokeDetails(item.url))
}

function fetchPokeDetails(url) {
    fetch(url)
        .then(res => res.json())
        .then(pokemon => {
            console.log(pokemon)
            renderPokemon(pokemon)
        })

}

function handleClick(e) {
    e.preventDefault()
    console.log("event", e.target)
    const element = e.target.name
    console.log('element:', element)
    // const image = element.li.h4.innerContext.value
    // const name = element
    // console.log("image",image)

    let container = document.querySelector('#cards-container')
    let card = document.createElement('ul')
    let details = document.createElement('li')
    details.innerHTML = `
        
    `
    console.log("solo:", card)
    card.appendChild(details)
    container.appendChild(card)

    container.innerHTML = `
        <h3>This is new solo page</h3>
    
       

    `

}

function handleMouseOver(e) {
    e.preventDefault()
    console.log("over:", e)
    e.target.style.color = "red"


    // card.style.color="red"


}

function handleMouseOut(e) {
    e.preventDefault()
    e.target.style.color = 'black'
}

function renderPokemon(pokemon) {
    let pokeList = document.querySelector('#cards-container')

    console.log("ulpoke:", pokeList)
    let ulpoke = document.createElement('ul')
    ulpoke.id = "poke-card"
    ulpoke.addEventListener('click', handleClick)
    // ulpoke.onmouseover = function(){handleMouseOver()}
    ulpoke.addEventListener('mouseover', handleMouseOver)
    ulpoke.addEventListener('mouseout', handleMouseOut)
    let lipoke = document.createElement('li')
    lipoke.id = "card_details"
    lipoke.innerHTML = `
        <img src="${pokemon.sprites.back_default}" alt="image coming" />
        <h4 id="name">Name: ${pokemon.name}</h4>
        <div id="detail-list">

            <ul id="details" class="details">
                <li id="weight">weight: ${pokemon.weight}.</li>
                <li id="height">Height: ${pokemon.height}</li>
                <li id="long-details" class="long-details">Moves:
                    <ol>
                        ${pokemon.moves.map((poke) => `<li> ${poke.move.name} </li>`)}
                    </ol>
                </li>
                
                <li></li>
            </ul>
        </div>
    `

    ulpoke.appendChild(lipoke)
    pokeList.appendChild(ulpoke)

}

function handleForm(e) {
    e.preventDefault()
    console.log("form data is :")
    const name = e.target.pokename.value
    url = `https://pokeapi.co/api/v2/pokemon/${name}`
    fetchPokeSolo(url)


}

function fetchPokeSolo(url) {
    fetch(url)
        .then(res => res.json())
        .then(pokeSolo => {

            renderPokeSolo(pokeSolo)
        })

}

function renderPokeSolo(pokeSolo) {
    let pokeList = document.querySelector('#cards-container')

    console.log("ulpoke:", pokeList)
    console.log("soloREnder:", pokeSolo)
    let ulpoke = document.createElement('ul')
    ulpoke.id = "poke-card"
    let lipoke = document.createElement('li')
    lipoke.id = "card_details"
    lipoke.innerHTML = `
            <img src="${pokeSolo.sprites.back_default}" alt="image coming" />
            <h4 id="name">Name: ${pokeSolo.name}</h4>
            <div id="detail-list">
    
                <ul id="details" class="details">
                    <li id="weight">weight: ${pokeSolo.weight}.</li>
                    <li id="height">Height: ${pokeSolo.height}</li>
                    <li id="long-details" class="long-details">Moves:
                        <ol>
                            ${pokeSolo.moves.map((poke) => `<li> ${poke.move.name} </li>`)}
                        </ol>
                    </li>
                </ul>
            </div>

        `

    ulpoke.appendChild(lipoke)
    pokeList.appendChild(ulpoke)

    const btnBack = document.createElement('button')
    btnBack.id = "button_back"
    btnBack.class = "buttons"
    btnBack.textContent = "back"
    btnBack.addEventListener('click', backClick)

    const btnSave = document.createElement('button')
    btnSave.id = "button_save"
    btnSave.class = "buttons"
    btnSave.textContent = "save"
    btnSave.addEventListener('click', saveClick)



    const divButtons = document.createElement('div')
    divButtons.id = "div_btn"
    // divButtons.class="div_btn"


    divButtons.appendChild(btnBack)
    divButtons.appendChild(btnSave)

    lipoke.appendChild(divButtons)




    function saveClick(e) {

    }
    function backClick(e) {

    }






}


init()

