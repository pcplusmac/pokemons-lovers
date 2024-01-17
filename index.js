function init (){
    // leave the functions that need to start when the page needs to get the data from somwwhere else, suchn api
    fetchPokemons()

}

async function fetchPokemons (){
    const res = await fetch("https://pokeapi.co/api/v2/pokemon")
    const data = await res.json()
    // console.log("data",data) 
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
    let ulpoke = document.querySelector('#detail-list')
    console.log("ulpoke:",ulpoke)
    let lipoke = document.createElement('li')
    lipoke.innerText = pokemon.name
    ulpoke.appendChild(lipoke)

}

init()

