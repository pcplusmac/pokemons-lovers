function init (){
    // leave the functions that need to start when the page needs to get the data from somwwhere else, suchn api
    fetchPokemons()

}

async function fetchPokemons (){
    const res = await fetch("https://pokeapi.co/api/v2/pokemon")
    const data = await res.json()
    console.log("data",data) 
    data.results.forEach(item => fetchPokeDetails(item.url))
}

function fetchPokeDetails(url){
    fetch(url)
        .then(res => res.json())
        .then(pokemon => {
            console.log(pokemon)
            renderPokemon(pokemon)
        } )

}

function handleClick(e){
    e.preventDefault()
    console.log("event",e)
    
    let container = document.querySelector('#cards-container')
    container.innerText = " "
}

function handleMouseOver(e){
    e.preventDefault()
    console.log("over:",e)
    e.target.style.color="red"
    
    
    // card.style.color="red"
    
    
}

function handleMouseOut(e){
    e.preventDefault()
    e.target.style.color='black'
}

function renderPokemon(pokemon){
    let pokeList = document.querySelector('#cards-container')
    
    console.log("ulpoke:",pokeList)
    let ulpoke = document.createElement('ul')
    ulpoke.id = "poke-card"
    ulpoke.addEventListener('click',handleClick)
    // ulpoke.onmouseover = function(){handleMouseOver()}
    ulpoke.addEventListener('mouseover',handleMouseOver)
    ulpoke.addEventListener('mouseout',handleMouseOut)
    let lipoke = document.createElement('li')
    
    lipoke.innerHTML = `
        <img src="${pokemon.sprites.back_default}" alt="image coming">
        <h4>Name: ${pokemon.name}</h4>
        <div id="detail-list">

            <ul class="details">
                <li>weight: ${pokemon.weight}.</li>
                <li>Height: ${pokemon.height}</li>
                <li class="long-details">Moves:
                    <ol>
                        ${ pokemon.moves.map((poke) =>`<li> ${poke.move.name} </li>`  ) }
                    </ol>
                </li>
                
                <li></li>
            </ul>
        </div>
    `
    
    ulpoke.appendChild(lipoke)
    pokeList.appendChild(ulpoke)

}



init()

