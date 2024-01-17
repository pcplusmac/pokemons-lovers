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

function renderPokemon(pokemon){
    let pokeList = document.querySelector('#cards-container')
    console.log("ulpoke:",pokeList)
    let ulpoke = document.createElement('ul')
    ulpoke.id = "poke-card"
    let lipoke = document.createElement('li')
    lipoke.innerHTML = `
        <img src="${pokemon.sprites.back_default}" alt="image coming">
        <div class="detail-list">
            <h4>Nanme: ${pokemon.name}</h4>
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

