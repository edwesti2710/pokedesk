let busqueda = document.querySelector('.input');
let btnBuscar = document.querySelector('.btnBuscar');
let pokemonImgBox = document.querySelector('.pokedesk__pokemonBox');
let dataPokemon = document.querySelector('.pokedesk__dataBox');

busqueda.addEventListener("keypress", function (key) {
    let textoBusqueda = busqueda.value;

    // POR QUE XUXA NO AGARRA EL PUTO LENGHT!!!!!!!!!!!
    console.log(textoBusqueda);
    console.log(textoBusqueda.lenght);

    if (key.keyCode == 13) {
        key.preventDefault();
        btnBuscar.click();
    } else {
        // if (textoBusqueda. > 3) {
        //     // Load pokemon list
        //     let obtenerPokemonList = async function () {
        //         let list = await fetch('https://pokeapi.co/api/v2/pokemon?limit=2000');
        //         let pokemonList = await list.json();
        //         let finalList = [];
        //         console.log(pokemonList);
        //         let pkmnName = pokemonList.results.map(pkmn => {
        //             if (pkmn.name.search(busqueda.value) > 0) {
        //                 finalList.push(pkmn.name);
        //             }
        //         });
        //         console.log(finalList);
        //     }
        //     obtenerPokemonList()
        // }
    };
});

btnBuscar.addEventListener('click', function (evento) {
    evento.preventDefault();
    if (busqueda.value == "") {
        console.error('Debe ingresar algún valor.')
    } else {
        obtenerPokemon(busqueda.value);
    }
});



let obtenerPokemon = async function (pokemon) {
    try {
        let data = await fetch(`https://pokeapi.co/api/v2/pokemon/` + pokemon);
        let resultado = await data.json();
        console.log(resultado);
        let img = resultado.sprites.other.home.front_default;
        pokemonImgBox.innerHTML = `<img src="${img}" alt="" class="pokedesk__pokemonBox--img">`

        // DATA
        let nombre = resultado.name;
        let skills = resultado.abilities.map(el => el.ability.name).join(', ');
        let altura = resultado.height * 10;
        let peso = resultado.weight / 10;

        dataPokemon.innerHTML = `<h1 class="pokedesk__dataBox--nombre">${nombre}</h1>
        <p>
            <strong>Habilidades: </strong> ${skills}
        </p>
        <p>
            <strong>Altura: </strong> ${altura} cm
        </p>
        <p>
            <strong>Peso: </strong> ${peso} kg.
        </p>`
    } catch (error) {
        console.log('Error causita!');
    }
};