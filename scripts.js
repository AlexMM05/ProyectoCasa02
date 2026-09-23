function getPokemonById(id) {
    return fetch("https://pokeapi.co/api/v2/pokemon/" + id)
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Pokemon no encontrado");
            }

            return response.json();
        });
}

function getAllPokemons() {
    return fetch("https://pokeapi.co/api/v2/pokemon?limit=1351")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Error al obtener los Pokemon");
            }
            return response.json()
                .then(function (data) {
                    return data.results.map(function (pokemon) {
                        return pokemon.name;
                });
            });
        });
}

function getPokemonsAbility(abilityName) {
    return fetch("https://pokeapi.co/api/v2/ability/" + abilityName)
        .then(function (response) {
        if (!response.ok) {
            throw new Error("Habilidad no encontrada");
        }

        return response.json()
            .then(function (data) {
                return data.pokemon.map(function (pokemon) {
                    return pokemon.pokemon.name;
            });
        });
    });
}

function getPokemonType(typeName) {
    return fetch("https://pokeapi.co/api/v2/type/" + typeName)
        .then(function (response) {
        if (!response.ok) {
            throw new Error("Tipo no encontrado");
        }

        return response.json()
            .then(function (data) {
                return data.pokemon.map(function (pokemon) {
                    return pokemon.pokemon.name;
            });
        });
    });
}

function getPokemonAbility(id, abilityName) {
    return getPokemonById(id)
        .then(function (data) {
            return data.abilities.some(function (ability) {
                if(ability.ability.name === abilityName){
                    return true;
                }
            });
        });
}

window.addEventListener("load", function () {

    

    let inputNumero = document.getElementById("numero");
    let inputNombre = document.getElementById("nombre");
    let btnConsultarID = document.getElementById("btnConsultarID");

    btnConsultarID.addEventListener("click", function () {
    let numero = inputNumero.value;

    if (numero === "") {
        alert("Por favor, introduce un número de Pokédex");
        return;
    }

    getPokemonById(numero)
        .then(function (data) {
            inputNombre.value = data.name;
        })
        .catch(function (error) {
            alert(error.message);
            inputNombre.value = "";
        });
    });
});
